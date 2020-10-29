import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MapSearchComponent } from './map-search/map-search.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [MapSearchComponent, ConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ], exports: [MapSearchComponent, ConfirmComponent],
  entryComponents: [MapSearchComponent, ConfirmComponent]
})
export class ComponentsModule { }
