import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { HTTP } from '@ionic-native/http/ngx';

// import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { File } from '@ionic-native/file/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { MapSearchComponent } from '../components/map-search/map-search.component';
// import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})

export class AlertService {
  loading
  constructor(public loadingCtrl: LoadingController, public toastController: ToastController) {
  }

  async show() {
    this.loading = await this.loadingCtrl.create({
      duration: 2000
    });
    this.loading.present();
  }
  async longShow() {
    this.loading = await this.loadingCtrl.create({});
    this.loading.present();
  }
  hide() {
    try {
      this.loading.dismiss();
    } catch (error) { }
  }
  async autoHide(time) {
    this.loading = await this.loadingCtrl.create({
      duration: time
    });
    this.loading.present();
  }

  async presentToastWithOptions(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      buttons: [
        {
          text: 'تم',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async presentToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 2000
    });
    toast.present();
  }
}
