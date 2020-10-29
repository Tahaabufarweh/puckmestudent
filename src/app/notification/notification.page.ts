import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsService, AlertService, DataService } from '../service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  id;
  constructor(public activatRoute: ActivatedRoute, public stngs: SettingsService, public router: Router, public alertSrv: AlertService, public dataSrv: DataService) {
    this.activatRoute.queryParams.subscribe(res => {
      this.id = localStorage.getItem("driver_id")
      this.GetMyNotifications();
    })
  }
  ngOnInit() {
    this.id = localStorage.getItem("driver_id")
    this.GetMyNotifications();
  }
  Notifications = [];
  GetMyNotifications() {
    this.alertSrv.show();
    let api = "api/student_notification"
    let body = {
      student_id: parseInt(localStorage.getItem("driver_id"))
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      this.Notifications = temp["data"]
      console.log(temp["data"])
      this.alertSrv.hide();
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }


}
