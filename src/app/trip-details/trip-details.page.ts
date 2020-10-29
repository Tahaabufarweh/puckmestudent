import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsService, AlertService, DataService } from '../service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  id;
  driver_id;
  phone = '';
  studentrate = 0;
  constructor(public location: Location, public activatRoute: ActivatedRoute, public stngs: SettingsService, public router: Router, public alertSrv: AlertService, public dataSrv: DataService) {

  }
  ngOnInit() {
    // if (this.dataSrv.notiflag == true) {
    //   this.id = this.dataSrv.trips;
    //   this.GetTripDetails();
    //   this.hideReview = false;
    // }

  }

  ionViewWillEnter(){
    this.activatRoute.queryParams.subscribe(res => {
      this.id = res["id"];
      console.log(this.id)
      this.GetTripDetails();
      this.hideReview = false;
      this.driver_id = localStorage.getItem("driver_id")
    })
    
  }
  CancelTrip() {
    this.alertSrv.show();
    let api = "api/cancel_student_set_trip"
    let body = {
      trip_id: parseInt(this.id),
      student_id: localStorage.getItem("driver_id")
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      if (sms.success == true) {
        this.alertSrv.presentToast("Canceled Successfully", "success")
        this.location.back();
      } else {
        this.alertSrv.presentToast(sms.message, "danger")
      }
      this.alertSrv.hide();
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }
  invitetrip() {
    this.alertSrv.show();
    let api = "api/invitefriend"
    let body = {
      trip_id: parseInt(this.id),
      name: this.dataSrv.User_Name,
      num: this.phone
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      if (sms.success == true) {
        this.alertSrv.presentToast("Invite Success", "success")
        this.location.back();
      } else {
        this.alertSrv.presentToast("Error in phone number", "danger")
      }
      this.alertSrv.hide();
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })

  }
  rate;
  TripDetails = [];
  setDetails = [];
  roledIn = false
  studentState;
  studentreview;
  GetTripDetails() {
    this.hideReview = false;
    this.alertSrv.show();
    let api = "api/one_trip_info"
    let body = {
      trip_id: parseInt(this.id)
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      console.log("temp", temp)
      let sms = JSON.parse(res.data);
      console.log("sms", sms)
      this.TripDetails = temp["infodata"];
      console.log("TripDetails", this.TripDetails)
      this.setDetails = temp["setdata"];
      console.log("setDetails", this.setDetails)
      let counter = 0;
      for (let x = 0; x < this.TripDetails.length; x++) {
        let location = this.dataSrv.getLocationDetails(parseInt(this.TripDetails[x]["destanation"]));
        if (location.length > 0) {
          this.TripDetails[x]["destanation"] = this.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
        }
        if (this.TripDetails[x]["from_to_flag"] == 0) {
          let temp = this.TripDetails[x]["source"];
          this.TripDetails[x]["source"] = this.TripDetails[x]["destanation"];
          this.TripDetails[x]["destanation"] = temp;
        }


      }
      for (let i = 0; i < this.setDetails.length; i++) {
        if (this.setDetails[i].photo && this.setDetails[i].photo) {
          this.setDetails[i].photo = this.stngs.getSetting("baseURL") + this.setDetails[i].photo;
        }
        if (this.setDetails[i].status != 4 && this.setDetails[i].status != 3) {
          counter++;
        }
      }

      this.TripDetails[0]["remain"] = this.TripDetails[0]["number_of_set"] - counter;
      console.log(temp["infodata"])
      console.log(this.setDetails)
      let studenttest = this.setDetails.filter(item => item.student_id == parseInt(localStorage.getItem("driver_id")) && item.status != 4)
      console.log("FilterRes : ", studenttest)
      if (studenttest.length > 0) {
        this.roledIn = true;
        // if (studenttest[0].rate != 0 && studenttest[0].rate!=null && studenttest[0].rate>4) {
        // this.hideReview = true;
        // } else {
        // this.hideReview = false;
        //}
        this.studentState = studenttest[0].status;
        this.studentrate = studenttest[0].rate;
        this.RateValue = this.studentrate
        this.studentreview = studenttest[0].review;

      }
      this.alertSrv.hide();
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }
  Join() {
    this.alertSrv.show();
    let api = "api/booking_student_trip"
    let body = {
      trip_id: parseInt(this.id),
      student_id: parseInt(localStorage.getItem("driver_id")),
      lat: this.dataSrv.lat,
      lng: this.dataSrv.long
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let sms = JSON.parse(res.data);
      if (sms.success == true) {
        this.alertSrv.presentToast("Joined successfuly", "success")
        this.roledIn = true; this.alertSrv.hide();
        this.GetTripDetails();
      } else {
        this.alertSrv.hide();
        this.alertSrv.presentToast(sms.message, "danger")
      }
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }
  review = null;
  onRateChange(event) {
    // this.alertSrv.show();
    if (event > 4) {
      this.RateValue = event;
      this.SaveRateReview(event)
    } else {
      this.RateValue = event;
      this.hideReview = true;
    }
  }
  hideReview = true;
  RateValue
  SaveRateReview(event?) {
    this.alertSrv.show();
    let api = "api/rate_trip"
    let body = {
      trip_id: parseInt(this.id),
      student_id: parseInt(localStorage.getItem("driver_id")),
      rate: this.RateValue,
      reveiw: this.review
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      this.hideReview = false;
      this.alertSrv.hide();
      this.alertSrv.presentToast("Thanks", "success")
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }
  doRefresh(event) {

    this.GetTripDetails();
    this.hideReview = false;
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
