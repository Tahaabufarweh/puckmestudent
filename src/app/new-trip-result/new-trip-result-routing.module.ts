import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTripResultPage } from './new-trip-result.page';

const routes: Routes = [
  {
    path: '',
    component: NewTripResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTripResultPageRoutingModule {}
