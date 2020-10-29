function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'Upload_Payment' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background :#38393d; \">\n  <div>\n    <img *ngIf=\"dataSrv.payment == null\" (click)=\"dataSrv.presentActionSheet(100)\" src=\"assets/img/voucher.jpg\" style=\"max-width: 65%; width:50%;\n    border: 0;\n    border-radius: 50%;\n    margin-left: 26%;\n    margin-right:26%;\n    height: 150px;\n    width: 150px;\n    margin-top:10%;\" />\n    <img *ngIf=\"dataSrv.payment != null\" (click)=\"dataSrv.presentActionSheet(100)\" src=\"{{dataSrv.payment}}\" style=\"max-width: 65%; width:50%;\n        border: 0;\n        height: 150px;\n    width: 150px;\n        border-radius: 50%;\n        margin-left: 26%;\n        margin-right:26%;\n        margin-top:10%;\" />\n    <br>\n    <p style=\"color:white; text-align:center; width:100%;\">\n      {{'You_Can_Upload' | translate}}</p>\n    <br>\n    <div style=\"padding-left:4%; padding-right:4%; padding-top:2%; width: 71%;\n      margin: auto; border:none;\">\n      <input (click)=\"uploadPayment()\" class='btn bg-yellow color-white big-font m-top-butn-10' type='button'\n        value=\" {{'Upload' | translate}}\" />\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/payment/payment-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/payment/payment-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PaymentPageRoutingModule */

  /***/
  function srcAppPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
      return PaymentPageRoutingModule;
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


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/payment/payment.page.ts");

    var routes = [{
      path: '',
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
      _classCallCheck(this, PaymentPageRoutingModule);
    };

    PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/payment/payment.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/payment/payment.module.ts ***!
    \*******************************************/

  /*! exports provided: PaymentPageModule */

  /***/
  function srcAppPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
      return PaymentPageModule;
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


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/payment/payment.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var PaymentPageModule = function PaymentPageModule() {
      _classCallCheck(this, PaymentPageModule);
    };

    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })], PaymentPageModule);
    /***/
  },

  /***/
  "./src/app/payment/payment.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/payment/payment.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/payment/payment.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/payment/payment.page.ts ***!
    \*****************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
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


    var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service */
    "./src/app/service/index.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PaymentPage = /*#__PURE__*/function () {
      function PaymentPage(actionSheetCtrl, alertSrv, camera, dataSrv, transfer) {
        _classCallCheck(this, PaymentPage);

        this.actionSheetCtrl = actionSheetCtrl;
        this.alertSrv = alertSrv;
        this.camera = camera;
        this.dataSrv = dataSrv;
        this.transfer = transfer;
        this.id = localStorage.getItem("driver_id");
      }

      _createClass(PaymentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadPayment",
        value: function uploadPayment() {
          var _this = this;

          if (this.dataSrv.payment == null) {
            this.alertSrv.presentToast("Please select an image", "danger");
            return;
          }

          this.alertSrv.show();
          var api = "api/upload_student_payment";
          var body = {
            student_id: localStorage.getItem("driver_id"),
            voucher: this.dataSrv.payment_name
          };
          console.log(body);
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            var sms = JSON.parse(res.data);
            console.log(temp["data"]);

            _this.upload(_this.dataSrv.payment, _this.dataSrv.payment_name);

            _this.alertSrv.hide();

            _this.alertSrv.presentToast("Done", "primary");
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "upload",
        value: function upload(file, fileName) {
          var options = {
            fileKey: 'file',
            fileName: fileName,
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
          };
          console.log(file);
          console.log(fileName);
          var fileTransfer = this.transfer.create(); //http://pickmeupjo.com/pickmeup/uploadphoto.php

          fileTransfer.upload(file, 'http://pickmeupjo.com/pickmeup/uploadImage.php', options).then(function (data) {
            console.log(data); // this.translate.get("uploadSuccess").subscribe(value => {

            console.log("Upload Success", fileName); // })
          }, function (err) {
            // this.translate.get("uploadError").subscribe(value => {
            console.log("Upload Error", fileName); // })

            console.log(err);
          });
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this2 = this;

          var date = new Date().getTime();
          var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this2.file = "data:image/jpeg;base64," + imageData;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetCtrl.create({
                      header: "Choose Image",
                      buttons: [{
                        text: "Gallery",
                        icon: 'images',
                        handler: function handler() {
                          _this3.pickImage(_this3.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: "Camera",
                        icon: 'camera',
                        handler: function handler() {
                          _this3.pickImage(_this3.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: "Cancel",
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PaymentPage;
    }();

    PaymentPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"]
      }];
    };

    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/payment/payment.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"]])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=payment-payment-module-es5.js.map