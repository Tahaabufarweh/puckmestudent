import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SettingsService, DataService, AlertService } from './service';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public location: Location,
    private translate: TranslateService,
    public router: Router,
    public menu: MenuController,
    public settings: SettingsService,
    // public events: Events,
    public alertSrv: AlertService,
    public geolocation: Geolocation,
    public dataSrv: DataService,
    public nativeGeocoder: NativeGeocoder
  ) {
    this.initializeApp();
  }
  ngOnInit() {
  }
  LoadUserData(user) {
    console.log(user)
    this.dataSrv.photo = user.photo;
    this.dataSrv.User_Name = user.user_name;
    this.dataSrv.Phone = user.phone;
    this.dataSrv.showdriverid = localStorage.getItem("driver_id");
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide()
      this.callFunctions();
      this.platform.backButton.subscribe(() => {
        if (this.router.url == "/home" || this.router.url == "/wait" || this.router.url == "/intro") {
          if (window.confirm("Do you want to exit ?")) {
            navigator['app'].exitApp();
          }
        } else {
          this.location.back();
        }
      });
      // this.events.subscribe('changeMenu', (value) => {
      //   console.log("value")
      //   if (this.settings.lang2 == 'ar') {
      //     document.getElementById("menu").setAttribute("side", "start");
      //   } else {
      //     document.getElementById("menu").setAttribute("side", "end");
      //   }
      // });
      let user = JSON.parse(localStorage.getItem("User"));
      if (user)
        this.dataSrv.User_Name = user.name;
    });
  }
  Go(page) {
    this.router.navigate(['./' + page]);
    this.menu.close();
  }

  setTransLang(lang: string) {
    this.translate.defaultLang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  callFunctions() {
    this.Locating();
    this.settings.loadSettings()
    // this.settings.doThemeChange();
    this.settings.doLangChange();

    this.navigate();
  }


  setLang(lang) {
    this.alertSrv.show();
    this.settings.setSetting("currentLanguage", '' + lang);
    this.settings.doLangChange();
    this.alertSrv.hide();
  }
  navigate() {
    this.dataSrv.showdriverid=localStorage.getItem("driver_id")
    console.log('dd'+this.dataSrv.showdriverid)
    let driver_id = localStorage.getItem("driver_id")
    let active_non = localStorage.getItem("active_non")
    console.log(driver_id)
    if (driver_id && driver_id != undefined) {
      this.dataSrv.subscribePush();
      let user = JSON.parse(localStorage.getItem("User"));
      if (user) {
        this.LoadUserData(user)
      }
      if (active_non == "1") {
        this.dataSrv.waiting = 0;
        this.router.navigate(["../home"], { replaceUrl: true })
      } else {
        this.dataSrv.waiting = 1;
        this.router.navigate(["../wait"], { replaceUrl: true })
      }
    } else {
      this.router.navigate(["../intro"], { replaceUrl: true })
    }
  }

  Locating() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.dataSrv.lat = resp.coords.latitude.toString();
      this.dataSrv.long = resp.coords.longitude.toString();
      console.log(this.dataSrv.lat, this.dataSrv.long)
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
        })
        .catch((error: any) => console.log(error));
    })
  }
  logout() {
    localStorage.removeItem("driver_id");
    localStorage.removeItem("active_non");
    this.router.navigate(["./intro"], { replaceUrl: true })
    this.dataSrv.resetLocalStorage();
    this.dataSrv.resrAllImages();
    this.menu.close();
  }
}

