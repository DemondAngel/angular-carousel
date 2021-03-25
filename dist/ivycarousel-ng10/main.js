(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.carouselWidth = 640;
        this.carouselHeight = 220;
        this.images = [
            {
                path: '/assets/1.jfif'
            },
            {
                path: '/assets/2.jpg'
            },
            {
                path: '/assets/3.jpg'
            },
            {
                path: '/assets/4.jfif'
            },
            {
                path: '/assets/5.jpg'
            },
            {
                path: '/assets/6.jpg'
            },
            {
                path: '/assets/7.jpg'
            },
            {
                path: '/assets/8.jpg'
            },
            {
                path: '/assets/9.jpg'
            },
            {
                path: '/assets/10.jfif'
            }
        ];
        this.images2 = [
            {
                path: '/assets/photo-1444065707204-12decac917e8.jfif',
            },
            {
                path: '/assets/photo-1445452916036-9022dfd33aa8.jfif',
            },
            {
                path: '/assets/photo-1443996104801-80c82e789b18.jfif',
            },
            {
                path: '/assets/photo-1505839673365-e3971f8d9184.jfif',
            },
            {
                path: '/assets/photo-1545420333-23a22b18b8fa.jfif',
            },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.myCarousel = this.carouselComponent.find(elem => elem.id === "my-carousel");
    }
    requestFullscreen() {
        document.documentElement.requestFullscreen();
    }
    handleCarouselEvents(event) {
        if (event.type === "click") {
            console.log(event);
        }
    }
    addImage() {
        this.images.push({
            path: '/assets/10.jfif'
        });
    }
    next() {
        this.myCarousel.next();
    }
    prev() {
        this.myCarousel.prev();
    }
    resize() {
        if (this.carouselWidth === 320) {
            this.carouselWidth = 480;
            this.carouselHeight = 320;
        }
        else {
            this.carouselWidth = 320;
            this.carouselHeight = 220;
        }
    }
    select(index) {
        this.myCarousel.select(index);
    }
    changeImagesArray() {
        this.images = this.images2;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselComponent = _t);
    } }, decls: 75, vars: 20, consts: [[1, "container"], [1, "row"], [3, "images"], ["objectFit", "contain", 3, "images"], [3, "margin", "images"], [3, "height", "images"], [3, "cellsToShow", "images"], [3, "cellsToScroll", "images"], [1, "carousel-cell"], ["src", "/assets/1.jfif"], ["src", "/assets/2.jpg"], ["src", "/assets/3.jpg"], ["src", "/assets/4.jfif"], ["src", "/assets/5.jpg"], ["src", "/assets/6.jpg"], [2, "width", "100%", "height", "100%", "background", "aliceblue"], [3, "images", "objectFit", "cellWidth", "height", "borderRadius", "arrowsOutside", "autoplay", "dots", "loop"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Images in array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "objectFit contain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "margin 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "height 300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3 cells to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2 cells to scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Images in template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "HTML content in template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Full width cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "carousel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Data change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_71_listener() { return ctx.changeImagesArray(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Change images array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("margin", 0)("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 300)("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cellsToShow", 3)("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cellsToScroll", 2)("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images2)("objectFit", "cover")("cellWidth", "100%")("height", 300)("borderRadius", 10)("arrowsOutside", true)("autoplay", true)("dots", true)("loop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 100px;\n  margin: 0 auto;\n  max-width: 700px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0MsbUJBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { carouselComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");




//import { IvyCarouselModule } from 'angular-responsive-carousel';


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["IvyCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["IvyCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["IvyCarouselModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./touches */ "./src/app/carousel/touches.ts");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./src/app/carousel/carousel.ts");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./src/app/carousel/container.ts");
/* harmony import */ var _cells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cells */ "./src/app/carousel/cells.ts");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide */ "./src/app/carousel/slide.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/carousel/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
} }
function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r8.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.getImage(i_r6)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
} }
function CarouselComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
} }
function CarouselComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
} }
function CarouselComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
} }
function CarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
} }
const _c0 = ["*"];
class CarouselComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.minTimeout = 30;
        this._cellWidth = 200;
        this._loop = false;
        this._lightDOM = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.height = 200;
        this.autoplay = false;
        this.autoplayInterval = 5000;
        this.pauseOnHover = true;
        this.dots = false;
        this.margin = 10;
        this.objectFit = 'cover';
        this.minSwipeDistance = 10;
        this.transitionDuration = 200;
        this.transitionTimingFunction = 'ease-out';
        this.counterSeparator = " / ";
        this.overflowCellsLimit = 3;
        this.listeners = 'mouse and touch';
        this.cellsToScroll = 1;
        this.freeScroll = false;
        this.arrows = true;
        this.arrowsTheme = 'light';
        this.hostClassCarousel = true;
        this.handleTouchstart = (event) => {
            //event.preventDefault();
            this.touches.addEventListeners("mousemove", "handleMousemove");
            this.carousel.handleTouchstart(event);
            this.isMoving = true;
        };
        this.handleHorizontalSwipe = (event) => {
            event.preventDefault();
            this.carousel.handleHorizontalSwipe(event);
        };
        this.handleTouchend = (event) => {
            const touches = event.touches;
            this.carousel.handleTouchend(event);
            this.touches.removeEventListeners("mousemove", "handleMousemove");
            this.isMoving = false;
        };
        this.handleTap = (event) => {
            let outboundEvent = {
                name: 'click'
            };
            let nodes = Array.prototype.slice.call(this.cellsElement.children);
            let cellElement = event.srcElement.closest(".carousel-cell");
            const i = nodes.indexOf(cellElement);
            const cellIndex = nodes.indexOf(cellElement);
            if (this.images) {
                //outboundEvent.fileIndex = this.carousel.getFileIndex(i);
                //outboundEvent.file = this.carousel.getFile(cellIndex);
            }
            else {
                outboundEvent.cellIndex = cellIndex;
            }
        };
    }
    get isContainerLocked() {
        if (this.carousel) {
            return this.carousel.isContainerLocked;
        }
    }
    get slideCounter() {
        if (this.carousel) {
            return this.carousel.slideCounter;
        }
    }
    get lapCounter() {
        if (this.carousel) {
            return this.carousel.lapCounter;
        }
    }
    get isLandscape() {
        return window.innerWidth > window.innerHeight;
    }
    get isSafari() {
        const ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') !== -1) {
            return !(ua.indexOf('chrome') > -1);
        }
    }
    get counter() {
        let counter;
        if (this.loop) {
            counter = this.slideCounter % this.cellLength;
        }
        else {
            counter = this.slideCounter;
        }
        return counter + 1 + this.counterSeparator + this.cellLength;
    }
    get cellsElement() {
        return this.elementRef.nativeElement.querySelector('.carousel-cells');
    }
    get isArrows() {
        return this.arrows && !this.freeScroll;
    }
    get isCounter() {
        return this._isCounter && this.cellLength > 1;
    }
    get activeDotIndex() {
        return this.slideCounter % this.cellLength;
    }
    get cellLimit() {
        if (this.carousel) {
            return this.carousel.cellLimit;
        }
    }
    get carouselWidth() {
        return this.elementRef.nativeElement.clientWidth;
    }
    set images(images) {
        this._images = images;
    }
    get images() {
        return this._images;
    }
    set cellWidth(value) {
        if (value) {
            this._cellWidth = value;
        }
    }
    set isCounter(value) {
        if (value) {
            this._isCounter = value;
        }
    }
    set loop(value) {
        if (value) {
            this._loop = value;
        }
    }
    get loop() {
        return this._loop;
    }
    set lightDOM(value) {
        if (value) {
            this._lightDOM = value;
        }
    }
    get lightDOM() {
        if (this.images) {
            return this._lightDOM;
        }
        else {
            return false;
        }
    }
    onWindowResize(event) {
        if (this.utils.visibleWidth !== this.savedCarouselWidth) {
            this.resize();
        }
    }
    onMousemove(event) {
        if (this.autoplay && this.pauseOnHover) {
            this.carousel.stopAutoplay();
        }
    }
    onMouseleave(event) {
        if (this.autoplay && this.pauseOnHover) {
            this.carousel.autoplay();
        }
    }
    ngOnInit() {
        this.isNgContent = this.cellsElement.children.length > 0;
        this.touches = new _touches__WEBPACK_IMPORTED_MODULE_1__["Touches"]({
            element: this.cellsElement,
            listeners: this.listeners,
            mouseListeners: {
                "mousedown": "handleMousedown",
                "mouseup": "handleMouseup"
            }
        });
        this.touches.on('touchstart', this.handleTouchstart);
        this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
        this.touches.on('touchend', this.handleTouchend);
        this.touches.on('mousedown', this.handleTouchstart);
        this.touches.on('mouseup', this.handleTouchend);
        this.touches.on('tap', this.handleTap);
        this.setDimensions();
    }
    ngAfterViewInit() {
        this.initCarousel();
        if (this.autoplay) {
            this.carousel.autoplay();
        }
        this.cellLength = this.getCellLength();
        this.dotsArr = Array(this.cellLength).fill(1);
        this.ref.detectChanges();
        this.carousel.lineUpCells();
        this.savedCarouselWidth = this.carouselWidth;
        /* Start detecting changes in the DOM tree */
        this.detectDomChanges();
    }
    ngOnChanges(changes) {
        if (changes.width || changes.height || changes.images) {
            this.setDimensions();
            this.initCarousel();
            this.carousel.lineUpCells();
            this.ref.detectChanges();
        }
    }
    ngOnDestroy() {
        this.touches.destroy();
        //this.carousel.destroy();
    }
    initCarousel() {
        this.carouselProperties = {
            id: this.id,
            cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
            hostElement: this.elementRef.nativeElement,
            images: this.images,
            cellWidth: this.getCellWidth(),
            loop: this.loop,
            autoplayInterval: this.autoplayInterval,
            overflowCellsLimit: this.overflowCellsLimit,
            visibleWidth: this.width,
            margin: this.margin,
            minSwipeDistance: this.minSwipeDistance,
            transitionDuration: this.transitionDuration,
            transitionTimingFunction: this.transitionTimingFunction,
            videoProperties: this.videoProperties,
            eventHandler: this.events,
            freeScroll: this.freeScroll,
            lightDOM: this.lightDOM
        };
        this.utils = new _utils__WEBPACK_IMPORTED_MODULE_6__["Utils"](this.carouselProperties);
        this.cells = new _cells__WEBPACK_IMPORTED_MODULE_4__["Cells"](this.carouselProperties, this.utils);
        this.container = new _container__WEBPACK_IMPORTED_MODULE_3__["Container"](this.carouselProperties, this.utils, this.cells);
        this.slide = new _slide__WEBPACK_IMPORTED_MODULE_5__["Slide"](this.carouselProperties, this.utils, this.cells, this.container);
        this.carousel = new _carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"](this.carouselProperties, this.utils, this.cells, this.container, this.slide);
        if (this.autoplay) {
            this.carousel.autoplay();
        }
    }
    resize() {
        this.landscapeMode = this.isLandscape;
        this.savedCarouselWidth = this.carouselWidth;
        this.carouselProperties.cellWidth = this.getCellWidth();
        this.cells.updateProperties(this.carouselProperties);
        this.carousel.updateProperties(this.carouselProperties);
        this.container.updateProperties(this.carouselProperties);
        this.slide.updateProperties(this.carouselProperties);
        this.utils.updateProperties(this.carouselProperties);
        this.carousel.lineUpCells();
        this.slide.select(0);
        this.ref.detectChanges();
    }
    detectDomChanges() {
        const observer = new MutationObserver((mutations) => {
            this.onDomChanges();
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true
        };
        observer.observe(this.cellsElement, config);
    }
    onDomChanges() {
        this.cellLength = this.getCellLength();
        this.carousel.lineUpCells();
        this.ref.detectChanges();
    }
    setDimensions() {
        this.hostStyleHeight = this.height + 'px';
        this.hostStyleWidth = this.width + 'px';
    }
    getImage(index) {
        return this.carousel.getImage(index);
    }
    handleTransitionendCellContainer(event) {
        this.carousel.handleTransitionend();
    }
    toggleVideo(video) {
        event.preventDefault();
        if (this.videoProperties.noPlay) {
            return;
        }
        if (video.paused) {
            video.play();
            this.isVideoPlaying = true;
        }
        else {
            video.pause();
            this.isVideoPlaying = false;
        }
        this.ref.detectChanges();
    }
    getCellWidth() {
        let elementWidth = this.carouselWidth;
        if (this.cellsToShow) {
            let margin = this.cellsToShow > 1 ? this.margin : 0;
            let totalMargin = margin * (this.cellsToShow - 1);
            return (elementWidth - totalMargin) / this.cellsToShow;
        }
        if (this._cellWidth === '100%') {
            return elementWidth;
        }
        else {
            return this._cellWidth;
        }
    }
    next() {
        this.carousel.next(this.cellsToScroll);
        this.carousel.stopAutoplay();
    }
    prev() {
        this.carousel.prev(this.cellsToScroll);
        this.carousel.stopAutoplay();
    }
    isNextArrowDisabled() {
        if (this.carousel) {
            return this.carousel.isNextArrowDisabled();
        }
    }
    isPrevArrowDisabled() {
        if (this.carousel) {
            return this.carousel.isPrevArrowDisabled();
        }
    }
    getCellLength() {
        if (this.images) {
            return this.images.length;
        }
        else {
            return this.cellsElement.children.length;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"], ["", "carousel", ""]], hostVars: 6, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) { return ctx.onMousemove($event); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseleave($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
    } }, inputs: { id: "id", height: "height", width: "width", autoplay: "autoplay", autoplayInterval: "autoplayInterval", pauseOnHover: "pauseOnHover", dots: "dots", borderRadius: "borderRadius", margin: "margin", objectFit: "objectFit", minSwipeDistance: "minSwipeDistance", transitionDuration: "transitionDuration", transitionTimingFunction: "transitionTimingFunction", videoProperties: "videoProperties", counterSeparator: "counterSeparator", overflowCellsLimit: "overflowCellsLimit", listeners: "listeners", cellsToShow: "cellsToShow", cellsToScroll: "cellsToScroll", freeScroll: "freeScroll", arrows: "arrows", arrowsOutside: "arrowsOutside", arrowsTheme: "arrowsTheme", images: "images", cellWidth: "cellWidth", isCounter: ["counter", "isCounter"], loop: "loop", lightDOM: "lightDOM" }, outputs: { events: "events" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 8, vars: 6, consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) { return ctx.handleTransitionendCellContainer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dots);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isArrows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 10000;\n  transform-origin: top left;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  cursor: grab;\n}\n[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%] {\n  text-align: right;\n  position: absolute;\n  z-index: 30;\n  transition: opacity 200ms;\n  top: 8px;\n  right: 24px;\n  border-radius: 13px;\n  background-color: rgba(23, 37, 68, 0.3);\n  font-size: 11px;\n  color: #ffffff;\n  padding: 5px 7px;\n  line-height: initial;\n}\n[_nghost-%COMP%]     .carousel-cells {\n  transition: transform 200ms;\n  width: 100%;\n  height: 100%;\n  display: block;\n  will-change: transform;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image {\n  transform: translate3d(-100%, 0, 0);\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image {\n  transform: translate3d(100%, 0, 0);\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  object-fit: contain;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide {\n  display: none;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-size: 31px;\n  background-position: center;\n  border-radius: 100px;\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  z-index: 10;\n  cursor: pointer;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%] {\n  left: 10px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n}\n[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%] {\n  right: 10px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n}\n[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%] {\n  left: -60px;\n}\n[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%] {\n  right: -60px;\n}\n[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  text-align: center;\n}\n[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid #fff;\n  border-radius: 100px;\n  margin: 4px;\n  width: 8px;\n  height: 8px;\n}\n[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUk7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBRU47QUFETTtFQUNFLG1DQUFBO0FBR1I7QUFGTTtFQUNFLGtDQUFBO0FBSVI7QUFITTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUtSO0FBSlE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTVY7QUFMUTtFQUNFLGFBQUE7QUFPVjtBQU5RO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQVFWO0FBTkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7QUFRSjtBQVBFO0VBQ0UsVUFBQTtFQUNBLHlUQUFBO0FBU0o7QUFSRTtFQUNFLFdBQUE7RUFDQSxxVEFBQTtBQVVKO0FBUkk7RUFDRSxXQUFBO0FBVU47QUFUSTtFQUNFLFlBQUE7QUFXTjtBQVRJO0VBQ0UsaUJBQUE7QUFXTjtBQVZFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFZSjtBQVhFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVpJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBY047QUFiSTtFQUNFLHNCQUFBO0FBZU4iLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcydcclxuXHJcblxcOmhvc3RcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgXHJcbiAgZGlzcGxheTogYmxvY2tcclxuICB0b3A6IDBcclxuICBsZWZ0OiAwXHJcbiAgd2lkdGg6IDEwMCUgXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgXHJcbiAgei1pbmRleDogMTAwMDBcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAuLWNvbnRhaW5lclxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gICAgd2lkdGg6IDEwMCUgXHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGN1cnNvcjogZ3JhYlxyXG4gIC5jYXJvdXNlbC1jb250YWluZXIuY2Fyb3VzZWwtbW92aW5nXHJcbiAgICBjdXJzb3I6IGdyYWJiaW5nXHJcbiAgLmNhcm91c2VsLWNvdW50ZXJcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHotaW5kZXg6IDMwXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zXHJcbiAgICB0b3A6IDhweCBcclxuICAgIHJpZ2h0OiAyNHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCAzNywgNjgsIDAuMylcclxuICAgIGZvbnQtc2l6ZTogMTFweFxyXG4gICAgY29sb3I6ICNmZmZmZmZcclxuICAgIHBhZGRpbmc6IDVweCA3cHhcclxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsXHJcbiAgOjpuZy1kZWVwXHJcbiAgICAuY2Fyb3VzZWwtY2VsbHNcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zXHJcbiAgICAgIHdpZHRoOiAxMDAlIFxyXG4gICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgZGlzcGxheTogYmxvY2sgXHJcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm1cclxuICAgICAgLmNhcm91c2VsLWNlbGwuc3dpcGVyLXByZXYtaW1hZ2VcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVxyXG4gICAgICAuY2Fyb3VzZWwtY2VsbC5zd2lwZXItbmV4dC1pbWFnZVxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMClcclxuICAgICAgLmNhcm91c2VsLWNlbGxcclxuICAgICAgICB3aWR0aDogMTAwJSBcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICAgICAgaW1nLFxyXG4gICAgICAgIHZpZGVvXHJcbiAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW5cclxuICAgICAgICBpbWcuc3dpcGVyLWhpZGUgXHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lIFxyXG4gICAgICAgIC5jYXJvdXNlbC1wbGF5XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICByaWdodDogMFxyXG4gICAgICAgICAgei1pbmRleDogMVxyXG5cclxuICAuY2Fyb3VzZWwtYXJyb3dcclxuICAgIHdpZHRoOiA0MHB4XHJcbiAgICBoZWlnaHQ6IDQwcHhcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzFweFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDUwJVxyXG4gICAgbWFyZ2luLXRvcDogLTIwcHhcclxuICAgIHotaW5kZXg6IDEwXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcclxuICAuY2Fyb3VzZWwtYXJyb3ctcHJldlxyXG4gICAgbGVmdDogMTBweFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lnZDJsa2RHZzlJakkwSWo0OGNHRjBhQ0JrUFNKTk1UVXVOREVnTVRZdU5UbE1NVEF1T0RNZ01USnNOQzQxT0MwMExqVTVUREUwSURac0xUWWdOaUEySURZZ01TNDBNUzB4TGpReGVpSXZQanh3WVhSb0lHUTlJazB3SURCb01qUjJNalJJTUZZd2VpSWdabWxzYkQwaWJtOXVaU0l2UGp3dmMzWm5QZz09KVxyXG4gIC5jYXJvdXNlbC1hcnJvdy1uZXh0IFxyXG4gICAgcmlnaHQ6IDEwcHhcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJZ2QybGtkR2c5SWpJMElqNDhjR0YwYUNCa1BTSk5PQzQxT1NBeE5pNDFPVXd4TXk0eE55QXhNaUE0TGpVNUlEY3VOREVnTVRBZ05tdzJJRFl0TmlBMkxURXVOREV0TVM0ME1Yb2lMejQ4Y0dGMGFDQmtQU0pOTUNBd2FESTBkakkwU0RCV01Ib2lJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KVxyXG4gIC5jYXJvdXNlbC1hcnJvd3Mtb3V0c2lkZVxyXG4gICAgLmNhcm91c2VsLWFycm93LXByZXZcclxuICAgICAgbGVmdDogLTYwcHhcclxuICAgIC5jYXJvdXNlbC1hcnJvdy1uZXh0XHJcbiAgICAgIHJpZ2h0OiAtNjBweFxyXG4gIC5jYXJvdXNlbC1kYXJrLWFycm93c1xyXG4gICAgLmNhcm91c2VsLWFycm93XHJcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpXHJcbiAgLmNhcm91c2VsLWFycm93LWRpc2FibGVkXHJcbiAgICBjdXJzb3I6IGRlZmF1bHRcclxuICAgIG9wYWNpdHk6IDAuNVxyXG4gIC5jYXJvdXNlbC1kb3RzXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIGxlZnQ6IDBcclxuICAgIHJpZ2h0OiAwXHJcbiAgICBib3R0b206IDBcclxuICAgIHotaW5kZXg6IDEwXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIC5jYXJvdXNlbC1kb3RcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHhcclxuICAgICAgbWFyZ2luOiA0cHhcclxuICAgICAgd2lkdGg6IDhweFxyXG4gICAgICBoZWlnaHQ6IDhweFxyXG4gICAgLmNhcm91c2VsLWRvdC1hY3RpdmVcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel, [carousel]',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.sass']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplayInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pauseOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], margin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], objectFit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minSwipeDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transitionTimingFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], counterSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overflowCellsLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellsToShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellsToScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], freeScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowsOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowsTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cellWidth']
        }], isCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['counter']
        }], loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loop']
        }], lightDOM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['lightDOM']
        }], hostClassCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel']
        }], hostStyleHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], hostStyleWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }], onMouseleave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/carousel/carousel.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carousel/carousel.module.ts ***!
  \*********************************************/
