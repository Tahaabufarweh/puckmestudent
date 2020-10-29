(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-trip-new-trip-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'New_Trip' | translate}}</ion-title>\n  </ion-toolbar>\n  <ion-segment class=\"segment\" value=\"0\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"0\">\n      <ion-label>{{'From_Uni' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      <ion-label>{{'To_Uni' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content style=\"--background :#38393d; \">\n\n  <div id='sign-up-page' class='set-bg' class='bg-grey' style=\"height: 100vh;\">\n    <form [formGroup]=\"TripForm\" style=\"    margin-top: -20px;\">\n      <div class='content-box'>\n        <div id='login-from-box' class='m-top-20' ng-form='sign_up_form'>\n          <div class='main-container'>\n            <div class='input-box'>\n              <ion-datetime style=\"padding: 10px;\" formControlName=\"trip_date\" name='name'\n                placeholder=\"{{'Date' | translate}}\" class='color-yellow' displayFormat=\"MM/DD/YYYY HH:mm\"\n                min=\"2000-01-01\"></ion-datetime>\n              <ion-icon class='input-icon icon-20' name=\"information-circle-outline\"></ion-icon>\n            </div>\n            <!-- <br>\n            <div class='input-box'>\n              <ion-input formControlName=\"number_of_set\" name='number_of_set' placeholder=\"Sets\" class='color-yellow'\n                type=\"number\" required></ion-input>\n              <ion-icon name=\"aperture-outline\" class='input-icon icon-20'></ion-icon>\n            </div> -->\n            <!-- <br>\n\n            <div class='input-box'>\n              <ion-input name='pwd' formControlName=\"terms\" placeholder=\"Terms\" class='color-yellow' ng-minlength='6'\n                type='text' required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"bookmark-outline\"></ion-icon>\n            </div> -->\n            <br>\n            <div *ngIf=\"currentsegmant == 1\">\n              <div class='input-box'>\n                <ion-input formControlName=\"source\" placeholder=\"{{'Source' | translate}}\" type='text'\n                  value=\"{{address}}\" class='color-yellow' ng-minlength=\"10\" ng-maxlength=\"10\" required\n                  (ionFocus)=\"GetMap(1)\">\n                </ion-input>\n                <ion-icon class='input-icon icon-20' name=\"map-outline\"></ion-icon>\n              </div>\n              <br>\n              <div class='input-box'>\n                <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='destanation' required\n                  placeholder=\"{{'Destanation' | translate}}\" class='color-yellow' formControlName=\"destanation\">\n                  <div *ngFor=\"let i of Locations\">\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 == 'ar'\">{{i.arabic_name}}\n                    </ion-select-option>\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 != 'ar'\">{{i.english_name}}\n                    </ion-select-option>\n                  </div>\n                </ion-select>\n                <ion-icon class='input-icon icon-20' name=\"navigate-outline\"></ion-icon>\n              </div>\n            </div>\n            <div *ngIf=\"currentsegmant == 0\">\n              <div class='input-box'>\n                <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='destanation' required\n                  placeholder=\"{{'Source' | translate}}\" class='color-yellow' formControlName=\"destanation\">\n                  <div *ngFor=\"let i of Locations\">\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 == 'ar'\">{{i.arabic_name}}\n                    </ion-select-option>\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 != 'ar'\">{{i.english_name}}\n                    </ion-select-option>\n                  </div>\n                </ion-select>\n                <ion-icon class='input-icon icon-20' name=\"navigate-outline\"></ion-icon>\n              </div>\n              <br>\n              <div class='input-box'>\n                <ion-input formControlName=\"source\" placeholder=\"{{'Destanation' | translate}}\" type='text'\n                  value=\"{{address}}\" class='color-yellow' ng-minlength=\"10\" ng-maxlength=\"10\" required\n                  (ionFocus)=\"GetMap(1)\">\n                </ion-input>\n                <ion-icon class='input-icon icon-20' name=\"map-outline\"></ion-icon>\n              </div>\n            </div>\n            <br>\n            <!-- <div class='input-box'>\n              <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='gender' required placeholder=\"Gender\"\n                class='color-yellow' formControlName=\"gender\">\n                <ion-select-option value=\"2\">Female</ion-select-option>\n                <ion-select-option value=\"1\">Male</ion-select-option>\n                <ion-select-option value=\"0\">Any</ion-select-option>\n              </ion-select>\n              <ion-icon class='input-icon icon-20' name=\"transgender-outline\"></ion-icon>\n            </div> -->\n            <!-- <br>\n            <div class='input-box'>\n              <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='price' required placeholder=\"Price\"\n                class='color-yellow' formControlName=\"price\">\n                <ion-select-option value=\"1\">1 JD</ion-select-option>\n                <ion-select-option value=\"1.5\">1.5 JD</ion-select-option>\n              </ion-select>\n             \n              <ion-icon class='input-icon icon-20' name=\"cash-outline\"></ion-icon>\n            </div> -->\n            <br>\n            <input (click)=\"Apply()\" class='btn bg-yellow color-white big-font m-top-butn-10' type='button'\n              value=\"{{'Apply' | translate}}\" />\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/new-trip/new-trip-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/new-trip/new-trip-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewTripPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripPageRoutingModule", function() { return NewTripPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_trip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-trip.page */ "./src/app/new-trip/new-trip.page.ts");




