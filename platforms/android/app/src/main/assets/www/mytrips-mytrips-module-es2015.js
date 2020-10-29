(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytrips-mytrips-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mytrips/mytrips.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mytrips/mytrips.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'My_Trips' | translate}}</ion-title>\n  </ion-toolbar>\n  <ion-segment class=\"segment\" value=\"1\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"1\">\n      <ion-label>{{'Pending' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label>{{'On_Process' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\">\n      <ion-label>{{'Accepted' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"4\">\n      <ion-label>{{'Canceled' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content style=\"--background :#38393d; \">\n  <ion-list style=\"margin-top:-10px; padding-top: 20px;background: transparent;\">\n    <!-- <ion-item style=\"margin-bottom: 5px;\" detail (click)=\"Go(trip.id)\" *ngFor=\"let trip of Trips\">\n      <ion-label>\n        <h2>Date : {{trip.trip_date}}</h2>\n        <h3>From : {{trip.source}}</h3>\n        <h3>Sets : {{trip.number_of_set}}</h3>\n        <p>To : {{trip.destanation}}</p>\n      </ion-label>\n    </ion-item> -->\n    <ion-card style=\"border-radius: 15px;background: black; margin: 10px;\" (click)=\"Go(trip.id)\"\n      *ngFor=\"let trip of myTrips\">\n      <ion-item style=\"--background: #717171; border-bottom: 3px solid #f2c21e;\">\n        <ion-avatar slot=\"start\" style=\"height: 60px;width: 60px;\">\n          <img *ngIf=\"trip.photo != null\" src=\"{{trip.photo}}\" style=\"border-radius: 50%;height: 60px;width: 60px;\"\n            style=\"opacity: 0.8;\">\n          <img *ngIf=\"trip.photo == null\" src=\"assets/img/noImage.jpg\"\n            style=\"border-radius: 50%;height: 60px;width: 60px;\" style=\"opacity: 0.8;\">\n        </ion-avatar>\n        <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 10%;\"><span\n            style=\"color:#f2c21e;\">{{'Driver' | translate}} :</span>\n          {{trip.name}}</div>\n        <br>\n        <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 50%;\"><span\n            style=\"color:#f2c21e;\">{{'Phone' | translate}} :</span>\n          {{trip.phone}}</div>\n      </ion-item>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row style=\"color: #f2c21e;\">\n            <ion-col>\n              <h2 style=\"font-size: 16px;\">{{'Date' | translate}} : <span\n                  style=\"color:white;\">{{trip.trip_date |date: 'dd/MM/yyyy'}} /\n                  {{trip.trip_date |date: 'HH:mm'}}</span>\n              </h2>\n              <h3 style=\"font-size: 16px;\">{{'From' | translate}} : <span style=\"color:white;\">{{trip.source}}</span>\n              </h3>\n            </ion-col>\n            <ion-col>\n              <h3 style=\"font-size: 16px;\">{{'Sets' | translate}} : <span\n                  style=\"color:white;\">{{trip.number_of_set}}</span>\n              </h3>\n              <h3 style=\"font-size: 16px;\">{{'To' | translate}} : <span style=\"color:white;\">{{trip.destanation}}</span>\n              </h3>\n            </ion-col>\n          </ion-row>\n          <!-- <div style=\"width: 100% ; height: 2px;background: darkgoldenrod\"></div> -->\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <!-- <ion-card style=\"margin-bottom: 5px;\n    margin: 10px;\n    padding: 5px;\n    background: #1d1d1d;\" detail (click)=\"Go(trip.id)\" *ngFor=\"let trip of Trips\">\n      <ion-row style=\"    color: #f2c21e;\">\n        <div style=\"padding-top: 5%;\">\n          <img *ngIf=\"trip.photo != null\" src=\"{{trip.photo}}\" class=\"round-img\" style=\"opacity: 0.8;\">\n          <img *ngIf=\"trip.photo == null\" src=\"assets/img/noImage.jpg\" class=\"round-img\" style=\"opacity: 0.8;\">\n        </div>\n        <ion-col>\n          <h2 style=\"font-size: 16px;\">{{'Date' | translate}} : <span style=\"color:white;\">{{trip.trip_date}}</span>\n          </h2>\n          <h3 style=\"font-size: 16px;\">{{'From' | translate}} : <span style=\"color:white;\">{{trip.source}}</span></h3>\n        </ion-col>\n        <ion-col>\n          <h3 style=\"font-size: 16px;\">{{'Sets' | translate}} : <span style=\"color:white;\">{{trip.number_of_set}}</span>\n          </h3>\n          <h3 style=\"font-size: 16px;\">{{'To' | translate}} : <span style=\"color:white;\">{{trip.destanation}}</span>\n          </h3>\n        </ion-col>\n      </ion-row>\n    </ion-card> -->\n  </ion-list>\n  <div *ngIf=\"myTrips.length < 1\" style=\"text-align: center;\n  margin-top: 50%;\n  padding: 10px;\n  color: white;\n\">{{'NoTrips' | translate}}</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/mytrips/mytrips-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mytrips/mytrips-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MytripsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripsPageRoutingModule", function() { return MytripsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mytrips_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mytrips.page */ "./src/app/mytrips/mytrips.page.ts");




const routes = [
    {
        path: '',
        component: _mytrips_page__WEBPACK_IMPORTED_MODULE_3__["MytripsPage"]
    }
];
let MytripsPageRoutingModule = class MytripsPageRoutingModule {
};
MytripsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MytripsPageRoutingModule);



/***/ }),

/***/ "./src/app/mytrips/mytrips.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mytrips/mytrips.module.ts ***!
  \*******************************************/
