import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService, AlertService, SettingsService } from '../service';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import { stringify } from 'querystring';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public DriverForm: FormGroup;
  DriverData;
  fcm;
  active_non;
  DriverDatatemp = {};
  showuserId;
  constructor(public location: Location, public formBuilder: FormBuilder, public dataSrv: DataService, public alertSrv: AlertService, public stngs: SettingsService,
    public modal: ModalController, public plt: Platform, public menu: MenuController, public router: Router) {
    console.log("constructor");
    let user = JSON.parse(localStorage.getItem("User"));
    this.showuserId=user.id;
    this.buildDriverForm(user);
    this.active_non = localStorage.getItem("active_non")
    if (this.active_non == 0) {
      this.plt.backButton.subscribeWithPriority(9999, () => {
      });
    }
    menu.enable(true)
    // this.GetDriverData();
  }

  ngOnInit() {
    this.fcm = this.dataSrv.subscribePush();
  }

  buildDriverForm(user) {
    console.log(user)
    this.DriverForm = this.formBuilder.group({
      user_name: [user.user_name, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      password: [user.password, [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
      gender: [user.gender + '', [Validators.required, Validators.minLength(1)]],
      name: [user.name, [Validators.required]],
      location: [user.location, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      email: [user.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: [user.phone, [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
      address: [user.address, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
    })
    this.dataSrv.photo = user.photo;
    this.dataSrv.card_id = user.card_id;
    this.dataSrv.student_id = user.student_id;
    let user_old = JSON.parse(localStorage.getItem("User_Old"));
    this.dataSrv.photo_name = user_old.photo;
    this.dataSrv.card_id_name = user_old.card_id;
    this.dataSrv.student_id_name = user_old.student_id;
  }
  GetDriverData() {
    this.alertSrv.show();
    let driver_id = localStorage.getItem("driver_id");

    if (!driver_id || driver_id == "") {
      return;
    }
    let api = "api/student_info"
    let body = {
      student_id: driver_id
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      this.DriverData = JSON.parse(res["data"])
      console.log(this.DriverData)
      this.alertSrv.hide();
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }

  ionViewDidEnter() {
    //console.log(document.querySelectorAll(".input-icon"))
    let elements = document.querySelectorAll(".input-icon");
    if (this.stngs.lang2 == 'ar')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.replace("input-icon", "input-icon-rtl")
      }
  }

  Update() {
    this.alertSrv.show();
    let DriverData = {};
    this.fcm = this.dataSrv.subscribePush();
    let tempUser = JSON.parse(localStorage.getItem("User"));
    console.log(this.fcm)
    if (this.DriverForm.get("gender").value == "" || this.DriverForm.get("gender").value == null ||this.DriverForm.get("password").value == "" || this.DriverForm.get("password").value == null || this.DriverForm.get("name").value == "" || this.DriverForm.get("name").value == null|| this.DriverForm.get("user_name").value == "" || this.DriverForm.get("user_name").value == null)  {
      this.alertSrv.presentToast("Please fill require data", "danger")
      return;
    }

    DriverData["name"] = this.DriverForm.get("name").value;
    DriverData["user_name"] = this.DriverForm.get("user_name").value;
    DriverData["password"] = this.DriverForm.get("password").value;
    DriverData["gender"] = this.DriverForm.get("gender").value;
    DriverData["location"] = "lat: " + this.dataSrv.lat + " ,long: " + this.dataSrv.long;
    DriverData["email"] = this.DriverForm.get("email").value;
    DriverData["phone"] = this.DriverForm.get("phone").value;
    DriverData["card_id"] = this.dataSrv.card_id_name ? this.compareImages(this.dataSrv.card_id_name) : null;// image
    DriverData["fcm_tokem"] = this.fcm;
    DriverData["active_non"] = 0;
    //http://pickmeupjo.com/pickmeup/uploads/
    DriverData["photo"] = this.dataSrv.photo_name ? this.compareImages(this.dataSrv.photo_name) : null;// image
    DriverData["student_id"] = this.dataSrv.student_id_name ? this.compareImages(this.dataSrv.student_id_name) : null; // image
    DriverData["stdid"] = localStorage.getItem("driver_id");
    if (this.DriverForm.get("name").value != '' && this.DriverForm.get("user_name").value != '' &&
      this.DriverForm.get("password").value != '' && this.dataSrv.lat != '' && this.dataSrv.long != '' &&
      this.DriverForm.get("email").value != '' && this.DriverForm.get("phone").value != '' && this.dataSrv.card_id_name != null && this.dataSrv.photo_name != null &&
      this.dataSrv.student_id_name != null) {
      DriverData["active_non"] = 1
    }
    else {
      DriverData["active_non"] = 0
    }
    console.log(DriverData)
    let api = "api/edit_student"
    this.DriverDatatemp = DriverData;
    this.dataSrv.httpPostMethod(api, DriverData).then(res => {
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      console.log(temp["data"])
      if (temp["data"] && temp["data"] != {} && temp["data"].length > 0) {
        localStorage.setItem("User_Old", JSON.stringify(temp["data"][0]));
        localStorage.setItem("driver_id", temp["data"][0].id);
        localStorage.setItem("active_non", temp["data"][0].active_non);
        temp["data"][0].photo = temp["data"][0].photo ? this.stngs.getSetting("baseURL") + temp["data"][0].photo : null;
        temp["data"][0].card_id = temp["data"][0].card_id ? this.stngs.getSetting("baseURL") + temp["data"][0].card_id : null;
        temp["data"][0].student_id = temp["data"][0].student_id ? this.stngs.getSetting("baseURL") + temp["data"][0].student_id : null;
        localStorage.setItem("User", JSON.stringify(temp["data"][0]));
        this.dataSrv.photo = temp["data"][0].photo;
        this.dataSrv.User_Name = temp["data"][0].user_name
        this.dataSrv.Phone = temp["data"][0].phone
        this.dataSrv.gender = temp["data"][0].gender
      }

      // if (this.dataSrv.photo)
      //   this.dataSrv.upload(this.dataSrv.photo, this.dataSrv.photo_name, "uploadphoto");
      // if (this.dataSrv.student_id)
      //   this.dataSrv.upload(this.dataSrv.student_id, this.dataSrv.student_id_name, "uploadstudentid");
      // if (this.dataSrv.card_id)
      //   this.dataSrv.upload(this.dataSrv.card_id, this.dataSrv.card_id_name, "uploadcardid");

      this.alertSrv.hide();
      this.alertSrv.presentToast("Updated successfully ", "success");
      if (this.DriverForm.get("name").value != '' && this.DriverForm.get("user_name").value != '' &&
        this.DriverForm.get("password").value != '' && this.dataSrv.lat != '' && this.dataSrv.long != '' &&
        this.DriverForm.get("email").value != '' && this.DriverForm.get("phone").value != '' && this.dataSrv.card_id_name != null && this.dataSrv.photo_name != null &&
        this.dataSrv.student_id_name != null) {
        this.dataSrv.waiting = 0;
        this.router.navigate(["../home"], { replaceUrl: true });
      }
      else {
        this.dataSrv.waiting = 1;
        this.router.navigate(["../wait"], { replaceUrl: true });
      }
      //this.router.navigate(["../home"], { replaceUrl: true })
    }, err => {
      this.alertSrv.presentToast("Something wrong", "danger")
    })



  }
  delete(imageID) {
    if (imageID == 1) {
      this.dataSrv.photo = null;
      this.dataSrv.photo_name = null;
    } else if (imageID == 2) {
      this.dataSrv.card_id = null;
      this.dataSrv.card_id_name = null
    } else if (imageID == 3) {
      this.dataSrv.student_id = null;
      this.dataSrv.student_id_name = null
    }

  }


  dontUpload;

  compareImages(old_image, upload?) {
    if (old_image == null) {
      return old_image;
    }
    else {
      var splitted = old_image.split("/");
      if (splitted.length > 0) {
        if (upload) {
          this.dontUpload = 1;
        }
        return splitted[splitted.length - 1]
      } else {
        if (upload) {
          this.dontUpload = 0;
        }
        return old_image;
      }
    }
  }
}
