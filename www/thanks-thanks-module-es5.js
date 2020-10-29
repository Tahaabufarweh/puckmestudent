function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thanks-thanks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThanksThanksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>thanks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/thanks/thanks-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/thanks/thanks-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ThanksPageRoutingModule */

  /***/
  function srcAppThanksThanksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThanksPageRoutingModule", function () {
      return ThanksPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _thanks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./thanks.page */
    "./src/app/thanks/thanks.page.ts");

    var routes = [{
      path: '',
      component: _thanks_page__WEBPACK_IMPORTED_MODULE_3__["ThanksPage"]
    }];

    var ThanksPageRoutingModule = function ThanksPageRoutingModule() {
      _classCallCheck(this, ThanksPageRoutingModule);
    };

    ThanksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ThanksPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/thanks/thanks.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/thanks/thanks.module.ts ***!
    \*****************************************/

  /*! exports provided: ThanksPageModule */

  /***/
  function srcAppThanksThanksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function () {
      return ThanksPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./thanks-routing.module */
    "./src/app/thanks/thanks-routing.module.ts");
    /* harmony import */


    var _thanks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thanks.page */
    "./src/app/thanks/thanks.page.ts");

    var ThanksPageModule = function ThanksPageModule() {
      _classCallCheck(this, ThanksPageModule);
    };

    ThanksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _thanks_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThanksPageRoutingModule"]],
      declarations: [_thanks_page__WEBPACK_IMPORTED_MODULE_6__["ThanksPage"]]
    })], ThanksPageModule);
    /***/
  },

  /***/
  "./src/app/thanks/thanks.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/thanks/thanks.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppThanksThanksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rcy90aGFua3MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/thanks/thanks.page.ts":
  /*!***************************************!*\
    !*** ./src/app/thanks/thanks.page.ts ***!
    \***************************************/

  /*! exports provided: ThanksPage */

  /***/
  function srcAppThanksThanksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThanksPage", function () {
      return ThanksPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ThanksPage = /*#__PURE__*/function () {
      function ThanksPage() {
        _classCallCheck(this, ThanksPage);
      }

      _createClass(ThanksPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThanksPage;
    }();

    ThanksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thanks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thanks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thanks.page.scss */
      "./src/app/thanks/thanks.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ThanksPage);
    /***/
  }
}]);
//# sourceMappingURL=thanks-thanks-module-es5.js.map