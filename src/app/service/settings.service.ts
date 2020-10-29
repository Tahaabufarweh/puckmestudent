import { Injectable } from '@angular/core';
import { MenuController, DomController, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
// import { TranslateService } from 'node_modules~/@ngx-translate/core/public_api';
import { TranslateService } from '@ngx-translate/core';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  private colorThemes: Theme[] = [
    {
      name: 'theme1',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#0f3939' },
        { themeVariable: '--ion-item-background-color-active', value: '#00695c' },
        { themeVariable: '--settings-title', value: '#0f3939' },
        { themeVariable: '--ion-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        { themeVariable: '--ion-toolbar-background-color', value: '#0f3939' },
        { themeVariable: '--ion-menu-content-color', value: '#0f3939' },
        { themeVariable: '--ion-menu-color', value: '#0f3939' },
        { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        { themeVariable: '--ion-searchbar-color', value: '#0f3939' },

        // { themeVariable: '--dx-butn-color', value: '#0f3939' }
      ]
    },
    // {
    //   name: 'theme2',
    //   styles: [
    //     { themeVariable: '--ion-color-primary', value: '#0f3939' },
    //     { themeVariable: '--ion-item-background-color-active', value: '#00695c' },
    //     { themeVariable: '--settings-title', value: '#0f3939' },
    //     { themeVariable: '--ion-icon-color', value: '#ffffff' },
    //     { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
    //     { themeVariable: '--ion-title-text-color', value: '#ffffff' },
    //     { themeVariable: '--ion-toolbar-background-color', value: '#0f3939' },
    //     { themeVariable: '--ion-menu-content-color', value: '#0f3939' },
    //     { themeVariable: '--ion-menu-color', value: '#0f3939' },
    //     { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
    //     { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
    //     { themeVariable: '--ion-searchbar-color', value: '#0f3939' },
    //     // { themeVariable: '--dx-butn-color', value: '#0f3939' }
    //   ]
    // },
    {
      name: 'gold',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#9f7c5e' },
        // { themeVariable: '--ion-item-background-color-active', value: '#00695c' },
        // { themeVariable: '--settings-title', value: '#0f3939' },
        // { themeVariable: '--ion-icon-color', value: '#ffffff' },
        // { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        // { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        // { themeVariable: '--ion-toolbar-background-color', value: '#0f3939' },
        // { themeVariable: '--ion-menu-content-color', value: '#0f3939' },
        // { themeVariable: '--ion-menu-color', value: '#0f3939' },
        // { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        // { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        // { themeVariable: '--ion-searchbar-color', value: '#0f3939' },

        // { themeVariable: '--dx-butn-color', value: '#0f3939' }
      ]
    },
    {
      name: 'silver',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#919191' },
        // { themeVariable: '--ion-item-background-color-active', value: '#00695c' },
        // { themeVariable: '--settings-title', value: '#0f3939' },
        // { themeVariable: '--ion-icon-color', value: '#ffffff' },
        // { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        // { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        // { themeVariable: '--ion-toolbar-background-color', value: '#0f3939' },
        // { themeVariable: '--ion-menu-content-color', value: '#0f3939' },
        // { themeVariable: '--ion-menu-color', value: '#0f3939' },
        // { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        // { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        // { themeVariable: '--ion-searchbar-color', value: '#0f3939' },
        // { themeVariable: '--dx-butn-color', value: '#0f3939' }
      ]
    },
    {
      name: 'theme3',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#e7663d' },
        { themeVariable: '--settings-title', value: '#e7663d' },
        { themeVariable: '--settings-title', value: '#e7663d' },
        { themeVariable: '--ion-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        { themeVariable: '--ion-toolbar-background-color', value: '#e7663d' },
        { themeVariable: '--ion-menu-content-color', value: '#e7663d' },
        { themeVariable: '--ion-menu-color', value: '#e7663d' },
        { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        { themeVariable: '--ion-searchbar-color', value: '#e7663d' },
        // { themeVariable: '--dx-butn-color', value: '#dd2c00' }
      ]
    },
    // {
    //   name: 'theme4',
    //   styles: [
    //     { themeVariable: '--ion-color-primary', value: '#e7663d' },
    //     { themeVariable: '--settings-title', value: '#e7663d' },
    //     { themeVariable: '--ion-item-background-color-active', value: '#f4511e' },
    //     { themeVariable: '--ion-icon-color', value: '#ffffff' },
    //     { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
    //     { themeVariable: '--ion-title-text-color', value: '#ffffff' },
    //     { themeVariable: '--ion-toolbar-background-color', value: '#e7663d' },
    //     { themeVariable: '--ion-menu-content-color', value: '#e7663d' },
    //     { themeVariable: '--ion-menu-color', value: '#e7663d' },
    //     { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
    //     { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
    //     { themeVariable: '--ion-searchbar-color', value: '#e7663d' },

    //     // { themeVariable: '--dx-butn-color', value: '#dd2c00' }
    //   ]
    // },
    {
      name: 'theme5',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#673ab7' },
        { themeVariable: '--ion-item-background-color-active', value: '#9575cd' },
        { themeVariable: '--settings-title', value: '#673ab7' },
        { themeVariable: '--ion-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        { themeVariable: '--ion-toolbar-background-color', value: '#673ab7' },
        { themeVariable: '--ion-menu-content-color', value: '#673ab7' },
        { themeVariable: '--ion-menu-color', value: '#673ab7' },
        { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        { themeVariable: '--ion-searchbar-color', value: '#673ab7' },

        // { themeVariable: '--dx-butn-color', value: '#673ab7' }
      ]
    },
    {
      name: 'theme6',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#1675d2' },
        { themeVariable: '--ion-item-background-color-active', value: '#2196f3' },
        { themeVariable: '--settings-title', value: '#1675d2' },
        { themeVariable: '--ion-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        { themeVariable: '--ion-toolbar-background-color', value: '#1675d2' },
        { themeVariable: '--ion-menu-content-color', value: '#1675d2' },
        { themeVariable: '--ion-menu-color', value: '#1675d2' },
        { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        { themeVariable: '--ion-searchbar-color', value: '#1675d2' },

        // { themeVariable: '--dx-butn-color', value: '#1675d2' }
      ]
    }
    // ,
    // {
    //   name: 'theme7',
    //   styles: [
    //     { themeVariable: '--ion-color-primary', value: '#1675d2' },
    //     { themeVariable: '--ion-item-background-color-active', value: '#2196f3' },
    //     { themeVariable: '--settings-title', value: '#1675d2' },
    //     { themeVariable: '--ion-icon-color', value: '#ffffff' },
    //     { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
    //     { themeVariable: '--ion-title-text-color', value: '#ffffff' },
    //     { themeVariable: '--ion-toolbar-background-color', value: '#1675d2' },
    //     { themeVariable: '--ion-menu-content-color', value: '#1675d2' },
    //     { themeVariable: '--ion-menu-color', value: '#1675d2' },
    //     { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
    //     { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
    //     { themeVariable: '--ion-searchbar-color', value: '#1675d2' },

    //     // { themeVariable: '--dx-butn-color', value: '#1675d2' }
    //   ]
    // }
  ];

  private _settings = {
    currentLanguage: "1", // arabic
    currentTheme: "gold",
    baseURL: "https://www.pickmeupjo.com/pickmeup/",
    firstName: "",
    password: "admin",
    username: "admin",
    Latt: "",
    Long: "",
    Address: "",
    user: "temp"
  }
  private _languages = [{ id: "0", name: "عربى" }, { id: "1", name: "English" }]
  constructor(public menuCtrl: MenuController, private domCtrl: DomController, public translate: TranslateService,
    public loadingController: LoadingController, public alertController: AlertController, public toastController: ToastController) {
    //this.checkdata();
    this.loadSettings();
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: message,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
  }

  async presentAlert(header, message, btn) {
    const alert = await this.alertController.create({
      header: header,
      //subHeader: 'Subtitle',
      message: message,
      buttons: btn
    });
    await alert.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  private _themes = [
    { id: "theme1", name: "Teal" }
    // , { id: "theme2", name: "theme2" }
    , { id: "theme3", name: "Orange" }
    // , { id: "theme4", name: "theme4" }
    , { id: "theme5", name: "Purple" }
    , { id: "theme6", name: "Blue" }
    // , { id: "theme7", name: "theme7" }
  ]

  getAllThemes() {
    return this._themes;
  }
  getAllLanguages() {
    return this._languages;
  }

  get theme(): string {
    return this._settings["currentTheme"];
  }

  set lang2(val: string) {
    this._settings["currentLanguage"] = val;
  }

  get lang2(): string {
    if (this._settings["currentLanguage"] == "1") {
      return "en"
    } else {
      return "ar";
    }
  }

  setSetting(prop: string, val: any) {
    this._settings[prop] = val;
    localStorage.setItem('mySettings', JSON.stringify(this._settings));
  }

  getSetting(prop: string) {
    return this._settings[prop];
  }

  getSettings() {
    let stngs = {};
    for (var prop in this._settings) {
      stngs[prop] = this._settings[prop];
    }
    return stngs;
  }

  doLangChange() {
    if (this.lang2 == "en") {
      document.getElementById("proj").setAttribute("dir", "ltr");
      document.getElementById("proj").setAttribute("side", "end");

      this.setTransLang("en");
    } else {
      document.getElementById("proj").setAttribute("dir", "rtl")
      document.getElementById("proj").setAttribute("side", "start");
      // console.log(document.querySelectorAll(".input-icon"))
      this.setTransLang("ar");
    }
  }

  doThemeChange() {
    this.getSetting("currentTheme")
    try {
      let colors = this.colorThemes.find(colors => colors.name === this.getSetting("currentTheme"));
      this.domCtrl.write(() => {
        colors.styles.forEach(style => {
          document.documentElement.style.setProperty(style.themeVariable, style.value);
        });
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  setTransLang(lang: string) {
    this.translate.defaultLang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  loadSettings() {
    let locals = JSON.parse(localStorage.getItem('mySettings'));
    if (!locals) return;
    for (var prop in this._settings) {
      if (prop in locals)
        this._settings[prop] = locals[prop];
    }
    // environment.baseUrl = this._settings["baseURL"];
  }

  storeSettings(vals, applyChanges) {
    console.log(this._settings)
    let themeChange = false;
    let menuChange = false;
    let languageChange = false;

    if (!vals) return;
    for (var prop in this._settings) {
      if (prop in vals && this._settings[prop] != vals[prop]) {
        if (prop == "currentLanguage") languageChange = true;
        if (prop == "currentTheme") themeChange = true;
        if (prop == "baseURL" && vals["baseURL"].trim() == "") {
          continue;
        } else {
          //  environment.baseUrl = vals[prop];
        }
        this._settings[prop] = vals[prop];
      }
    }
    console.log(this._settings)
    localStorage.setItem('mySettings', JSON.stringify(this._settings));
    if (themeChange && applyChanges) {
      this.doThemeChange();
      //   window.location.reload();
    }
    if (languageChange && applyChanges) this.doLangChange();
  }
  reset() { }



  setDefaults() {
  }
}