/*! exports provided: IvyCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvyCarouselModule", function() { return IvyCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.component */ "./src/app/carousel/carousel.component.ts");




class IvyCarouselModule {
}
IvyCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IvyCarouselModule });
IvyCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IvyCarouselModule_Factory(t) { return new (t || IvyCarouselModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvyCarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvyCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]
                ],
                providers: [],
                bootstrap: [],
                entryComponents: [
                    _carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/carousel/carousel.ts":
/*!**************************************!*\
  !*** ./src/app/carousel/carousel.ts ***!
  \**************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
class Carousel {
    constructor(properties, utils, cells, container, slide) {
        this.properties = properties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slide = slide;
        this.isContentImages = true;
        this.isLazyLoad = true;
        this.isContainerLocked = true;
        this.alignCells = "left";
        this.initialContainerPosition = 0;
        this.containerPullLimit = 100;
        this.handleTouchstart = (event) => {
            this.container.handleTouchstart();
            this.slide.handleTouchstart(event);
        };
        this.handleHorizontalSwipe = (event) => {
            this.container.handleHorizontalSwipe();
        };
        this.handleTouchend = (event) => {
            if (this.properties.freeScroll) {
                this.container.handleTouchend();
            }
            else {
                this.container.handleTouchend(true);
                this.slide.handleTouchend(event);
            }
        };
        this.isNextArrowDisabled = () => {
            return this.slide.isNextArrowDisabled();
        };
        this.isPrevArrowDisabled = () => {
            return this.slide.isPrevArrowDisabled();
        };
        this.init();
    }
    get cellLength() {
        return this.cells.cellLength;
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get lastCellIndex() {
        return this.images.length ? (this.images.length - 1) : (this.cells.cellLength - 1);
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get cellLimit() {
        if (this.isLightDOM) {
            let cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLimit < this.numberOfVisibleCells) {
                cellLimit = this.numberOfVisibleCells;
            }
            return cellLimit;
        }
        else {
            return this.properties.images.length;
        }
    }
    get isLightDOM() {
        return this.properties.lightDOM || this.properties.loop;
    }
    get images() {
        return this.properties.images;
    }
    get margin() {
        return this.properties.margin;
    }
    get minSwipeDistance() {
        return this.properties.minSwipeDistance;
    }
    get transitionDuration() {
        return this.properties.transitionDuration;
    }
    get transitionTimingFunction() {
        return this.properties.transitionTimingFunction;
    }
    get fullCellWidth() {
        return this.properties.cellWidth + this.margin;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get lapCounter() {
        return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
    }
    get slideCounter() {
        return this.slide.counter;
    }
    updateProperties(properties) {
        this.properties = properties;
    }
    init() {
        this.cellsElement = this.properties.cellsElement;
        this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
    }
    destroy() {
        clearInterval(this.autoplayId);
    }
    lineUpCells() {
        this.cells.lineUp();
    }
    handleTransitionend() {
        this.slide.handleTransitionend();
    }
    getImage(index) {
        return this.cells.getImage(index);
    }
    next(length = 1) {
        if (!this.isNextArrowDisabled()) {
            this.slide.next(length);
        }
    }
    prev(length = 1) {
        this.slide.prev(length);
    }
    autoplay() {
        this.autoplayId = setInterval(() => {
            this.next();
        }, this.properties.autoplayInterval);
    }
    stopAutoplay() {
        if (this.autoplayId) {
            clearInterval(this.autoplayId);
        }
    }
}


/***/ }),

