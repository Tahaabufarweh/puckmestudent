import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTripPageRoutingModule } from './new-trip-routing.module';

import { NewTripPage } from './new-trip.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    NewTripPageRoutingModule
  ],
  declarations: [NewTripPage]
})
export class NewTripPageModule { }
