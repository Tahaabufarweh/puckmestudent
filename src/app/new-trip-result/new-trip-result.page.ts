import { Component, OnInit } from '@angular/core';
import { DataService, SettingsService } from '../service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-trip-result',
  templateUrl: './new-trip-result.page.html',
  styleUrls: ['./new-trip-result.page.scss'],
})
export class NewTripResultPage implements OnInit {
  Trips = []
  user;
  gender;
  constructor(public dataSrv: DataService, public router: Router, public stngs: SettingsService, ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("User"))
    this.gender=this.user.gender;
    this.Trips = this.dataSrv.FilteredTrips.filter(item => item.gender == 1);
    console.log(this.dataSrv.FilteredTrips)
    console.log(this.Trips)
    console.log(this.gender)
  }
  ionViewDidEnter() {

  }
  segmentChanged(evt) {
    console.log(evt.detail.value)
    if (parseInt(evt.detail.value) != 3 && parseInt(evt.detail.value)==this.gender)
      this.Trips = this.dataSrv.FilteredTrips.filter(item => item.gender == parseInt(evt.detail.value) || item.gender == 3);
    else
      this.Trips = this.dataSrv.FilteredTrips.filter(item => item.gender == 3);
  }
  Go(trip) {
    this.router.navigate(["../trip-details"], { queryParams: { id: trip } })
  }
}