/***/ "./src/app/carousel/cells.ts":
/*!***********************************!*\
  !*** ./src/app/carousel/cells.ts ***!
  \***********************************/
/*! exports provided: ImageUtils, Cells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUtils", function() { return ImageUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cells", function() { return Cells; });
class ImageUtils {
    constructor(element) {
        this.element = element;
    }
    getImages() {
        return this.cellStack.filter(this.filter);
    }
    comparePositions(a, b) {
        if (a.positionX < b.positionX) {
            return -1;
        }
        if (a.positionX > b.positionX) {
            return 1;
        }
        return 0;
    }
    filter(cell) {
        return cell.img !== undefined;
    }
}
class Cells {
    constructor(carouselProperties, utils) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.counter = 0;
        this.imageUtils = new ImageUtils(this.element);
        this.init(carouselProperties);
    }
    get images() {
        return this.carouselProperties.images;
    }
    get cellLength() {
        return this.cells.length;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    lineUp() {
        const cells = this.element.children;
        this.imageUtils.cellStack = [];
        for (var i = 0; i < cells.length; i++) {
            let cell = cells[i];
            let positionX = this.getCellPositionInContainer(i);
            cell.style.transform = 'translateX(' + positionX + 'px)';
            cell.style.width = this.carouselProperties.cellWidth + 'px';
            if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                    index: i,
                    positionX,
                    img: this.getImage(i)['image']
                });
            }
        }
        ;
    }
    ifSequenceOfCellsIsChanged() {
        const cells = this.element.children;
        return cells[0]['style'].transform !== 'translateX(0px)';
    }
    getCellPositionInContainer(cellIndexInDOMTree) {
        let positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
        return positionIndex * this.fullCellWidth;
    }
    getCellIndexInContainer(cellIndexInDOMTree) {
        let positionIndex;
        if (!this.isLightDOM) {
            return cellIndexInDOMTree;
        }
        let cellLength = this.cellLengthInLightDOMMode;
        let counter = this.counter - this.overflowCellsLimit;
        if (counter > cellLength) {
            counter = counter % cellLength;
        }
        if (counter < 0) {
            return cellIndexInDOMTree;
        }
        else {
            positionIndex = cellIndexInDOMTree - counter;
            if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
            }
        }
        return positionIndex;
    }
    getImage(cellIndex) {
        if (!this.images) {
            return;
        }
        let imageIndex = this.getImageIndex(cellIndex);
        let file = this.images[imageIndex];
        if (file && !file.type) {
            file.type = 'image';
        }
        return {
            image: this.images[imageIndex],
            imageIndex
        };
    }
    getImageIndex(cellIndexInDOMTree) {
        const positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
        let imageIndex;
        if (this.counter > this.overflowCellsLimit) {
            let cellLimitOverflow = this.counter - this.overflowCellsLimit;
            imageIndex = positionIndex + cellLimitOverflow;
            if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
            }
        }
        else {
            imageIndex = cellIndexInDOMTree;
        }
        return imageIndex;
    }
    setCounter(value) {
        this.counter = value;
    }
    init(carouselProperties) {
        this.element = this.carouselProperties.cellsElement;
        this.cells = this.element.children;
        this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
    }
}


/***/ }),

