import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsService, AlertService, DataService } from '../service';
import { NativeGeocoderResult, NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentsegment = 1;
  id;
  lat: any;
  long: any;
  user = JSON.parse(localStorage.getItem("User"));
  constructor(public geolocation: Geolocation, public activatRoute: ActivatedRoute, public nativeGeocoder: NativeGeocoder, public menu: MenuController, public stngs: SettingsService, public router: Router, public alertSrv: AlertService, public dataSrv: DataService) {
    menu.enable(true)
    // this.Locating();
    this.activatRoute.queryParams.subscribe(async res => {
      await this.dataSrv.getLocations();
      this.id = res["id"]
      this.GetTrips();
      this.currentsegment = 1;
    })
    this.dataSrv.getLocations();
  }

  ionViewWillEnter() {
    this.menu.enable(true)
    this.user = JSON.parse(localStorage.getItem("User"));
  }
  ngOnInit() {
    this.menu.enable(true)
    // this.user = JSON.parse(localStorage.getItem("User"));
    // this.GetTrips();
  }

  segmentChanged(evt) {
    this.currentsegment = evt.detail.value;
    let temp = this.Data.filter(item => item.status == parseInt(evt.detail.value) && item.distance <= 4)
    this.Trips = temp.filter(item => item.gender == this.user.gender || item.gender == 3)
  }

  Trips = [];
  Data = []
  async GetTrips() {
    this.alertSrv.loading = await this.alertSrv.loadingCtrl.create({
      duration: 5000
    });
    this.alertSrv.loading.present();
    let api = "api/list_trip_withparam"
    let body = {
      gender: this.user.gender
    }
    //console.log("body : ", body)
    this.dataSrv.httpPostMethod(api, body).then(async res => {
      let temp = JSON.parse(res["data"])
      //let sms = JSON.parse(res.data);
      this.Data = temp["data"]
      // let tempData: [] = temp["data"]
      this.alertSrv.hide();
      await this.calculating();
      await this.CheckTripDates();
      this.allocateData();
      this.Trips = this.Data.filter(item => item.status == this.currentsegment && item.distance <= 4 && (item.gender == this.user.gender || item.gender == 3))
      this.dataSrv.FilteredTrips = this.Trips;
      this.dataSrv.Trips = this.Data;
      // console.log(res)
      //console.log("Data : ", this.Data)
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }
  notification() {
    this.router.navigate(["../notification"])
  }

  allocateData() {
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i].from_to_flag == 0) {
        this.dataSrv.TripsFromUni.push(this.Data[i])
      } else {
        this.dataSrv.TripsToUni.push(this.Data[i])
      }
    }
  }
  async CheckTripDates() {
    for (let i = 0; i < this.Data.length; i++) {
      let date1 = new Date(this.Data[i].trip_date);
      date1.setMinutes(date1.getMinutes() + 15);
      if (date1.getTime() < new Date().getTime() && this.Data[i].status == 1) {
        this.Data[i].status = 2;
        await this.changeStaus(this.Data[i].id)
      }
    }
    this.Trips = this.Data.filter(item => item.status == 1)
    this.alertSrv.hide();
  }
  async changeStaus(id) {
    //changestatus
    let api = "api/changestatus"
    let body = {
      trip_id: id,
      status: 2
    }
    this.dataSrv.httpPostMethod(api, body).then(res => {
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
    }, err => {
      console.log(err)
    })
  }
  async calculating() {
    this.alertSrv.show();
    await this.Locating();
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    let myLattLang = { lat: this.lat, lng: this.long }
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i].photo != null)
        this.Data[i].photo = this.stngs.getSetting("baseURL") + this.Data[i].photo
      let lat, lng;
     let location = this.dataSrv.getLocationDetails(parseInt(this.Data[i]["destanation"]));
      if (location.length > 0) {
        this.Data[i]["destanation"] = this.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
      }
      if (this.Data[i]["from_to_flag"] == 1) {
        await this.nativeGeocoder.forwardGeocode(this.Data[i]["source"], options)
          .then((result: NativeGeocoderResult[]) => {
            lat = result[0].latitude;
            lng = result[0].longitude;
            this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, lat, lng);
          })
          .catch((error: any) => console.log("error", error));
        //   console.log(location)
      } else {
        let temp = this.Data[i]["source"];
        this.Data[i]["source"] = this.Data[i]["destanation"];
        this.Data[i]["destanation"] = temp;
        this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, location[0].lat, location[0].lng);
      }


    }
    this.alertSrv.hide();
  }
  async Locating() {
    await this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
      this.dataSrv.lat = resp.coords.latitude.toString();
      this.dataSrv.long = resp.coords.longitude.toString();
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(parseFloat(this.dataSrv.lat), parseFloat(this.dataSrv.long), options)
        .then((result: NativeGeocoderResult[]) => {
          this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
            + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
            + " , " + result[0].countryName;
        })
        .catch((error: any) => console.log(error));
    })
  }
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
  doRefresh(event) {
    this.GetTrips();
    setTimeout(() => {
      let temp = this.Data.filter(item => item.status == this.currentsegment && item.distance <= 4)
      this.Trips = temp.filter(item => item.gender == this.user.gender || item.gender == 3)
      event.target.complete();
    }, 1000);
  }
  Go(trip) {
    this.router.navigate(["../trip-details"], { queryParams: { id: trip } })
  }

}
