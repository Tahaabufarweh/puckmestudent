(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-trip-result-new-trip-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip-result/new-trip-result.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip-result/new-trip-result.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'Result' | translate}}</ion-title>\n  </ion-toolbar>\n  <ion-segment class=\"segment\" value=\"1\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"1\">\n      <ion-label>{{'Male' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label>{{'Female' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\">\n      <ion-label>{{'Any' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content style=\"--background :#38393d; \">\n  <ion-list style=\"margin-top:-10px; padding-top: 20px;background: transparent;\">\n    <ion-card style=\"border-radius: 15px;background: black; margin: 10px;\" (click)=\"Go(trip.id)\"\n      *ngFor=\"let trip of Trips\">\n      <ion-item style=\"--background: #717171; border-bottom: 3px solid #f2c21e;\">\n        <ion-avatar slot=\"start\" style=\"height: 60px;width: 60px;\">\n          <img *ngIf=\"trip.photo != null\" src=\"{{trip.photo}}\" style=\"border-radius: 50%;height: 60px;width: 60px;\"\n            style=\"opacity: 0.8;\">\n          <img *ngIf=\"trip.photo == null\" src=\"assets/img/noImage.jpg\"\n            style=\"border-radius: 50%;height: 60px;width: 60px;\" style=\"opacity: 0.8;\">\n        </ion-avatar>\n        <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 10%;\"><span\n            style=\"color:#f2c21e;\">{{'Driver' | translate}} :</span>\n          {{trip.name}}</div>\n        <br>\n        <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 50%;\"><span\n            style=\"color:#f2c21e;\">{{'Phone' | translate}} :</span>\n          {{trip.phone}}</div>\n      </ion-item>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row style=\"color: #f2c21e;\">\n            <ion-col>\n              <h2 style=\"font-size: 16px;\">{{'Date' | translate}} : <span\n                  style=\"color:white;\">{{trip.trip_date |date: 'dd/MM/yyyy'}} /\n                  {{trip.trip_date |date: 'HH:mm'}}</span>\n              </h2>\n              <h3 style=\"font-size: 16px;\">{{'From' | translate}} : <span style=\"color:white;\">{{trip.source}}</span>\n              </h3>\n            </ion-col>\n            <ion-col>\n              <h3 style=\"font-size: 16px;\">{{'Sets' | translate}} : <span\n                  style=\"color:white;\">{{trip.number_of_set}}</span>\n              </h3>\n              <h3 style=\"font-size: 16px;\">{{'Gender' | translate}} : <span *ngIf=\"trip.gender==1\"\n                  style=\"color:white;\">{{'Male' | translate}} </span>\n                <span *ngIf=\"trip.gender==2\" style=\"color:white;\">{{'Female' | translate}} </span>\n                <span *ngIf=\"trip.gender==3\" style=\"color:white;\">{{'Mix' | translate}} </span>\n              </h3>\n              <h3 style=\"font-size: 16px;\">{{'To' | translate}} : <span style=\"color:white;\">{{trip.destanation}}</span>\n              </h3>\n\n            </ion-col>\n          </ion-row>\n          <!-- <div style=\"width: 100% ; height: 2px;background: darkgoldenrod\"></div> -->\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <div *ngIf=\"Trips.length < 1\" style=\"text-align: center;\n  margin-top: 50%;\n  padding: 10px;\n  color: white;\n\"> {{'NoTrips' | translate}}</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/new-trip-result/new-trip-result-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/new-trip-result/new-trip-result-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewTripResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripResultPageRoutingModule", function() { return NewTripResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_trip_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-trip-result.page */ "./src/app/new-trip-result/new-trip-result.page.ts");




const routes = [
    {
        path: '',
        component: _new_trip_result_page__WEBPACK_IMPORTED_MODULE_3__["NewTripResultPage"]
    }
];
let NewTripResultPageRoutingModule = class NewTripResultPageRoutingModule {
};
NewTripResultPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewTripResultPageRoutingModule);



/***/ }),

/***/ "./src/app/new-trip-result/new-trip-result.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/new-trip-result/new-trip-result.module.ts ***!
  \***********************************************************/
