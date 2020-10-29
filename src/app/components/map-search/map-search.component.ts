import { Component, OnInit, Input, ViewChildren, ElementRef, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DataService, AlertService } from 'src/app/service';
declare var google;

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss'],
})
export class MapSearchComponent implements OnInit {
  @ViewChildren('map') mapElement: ElementRef;

  @Input() address: string;
  @Input() latt: string;
  @Input() long: string;
  @Input() id;


  map: any
  marker: any;

  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  constructor(public modalCtrl: ModalController, public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder, public dataSrv: DataService,
    public zone: NgZone, public alertSrv: AlertService) {
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
  
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input ,  componentRestrictions: {country: 'JO'} },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }

  selectSearchResult(item) {
    console.log(this.id)
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    console.log(item.description)
    this.nativeGeocoder.forwardGeocode(item.description, options)
      .then((result: NativeGeocoderResult[]) => {
        this.latt = result[0].latitude;
        this.long = result[0].longitude;
        this.dataSrv.lat = result[0].latitude;
        this.dataSrv.long = result[0].longitude;
        this.address = item.description;
        if (this.id == null) {
          this.dataSrv.address = item.description;
        } else if (this.id == 1) {
          this.dataSrv.SourceAddress = item.description;
        } else if (this.id == 2) {
          this.dataSrv.DestAddress = item.description;
        }
        this.autocomplete.input=this.dataSrv.address;
        console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude)
        document.getElementById("latbox").setAttribute("value", result[0].latitude);
        document.getElementById("lngbox").setAttribute("value", result[0].longitude);

        let galle = { lat: parseFloat(this.latt), lng: parseFloat(this.long) }
        this.map = new google.maps.Map(this.mapElement["first"].nativeElement, {
          zoom: 10,
          center: galle,
          mapTypeId: 'roadmap'
        });
        this.addMarker();
      })
      .catch((error: any) => console.log(error));
    this.autocompleteItems = [];
    this.autocomplete.input = "";
  }

  ngOnInit() {
    this.autocomplete.input = "";
    this.Locating();
    this.autocomplete.input=this.dataSrv.address;
  }

  ionViewDidEnter() {
    this.autocomplete.input = "";
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.Locating();
    this.autocomplete.input=this.dataSrv.address;

  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async Locating() {
    await this.geolocation.getCurrentPosition().then(async (resp) => {
      this.latt = resp.coords.latitude.toString();
      this.long = resp.coords.longitude.toString();
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      await this.nativeGeocoder.reverseGeocode(parseFloat(this.latt), parseFloat(this.long), options)
        .then((result: NativeGeocoderResult[]) => {
          this.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
            + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
            + " , " + result[0].countryName;
          this.dataSrv.SourceAddress = this.dataSrv.address;
        })
        .catch((error: any) => console.log(error));
    })
    if (this.id == null) {
      this.dataSrv.address = this.address;
    } else if (this.id == 1) {
      this.dataSrv.SourceAddress =this.address;
    } else if (this.id == 2) {
      this.dataSrv.DestAddress =this.address;
    }
    this.dataSrv.address = this.address;
    console.log("add"+this,this.dataSrv.address);
    let galle = { lat: parseFloat(this.latt), lng: parseFloat(this.long) }
    this.map = new google.maps.Map(this.mapElement["first"].nativeElement, {
      zoom: 10,
      center: galle,
      mapTypeId: 'roadmap'
    });
    this.alertSrv.hide();
    this.addMarker();
  }

  addMarker() {
    this.marker = new google.maps.Marker(
      {
        map: this.map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        //icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
        position: this.map.getCenter()
      });
    let content =this.dataSrv.address;
    this.addInfoWindow(this.marker, content);
  }
  selectedAddress;
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow(
      {
        content: content
      });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
      google.maps.event.addListener(marker, 'dragend', ()=> {
        document.getElementById("latbox").setAttribute("value",marker.getPosition().lat());
        document.getElementById("lngbox").setAttribute("value", marker.getPosition().lng());
        this.latt=marker.getPosition().lat();
        this.long=marker.getPosition().lng();
        this.getMarkerPosition(marker.getPosition());
           
         });
  }
  getMarkerPosition(latlng){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': latlng},(results, status)=> {
    this.address= results[0].formatted_address;
    if (this.id == null) {
      this.dataSrv.address = this.address;
    } else if (this.id == 1) {
      this.dataSrv.SourceAddress =this.address;
    } else if (this.id == 2) {
      this.dataSrv.DestAddress =this.address;
    }
    this.dataSrv.address = this.address;
    this.autocomplete.input=this.address;
    console.log("mp-"+this.address);
    console.log(results[0].address_components);
    })
    }
  async GoTo(lat, lng) {
    // this.Locating();
    this.dataSrv.lat = lat;
    this.dataSrv.long = lng;
    this.alertSrv.show();
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    await this.nativeGeocoder.reverseGeocode(parseFloat(lat), parseFloat(lng), options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]))
        this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
          + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
          + " , " + result[0].countryName;
        console.log("Choosed Position : ", this.dataSrv.address)
        this.dataSrv.address = this.address;
      })
      
      .catch((error: any) => console.log(error));
    this.alertSrv.hide();
    this.dismiss();
  }

}