/***/ "./src/app/carousel/container.ts":
/*!***************************************!*\
  !*** ./src/app/carousel/container.ts ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
class Container {
    constructor(carouselProperties, utils, cells) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        /* The index of the new position relative to
         * the active index, for example -1 or +1
         */
        this.newPositionIndex = 0;
        this.initialPositionX = 0;
        this.initialElementPositionX = 0;
        this.isLocked = true;
        this.pullLimit = 100;
        this.init();
    }
    get visibleWidth() {
        return this.utils.visibleWidth;
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get images() {
        return this.carouselProperties.images;
    }
    get element() {
        return this.carouselProperties.cellsElement;
    }
    get freeScroll() {
        return this.carouselProperties.freeScroll;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get transitionDuration() {
        return this.carouselProperties.transitionDuration;
    }
    get transitionTimingFunction() {
        return this.carouselProperties.transitionTimingFunction;
    }
    get cellLength() {
        if (this.images) {
            return this.images.length;
        }
        else {
            return this.cells.cellLength;
        }
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get tooFewCells() {
        return this.numberOfVisibleCells > this.cellLength;
    }
    get disabled() {
        return this.tooFewCells;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    init() {
        this.setWidth();
    }
    handleTouchstart() {
        this.startX = this.utils.getStartX(event);
        this.startTime = new Date().getTime();
        this.initialElementPositionX = this.getInitialElementPositionX();
    }
    handleHorizontalSwipe() {
        if (this.disabled) {
            return;
        }
        if (!this.isSwipeInProgress) {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
        }
        this.isSwipeInProgress = true;
        this.moveX = this.utils.getMoveX(event);
        this.move();
    }
    handleTouchend(simpleProcessing = false) {
        if (this.disabled) {
            return;
        }
        /* If touchend was passed to the Slide class */
        if (simpleProcessing) {
            this.isSwipeInProgress = false;
            return;
        }
        this.isSwipeInProgress = false;
        this.finishMoving();
        this.clearInitialValues();
    }
    move() {
        let positionX = this.getMovePositionX();
        const isPulled = this.detectPulled();
        const direction = this.getDirection();
        if (isPulled) {
            if (isPulled.edge === "left" && direction === "right" ||
                isPulled.edge === "right" && direction === "left") {
                positionX = this.slowdownOnPull(positionX);
            }
        }
        this.transformPositionX(positionX, 0);
        if (this.freeScroll) {
            this.initialPositionX = positionX;
        }
        if (isPulled) {
            if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = 0;
            }
            if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = positionX;
            }
        }
    }
    getMovePositionX() {
        const distance = this.getDistance();
        return this.initialElementPositionX - distance;
    }
    getDistance() {
        return this.startX - this.moveX;
    }
    /* If the container is pulled out of the left or right border */
    detectPulled() {
        const currentPositionX = this.getCurrentPositionX();
        if (currentPositionX > 0) {
            return {
                edge: 'left',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX)
            };
        }
        if (currentPositionX < this.getEndPosition()) {
            return {
                edge: 'right',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX - this.getEndPosition())
            };
        }
    }
    slowdownOnPull(_positionX) {
        let distance = Math.abs(this.getDistance());
        const endPosition = this.getEndPosition();
        const isPulled = this.detectPulled();
        const decelerationRatio = 3 + isPulled.overflowX / 50;
        let positionX;
        if (isPulled.edge === 'left') {
            if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
            }
            const rubberPositionX = distance / decelerationRatio;
            positionX = rubberPositionX;
            if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
            }
            if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
            }
        }
        if (isPulled.edge === 'right') {
            const rubberPositionX = endPosition + (((this.initialElementPositionX - distance) - endPosition) / decelerationRatio);
            const containerWidth = this.getWidth();
            positionX = rubberPositionX;
            if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = ((containerWidth - this.visibleWidth) + this.initialElementPositionX) + rubberPositionX;
            }
            if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
            }
        }
        return positionX;
    }
    finishMoving() {
        const positionX = this.getMovePositionX();
        let newPositionX;
        if (this.freeScroll) {
            newPositionX = this.getInertia();
        }
        /* Align container while pulling */
        newPositionX = this.getAlignedPositionOnPull(newPositionX);
        this.transformPositionX(newPositionX);
        this.setInitialPosition(positionX);
    }
    /* Returns the new position of the container with inertia */
    getInertia() {
        const distance = this.getDistance();
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.startTime;
        let inertia = (distance / tapLength) * 100;
        return this.initialPositionX - inertia;
    }
    getAlignedPositionOnPull(newPositionX) {
        const direction = this.getDirection();
        if (direction === 'left') {
            let endPosition = this.getEndPosition();
            if (newPositionX < endPosition) {
                return endPosition;
            }
        }
        if (direction === 'right') {
            if (newPositionX > 0) {
                return 0;
            }
        }
        return newPositionX;
    }
    getCurrentPositionX() {
        const parentPosition = this.element.parentElement.getBoundingClientRect();
        const position = this.element.getBoundingClientRect();
        return position.left - parentPosition.left;
    }
    getEndPosition() {
        if (this.isLightDOM) {
            let imagesInContainer = this.cells.imageUtils.getImages();
            return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
        }
        else {
            const width = this.getWidth();
            const visibleWidth = this.element.parentElement.clientWidth;
            return visibleWidth - width;
        }
    }
    transformPositionX(value, duration = this.transitionDuration) {
        if (value === undefined) {
            return;
        }
        this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
        this.element.style.transform = 'translateX(' + value + 'px)';
    }
    getWidth() {
        let width = this.cellLengthInLightDOMMode * this.fullCellWidth;
        let totalImageWidth = this.cellLength * this.fullCellWidth;
        if (totalImageWidth < width) {
            width = totalImageWidth;
        }
        return this.isLightDOM ? width : totalImageWidth;
    }
    setWidth() {
        const width = this.getWidth();
        this.element.style.width = width + "px";
    }
    setInitialPosition(position) {
        this.initialPositionX = position;
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getInitialElementPositionX() {
        const carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
        return this.getElementPosition()['left'] - carouselElementPosition;
    }
    clearInitialValues() {
        this.startX = this.moveX = undefined;
    }
    getDirection() {
        const direction = Math.sign(this.startX - this.moveX);
        if (direction === -1) {
            return 'right';
        }
        if (direction === 1) {
            return 'left';
        }
    }
}


