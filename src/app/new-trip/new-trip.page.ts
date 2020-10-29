import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService, AlertService, SettingsService } from '../service';
import { ModalController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MapSearchComponent } from '../components/map-search/map-search.component';
import { AdmobService } from '../service/admob.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss'],
})
export class NewTripPage implements OnInit {
  public TripForm: FormGroup;
  fcm;
  Locations = [];
  address = "";
  user = JSON.parse(localStorage.getItem("User"));
  lat: any;
  long: any;
  currentsegmant = 0;
  constructor(private datePipe: DatePipe, public modalController: ModalController, public formBuilder: FormBuilder, public stngs: SettingsService, public router: Router, public dataSrv: DataService, public alertSrv: AlertService,
    public modal: ModalController, public geolocation: Geolocation, public nativeGeocoder: NativeGeocoder,
    public adMobService: AdmobService) {
    this.fcm = this.dataSrv.subscribePush();
    console.log(this.fcm)
    this.getLocations();
    this.buildTripForm();
    this.Locating1();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("User"));
    this.buildTripForm();
  }

  ionViewWillEnter() {
    this.adMobService.ShowBanner();
  }

  getLocations() {
    this.alertSrv.show();
    let api = "api/list_uni"
    this.dataSrv.httpPostMethod(api, {}).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      this.Locations = temp["data"]
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
    this.user = JSON.parse(localStorage.getItem("User"));
    this.buildTripForm();
    //console.log(document.querySelectorAll(".input-icon"))
    let elements = document.querySelectorAll(".input-icon");
    if (this.stngs.lang2 == 'ar')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.replace("input-icon", "input-icon-rtl")
      }
  }
  async GetMap(id?) {
    const modal = await this.modalController.create({
      component: MapSearchComponent,
      componentProps: {
        'address': "",
        'latt': null,
        'long': null,
        "id": id ? id : null
      }
    });
    modal.onDidDismiss().then((modalData) => {
      // if (this.currentsegmant == 1) {
      this.TripForm.get("source").setValue(this.dataSrv.address);
      this.address = this.dataSrv.address;
      // } else {
      //   this.TripForm.get("destanation").setValue(this.dataSrv.address);
      // }
    });
    return await modal.present();
  }
  buildTripForm() {
    // if (this.currentsegmant == 1) {
    this.TripForm = this.formBuilder.group({
      trip_date: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      // number_of_set: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
      // terms: ['', [Validators.required]],
      source: ['', [Validators.required]],
      destanation: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      // gender: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
      // price: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      // status: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
    })
    // } else {
    //   this.TripForm = this.formBuilder.group({
    //     trip_date: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
    //     // number_of_set: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
    //     // terms: ['', [Validators.required]],
    //     source: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
    //     destanation: [this.dataSrv.address, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    //     // gender: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
    //     // price: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
    //     // status: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
    //   })
    // }

  }


  AddTrip() {
    this.alertSrv.show();
    let TripData = {};
    this.fcm = this.dataSrv.subscribePush();
    console.log(this.fcm)
    TripData["trip_date"] = this.TripForm.get("trip_date").value;
    TripData["driver_id"] = localStorage.getItem("driver_id");
    TripData["number_of_set"] = this.TripForm.get("number_of_set").value;
    TripData["terms"] = this.TripForm.get("terms").value;
    TripData["source"] = this.TripForm.get("source").value;
    TripData["destanation"] = this.TripForm.get("destanation").value;
    TripData["gender"] = this.TripForm.get("gender").value;
    TripData["price"] = this.TripForm.get("price").value;
    TripData["status"] = 1;
    console.log(TripData)
    let api = "api/newtrip"
    this.dataSrv.httpPostMethod(api, TripData).then(res => {
      console.log(res)
      let sms = JSON.parse(res.data);
      if (sms.success == true) {
        this.alertSrv.presentToast("You Trip added.", "success")
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
    } else if (imageID == 4) {
      this.dataSrv.driver_licence = null;
      this.dataSrv.driver_licence_name = null
    } else if (imageID == 5) {
      this.dataSrv.car_id = null;
      this.dataSrv.car_id_name = null
    }
  }
  ll() {
    if (this.dataSrv.FilteredTrips.length < 1) {
      this.alertSrv.presentToast("No Trips Found", "danger")
    } else {
      this.router.navigate(["../new-trip-result"])
    }
  }

  segmentChanged(evt) {
    console.log(evt.detail.value)
    this.currentsegmant = evt.detail.value;
    this.buildTripForm();
  }

  Apply() {
    this.dataSrv.FilteredTrips = [];
    this.dataSrv.Trips = [];
    let d = this.datePipe.transform(this.TripForm.get("trip_date").value, "dd-MM-yyyy HH:mm");
    this.GetTrips(this.TripForm.get("destanation").value, d);
  }
  Trips = [];
  Data = []

  async GetTrips(des, fil) {
    this.alertSrv.loading = await this.alertSrv.loadingCtrl.create({
      duration: 6000
    });
    this.alertSrv.loading.present();
    let api = "api/list_trip_withfilter"
    let body = {
      gender: this.user.gender,
      destanation: des,
      fildate: fil,
      from_to_flag: this.currentsegmant
    }
    console.log(body);
    this.dataSrv.httpPostMethod(api, body).then(async res => {
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      this.Data = temp["data"]
      console.log(this.Data);
      let tempData: [] = temp["data"]
      this.alertSrv.hide();
      await this.calculating();
      await this.CheckTripDates();
      this.Trips = this.Data.filter(item => item.distance <= 4);
      this.dataSrv.FilteredTrips = this.Trips;
      this.dataSrv.Trips = this.Data;
      console.log(this.dataSrv.Trips);
      await this.ll();
    }, err => {
      this.alertSrv.presentToast("Something wrong", "danger")
    })
  }

  notification() {
    this.router.navigate(["../notification"])
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
      // if (this.Data[i]["from_to_flag"] == 1) {

      //   //   console.log(location)
      // } else {
      //   let temp = this.Data[i]["source"];
      //   this.Data[i]["source"] = this.Data[i]["destanation"];
      //   this.Data[i]["destanation"] = temp;
      //  // this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, location[0].lat, location[0].lng);
      // }
      await this.nativeGeocoder.forwardGeocode(this.Data[i]["source"], options)
        .then((result: NativeGeocoderResult[]) => {
          lat = result[0].latitude;
          lng = result[0].longitude;
          this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, lat, lng);
        })
        .catch((error: any) => console.log("error", error));
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

  Locating1() {
    return;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.dataSrv.lat = resp.coords.latitude.toString();
      this.dataSrv.long = resp.coords.longitude.toString();
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(parseFloat(this.dataSrv.lat), parseFloat(this.dataSrv.long), options)
        .then((result: NativeGeocoderResult[]) => {
          console.log(JSON.stringify(result[0]))
          this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
            + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
            + " , " + result[0].countryName;
          this.dataSrv.SourceAddress = this.dataSrv.address;
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
  Go(trip) {
    this.router.navigate(["../trip-details"], { queryParams: { id: trip } })
  }
  ionViewDidLeave() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.dataSrv.lat = resp.coords.latitude.toString();
      this.dataSrv.long = resp.coords.longitude.toString();
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(parseFloat(this.dataSrv.lat), parseFloat(this.dataSrv.long), options)
        .then((result: NativeGeocoderResult[]) => {
          console.log(JSON.stringify(result[0]))
          this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
            + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
            + " , " + result[0].countryName;
          this.dataSrv.SourceAddress = this.dataSrv.address;
        })
        .catch((error: any) => console.log(error));
    })

    this.adMobService.hideBanner();
    setTimeout(() => {
      this.adMobService.ShowInterstitial();
    }, 1500);
  }




}
