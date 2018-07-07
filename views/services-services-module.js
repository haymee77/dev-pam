(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./src/app/main/documentation/services/config/config.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/documentation/services/config/config.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"config\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Services</span>\n            </div>\n            <div class=\"h2 mt-16\">Config</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>Config</code> is a custom built Fuse service allows to have a granular control over the Fuse. It can\n            be used for changing theme options (layout, color etc.) by component basis.\n        </p>\n\n            <div class=\"section-title\">Usage</div>\n            <p class=\"mat-grey-200-bg py-8\">\n\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n\n                    export class SomeComponent\n                    {\n                        config: any;\n\n                        constructor(\n                            private _fuseConfigService: FuseConfigService\n                        )\n                        {\n                            // Fully customizable surroundings for this particular component\n                            this._fuseConfigService.config = {\n                                layout          : {\n                                    style         : 'vertical-layout-1',\n                                    width         : 'fullwidth',\n                                    navbar        : {\n                                        hidden    : false,\n                                        position  : 'left',\n                                        folded    : false,\n                                        background: 'mat-fuse-dark-700-bg'\n                                    },\n                                    toolbar       : {\n                                        hidden    : false,\n                                        position  : 'below-static',\n                                        background: 'mat-white-500-bg'\n                                    },\n                                    footer        : {\n                                        hidden    : false,\n                                        position  : 'below-static',\n                                        background: 'mat-fuse-dark-900-bg'\n                                    }\n                                },\n                                customScrollbars: true\n                            });\n                        }\n\n                        onInit()\n                        {\n                            // Subscribe to config change\n                            this._fuseConfigService.config\n                                .subscribe((config) => {\n                                    this.config = config;\n                                });\n                        }\n                    }\n\n                </textarea>\n            </fuse-highlight>\n\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/services/config/config.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/documentation/services/config/config.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/documentation/services/config/config.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/documentation/services/config/config.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfigServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigServiceDocsComponent", function() { return ConfigServiceDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigServiceDocsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function ConfigServiceDocsComponent() {
    }
    ConfigServiceDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'config-service-docs',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/main/documentation/services/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.scss */ "./src/app/main/documentation/services/config/config.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigServiceDocsComponent);
    return ConfigServiceDocsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/services/services.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/documentation/services/services.module.ts ***!
  \****************************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/index */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_services_config_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/services/config/config.component */ "./src/app/main/documentation/services/config/config.component.ts");
/* harmony import */ var app_main_documentation_services_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/services/splash-screen/splash-screen.component */ "./src/app/main/documentation/services/splash-screen/splash-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'config',
        component: app_main_documentation_services_config_config_component__WEBPACK_IMPORTED_MODULE_5__["ConfigServiceDocsComponent"]
    },
    {
        path: 'splash-screen',
        component: app_main_documentation_services_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["SplashScreenServiceDocsComponent"]
    }
];
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_services_config_config_component__WEBPACK_IMPORTED_MODULE_5__["ConfigServiceDocsComponent"],
                app_main_documentation_services_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["SplashScreenServiceDocsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components_index__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ],
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/main/documentation/services/splash-screen/splash-screen.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/documentation/services/splash-screen/splash-screen.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"splash-screen\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Services</span>\n            </div>\n            <div class=\"h2 mt-16\">Splash Screen</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>Splash screen</code> is a custom Fuse service that allows to have a control on the splash screen.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"mat-grey-200-bg py-8\">\n\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n\n                    export class SomeComponent\n                    {\n                        constructor(\n                            private _fuseSplashScreenService: FuseSplashScreenService\n                        ) {}\n\n                        onInit()\n                        {\n                            this._fuseSplashScreenService.show();\n\n                            setTimeout(() => {\n                                this._fuseSplashScreenService.hide();\n                            }, 3000);\n                        }\n                    }\n\n                </textarea>\n            </fuse-highlight>\n\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/services/splash-screen/splash-screen.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/documentation/services/splash-screen/splash-screen.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/documentation/services/splash-screen/splash-screen.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/documentation/services/splash-screen/splash-screen.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SplashScreenServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenServiceDocsComponent", function() { return SplashScreenServiceDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashScreenServiceDocsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SplashScreenServiceDocsComponent() {
    }
    SplashScreenServiceDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'splash-screen-service-docs',
            template: __webpack_require__(/*! ./splash-screen.component.html */ "./src/app/main/documentation/services/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__(/*! ./splash-screen.component.scss */ "./src/app/main/documentation/services/splash-screen/splash-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenServiceDocsComponent);
    return SplashScreenServiceDocsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map