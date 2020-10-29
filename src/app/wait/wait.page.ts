import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { AlertService, DataService, SettingsService } from '../service';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.page.html',
  styleUrls: ['./wait.page.scss'],
})
export class WaitPage implements OnInit {

  constructor(public alertSrv: AlertService, public dataSrv: DataService, public stngs: SettingsService, public router: Router, public menu: MenuController, public plt: Platform) {
    menu.enable(true)
    this.plt.backButton.subscribeWithPriority(9999, () => {
    });
    this.GetInfo();
  }

  ngOnInit() {
    this.menu.enable(true)
  }

  Edit() {
    this.router.navigate(["../profile"])
  }

  GetInfo() {
    //
    let api = "api/student_info"
    let body = {
      student_id: parseInt(localStorage.getItem("driver_id"))
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      console.log(temp["data"])
      if (temp["data"] && temp["data"] != {} && temp["data"].length > 0) {
        localStorage.setItem("active_non", temp["data"][0].active_non);
        temp["data"][0].car_id = temp["data"][0].car_id ? this.stngs.getSetting("baseURL") + temp["data"][0].car_id : null;
        temp["data"][0].driver_licence = temp["data"][0].driver_licence ? this.stngs.getSetting("baseURL") + temp["data"][0].driver_licence : null;
        temp["data"][0].photo = temp["data"][0].photo ? this.stngs.getSetting("baseURL") + temp["data"][0].photo : null;
        temp["data"][0].card_id = temp["data"][0].card_id ? this.stngs.getSetting("baseURL") + temp["data"][0].card_id : null;
        temp["data"][0].student_id = temp["data"][0].student_id ? this.stngs.getSetting("baseURL") + temp["data"][0].student_id : null;
        localStorage.setItem("User", JSON.stringify(temp["data"][0]));
        if (temp["data"][0].active_non == 1) {
          this.dataSrv.waiting = 0;
          this.router.navigate(["../home"], { replaceUrl: true })
        } else {
          this.dataSrv.waiting = 1;
          // this.router.navigate(["../wait"], { replaceUrl: true })
        }
        this.alertSrv.hide();
      } else {
        this.alertSrv.presentToast(sms.message, "danger")
      }
    }, err => {
      this.alertSrv.presentToast("Something wrong", "danger")
    })

  }

}
