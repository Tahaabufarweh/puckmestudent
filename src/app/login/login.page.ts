import { Component, OnInit } from "@angular/core";
import { DataService, AlertService, SettingsService } from "../service";
import { ModalController, MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  userData;
  fcm;
  user_name;
  password;
  constructor(
    public dataSrv: DataService,
    public alertSrv: AlertService,
    public stngs: SettingsService,
    public menu: MenuController,
    public modal: ModalController,
    public router: Router
  ) {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.menu.enable(true);
    this.fcm = this.dataSrv.subscribePush();
  }
  ionViewDidEnter() {
    //console.log(document.querySelectorAll(".input-icon"))
    let elements = document.querySelectorAll(".input-icon");
    if (this.stngs.lang2 == "ar")
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.replace("input-icon", "input-icon-rtl");
      }
  }

  Login(user_name, password) {
    this.fcm = this.dataSrv.subscribePush();
    if (
      user_name == "" ||
      user_name == undefined ||
      user_name == null ||
      password == "" ||
      password == undefined ||
      password == null
    ) {
      this.alertSrv.presentToast("Please, Complete Your Data", "danger");
      return;
    }
    this.alertSrv.show();
    let api = "api/login_student";
    let body = {
      user_name: user_name,
      password: password,
      fcm: this.fcm,
    };

    this.dataSrv.httpPostMethod(api, body).then(
      (res) => {
        console.log(res);
        let temp = JSON.parse(res["data"]);
        let sms = JSON.parse(res.data);

        console.log(temp["data"]);
        if (sms.success == true) {
          localStorage.setItem("User_Old", JSON.stringify(temp["data"][0]));
          localStorage.setItem("driver_id", temp["data"][0].id);
          localStorage.setItem("active_non", temp["data"][0].active_non);
          temp["data"][0].photo = temp["data"][0].photo
            ? this.stngs.getSetting("baseURL") + temp["data"][0].photo
            : null;
          temp["data"][0].card_id = temp["data"][0].card_id
            ? this.stngs.getSetting("baseURL") + temp["data"][0].card_id
            : null;
          temp["data"][0].student_id = temp["data"][0].student_id
            ? this.stngs.getSetting("baseURL") + temp["data"][0].student_id
            : null;
          localStorage.setItem("User", JSON.stringify(temp["data"][0]));
          this.dataSrv.photo = temp["data"][0].photo;
          this.dataSrv.User_Name = temp["data"][0].user_name;
          this.dataSrv.Phone = temp["data"][0].phone;
          if (temp["data"][0].active_non == 1) {
            this.dataSrv.waiting = 0;
            this.router.navigate(["../home"], { replaceUrl: true });
          } else {
            this.dataSrv.waiting = 1;
            this.router.navigate(["../wait"], { replaceUrl: true });
          }
          this.alertSrv.hide();
          this.closeLogin();
        } else {
          this.alertSrv.presentToast(sms.message, "danger");
        }
      },
      (err) => {
        if (err.status == -3 || err.status == -4) {
          this.alertSrv.presentToast(
            "Some thing wrong please check internet connection",
            "danger"
          );
        } else {
          this.alertSrv.presentToast("Something wrong", "danger");
        }
      }
    );
  }

  closeLogin() {
    this.modal.dismiss();
  }
}