const routes = [
    {
        path: '',
        component: _new_trip_page__WEBPACK_IMPORTED_MODULE_3__["NewTripPage"]
    }
];
let NewTripPageRoutingModule = class NewTripPageRoutingModule {
};
NewTripPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewTripPageRoutingModule);



/***/ }),

/***/ "./src/app/new-trip/new-trip.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-trip/new-trip.module.ts ***!
  \*********************************************/
/*! exports provided: NewTripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripPageModule", function() { return NewTripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _new_trip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-trip-routing.module */ "./src/app/new-trip/new-trip-routing.module.ts");
/* harmony import */ var _new_trip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-trip.page */ "./src/app/new-trip/new-trip.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let NewTripPageModule = class NewTripPageModule {
};
NewTripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _new_trip_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewTripPageRoutingModule"]
        ],
        declarations: [_new_trip_page__WEBPACK_IMPORTED_MODULE_6__["NewTripPage"]]
    })
], NewTripPageModule);



/***/ }),

/***/ "./src/app/new-trip/new-trip.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-trip/new-trip.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .segment {\n  width: 100%;\n  background: #38393d;\n  height: 30px;\n}\nion-header .segment ion-label {\n  color: #f2c21e !important;\n}\nion-header .segment ion-segment-button {\n  height: 25px;\n  min-height: 15px;\n  width: 35px;\n  min-width: 19px;\n  font-size: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --margin-end: 0px;\n  --margin-start: 0px;\n  --indicator-color-checked: #f2c21e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRyaXAvRDpcXE15IERhdGFcXFJhciBGaWxlc1xcTXViYXJha19VcGRhdGVcXE11YmFyYWtcXHN0dWRlbnQvc3JjXFxhcHBcXG5ldy10cmlwXFxuZXctdHJpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldy10cmlwL25ldy10cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBRENJO0VBQ0UseUJBQUE7QUNDTjtBRENJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvbmV3LXRyaXAvbmV3LXRyaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLnNlZ21lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzgzOTNkO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6ICNmMmMyMWUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgbWluLWhlaWdodDogMTVweDtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMTlweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAtLW1hcmdpbi1lbmQ6IDBweDtcclxuICAgICAgLS1tYXJnaW4tc3RhcnQ6IDBweDtcclxuICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogI2YyYzIxZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciAuc2VnbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzgzOTNkO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5pb24taGVhZGVyIC5zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZjJjMjFlICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIC5zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgbWluLWhlaWdodDogMTVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIG1pbi13aWR0aDogMTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLW1hcmdpbi1lbmQ6IDBweDtcbiAgLS1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogI2YyYzIxZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/new-trip/new-trip.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-trip/new-trip.page.ts ***!
  \*******************************************/
/*! exports provided: NewTripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripPage", function() { return NewTripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/map-search/map-search.component */ "./src/app/components/map-search/map-search.component.ts");
/* harmony import */ var _service_admob_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/admob.service */ "./src/app/service/admob.service.ts");