/*! exports provided: MytripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripsPageModule", function() { return MytripsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _mytrips_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mytrips-routing.module */ "./src/app/mytrips/mytrips-routing.module.ts");
/* harmony import */ var _mytrips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytrips.page */ "./src/app/mytrips/mytrips.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let MytripsPageModule = class MytripsPageModule {
};
MytripsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _mytrips_routing_module__WEBPACK_IMPORTED_MODULE_5__["MytripsPageRoutingModule"]
        ],
        declarations: [_mytrips_page__WEBPACK_IMPORTED_MODULE_6__["MytripsPage"]]
    })
], MytripsPageModule);



/***/ }),

/***/ "./src/app/mytrips/mytrips.page.scss":
/*!*******************************************!*\
  !*** ./src/app/mytrips/mytrips.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .segment {\n  width: 100%;\n  background: #38393d;\n  height: 30px;\n}\nion-header .segment ion-label {\n  color: #f2c21e !important;\n}\nion-header .segment ion-segment-button {\n  height: 25px;\n  min-height: 15px;\n  width: 35px;\n  min-width: 19px;\n  font-size: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --margin-end: 0px;\n  --margin-start: 0px;\n  --indicator-color-checked: #f2c21e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXl0cmlwcy9EOlxcTXkgRGF0YVxcUmFyIEZpbGVzXFxNdWJhcmFrX1VwZGF0ZVxcTXViYXJha1xcc3R1ZGVudC9zcmNcXGFwcFxcbXl0cmlwc1xcbXl0cmlwcy5wYWdlLnNjc3MiLCJzcmMvYXBwL215dHJpcHMvbXl0cmlwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDUko7QURTSTtFQUNFLHlCQUFBO0FDUE47QURTSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL215dHJpcHMvbXl0cmlwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tc2VnbWVudC1idXR0b24ge1xyXG4vLyAgIG1heC1oZWlnaHQ6IDEwcHg7XHJcbi8vICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgcGFkZGluZzogMHB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gICBjb2xvcjogI2YyYzIxZTtcclxuLy8gfVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgLnNlZ21lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzgzOTNkO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6ICNmMmMyMWUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgbWluLWhlaWdodDogMTVweDtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMTlweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAtLW1hcmdpbi1lbmQ6IDBweDtcclxuICAgICAgLS1tYXJnaW4tc3RhcnQ6IDBweDtcclxuICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogI2YyYzIxZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciAuc2VnbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzgzOTNkO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5pb24taGVhZGVyIC5zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZjJjMjFlICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIC5zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgbWluLWhlaWdodDogMTVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIG1pbi13aWR0aDogMTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLW1hcmdpbi1lbmQ6IDBweDtcbiAgLS1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogI2YyYzIxZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/mytrips/mytrips.page.ts":
/*!*****************************************!*\
  !*** ./src/app/mytrips/mytrips.page.ts ***!
  \*****************************************/
/*! exports provided: MytripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripsPage", function() { return MytripsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MytripsPage = class MytripsPage {
    constructor(activatRoute, stngs, router, alertSrv, dataSrv) {
        this.activatRoute = activatRoute;
        this.stngs = stngs;
        this.router = router;
        this.alertSrv = alertSrv;
        this.dataSrv = dataSrv;
        this.myTrips = [];
        this.Data = [];
        this.activatRoute.queryParams.subscribe(res => {
            this.id = res["id"];
            this.GetMyTrips();
        });
    }
    ngOnInit() {
    }
    GetMyTrips() {
        this.alertSrv.show();
        let api = "api/list_student_trip";
        let body = {
            student_id: parseInt(localStorage.getItem("driver_id"))
        };
        this.dataSrv.httpPostMethod(api, body).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(res);
            let temp = JSON.parse(res["data"]);
            let sms = JSON.parse(res.data);
            this.Data = temp["data"];
            console.log(temp["data"]);
            for (let i = 0; i < this.Data.length; i++) {
                if (this.Data[i].photo != null) {
                    this.Data[i].photo = this.stngs.getSetting("baseURL") + this.Data[i].photo;
                }
            }
            yield this.CheckTripDates();
            this.alertSrv.hide();
        }), err => {
            if (err.status == -3 || err.status == -4) {
                this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            }
            else {
                this.alertSrv.presentToast("Something wrong", "danger");
            }
        });
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
                let location = this.dataSrv.getLocationDetails(parseInt(this.Data[i]["destanation"]));
                if (location.length > 0) {
                    this.Data[i]["destanation"] = this.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
                }
                if (this.Data[i]["from_to_flag"] == 0) {
                    let temp = this.Data[i]["source"];
                    this.Data[i]["source"] = this.Data[i]["destanation"];
                    this.Data[i]["destanation"] = temp;
                }
            }
            this.myTrips = this.Data.filter(item => item.status == 1);
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
                console.log(res);
                let temp = JSON.parse(res["data"]);
                let sms = JSON.parse(res.data);
            }, err => {
                console.log(err);
            });
        });
    }
    segmentChanged(evt) {
        console.log(evt.detail.value);
        this.myTrips = this.Data.filter(item => item.status == parseInt(evt.detail.value));
    }
    Go(trip) {
        console.log(trip);
        this.router.navigate(["../trip-details"], { queryParams: { id: trip } });
    }
};
MytripsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
MytripsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytrips',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mytrips.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mytrips/mytrips.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mytrips.page.scss */ "./src/app/mytrips/mytrips.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], MytripsPage);



/***/ })

}]);
//# sourceMappingURL=mytrips-mytrips-module-es2015.js.map