/***/ }),

/***/ "./src/app/carousel/slide.ts":
/*!***********************************!*\
  !*** ./src/app/carousel/slide.ts ***!
  \***********************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
class Slide {
    constructor(carouselProperties, utils, cells, container) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.counter = 0;
        this._counter = 0;
        this.initialPositionX = 0;
        this.currentPositionX = 0;
        this.init();
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get minSwipeDistance() {
        return this.carouselProperties.minSwipeDistance;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get visibleCellsOverflowContainer() {
        return this.utils.visibleCellsOverflowContainer;
    }
    /* The position to which the container returns after each slide
     * in the light DUM tree mode.
     */
    get fixedContainerPosition() {
        return -(this.overflowCellsLimit * this.fullCellWidth);
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get images() {
        return this.carouselProperties.images;
    }
    /* Number of cell elements in the DUM tree */
    get cellLength() {
        if (this.isLightDOM) {
            return this.cells.cellLengthInLightDOMMode;
        }
        else {
            if (this.images) {
                return this.images.length;
            }
            else {
                return this.cells.cellLength;
            }
        }
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
        this.setVisibleWidth();
    }
    init() {
        this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
    }
    handleTouchstart(event) {
        /* Touchstart event is not called for arrow */
        this.isNotClickOnArrow = true;
        this.isSlideLengthLimited = undefined;
        if (!this.isSlideInProgress) {
            this.initialPositionX = this.container.getCurrentPositionX();
        }
    }
    handleTouchend(event) {
        if (!this.isNotClickOnArrow) {
            return;
        }
        this.currentPositionX = this.container.getCurrentPositionX();
        this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
        this.distance = this.initialPositionX - this.currentPositionX;
        this.direction = this.getDirection();
        this.isNotClickOnArrow = undefined;
        this.handleSlide();
    }
    handleTransitionend() {
        this.setCounter();
        this.isSlideInProgress = false;
        if (this.isLightDOM) {
            this.alignContainerFast();
        }
    }
    detectClickOnArrow(event) {
        return event.target.classList.contains("carousel-arrow");
    }
    handleSlide(customSlideLength = undefined) {
        let isUsingButton = customSlideLength;
        let newPositionX;
        if (isUsingButton && this.isSlideInProgress || !this.direction) {
            return;
        }
        /* Custom slide length is used in arrows */
        if (customSlideLength) {
            this.slideLength = this.limitSlideLength(customSlideLength);
            if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
            }
        }
        else {
            this.slideLength = this.getSlideLength(this.distanceAbs);
        }
        /* Store intermediate counter value */
        this._counter = this.getPreliminaryCounter();
        if (this.direction === 'left') {
            if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
            }
            this._counter = this.getPreliminaryCounter();
            let isSlidesEnd = this.isSlidesEnd(this._counter);
            newPositionX = this.getPositionByIndex(this._counter);
            if (isSlidesEnd) {
                this._counter = this.counter;
                newPositionX = this.getPositionByIndex(this.counter);
                this.slideLength = 0;
            }
        }
        if (this.direction === 'right') {
            if (!customSlideLength) {
                this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            if (this._counter < 0) {
                this._counter = this.counter;
                this.slideLength = this.counter;
            }
            newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
        }
        if (this.container.getCurrentPositionX() !== newPositionX) {
            this.isSlideInProgress = true;
            this.container.transformPositionX(newPositionX);
        }
    }
    next(length = 1) {
        this.direction = 'left';
        this.handleSlide(length);
    }
    prev(length = 1) {
        this.direction = 'right';
        this.handleSlide(length);
    }
    select(index) {
        if (index > this.cellLength - 1) {
            return;
        }
        if (index > this.counter) {
            let length = index - this.counter;
            this.next(length);
        }
        if (index < this.counter) {
            let length = this.counter - index;
            this.prev(length);
        }
    }
    getPreliminaryCounter() {
        if (this.direction === 'left') {
            return this.counter + this.slideLength;
        }
        if (this.direction === 'right') {
            return this.counter - this.slideLength;
        }
    }
    /*
     * Limits the length of the slide during calls to the next() and prev()
     * methods if the specified position is outside the cell length
     */
    limitSlideLength(slideLength) {
        if (slideLength > 1) {
            for (var i = 0; i < slideLength; i++) {
                let newCounter = this.counter + (slideLength - i);
                if (!this.isSlidesEnd(newCounter)) {
                    slideLength = slideLength - i;
                    this.isSlideLengthLimited = i > 0;
                    break;
                }
            }
        }
        return slideLength;
    }
    /* Offset the container to show the last cell completely */
    getPositionCorrection(counter) {
        let correction = 0;
        let isLastSlide = this.isLastSlide(counter);
        if (this.carouselProperties.loop || this.direction === "right") {
            return 0;
        }
        if (this.isSlideLengthLimited || isLastSlide) {
            let cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;
            if (this.visibleWidth < cellsWidth) {
                correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
            }
            if (correction >= -this.margin) {
                correction = 0;
            }
        }
        return correction;
    }
    getSlideLength(distanceAbs) {
        let isLastSlide = this.isLastSlide(this.counter);
        /* If the last cell does not fit entirely, then the
         * length of the swipe to the left, from the extreme
         * right position, may be shorter than usual.
         */
        if (isLastSlide && this.direction === "right") {
            distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
        }
        let length = Math.floor(distanceAbs / this.fullCellWidth);
        if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
            length++;
        }
        return length;
    }
    getDistanceAbs() {
        return Math.abs(this.initialPositionX - this.currentPositionX);
    }
    getDirection() {
        const direction = Math.sign(this.initialPositionX - this.currentPositionX);
        if (direction === -1) {
            return 'right';
        }
        if (direction === 1) {
            return 'left';
        }
    }
    isSlidesEnd(counter) {
        let margin = this.visibleCellsOverflowContainer ? 1 : 0;
        let imageLength = this.images ? this.images.length : this.cells.cellLength;
        if (this.carouselProperties.loop) {
            return false;
        }
        else {
            return (imageLength - counter + margin) < this.numberOfVisibleCells;
        }
    }
    isLastSlide(counter) {
        return this.isSlidesEnd(counter + 1);
    }
    setCounter() {
        if (this.direction === 'left') {
            this.counter = this.counter + this.slideLength;
        }
        if (this.direction === 'right') {
            this.counter = this.counter - this.slideLength;
        }
    }
    getPositionByIndex(_counter) {
        let correction = this.getPositionCorrection(this.counter + this.slideLength);
        let position;
        if (correction !== 0) {
            correction = correction + this.fullCellWidth;
        }
        if (this.direction === 'right') {
            correction = 0;
        }
        if (this.isLightDOM && this.isLightDOMMode(_counter) ||
            this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
            let initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
            let counterDifference = _counter - this.counter;
            position = initialPosition - ((counterDifference * this.fullCellWidth) - correction);
        }
        else {
            position = -((_counter * this.fullCellWidth) - correction);
        }
        position = this.provideSafePosition(position);
        return position;
    }
    provideSafePosition(position) {
        const endPosition = this.container.getEndPosition();
        if (this.direction === 'left') {
            if (position > 0) {
                position = 0;
            }
        }
        if (this.direction === 'right') {
            if (position < endPosition) {
                position = endPosition;
            }
        }
        return position;
    }
    getPositionWithoutCorrection(value) {
        let remainder = value % this.fullCellWidth;
        if (remainder !== 0) {
            return value - (this.fullCellWidth + remainder);
        }
        else {
            return value;
        }
    }
    isNextArrowDisabled() {
        return this.isLastSlide(this.counter) ||
            (!this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells) ||
            (this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells);
    }
    isPrevArrowDisabled() {
        return this.counter === 0;
    }
    alignContainerFast() {
        if (this.isLightDOMMode(this.counter)) {
            let positionX = this.fixedContainerPosition;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
        }
        else if (this.ifLeftDOMModeToBeginning(this.counter)) {
            /* If we have already exited the light DOM mode but
             * the cells are still out of place
             */
            if (this.cells.ifSequenceOfCellsIsChanged()) {
                let positionX = -(this.counter * this.fullCellWidth);
                this.container.transformPositionX(positionX, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
            }
        }
        else if (this.ifLeftDOMModeAtEnd(this.counter)) {
            let containerPositionX = this.container.getCurrentPositionX();
            let containerWidth = this.container.getWidth();
            this.visibleWidth;
            if (this.isLastSlide(this.counter) &&
                containerWidth + containerPositionX >= this.visibleWidth) {
                return;
            }
            let correction = this.getPositionCorrection(this.counter);
            if (correction !== 0) {
                correction = correction + this.fullCellWidth;
            }
            if (this.direction === 'right') {
                correction = 0;
            }
            let positionX = this.fixedContainerPosition + correction;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
        }
    }
    isLightDOMMode(counter) {
        let flag;
        let remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
        if (!this.isLightDOM) {
            return false;
        }
        if (counter > this.overflowCellsLimit && this.direction === "left" &&
            counter <= remainderOfCells) {
            flag = true;
        }
        if (counter >= this.overflowCellsLimit && this.direction === "right" &&
            counter < remainderOfCells) {
            flag = true;
        }
        if (this.counter > this.overflowCellsLimit && this.direction === "left" &&
            this.counter <= remainderOfCells) {
            flag = true;
        }
        if (this.counter >= this.overflowCellsLimit && this.direction === "right" &&
            this.counter < remainderOfCells) {
            flag = true;
        }
        return flag;
    }
    ifLeftDOMModeAtEnd(counter) {
        let flag;
        let remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
        if (counter >= remainderOfCells) {
            flag = true;
        }
        if (this.counter >= remainderOfCells) {
            flag = true;
        }
        return flag;
    }
    ifLeftDOMModeToBeginning(counter) {
        let flag;
        if (counter <= this.overflowCellsLimit) {
            flag = true;
        }
        if (this.counter <= this.overflowCellsLimit) {
            flag = true;
        }
        return flag;
    }
    setVisibleWidth() {
        this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
    }
}