let NewTripPage = class NewTripPage {
    constructor(datePipe, modalController, formBuilder, stngs, router, dataSrv, alertSrv, modal, geolocation, nativeGeocoder, adMobService) {
        this.datePipe = datePipe;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.stngs = stngs;
        this.router = router;
        this.dataSrv = dataSrv;
        this.alertSrv = alertSrv;
        this.modal = modal;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.adMobService = adMobService;
        this.Locations = [];
        this.address = "";
        this.user = JSON.parse(localStorage.getItem("User"));
        this.currentsegmant = 0;
        this.Trips = [];
        this.Data = [];
        this.fcm = this.dataSrv.subscribePush();
        console.log(this.fcm);
        this.getLocations();
        this.buildTripForm();
        this.Locating1();
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("User"));
        this.buildTripForm();
    }
    ionViewWillEnter() {
        this.adMobService.ShowBanner();
    }
    getLocations() {
        this.alertSrv.show();
        let api = "api/list_uni";
        this.dataSrv.httpPostMethod(api, {}).then(res => {
            console.log(res);
            let temp = JSON.parse(res["data"]);
            let sms = JSON.parse(res.data);
            this.Locations = temp["data"];
            this.alertSrv.hide();
        }, err => {
            if (err.status == -3 || err.status == -4) {
                this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            }
            else {
                this.alertSrv.presentToast("Something wrong", "danger");
            }
        });
    }
    ionViewDidEnter() {
        this.user = JSON.parse(localStorage.getItem("User"));
        this.buildTripForm();
        //console.log(document.querySelectorAll(".input-icon"))
        let elements = document.querySelectorAll(".input-icon");
        if (this.stngs.lang2 == 'ar')
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.replace("input-icon", "input-icon-rtl");
            }
    }
    GetMap(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_9__["MapSearchComponent"],
                componentProps: {
                    'address': "",
                    'latt': null,
                    'long': null,
                    "id": id ? id : null
                }
            });
            modal.onDidDismiss().then((modalData) => {
                // if (this.currentsegmant == 1) {
                this.TripForm.get("source").setValue(this.dataSrv.address);
                this.address = this.dataSrv.address;
                // } else {
                //   this.TripForm.get("destanation").setValue(this.dataSrv.address);
                // }
            });
            return yield modal.present();
        });
    }
    buildTripForm() {
        // if (this.currentsegmant == 1) {
        this.TripForm = this.formBuilder.group({
            trip_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            // number_of_set: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
            // terms: ['', [Validators.required]],
            source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            destanation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        });
        // } else {
        //   this.TripForm = this.formBuilder.group({
        //     trip_date: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
        //     // number_of_set: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
        //     // terms: ['', [Validators.required]],
        //     source: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
        //     destanation: [this.dataSrv.address, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        //     // gender: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
        //     // price: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
        //     // status: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
        //   })
        // }
    }
    AddTrip() {
        this.alertSrv.show();
        let TripData = {};
        this.fcm = this.dataSrv.subscribePush();
        console.log(this.fcm);
        TripData["trip_date"] = this.TripForm.get("trip_date").value;
        TripData["driver_id"] = localStorage.getItem("driver_id");
        TripData["number_of_set"] = this.TripForm.get("number_of_set").value;
        TripData["terms"] = this.TripForm.get("terms").value;
        TripData["source"] = this.TripForm.get("source").value;
        TripData["destanation"] = this.TripForm.get("destanation").value;
        TripData["gender"] = this.TripForm.get("gender").value;
        TripData["price"] = this.TripForm.get("price").value;
        TripData["status"] = 1;
        console.log(TripData);
        let api = "api/newtrip";
        this.dataSrv.httpPostMethod(api, TripData).then(res => {
            console.log(res);
            let sms = JSON.parse(res.data);
            if (sms.success == true) {
                this.alertSrv.presentToast("You Trip added.", "success");
            }
            else {
                this.alertSrv.presentToast(sms.message, "danger");
            }
            this.alertSrv.hide();
        }, err => {
            if (err.status == -3 || err.status == -4) {
                this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            }
            else {
                this.alertSrv.presentToast("Something wrong", "danger");
            }
        });
    }
    delete(imageID) {
        if (imageID == 1) {
            this.dataSrv.photo = null;
            this.dataSrv.photo_name = null;
        }
        else if (imageID == 2) {
            this.dataSrv.card_id = null;
            this.dataSrv.card_id_name = null;
        }
        else if (imageID == 3) {
            this.dataSrv.student_id = null;
            this.dataSrv.student_id_name = null;
        }
        else if (imageID == 4) {
            this.dataSrv.driver_licence = null;
            this.dataSrv.driver_licence_name = null;
        }
        else if (imageID == 5) {
            this.dataSrv.car_id = null;
            this.dataSrv.car_id_name = null;
        }
    }
    ll() {
        if (this.dataSrv.FilteredTrips.length < 1) {
            this.alertSrv.presentToast("No Trips Found", "danger");
        }
        else {
            this.router.navigate(["../new-trip-result"]);
        }
    }
    segmentChanged(evt) {
        console.log(evt.detail.value);
        this.currentsegmant = evt.detail.value;
        this.buildTripForm();
    }
    Apply() {
        this.dataSrv.FilteredTrips = [];
        this.dataSrv.Trips = [];
        let d = this.datePipe.transform(this.TripForm.get("trip_date").value, "dd-MM-yyyy HH:mm");
        this.GetTrips(this.TripForm.get("destanation").value, d);
    }
    GetTrips(des, fil) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertSrv.loading = yield this.alertSrv.loadingCtrl.create({
                duration: 6000
            });
            this.alertSrv.loading.present();
            let api = "api/list_trip_withfilter";
            let body = {
                gender: this.user.gender,
                destanation: des,
                fildate: fil,
                from_to_flag: this.currentsegmant
            };
            console.log(body);
            this.dataSrv.httpPostMethod(api, body).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let temp = JSON.parse(res["data"]);
                let sms = JSON.parse(res.data);
                this.Data = temp["data"];
                console.log(this.Data);
                let tempData = temp["data"];
                this.alertSrv.hide();
                yield this.calculating();
                yield this.CheckTripDates();
                this.Trips = this.Data.filter(item => item.distance <= 4);
                this.dataSrv.FilteredTrips = this.Trips;
                this.dataSrv.Trips = this.Data;
                console.log(this.dataSrv.Trips);
                yield this.ll();
            }), err => {
                this.alertSrv.presentToast("Something wrong", "danger");
            });
        });
    }
    notification() {
        this.router.navigate(["../notification"]);
    }
    CheckTripDates() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i < this.Data.length; i++) {
                let date1 = new Date(this.Data[i].trip_date);
                date1.setMinutes(date1.getMinutes() + 15);
                if (date1.getTime() < new Date().getTime() && this.Data[i].status == 1) {
                    this.Data[i].status = 2;
                    yield this.changeStaus(this.Data[i].id);
                }
            }
            this.Trips = this.Data.filter(item => item.status == 1);
            this.alertSrv.hide();
        });
    }
    changeStaus(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //changestatus
            let api = "api/changestatus";
            let body = {
                trip_id: id,
                status: 2
            };
            this.dataSrv.httpPostMethod(api, body).then(res => {
                let temp = JSON.parse(res["data"]);
                let sms = JSON.parse(res.data);
            }, err => {
                console.log(err);
            });
        });
    }
    calculating() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertSrv.show();
            yield this.Locating();
            let options = {
                useLocale: true,
                maxResults: 5
            };
            let myLattLang = { lat: this.lat, lng: this.long };
            for (let i = 0; i < this.Data.length; i++) {
                if (this.Data[i].photo != null)
                    this.Data[i].photo = this.stngs.getSetting("baseURL") + this.Data[i].photo;
                let lat, lng;
                let location = this.dataSrv.getLocationDetails(parseInt(this.Data[i]["destanation"]));
                if (location.length > 0) {
                    this.Data[i]["destanation"] = this.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
                }
                // if (this.Data[i]["from_to_flag"] == 1) {
                //   //   console.log(location)
                // } else {
                //   let temp = this.Data[i]["source"];
                //   this.Data[i]["source"] = this.Data[i]["destanation"];
                //   this.Data[i]["destanation"] = temp;
                //  // this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, location[0].lat, location[0].lng);
                // }
                yield this.nativeGeocoder.forwardGeocode(this.Data[i]["source"], options)
                    .then((result) => {
                    lat = result[0].latitude;
                    lng = result[0].longitude;
                    this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, lat, lng);
                })
                    .catch((error) => console.log("error", error));
            }
            this.alertSrv.hide();
        });
    }
    Locating() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.geolocation.getCurrentPosition().then((resp) => {
                this.lat = resp.coords.latitude;
                this.long = resp.coords.longitude;
                this.dataSrv.lat = resp.coords.latitude.toString();
                this.dataSrv.long = resp.coords.longitude.toString();
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(parseFloat(this.dataSrv.lat), parseFloat(this.dataSrv.long), options)
                    .then((result) => {
                    this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
                        + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
                        + " , " + result[0].countryName;
                })
                    .catch((error) => console.log(error));
            });
        });
    }
    Locating1() {
        return;
        this.geolocation.getCurrentPosition().then((resp) => {
            this.dataSrv.lat = resp.coords.latitude.toString();
            this.dataSrv.long = resp.coords.longitude.toString();
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(parseFloat(this.dataSrv.lat), parseFloat(this.dataSrv.long), options)
                .then((result) => {
                console.log(JSON.stringify(result[0]));
                this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
                    + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
                    + " , " + result[0].countryName;
                this.dataSrv.SourceAddress = this.dataSrv.address;
            })
                .catch((error) => console.log(error));
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    Go(trip) {
        this.router.navigate(["../trip-details"], { queryParams: { id: trip } });
    }
    ionViewDidLeave() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.dataSrv.lat = resp.coords.latitude.toString();
            this.dataSrv.long = resp.coords.longitude.toString();
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(parseFloat(this.dataSrv.lat), parseFloat(this.dataSrv.long), options)
                .then((result) => {
                console.log(JSON.stringify(result[0]));
                this.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , "
                    + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea
                    + " , " + result[0].countryName;
                this.dataSrv.SourceAddress = this.dataSrv.address;
            })
                .catch((error) => console.log(error));
        });
        this.adMobService.hideBanner();
        setTimeout(() => {
            this.adMobService.ShowInterstitial();
        }, 1500);
    }
};
NewTripPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _service_admob_service__WEBPACK_IMPORTED_MODULE_10__["AdmobService"] }
];
NewTripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-trip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-trip.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-trip.page.scss */ "./src/app/new-trip/new-trip.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
        _service_admob_service__WEBPACK_IMPORTED_MODULE_10__["AdmobService"]])
], NewTripPage);



