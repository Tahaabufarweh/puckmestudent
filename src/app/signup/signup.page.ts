import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService, AlertService, SettingsService } from '../service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public DriverForm: FormGroup;
  fcm;
  isChecked = false;
  constructor(public router: Router, public formBuilder: FormBuilder, public dataSrv: DataService, public alertSrv: AlertService,
    public modal: ModalController, public stngs: SettingsService) {
    this.fcm = this.dataSrv.subscribePush();
    console.log(this.fcm)
    this.buildDriverForm();
  }

  ngOnInit() {
  }

  buildDriverForm() {
    this.DriverForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      gender: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
      name: ['', [Validators.required]],
      location: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
      address: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
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

  Register() {
    if (this.DriverForm.get("gender").value == "" || this.DriverForm.get("gender").value == null ||this.DriverForm.get("password").value == "" || this.DriverForm.get("password").value == null || this.DriverForm.get("name").value == "" || this.DriverForm.get("name").value == null|| this.DriverForm.get("user_name").value == "" || this.DriverForm.get("user_name").value == null)  {
      this.alertSrv.presentToast("Please fill require data", "danger")
      return;
    }
    else
    {
    if (this.isChecked == false) {
      this.alertSrv.presentToast("Please accept our terms and conditions", "danger")
      return;
    }
    else
    {
    this.alertSrv.show();
    let DriverData = {};
    this.fcm = this.dataSrv.subscribePush();

    console.log(this.fcm)
    DriverData["name"] = this.DriverForm.get("name").value;
    DriverData["user_name"] = this.DriverForm.get("user_name").value;
    DriverData["password"] = this.DriverForm.get("password").value;
    DriverData["location"] = "lat: " + this.dataSrv.lat + " ,long: " + this.dataSrv.long;
    DriverData["email"] = this.DriverForm.get("email").value;
    DriverData["phone"] = this.DriverForm.get("phone").value;
    DriverData["card_id"] = this.dataSrv.card_id_name ? this.dataSrv.card_id_name : null;// image
    DriverData["fcm_tokem"] = this.fcm;
    DriverData["gender"] = this.DriverForm.get("gender").value;
    DriverData["photo"] = this.dataSrv.photo_name ? this.dataSrv.photo_name : null;// image
    DriverData["student_id"] = this.dataSrv.student_id_name ? this.dataSrv.student_id_name : null; // image
    if (this.DriverForm.get("name").value != '' && this.DriverForm.get("user_name").value != '' &&
      this.DriverForm.get("password").value != '' && this.dataSrv.lat != '' && this.dataSrv.long != '' &&
      this.DriverForm.get("email").value != '' && this.DriverForm.get("phone").value != '' && this.dataSrv.card_id_name != null && this.dataSrv.photo_name != null &&
      this.dataSrv.student_id_name != null) {
      DriverData["active_non"] = 1
      localStorage.setItem("active_non", "1");
    }
    else {
      DriverData["active_non"] = 0
      localStorage.setItem("active_non", "0");
    }
    localStorage.setItem("User_Old", JSON.stringify(DriverData));
    console.log("jjjjj", DriverData)
    let api = "api/register_student"
    this.dataSrv.httpPostMethod(api, DriverData).then(res => {
      console.log(res);
      let data = JSON.parse(res.data)
      let sms = JSON.parse(res.data);
      if (sms.success == false) {
        this.alertSrv.presentToast(sms.message, "danger")
      } else {

        this.alertSrv.hide();
        DriverData["driver_id"] = data.data;
        DriverData["photo"] = this.dataSrv.photo_name ? this.stngs.getSetting("baseURL") + this.dataSrv.photo_name : null;// image
        DriverData["student_id"] = this.dataSrv.student_id_name ? this.stngs.getSetting("baseURL") + this.dataSrv.student_id_name : null; // image
        DriverData["card_id"] = this.dataSrv.card_id_name ? this.stngs.getSetting("baseURL") + this.dataSrv.card_id_name : null;// image
        localStorage.setItem("driver_id", data.data);
        localStorage.setItem("User", JSON.stringify(DriverData));
        this.alertSrv.presentToast("Registered Successfully", "success")
        this.closeSignUp();
      }
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }}}

  closeSignUp() {
    this.dataSrv.resrAllImages();
    if (localStorage.getItem("active_non") == "1") {
      this.dataSrv.waiting = 0;
      this.router.navigate(["../home"], { replaceUrl: true })
    }
    else {
      this.dataSrv.waiting = 1;
      this.router.navigate(["../wait"], { replaceUrl: true })
    }
    this.modal.dismiss();
  }
  closeSignUp1() {
    this.dataSrv.resrAllImages();
    this.dataSrv.waiting = 0;
    this.router.navigate(["../intro"], { replaceUrl: true })
    this.modal.dismiss();
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
}