/***/ }),

/***/ "./src/app/carousel/touches.ts":
/*!*************************************!*\
  !*** ./src/app/carousel/touches.ts ***!
  \*************************************/
/*! exports provided: Touches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touches", function() { return Touches; });
class Touches {
    constructor(properties) {
        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
        };
        this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
        };
        this._otherListeners = {
            "resize": "handleResize"
        };
        /*
         * Listeners
         */
        /* Touchstart */
        this.handleTouchstart = (event) => {
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
            this.runHandler("touchstart", event);
        };
        /* Touchmove */
        this.handleTouchmove = (event) => {
            const touches = event.touches;
            // Pan
            if (this.detectPan(touches)) {
                this.runHandler("pan", event);
            }
            // Pinch
            if (this.detectPinch(event)) {
                this.runHandler("pinch", event);
            }
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Touchend */
        this.handleTouchend = (event) => {
            const touches = event.touches;
            // Double Tap
            if (this.detectDoubleTap()) {
                this.runHandler("double-tap", event);
            }
            // Tap
            this.detectTap();
            this.runHandler("touchend", event);
            this.eventType = 'touchend';
            if (touches && touches.length === 0) {
                this.eventType = undefined;
                this.i = 0;
            }
        };
        /* Mousedown */
        this.handleMousedown = (event) => {
            this.isMousedown = true;
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getMousedownPosition(event);
            }
            this.runHandler("mousedown", event);
        };
        /* Mousemove */
        this.handleMousemove = (event) => {
            //event.preventDefault();
            if (!this.isMousedown) {
                return;
            }
            // Pan
            this.runHandler("pan", event);
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Mouseup */
        this.handleMouseup = (event) => {
            // Tap
            this.detectTap();
            this.isMousedown = false;
            this.runHandler("mouseup", event);
            this.eventType = undefined;
            this.i = 0;
        };
        /* Wheel */
        this.handleWheel = (event) => {
            this.runHandler("wheel", event);
        };
        /* Resize */
        this.handleResize = (event) => {
            this.runHandler("resize", event);
        };
        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
    }
    get touchListeners() {
        return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
    }
    get mouseListeners() {
        return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
    }
    get otherListeners() {
        return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
    }
    destroy() {
        this.toggleEventListeners('removeEventListener');
    }
    toggleEventListeners(action) {
        let listeners;
        if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
        }
        else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
        }
        if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
        }
        for (var listener in listeners) {
            const handler = listeners[listener];
            // Window
            if (listener === "resize") {
                if (action === 'addEventListener') {
                    window.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    window.removeEventListener(listener, this[handler], false);
                }
                // Document
            }
            else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                    document.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    document.removeEventListener(listener, this[handler], false);
                }
                // Element
            }
            else {
                if (action === 'addEventListener') {
                    this.element.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    this.element.removeEventListener(listener, this[handler], false);
                }
            }
        }
    }
    addEventListeners(listener, handler) {
        window.addEventListener(listener, this[handler], false);
    }
    removeEventListeners(listener, handler) {
        window.removeEventListener(listener, this[handler], false);
    }
    handleLinearSwipe(event) {
        //event.preventDefault();
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
        }
        if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
        }
    }
    runHandler(eventName, response) {
        if (this.handlers[eventName]) {
            this.handlers[eventName](response);
        }
    }
    /*
     * Detection
     */
    detectPan(touches) {
        return touches.length === 1 && !this.eventType || this.eventType === 'pan';
    }
    detectDoubleTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout(() => {
                clearTimeout(this.doubleTapTimeout);
            }, this.doubleTapMinTimeout);
        }
        this.lastTap = currentTime;
    }
    detectTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.touchstartTime;
        if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
            }
            else {
                this.runHandler("longtap", event);
            }
        }
    }
    detectPinch(event) {
        const touches = event.touches;
        return (touches.length === 2 && this.eventType === undefined) || this.eventType === 'pinch';
    }
    detectLinearSwipe(event) {
        const touches = event.touches;
        if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
    }
    getLinearSwipeType(event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            const movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            const movementY = Math.abs(this.moveTop(0, event) - this.startY);
            if ((movementY * 3) > movementX) {
                return 'vertical-swipe';
            }
            else {
                return 'horizontal-swipe';
            }
        }
        else {
            return this.eventType;
        }
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getTouchstartPosition(event) {
        this.startX = event.touches[0].clientX - this.elementPosition.left;
        this.startY = event.touches[0].clientY - this.elementPosition.top;
    }
    getMousedownPosition(event) {
        this.startX = event.clientX - this.elementPosition.left;
        this.startY = event.clientY - this.elementPosition.top;
    }
    moveLeft(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientX - this.elementPosition.left;
        }
        else {
            return event.clientX - this.elementPosition.left;
        }
    }
    moveTop(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientY - this.elementPosition.top;
        }
        else {
            return event.clientY - this.elementPosition.top;
        }
    }
    detectTouchScreen() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /* Public properties and methods */
    on(event, handler) {
        if (event) {
            this.handlers[event] = handler;
        }
    }
}