/***/ }),

/***/ "./src/app/service/admob.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/admob.service.ts ***!
  \******************************************/
/*! exports provided: AdmobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmobService", function() { return AdmobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");


//IMPORT PLATFORM SO WE CAN START ADMOB AS SOON AS IT'S READY.

//IMPORT WHAT WE NEED FROM ADMOBFREE PLUGIN.

let AdmobService = class AdmobService {
    constructor(platform, admobFree) {
        this.platform = platform;
        this.admobFree = admobFree;
        //BANNER CONFIG
        this.bannerConfig = {
            size: 'LARGE_BANNER',
            autoShow: true,
            // id: "ca-app-pub-3940256099942544/6300978111"
            id: "ca-app-pub-6505060464041221/5457187768"
        };
        //INTERSTITIAL CONFIG
        this.interstitialConfig = {
            autoShow: false,
            // id: "ca-app-pub-3940256099942544/1033173712"
            id: "ca-app-pub-6505060464041221/4295331095"
        };
        //LOAD ADS AT PLATFORM READY PROMISE.
        platform.ready().then(() => {
            //BANNER
            this.admobFree.banner.config(this.bannerConfig);
            //INTERSTITIAL
            this.admobFree.interstitial.config(this.interstitialConfig);
            this.admobFree.interstitial.prepare().then(() => {
                console.log('INTERSTIAL LOADED');
            }).catch(e => console.log('PROBLEM LOADING INTERSTITIAL: ', e));
        });
    }
    ShowBanner() {
        //CHECK AND SHOW BANNER
        this.admobFree.banner.prepare().then(() => {
            console.log('BANNER LOADED');
        }).catch(e => console.log('PROBLEM LOADING BANNER: ', e));
    }
    ShowInterstitial() {
        //CHECK AND SHOW INTERSTITIAL
        this.admobFree.interstitial.isReady().then(() => {
            //AT .ISREADY SHOW 
            this.admobFree.interstitial.show().then(() => {
                console.log('INTERSTITIAL LOADED');
            })
                .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e));
        })
            .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e));
    }
    hideBanner() {
        this.admobFree.banner.hide();
    }
};
AdmobService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"] }
];
AdmobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"]])
], AdmobService);



/***/ })

}]);
//# sourceMappingURL=new-trip-new-trip-module-es2015.js.map