import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Touches } from './touches';
import { Carousel } from './carousel';
import { Container } from './container';
import { Cells } from './cells';
import { Slide } from './slide';
import { Utils } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.counter);
} }
function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 11);
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext(2).index;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("object-fit", ctx_r8.objectFit);
    i0.ɵɵproperty("src", ctx_r8.getImage(i_r6)["image"]["path"], i0.ɵɵsanitizeUrl);
} }
function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext().index;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
} }
function CarouselComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", i_r6 < ctx_r2.cellLimit);
} }
function CarouselComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
} }
function CarouselComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.dotsArr);
} }
function CarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵlistener("click", function CarouselComponent_div_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.prev(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵlistener("click", function CarouselComponent_div_7_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.next(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
} }
const _c0 = ["*"];
export class CarouselComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.minTimeout = 30;
        this._cellWidth = 200;
        this._loop = false;
        this._lightDOM = false;
        this.events = new EventEmitter();
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
        this.touches = new Touches({
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
        this.utils = new Utils(this.carouselProperties);
        this.cells = new Cells(this.carouselProperties, this.utils);
        this.container = new Container(this.carouselProperties, this.utils, this.cells);
        this.slide = new Slide(this.carouselProperties, this.utils, this.cells, this.container);
        this.carousel = new Carousel(this.carouselProperties, this.utils, this.cells, this.container, this.slide);
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
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CarouselComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["carousel"], ["", "carousel", ""]], hostVars: 6, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function CarouselComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, i0.ɵɵresolveWindow)("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) { return ctx.onMousemove($event); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseleave($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);
        i0.ɵɵclassProp("carousel", ctx.hostClassCarousel);
    } }, inputs: { id: "id", height: "height", width: "width", autoplay: "autoplay", autoplayInterval: "autoplayInterval", pauseOnHover: "pauseOnHover", dots: "dots", borderRadius: "borderRadius", margin: "margin", objectFit: "objectFit", minSwipeDistance: "minSwipeDistance", transitionDuration: "transitionDuration", transitionTimingFunction: "transitionTimingFunction", videoProperties: "videoProperties", counterSeparator: "counterSeparator", overflowCellsLimit: "overflowCellsLimit", listeners: "listeners", cellsToShow: "cellsToShow", cellsToScroll: "cellsToScroll", freeScroll: "freeScroll", arrows: "arrows", arrowsOutside: "arrowsOutside", arrowsTheme: "arrowsTheme", images: "images", cellWidth: "cellWidth", isCounter: ["counter", "isCounter"], loop: "loop", lightDOM: "lightDOM" }, outputs: { events: "events" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 8, vars: 6, consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CarouselComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵlistener("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) { return ctx.handleTransitionendCellContainer($event); });
        i0.ɵɵprojection(4);
        i0.ɵɵtemplate(5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CarouselComponent_div_6_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isCounter);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("carousel-moving", ctx.isMoving);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.images);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dots);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isArrows);
    } }, directives: [i1.NgIf, i1.NgForOf], styles: ["[_nghost-%COMP%]{-moz-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;height:100%;left:0;position:relative;top:0;transform-origin:top left;user-select:none;width:100%;z-index:10000}[_nghost-%COMP%]   .-container[_ngcontent-%COMP%]{cursor:grab;height:100%;overflow:hidden;width:100%}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{background-color:rgba(23,37,68,.3);border-radius:13px;color:#fff;font-size:11px;line-height:normal;padding:5px 7px;position:absolute;right:24px;text-align:right;top:8px;transition:opacity .2s;z-index:30}[_nghost-%COMP%]     .carousel-cells{display:block;height:100%;transition:transform .2s;width:100%;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{height:100%;overflow:hidden;position:absolute;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{height:100%;object-fit:contain;position:relative;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:31px;border-radius:100px;box-shadow:0 0 5px rgba(0,0,0,.15);cursor:pointer;height:40px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:10}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);left:10px}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);right:10px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;text-align:center;z-index:10}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{border:2px solid #fff;border-radius:100px;display:inline-block;height:8px;margin:4px;width:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: 'carousel, [carousel]',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.sass']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { events: [{
            type: Output
        }], id: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], autoplay: [{
            type: Input
        }], autoplayInterval: [{
            type: Input
        }], pauseOnHover: [{
            type: Input
        }], dots: [{
            type: Input
        }], borderRadius: [{
            type: Input
        }], margin: [{
            type: Input
        }], objectFit: [{
            type: Input
        }], minSwipeDistance: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], transitionTimingFunction: [{
            type: Input
        }], videoProperties: [{
            type: Input
        }], counterSeparator: [{
            type: Input
        }], overflowCellsLimit: [{
            type: Input
        }], listeners: [{
            type: Input
        }], cellsToShow: [{
            type: Input
        }], cellsToScroll: [{
            type: Input
        }], freeScroll: [{
            type: Input
        }], arrows: [{
            type: Input
        }], arrowsOutside: [{
            type: Input
        }], arrowsTheme: [{
            type: Input
        }], images: [{
            type: Input
        }], cellWidth: [{
            type: Input,
            args: ['cellWidth']
        }], isCounter: [{
            type: Input,
            args: ['counter']
        }], loop: [{
            type: Input,
            args: ['loop']
        }], lightDOM: [{
            type: Input,
            args: ['lightDOM']
        }], hostClassCarousel: [{
            type: HostBinding,
            args: ['class.carousel']
        }], hostStyleHeight: [{
            type: HostBinding,
            args: ['style.height']
        }], hostStyleWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], onMousemove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }], onMouseleave: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZXNwb25zaXZlLWNhcm91c2VsL3NyYy9saWIvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZXNwb25zaXZlLWNhcm91c2VsL3NyYy9saWIvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQXlCLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBR3BLLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sU0FBUyxDQUFDOzs7O0lDUjlCLDhCQUFnRDtJQUFBLFlBQVc7SUFBQSxpQkFBTTs7O0lBQWpCLGVBQVc7SUFBWCxvQ0FBVzs7O0lBWXZELDBCQU1EOzs7O0lBSEUsOENBQThCO0lBRDlCLDhFQUFvQzs7O0lBUHRDLDhCQUlDO0lBQ0EsdUZBTUQ7SUFBQSxpQkFBTTs7OztJQVZMLHFEQUFtQyw2Q0FBQTtJQUtsQyxlQUEyQztJQUEzQyw4RUFBMkM7OztJQU43QyxnRkFJQzs7OztJQURBLDhDQUFxQjs7O0lBYXZCLDBCQUEySDs7OztJQUFqRyx1RUFBa0Q7OztJQUQ3RSwrQkFDQztJQUFBLHlFQUFxSDtJQUN0SCxpQkFBTTs7O0lBRHdFLGVBQXVDO0lBQXZD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QyxTQUFTOztrQkFNZixLQUFLO21CQUFDLE1BQU07O2tCQVVaLEtBQUs7bUJBQUMsVUFBVTs7a0JBY2hCLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFDNUIsV0FBVzttQkFBQyxjQUFjOztrQkFDMUIsV0FBVzttQkFBQyxhQUFhOztrQkFFekIsWUFBWTttQkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQU94QyxZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBT3BDLFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7SW1hZ2VzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1RvdWNoZXN9IGZyb20gJy4vdG91Y2hlcyc7XHJcbmltcG9ydCB7Q2Fyb3VzZWx9IGZyb20gJy4vY2Fyb3VzZWwnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9jb250YWluZXInO1xyXG5pbXBvcnQge0NlbGxzfSBmcm9tICcuL2NlbGxzJztcclxuaW1wb3J0IHtTbGlkZX0gZnJvbSAnLi9zbGlkZSc7XHJcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge1Byb3BlcnRpZXMgYXMgQ2Fyb3VzZWxQcm9wZXJ0aWVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJvdXNlbCwgW2Nhcm91c2VsXScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIGNhcm91c2VsO1xyXG4gICAgY29udGFpbmVyO1xyXG4gICAgdXRpbHM7XHJcbiAgICBjZWxscztcclxuICAgIHNsaWRlO1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBfaW1hZ2VzOiBJbWFnZXM7XHJcbiAgICB0b3VjaGVzOiBhbnk7XHJcbiAgICBsYW5kc2NhcGVNb2RlOiBhbnk7XHJcbiAgICBtaW5UaW1lb3V0ID0gMzA7XHJcbiAgICBpc1ZpZGVvUGxheWluZzogYm9vbGVhbjtcclxuICAgIF9pc0NvdW50ZXI6IGJvb2xlYW47XHJcbiAgICBfd2lkdGg6IG51bWJlcjtcclxuICAgIF9jZWxsV2lkdGg6IG51bWJlciB8ICcxMDAlJyA9IDIwMDtcclxuICAgIF9sb29wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBfbGlnaHRET006IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTW92aW5nOiBib29sZWFuO1xyXG4gICAgaXNOZ0NvbnRlbnQ6IGJvb2xlYW47XHJcbiAgICBjZWxsTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBkb3RzQXJyOiBhbnk7XHJcbiAgICBjYXJvdXNlbFByb3BlcnRpZXM6IENhcm91c2VsUHJvcGVydGllcztcclxuICAgIHNhdmVkQ2Fyb3VzZWxXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgIGdldCBpc0NvbnRhaW5lckxvY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbC5pc0NvbnRhaW5lckxvY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNsaWRlQ291bnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbC5zbGlkZUNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXBDb3VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsLmxhcENvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0xhbmRzY2FwZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzU2FmYXJpKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISh1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvdW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgY291bnRlciA9IHRoaXMuc2xpZGVDb3VudGVyICUgdGhpcy5jZWxsTGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSB0aGlzLnNsaWRlQ291bnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb3VudGVyICsgMSArIHRoaXMuY291bnRlclNlcGFyYXRvciArIHRoaXMuY2VsbExlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbHNFbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY2VsbHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBcnJvd3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dzICYmICF0aGlzLmZyZWVTY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQ291bnRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNDb3VudGVyICYmIHRoaXMuY2VsbExlbmd0aCA+IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjdGl2ZURvdEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaWRlQ291bnRlciAlIHRoaXMuY2VsbExlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbExpbWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsLmNlbGxMaW1pdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhcm91c2VsV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBldmVudHM6IEV2ZW50RW1pdHRlciA8IGFueSA+ID0gbmV3IEV2ZW50RW1pdHRlciA8IGFueSA+ICgpO1xyXG5cclxuICAgIEBJbnB1dCgpIGlkOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDIwMDtcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBhdXRvcGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgYXV0b3BsYXlJbnRlcnZhbDogbnVtYmVyID0gNTAwMDtcclxuICAgIEBJbnB1dCgpIHBhdXNlT25Ib3ZlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBkb3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBib3JkZXJSYWRpdXM6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIG1hcmdpbjogbnVtYmVyID0gMTA7XHJcbiAgICBASW5wdXQoKSBvYmplY3RGaXQ6ICdjb250YWluJyB8ICdjb3ZlcicgfCAnbm9uZScgPSAnY292ZXInO1xyXG4gICAgQElucHV0KCkgbWluU3dpcGVEaXN0YW5jZTogbnVtYmVyID0gMTA7XHJcbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDIwMDtcclxuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UnIHwgJ2Vhc2UtaW4nIHwgJ2Vhc2Utb3V0JyB8ICdlYXNlLWluLW91dCcgfCAnbGluZWFyJyA9ICdlYXNlLW91dCc7XHJcbiAgICBASW5wdXQoKSB2aWRlb1Byb3BlcnRpZXM6IGFueTtcclxuICAgIEBJbnB1dCgpIGNvdW50ZXJTZXBhcmF0b3I6IHN0cmluZyA9IFwiIC8gXCI7XHJcbiAgICBASW5wdXQoKSBvdmVyZmxvd0NlbGxzTGltaXQ6IG51bWJlciA9IDM7XHJcbiAgICBASW5wdXQoKSBsaXN0ZW5lcnM6ICdhdXRvJyB8ICdtb3VzZSBhbmQgdG91Y2gnID0gJ21vdXNlIGFuZCB0b3VjaCc7XHJcbiAgICBASW5wdXQoKSBjZWxsc1RvU2hvdzogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY2VsbHNUb1Njcm9sbDogbnVtYmVyID0gMTtcclxuICAgIEBJbnB1dCgpIGZyZWVTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGFycm93czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBhcnJvd3NPdXRzaWRlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgYXJyb3dzVGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgaW1hZ2VzKGltYWdlczogSW1hZ2VzICYgYW55KSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGltYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnY2VsbFdpZHRoJykgc2V0IGNlbGxXaWR0aCh2YWx1ZTogbnVtYmVyIHwgJzEwMCUnKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NlbGxXaWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2NvdW50ZXInKSBzZXQgaXNDb3VudGVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ291bnRlciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2xvb3AnKSBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb29wID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb29wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb29wO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnbGlnaHRET00nKSBzZXQgbGlnaHRET00odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRET00gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxpZ2h0RE9NKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRET007XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsJykgaG9zdENsYXNzQ2Fyb3VzZWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBob3N0U3R5bGVIZWlnaHQ6IHN0cmluZztcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBob3N0U3R5bGVXaWR0aDogc3RyaW5nO1xyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgb25XaW5kb3dSZXNpemUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnV0aWxzLnZpc2libGVXaWR0aCAhPT0gdGhpcy5zYXZlZENhcm91c2VsV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICAgIG9uTW91c2Vtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b3BsYXkgJiYgdGhpcy5wYXVzZU9uSG92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvbk1vdXNlbGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSAmJiB0aGlzLnBhdXNlT25Ib3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsLmF1dG9wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc05nQ29udGVudCA9IHRoaXMuY2VsbHNFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hlcyA9IG5ldyBUb3VjaGVzKHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5jZWxsc0VsZW1lbnQsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyczogdGhpcy5saXN0ZW5lcnMsXHJcbiAgICAgICAgICAgIG1vdXNlTGlzdGVuZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIm1vdXNlZG93blwiOiBcImhhbmRsZU1vdXNlZG93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb3VzZXVwXCI6IFwiaGFuZGxlTW91c2V1cFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaGVzLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaHN0YXJ0KTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMub24oJ2hvcml6b250YWwtc3dpcGUnLCB0aGlzLmhhbmRsZUhvcml6b250YWxTd2lwZSk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLm9uKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hlbmQpO1xyXG4gICAgICAgIHRoaXMudG91Y2hlcy5vbignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVUb3VjaHN0YXJ0KTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMub24oJ21vdXNldXAnLCB0aGlzLmhhbmRsZVRvdWNoZW5kKTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMub24oJ3RhcCcsIHRoaXMuaGFuZGxlVGFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwuYXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2VsbExlbmd0aCA9IHRoaXMuZ2V0Q2VsbExlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuZG90c0FyciA9IEFycmF5KHRoaXMuY2VsbExlbmd0aCkuZmlsbCgxKTtcclxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5saW5lVXBDZWxscygpO1xyXG4gICAgICAgIHRoaXMuc2F2ZWRDYXJvdXNlbFdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoO1xyXG5cclxuICAgICAgICAvKiBTdGFydCBkZXRlY3RpbmcgY2hhbmdlcyBpbiB0aGUgRE9NIHRyZWUgKi9cclxuICAgICAgICB0aGlzLmRldGVjdERvbUNoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMud2lkdGggfHwgY2hhbmdlcy5oZWlnaHQgfHwgY2hhbmdlcy5pbWFnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaW1lbnNpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwubGluZVVwQ2VsbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoZXMuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vdGhpcy5jYXJvdXNlbC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENhcm91c2VsKCkge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgY2VsbHNFbGVtZW50OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY2VsbHMnKSxcclxuICAgICAgICAgICAgaG9zdEVsZW1lbnQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBpbWFnZXM6IHRoaXMuaW1hZ2VzLFxyXG4gICAgICAgICAgICBjZWxsV2lkdGg6IHRoaXMuZ2V0Q2VsbFdpZHRoKCksXHJcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcCxcclxuICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbDogdGhpcy5hdXRvcGxheUludGVydmFsLFxyXG4gICAgICAgICAgICBvdmVyZmxvd0NlbGxzTGltaXQ6IHRoaXMub3ZlcmZsb3dDZWxsc0xpbWl0LFxyXG4gICAgICAgICAgICB2aXNpYmxlV2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhpcy5tYXJnaW4sXHJcbiAgICAgICAgICAgIG1pblN3aXBlRGlzdGFuY2U6IHRoaXMubWluU3dpcGVEaXN0YW5jZSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcclxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcclxuICAgICAgICAgICAgdmlkZW9Qcm9wZXJ0aWVzOiB0aGlzLnZpZGVvUHJvcGVydGllcyxcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyOiB0aGlzLmV2ZW50cyxcclxuICAgICAgICAgICAgZnJlZVNjcm9sbDogdGhpcy5mcmVlU2Nyb2xsLFxyXG4gICAgICAgICAgICBsaWdodERPTTogdGhpcy5saWdodERPTVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXRpbHMgPSBuZXcgVXRpbHModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgPSBuZXcgQ2VsbHModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMsIHRoaXMudXRpbHMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih0aGlzLmNhcm91c2VsUHJvcGVydGllcywgdGhpcy51dGlscywgdGhpcy5jZWxscyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZSA9IG5ldyBTbGlkZSh0aGlzLmNhcm91c2VsUHJvcGVydGllcywgdGhpcy51dGlscywgdGhpcy5jZWxscywgdGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwgPSBuZXcgQ2Fyb3VzZWwodGhpcy5jYXJvdXNlbFByb3BlcnRpZXMsIHRoaXMudXRpbHMsIHRoaXMuY2VsbHMsIHRoaXMuY29udGFpbmVyLCB0aGlzLnNsaWRlKTtcclxuICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwuYXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMubGFuZHNjYXBlTW9kZSA9IHRoaXMuaXNMYW5kc2NhcGU7XHJcbiAgICAgICAgdGhpcy5zYXZlZENhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsV2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmNlbGxXaWR0aCA9IHRoaXMuZ2V0Q2VsbFdpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5jZWxscy51cGRhdGVQcm9wZXJ0aWVzKHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLnVwZGF0ZVByb3BlcnRpZXModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnVwZGF0ZVByb3BlcnRpZXModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGUudXBkYXRlUHJvcGVydGllcyh0aGlzLmNhcm91c2VsUHJvcGVydGllcyk7XHJcbiAgICAgICAgdGhpcy51dGlscy51cGRhdGVQcm9wZXJ0aWVzKHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLmxpbmVVcENlbGxzKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZS5zZWxlY3QoMCk7XHJcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdERvbUNoYW5nZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb21DaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNlbGxzRWxlbWVudCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRvbUNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsTGVuZ3RoID0gdGhpcy5nZXRDZWxsTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5saW5lVXBDZWxscygpO1xyXG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHRoaXMuaG9zdFN0eWxlSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaG9zdFN0eWxlV2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsLmdldEltYWdlKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb3VjaHN0YXJ0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLmFkZEV2ZW50TGlzdGVuZXJzKFwibW91c2Vtb3ZlXCIsIFwiaGFuZGxlTW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuaGFuZGxlVG91Y2hzdGFydChldmVudCk7XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSG9yaXpvbnRhbFN3aXBlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuaGFuZGxlSG9yaXpvbnRhbFN3aXBlKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb3VjaGVuZCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5oYW5kbGVUb3VjaGVuZChldmVudCk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKFwibW91c2Vtb3ZlXCIsIFwiaGFuZGxlTW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUYXAgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCBvdXRib3VuZEV2ZW50OiBhbnkgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdjbGljaydcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5jZWxsc0VsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgIGxldCBjZWxsRWxlbWVudCA9IGV2ZW50LnNyY0VsZW1lbnQuY2xvc2VzdChcIi5jYXJvdXNlbC1jZWxsXCIpO1xyXG4gICAgICAgIGNvbnN0IGkgPSBub2Rlcy5pbmRleE9mKGNlbGxFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjZWxsSW5kZXggPSBub2Rlcy5pbmRleE9mKGNlbGxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIC8vb3V0Ym91bmRFdmVudC5maWxlSW5kZXggPSB0aGlzLmNhcm91c2VsLmdldEZpbGVJbmRleChpKTtcclxuICAgICAgICAgICAgLy9vdXRib3VuZEV2ZW50LmZpbGUgPSB0aGlzLmNhcm91c2VsLmdldEZpbGUoY2VsbEluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRib3VuZEV2ZW50LmNlbGxJbmRleCA9IGNlbGxJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVHJhbnNpdGlvbmVuZENlbGxDb250YWluZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLmhhbmRsZVRyYW5zaXRpb25lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVWaWRlbyh2aWRlbykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9Qcm9wZXJ0aWVzLm5vUGxheSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1ZpZGVvUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1ZpZGVvUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGxXaWR0aCgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudFdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jZWxsc1RvU2hvdykge1xyXG4gICAgICAgICAgICBsZXQgbWFyZ2luID0gdGhpcy5jZWxsc1RvU2hvdyA+IDEgPyB0aGlzLm1hcmdpbiA6IDA7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbE1hcmdpbiA9IG1hcmdpbiAqICh0aGlzLmNlbGxzVG9TaG93IC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudFdpZHRoIC0gdG90YWxNYXJnaW4pIC8gdGhpcy5jZWxsc1RvU2hvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsV2lkdGggPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jZWxsV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5uZXh0KHRoaXMuY2VsbHNUb1Njcm9sbCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5zdG9wQXV0b3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwucHJldih0aGlzLmNlbGxzVG9TY3JvbGwpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNOZXh0QXJyb3dEaXNhYmxlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbC5pc05leHRBcnJvd0Rpc2FibGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzUHJldkFycm93RGlzYWJsZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWwuaXNQcmV2QXJyb3dEaXNhYmxlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsTGVuZ3RoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNlbGxzRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImNhcm91c2VsLWNvdW50ZXJcIiAqbmdJZj1cImlzQ291bnRlclwiPnt7Y291bnRlcn19PC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCIgW2NsYXNzLmNhcm91c2VsLW1vdmluZ109XCJpc01vdmluZ1wiPlxyXG5cdDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jZWxsc1wiICNjZWxscyAodHJhbnNpdGlvbmVuZCk9XCJoYW5kbGVUcmFuc2l0aW9uZW5kQ2VsbENvbnRhaW5lcigkZXZlbnQpXCI+XHJcblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcblxyXG5cdFx0PG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pbWFnZSBbbmdGb3JPZl09XCJpbWFnZXNcIiBsZXQtaT1cImluZGV4XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jZWxsXCIgXHJcblx0XHRcdFx0W3N0eWxlLndpZHRoXT1cImdldENlbGxXaWR0aCgpKydweCdcIlxyXG5cdFx0XHRcdFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cImJvcmRlclJhZGl1cysncHgnXCJcclxuXHRcdFx0XHQqbmdJZj1cImkgPCBjZWxsTGltaXRcIj5cclxuXHRcdFx0XHQ8IS0tIEltYWdlIC0tPlxyXG5cdFx0XHRcdDxpbWcgXHJcblx0XHRcdFx0XHQqbmdJZj1cImdldEltYWdlKGkpICYmIGdldEltYWdlKGkpWydpbWFnZSddXCIgXHJcblx0XHRcdFx0XHRbc3JjXT1cImdldEltYWdlKGkpWydpbWFnZSddWydwYXRoJ11cIlxyXG5cdFx0XHRcdFx0W3N0eWxlLm9iamVjdC1maXRdPVwib2JqZWN0Rml0XCJcclxuXHRcdFx0XHRcdGRyYWdnYWJsZT1cImZhbHNlXCIgLz5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImNhcm91c2VsLWRvdHNcIiAqbmdJZj1cImRvdHNcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1kb3RcIiBbY2xhc3MuY2Fyb3VzZWwtZG90LWFjdGl2ZV09XCJpID09PSBhY3RpdmVEb3RJbmRleFwiICpuZ0Zvcj1cImxldCBkb3Qgb2YgZG90c0FycjsgaW5kZXggYXMgaVwiPjwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1hcnJvd3NcIiBcclxuXHRbY2xhc3MuY2Fyb3VzZWwtYXJyb3dzLW91dHNpZGVdPVwiYXJyb3dzT3V0c2lkZVwiIFxyXG5cdFtjbGFzcy5jYXJvdXNlbC1kYXJrLWFycm93c109XCJhcnJvd3NUaGVtZSA9PT0gJ2RhcmsnXCJcclxuXHQqbmdJZj1cImlzQXJyb3dzXCI+XHJcblx0XHJcblx0PGRpdiBjbGFzcz1cImNhcm91c2VsLWFycm93IGNhcm91c2VsLWFycm93LXByZXZcIiBbY2xhc3MuY2Fyb3VzZWwtYXJyb3ctZGlzYWJsZWRdPVwiaXNQcmV2QXJyb3dEaXNhYmxlZCgpXCIgKGNsaWNrKT1cInByZXYoKVwiPjwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBjYXJvdXNlbC1hcnJvdy1uZXh0XCIgW2NsYXNzLmNhcm91c2VsLWFycm93LWRpc2FibGVkXT1cImlzTmV4dEFycm93RGlzYWJsZWQoKVwiIChjbGljayk9XCJuZXh0KClcIj48L2Rpdj5cclxuPC9kaXY+Il19