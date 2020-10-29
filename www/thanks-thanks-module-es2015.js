(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thanks-thanks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>thanks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/thanks/thanks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/thanks/thanks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ThanksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageRoutingModule", function() { return ThanksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _thanks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks.page */ "./src/app/thanks/thanks.page.ts");




const routes = [
    {
        path: '',
        component: _thanks_page__WEBPACK_IMPORTED_MODULE_3__["ThanksPage"]
    }
];
let ThanksPageRoutingModule = class ThanksPageRoutingModule {
};
ThanksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThanksPageRoutingModule);



/***/ }),

/***/ "./src/app/thanks/thanks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/thanks/thanks.module.ts ***!
  \*****************************************/
/*! exports provided: ThanksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function() { return ThanksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thanks-routing.module */ "./src/app/thanks/thanks-routing.module.ts");
/* harmony import */ var _thanks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thanks.page */ "./src/app/thanks/thanks.page.ts");







let ThanksPageModule = class ThanksPageModule {
};
ThanksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thanks_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThanksPageRoutingModule"]
        ],
        declarations: [_thanks_page__WEBPACK_IMPORTED_MODULE_6__["ThanksPage"]]
    })
], ThanksPageModule);



/***/ }),

/***/ "./src/app/thanks/thanks.page.scss":
/*!*****************************************!*\
  !*** ./src/app/thanks/thanks.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rcy90aGFua3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/thanks/thanks.page.ts":
/*!***************************************!*\
  !*** ./src/app/thanks/thanks.page.ts ***!
  \***************************************/
/*! exports provided: ThanksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPage", function() { return ThanksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThanksPage = class ThanksPage {
    constructor() { }
    ngOnInit() {
    }
};
ThanksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thanks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thanks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thanks.page.scss */ "./src/app/thanks/thanks.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ThanksPage);



/***/ })

}]);
//# sourceMappingURL=thanks-thanks-module-es2015.js.map