/***/ }),

/***/ "./src/app/carousel/utils.ts":
/*!***********************************!*\
  !*** ./src/app/carousel/utils.ts ***!
  \***********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
class Utils {
    constructor(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    get images() {
        return this.carouselProperties.images;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get overflowCellsLimit() {
        if (this.images && this.isImagesLessCellLimit) {
            let overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);
            if (overflowCellsLimit < 0) {
                overflowCellsLimit = 0;
            }
            return overflowCellsLimit;
        }
        else {
            return this.carouselProperties.overflowCellsLimit;
        }
    }
    get isImagesLessCellLimit() {
        return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
    }
    get numberOfVisibleCells() {
        return Math.ceil(this.visibleWidth / this.fullCellWidth);
    }
    get visibleCellsOverflowContainer() {
        return (this.numberOfVisibleCells * this.fullCellWidth - this.margin) > this.visibleWidth;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get visibleWidth() {
        return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    getStartX(event) {
        const touches = event.touches;
        const carouselElementPosition = this.getCarouselElementPosition()['left'];
        let startX;
        if (touches) {
            startX = touches[0].clientX - carouselElementPosition;
        }
        else {
            startX = event.clientX - carouselElementPosition;
        }
        return startX;
    }
    getMoveX(event) {
        const touches = event.touches;
        const carouselElementPositionX = this.getCarouselElementPosition()['left'];
        if (touches) {
            return touches[0].clientX - carouselElementPositionX;
        }
        else {
            return event.clientX - carouselElementPositionX;
        }
    }
    getCarouselElementPosition() {
        return this.carouselProperties.hostElement.getBoundingClientRect();
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\angular-carousel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map