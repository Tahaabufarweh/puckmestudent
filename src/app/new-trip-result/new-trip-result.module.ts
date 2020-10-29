import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTripResultPageRoutingModule } from './new-trip-result-routing.module';

import { NewTripResultPage } from './new-trip-result.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NewTripResultPageRoutingModule
  ],
  declarations: [NewTripResultPage]
})
export class NewTripResultPageModule { }
