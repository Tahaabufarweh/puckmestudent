import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  data;
  constructor(public modal: ModalController, public alertSrv: AlertService) { }

  ngOnInit() {
  }

  close(code) {
    if (code != null && code == parseInt(localStorage.getItem("ConfirmCode"))) {
      //  this.event.publish("OpenHome");
    } else {
      this.alertSrv.presentToast("الكود الذى ادخلته غير صحيح من فضلك تأكد من صحته", "danger")
    }
  }
}