/*! exports provided: NewTripResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripResultPageModule", function() { return NewTripResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _new_trip_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-trip-result-routing.module */ "./src/app/new-trip-result/new-trip-result-routing.module.ts");
/* harmony import */ var _new_trip_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-trip-result.page */ "./src/app/new-trip-result/new-trip-result.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let NewTripResultPageModule = class NewTripResultPageModule {
};
NewTripResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _new_trip_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewTripResultPageRoutingModule"]
        ],
        declarations: [_new_trip_result_page__WEBPACK_IMPORTED_MODULE_6__["NewTripResultPage"]]
    })
], NewTripResultPageModule);



/***/ }),

/***/ "./src/app/new-trip-result/new-trip-result.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/new-trip-result/new-trip-result.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .segment {\n  width: 100%;\n  background: #38393d;\n  height: 30px;\n}\nion-header .segment ion-label {\n  color: #f2c21e !important;\n}\nion-header .segment ion-segment-button {\n  height: 25px;\n  min-height: 15px;\n  width: 35px;\n  min-width: 19px;\n  font-size: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --margin-end: 0px;\n  --margin-start: 0px;\n  --indicator-color-checked: #f2c21e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRyaXAtcmVzdWx0L0Q6XFxNeSBEYXRhXFxSYXIgRmlsZXNcXE11YmFyYWtfVXBkYXRlXFxNdWJhcmFrXFxzdHVkZW50L3NyY1xcYXBwXFxuZXctdHJpcC1yZXN1bHRcXG5ldy10cmlwLXJlc3VsdC5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldy10cmlwLXJlc3VsdC9uZXctdHJpcC1yZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1JOO0FEU007RUFDRSx5QkFBQTtBQ1BSO0FEU007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9uZXctdHJpcC1yZXN1bHQvbmV3LXRyaXAtcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4vLyAgIG1heC1oZWlnaHQ6IDEwcHg7XG4vLyAgIG1hcmdpbjogMHB4O1xuLy8gICBwYWRkaW5nOiAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMTFweDtcbi8vICAgY29sb3I6ICNmMmMyMWU7XG4vLyB9XG5cbmlvbi1oZWFkZXIge1xuICAgIC5zZWdtZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogIzM4MzkzZDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjZjJjMjFlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBtaW4td2lkdGg6IDE5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1tYXJnaW4tZW5kOiAwcHg7XG4gICAgICAgIC0tbWFyZ2luLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICNmMmMyMWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICIsImlvbi1oZWFkZXIgLnNlZ21lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzM4MzkzZDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuaW9uLWhlYWRlciAuc2VnbWVudCBpb24tbGFiZWwge1xuICBjb2xvcjogI2YyYzIxZSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciAuc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1pbi1oZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtaW4td2lkdGg6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1tYXJnaW4tZW5kOiAwcHg7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwcHg7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICNmMmMyMWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/new-trip-result/new-trip-result.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/new-trip-result/new-trip-result.page.ts ***!
  \*********************************************************/
/*! exports provided: NewTripResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripResultPage", function() { return NewTripResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewTripResultPage = class NewTripResultPage {
    constructor(dataSrv, router, stngs) {
        this.dataSrv = dataSrv;
        this.router = router;
        this.stngs = stngs;
        this.Trips = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("User"));
        this.gender = this.user.gender;
        this.Trips = this.dataSrv.FilteredTrips.filter(item => item.gender == 1);
        console.log(this.dataSrv.FilteredTrips);
        console.log(this.Trips);
        console.log(this.gender);
    }
    ionViewDidEnter() {
    }
    segmentChanged(evt) {
        console.log(evt.detail.value);
        if (parseInt(evt.detail.value) != 3 && parseInt(evt.detail.value) == this.gender)
            this.Trips = this.dataSrv.FilteredTrips.filter(item => item.gender == parseInt(evt.detail.value) || item.gender == 3);
        else
            this.Trips = this.dataSrv.FilteredTrips.filter(item => item.gender == 3);
    }
    Go(trip) {
        this.router.navigate(["../trip-details"], { queryParams: { id: trip } });
    }
};
NewTripResultPage.ctorParameters = () => [
    { type: _service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
NewTripResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-trip-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-trip-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip-result/new-trip-result.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-trip-result.page.scss */ "./src/app/new-trip-result/new-trip-result.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
], NewTripResultPage);



/***/ })

}]);
//# sourceMappingURL=new-trip-result-new-trip-result-module-es2015.js.map