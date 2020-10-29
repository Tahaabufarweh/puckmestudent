import { ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { MapSearchComponent } from '../components/map-search/map-search.component';
import { FCM } from '@ionic-native/fcm/ngx';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SettingsService } from './settings.service';
import { File } from '@ionic-native/file/ngx';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  photo: any;
  card_id: any;
  student_id: any;
  photo_name: any;
  card_id_name: any;
  student_id_name: any;
  driver_licence_name: any;
  driver_licence: any;
  car_id: any;
  car_id_name: any;
  User_Name: any;
  Phone: any;
  showdriverid:any;
  gender: any;
  payment: any;
  payment_name: any;
  SourceAddress: any;
  FilteredTrips = [];
  Trips = [];
  waiting = 1;
  Locations = [];
  Categories = [];
  value: any[] = [];
  fileURI = null;
  token;
  featured_image = null;
  SelectCategory = [];
  lat: string;
  long: string;
  address: any;
  SelectedPartner: any;
  TripsFromUni = [];
  TripsToUni = [];
  University = []
  notiflag = false;
  trips = 0;
  DestAddress: any;
  constructor(public http: HttpClient,
    public settings: SettingsService,
    public loadingController: LoadingController,
    public translate: TranslateService,
    public httpNative: HTTP,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer,
    // private fileChooser: FileChooser,
    public filePath: FilePath,
    public file: File,
    public modalController: ModalController,
    public fcm: FCM,
    public router: Router
  ) {
  }

  async getLocations() {
    // this.alertSrv.show();
    let api = "api/list_uni"
    await this.httpPostMethod(api, {}).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      this.Locations = temp["data"]
      // this.alertSrv.hide();
    }, err => {
      // if (err.status == -3 || err.status == -4) {
      //   this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      // } else {
      // this.alertSrv.presentToast("Something wrong", "danger")
      // }
    })
  }
  httpGetMethod(apiName) {
    const httpOptions = {
      // headers: new HttpHeaders({
      "Content-Type": "application/json"
      // })
    };
    console.log(this.settings.getSetting("baseURL") + apiName)
    return this.httpNative.get(this.settings.getSetting("baseURL") + apiName, {}, httpOptions)

  }

  httpPostMethod(api: any, body: any) {
    const httpOptions = {
      // headers: new HttpHeaders({
      "Accept": "*/*",
      "Content-Type": "application/json"
      // })
    };
    console.log(body)
    return this.httpNative.post(this.settings.getSetting("baseURL") + api, body, httpOptions)
  }

  async GetMap() {
    const modal = await this.modalController.create({
      component: MapSearchComponent,
      componentProps: {
        'address': "",
        'latt': null,
        'long': null
      }
    });
    return await modal.present();
  }

  upload(file, fileName, uploadFileName) {

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileName,
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: "image/jpeg",
      headers: {}
    }

    console.log(file)
    console.log(fileName)
    const fileTransfer: FileTransferObject = this.transfer.create();
    //http://pickmeupjo.com/pickmeup/uploadphoto.php
    fileTransfer.upload(file, "http://pickmeupjo.com/pickmeup/" + uploadFileName + ".php", options)
      .then((data) => {
        console.log(data)
        // this.translate.get("uploadSuccess").subscribe(value => {
        console.log("Upload Success", fileName)
        // })
      }, (err) => {
        // this.translate.get("uploadError").subscribe(value => {
        console.log("Upload Error", fileName)
        // })
        console.log(err)
      })
  }


  resrAllImages() {
    this.photo = null;
    this.photo_name = null;
    this.card_id = null;
    this.card_id_name = null
    this.student_id = null;
    this.student_id_name = null
    this.driver_licence = null;
    this.driver_licence_name = null
    this.car_id = null;
    this.car_id_name = null
  }

  getLocationDetails(id) {
    return this.Locations.filter(item => item.id == id)
  }
  resetLocalStorage(item?) {
    if (item) {
      localStorage.removeItem(item);

    } else {
      localStorage.removeItem("driver_id");
      localStorage.removeItem("active_non");
      localStorage.removeItem("User");
      localStorage.removeItem("User_Old");
    }

  }
  pickImage(sourceType: PictureSourceType) {
    let date = new Date().getTime()
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture(options).then((imageData) => {
      if (this.imageID == 1) {
        this.photo = "data:image/jpeg;base64," + imageData;
        this.photo_name = date + "_IMG.jpg";
        this.upload(this.photo, this.photo_name, "uploadphoto")
        // console.log(this.photo)
        // console.log(this.photo_name)

      } else if (this.imageID == 2) {
        this.card_id = "data:image/jpeg;base64," + imageData;
        this.card_id_name = date + "_IMG.jpg";
        this.upload(this.card_id, this.card_id_name, "uploadstudentid")

        // console.log(this.card_id)
        // console.log(this.card_id_name)

      } else if (this.imageID == 3) {
        this.student_id = "data:image/jpeg;base64," + imageData;
        this.student_id_name = date + "_IMG.jpg";
        this.upload(this.student_id, this.student_id_name, "uploadcardid")
      } else if (this.imageID == 4) {
        this.driver_licence = "data:image/jpeg;base64," + imageData;
        this.driver_licence_name = date + "_IMG.jpg";
        this.upload(this.photo, this.photo, "uploadcardid")
        // console.log(this.driver_licence)
        // console.log(this.driver_licence_name)

      } else if (this.imageID == 5) {
        this.car_id = "data:image/jpeg;base64," + imageData;
        this.car_id_name = date + "_IMG.jpg";
      } else if (this.imageID == 100) {
        this.payment = "data:image/jpeg;base64," + imageData;
        this.payment_name = date + "_IMG.jpg";
      }
    }, (err) => {
      console.log(err)
    });
  }

  imageID
  async presentActionSheet(id) {
    this.imageID = id;
    let trans;
    this.translate.get("ActionSheet").subscribe(result => {
      trans = result;
    })
    const actionSheet = await this.actionSheetCtrl.create({
      header: trans.header,
      buttons: [
        {
          text: trans.photo,
          icon: 'images',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: trans.camera,
          icon: 'camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: trans.cancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();

  }

  subscribePush() {
    // if (this.platform.is('cordova')) {
    // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    //   if (this.config.notificationType == "fcm") {
    try {
      this.fcm.subscribeToTopic('marketing');

      this.fcm.getToken().then(token => {
        //alert("registration" + token);
        this.token = token;
        console.log(token);
        //this.storage.set('registrationId', token);
        // this.registerDevice(token);
      })

      this.fcm.onNotification().subscribe(data => {
        console.log("notification1 : ", data)
        //if (data.wasTapped) {
        if (data.landing_page == 'notification')
          this.router.navigate([data.landing_page])
        else {
          this.notiflag = true;
          this.trips = data.id;
          this.router.navigate([data.landing_page], { queryParams: { id: data.id } })
          console.log("notification2 : ", data)
        }
        // } else {
        //    console.log("Received in foreground");
        //  };
      })

      this.fcm.onTokenRefresh().subscribe(token => {
        this.token = token
        // this.storage.set('registrationId', token);
        // this.registerDevice(token);
      });
      return this.token;
    } catch (error) {

    }
    //   }
    //   else if (this.config.notificationType == "onesignal") {
    //     this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
    //     this.oneSignal.endInit();
    //     this.oneSignal.getIds().then((data) => {
    //     //   this.registerDevice(data.userId);
    //     })
    //   }
    // }
  }
}
