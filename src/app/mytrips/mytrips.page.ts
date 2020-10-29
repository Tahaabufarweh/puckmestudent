import { Component, OnInit } from '@angular/core';
import { AlertService, DataService, SettingsService } from '../service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.page.html',
  styleUrls: ['./mytrips.page.scss'],
})
export class MytripsPage implements OnInit {
  id;
  constructor(public activatRoute: ActivatedRoute, public stngs: SettingsService, public router: Router, public alertSrv: AlertService, public dataSrv: DataService) {
    this.activatRoute.queryParams.subscribe(res => {
      this.id = res["id"]
      this.GetMyTrips();
    })
  }

  ngOnInit() {
  }

  myTrips = [];
  Data = []
  GetMyTrips() {
    this.alertSrv.show();
    let api = "api/list_student_trip"
    let body = {
      student_id: parseInt(localStorage.getItem("driver_id"))
    }
    this.dataSrv.httpPostMethod(api, body).then(async res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      this.Data = temp["data"]
      console.log(temp["data"])
      for (let i = 0; i < this.Data.length; i++) {
        if (this.Data[i].photo != null) {
          this.Data[i].photo = this.stngs.getSetting("baseURL") + this.Data[i].photo;
        }
      }
      await this.CheckTripDates();
      this.alertSrv.hide();
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }

  async CheckTripDates() {
    for (let i = 0; i < this.Data.length; i++) {
      let date1 = new Date(this.Data[i].trip_date);
      date1.setMinutes(date1.getMinutes() + 15);
      if (date1.getTime() < new Date().getTime() && this.Data[i].status == 1) {
        this.Data[i].status = 2;
        await this.changeStaus(this.Data[i].id)
      }
      let location = this.dataSrv.getLocationDetails(parseInt(this.Data[i]["destanation"]));
      if (location.length > 0) {
        this.Data[i]["destanation"] = this.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
      }

      if (this.Data[i]["from_to_flag"] == 0) {
        let temp = this.Data[i]["source"];
        this.Data[i]["source"] = this.Data[i]["destanation"];
        this.Data[i]["destanation"] = temp;
      }
    }
    this.myTrips = this.Data.filter(item => item.status == 1)
  }
  async changeStaus(id) {
    //changestatus
    let api = "api/changestatus"
    let body = {
      trip_id: id,
      status: 2
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
    }, err => {
      console.log(err)
    })
  }
  segmentChanged(evt) {
    console.log(evt.detail.value)
    this.myTrips = this.Data.filter(item => item.status == parseInt(evt.detail.value))
  }
  Go(trip) {
    console.log(trip)
    this.router.navigate(["../trip-details"], { queryParams: { id: trip } })
  }
}
