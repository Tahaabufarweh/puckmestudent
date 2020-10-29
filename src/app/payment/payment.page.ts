import { Component, OnInit } from '@angular/core';
import { AlertService, DataService } from '../service';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  //upload_driver_payment
  id;
  file;
  constructor(public actionSheetCtrl: ActionSheetController, public alertSrv: AlertService, public camera: Camera, public dataSrv: DataService, public transfer: FileTransfer) {
    this.id = localStorage.getItem("driver_id")
  }

  ngOnInit() {
  }

  uploadPayment() {
    if (this.dataSrv.payment == null) {
      this.alertSrv.presentToast("Please select an image", "danger");
      return;
    }
    this.alertSrv.show();
    let api = "api/upload_student_payment"
    let body = {
      student_id: localStorage.getItem("driver_id"),
      voucher: this.dataSrv.payment_name
    }
    console.log(body);
    this.dataSrv.httpPostMethod(api, body).then(res => {
      console.log(res)
      let temp = JSON.parse(res["data"])
      let sms = JSON.parse(res.data);
      console.log(temp["data"])
      this.upload(this.dataSrv.payment, this.dataSrv.payment_name)
      this.alertSrv.hide();
      this.alertSrv.presentToast("Done", "primary")
    }, err => {
      if (err.status == -3 || err.status == -4) {
        this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
      } else {
        this.alertSrv.presentToast("Something wrong", "danger")
      }
    })
  }


  upload(file, fileName) {
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
    fileTransfer.upload(file, 'http://pickmeupjo.com/pickmeup/uploadImage.php', options)
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
      this.file = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err)
    });
  }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Choose Image",
      buttons: [
        {
          text: "Gallery",
          icon: 'images',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: "Camera",
          icon: 'camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: "Cancel",
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
