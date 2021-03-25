import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Touches } from './touches';
import { Carousel } from './carousel';
import { Container } from './container';
import { Cells } from './cells';
import { Slide } from './slide';
import { Utils } from './utils';
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
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'carousel, [carousel]',
                template: "<div class=\"carousel-counter\" *ngIf=\"isCounter\">{{counter}}</div>\r\n\r\n<div class=\"carousel-container\" [class.carousel-moving]=\"isMoving\">\r\n\t<div class=\"carousel-cells\" #cells (transitionend)=\"handleTransitionendCellContainer($event)\">\r\n\t\t<ng-content></ng-content>\r\n\r\n\t\t<ng-template ngFor let-image [ngForOf]=\"images\" let-i=\"index\">\r\n\t\t\t<div class=\"carousel-cell\" \r\n\t\t\t\t[style.width]=\"getCellWidth()+'px'\"\r\n\t\t\t\t[style.border-radius]=\"borderRadius+'px'\"\r\n\t\t\t\t*ngIf=\"i < cellLimit\">\r\n\t\t\t\t<!-- Image -->\r\n\t\t\t\t<img \r\n\t\t\t\t\t*ngIf=\"getImage(i) && getImage(i)['image']\" \r\n\t\t\t\t\t[src]=\"getImage(i)['image']['path']\"\r\n\t\t\t\t\t[style.object-fit]=\"objectFit\"\r\n\t\t\t\t\tdraggable=\"false\" />\r\n\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n\r\n\t<div class=\"carousel-dots\" *ngIf=\"dots\">\r\n\t\t<div class=\"carousel-dot\" [class.carousel-dot-active]=\"i === activeDotIndex\" *ngFor=\"let dot of dotsArr; index as i\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"carousel-arrows\" \r\n\t[class.carousel-arrows-outside]=\"arrowsOutside\" \r\n\t[class.carousel-dark-arrows]=\"arrowsTheme === 'dark'\"\r\n\t*ngIf=\"isArrows\">\r\n\t\r\n\t<div class=\"carousel-arrow carousel-arrow-prev\" [class.carousel-arrow-disabled]=\"isPrevArrowDisabled()\" (click)=\"prev()\"></div>\r\n\t<div class=\"carousel-arrow carousel-arrow-next\" [class.carousel-arrow-disabled]=\"isNextArrowDisabled()\" (click)=\"next()\"></div>\r\n</div>",
                styles: [":host{-moz-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;height:100%;left:0;position:relative;top:0;transform-origin:top left;user-select:none;width:100%;z-index:10000}:host .-container{cursor:grab;height:100%;overflow:hidden;width:100%}:host .carousel-container.carousel-moving{cursor:grabbing}:host .carousel-counter{background-color:rgba(23,37,68,.3);border-radius:13px;color:#fff;font-size:11px;line-height:normal;padding:5px 7px;position:absolute;right:24px;text-align:right;top:8px;transition:opacity .2s;z-index:30}:host ::ng-deep .carousel-cells{display:block;height:100%;transition:transform .2s;width:100%;will-change:transform}:host ::ng-deep .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell{height:100%;overflow:hidden;position:absolute;width:100%}:host ::ng-deep .carousel-cells .carousel-cell img,:host ::ng-deep .carousel-cells .carousel-cell video{height:100%;object-fit:contain;position:relative;width:100%}:host ::ng-deep .carousel-cells .carousel-cell img.swiper-hide{display:none}:host ::ng-deep .carousel-cells .carousel-cell .carousel-play{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}:host .carousel-arrow{background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:31px;border-radius:100px;box-shadow:0 0 5px rgba(0,0,0,.15);cursor:pointer;height:40px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:10}:host .carousel-arrow-prev{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);left:10px}:host .carousel-arrow-next{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);right:10px}:host .carousel-arrows-outside .carousel-arrow-prev{left:-60px}:host .carousel-arrows-outside .carousel-arrow-next{right:-60px}:host .carousel-dark-arrows .carousel-arrow{filter:invert(1)}:host .carousel-arrow-disabled{cursor:default;opacity:.5}:host .carousel-dots{bottom:0;left:0;position:absolute;right:0;text-align:center;z-index:10}:host .carousel-dots .carousel-dot{border:2px solid #fff;border-radius:100px;display:inline-block;height:8px;margin:4px;width:8px}:host .carousel-dots .carousel-dot-active{background-color:#fff}"]
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
CarouselComponent.propDecorators = {
    events: [{ type: Output }],
    id: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    autoplay: [{ type: Input }],
    autoplayInterval: [{ type: Input }],
    pauseOnHover: [{ type: Input }],
    dots: [{ type: Input }],
    borderRadius: [{ type: Input }],
    margin: [{ type: Input }],
    objectFit: [{ type: Input }],
    minSwipeDistance: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    transitionTimingFunction: [{ type: Input }],
    videoProperties: [{ type: Input }],
    counterSeparator: [{ type: Input }],
    overflowCellsLimit: [{ type: Input }],
    listeners: [{ type: Input }],
    cellsToShow: [{ type: Input }],
    cellsToScroll: [{ type: Input }],
    freeScroll: [{ type: Input }],
    arrows: [{ type: Input }],
    arrowsOutside: [{ type: Input }],
    arrowsTheme: [{ type: Input }],
    images: [{ type: Input }],
    cellWidth: [{ type: Input, args: ['cellWidth',] }],
    isCounter: [{ type: Input, args: ['counter',] }],
    loop: [{ type: Input, args: ['loop',] }],
    lightDOM: [{ type: Input, args: ['lightDOM',] }],
    hostClassCarousel: [{ type: HostBinding, args: ['class.carousel',] }],
    hostStyleHeight: [{ type: HostBinding, args: ['style.height',] }],
    hostStyleWidth: [{ type: HostBinding, args: ['style.width',] }],
    onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    onMousemove: [{ type: HostListener, args: ['mousemove', ['$event'],] }],
    onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZXNwb25zaXZlLWNhcm91c2VsL3NyYy9saWIvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFhLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBR3BLLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBVTlCLE1BQU0sT0FBTyxpQkFBaUI7SUEwTDFCLFlBQ1ksVUFBc0IsRUFDdEIsR0FBc0I7UUFEdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxMbEMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUloQixlQUFVLEdBQW9CLEdBQUcsQ0FBQztRQUNsQyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUEyRWpCLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUc1RCxXQUFNLEdBQVcsR0FBRyxDQUFDO1FBRXJCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsSUFBSSxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksSUFBSSxD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U0FBUzttQkFNZixLQUFLLFNBQUMsTUFBTTt1QkFVWixLQUFLLFNBQUMsVUFBVTtnQ0FjaEIsV0FBVyxTQUFDLGdCQUFnQjs4QkFDNUIsV0FBVyxTQUFDLGNBQWM7NkJBQzFCLFdBQVcsU0FBQyxhQUFhOzZCQUV6QixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQU94QyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQU9wQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7SW1hZ2VzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1RvdWNoZXN9IGZyb20gJy4vdG91Y2hlcyc7XHJcbmltcG9ydCB7Q2Fyb3VzZWx9IGZyb20gJy4vY2Fyb3VzZWwnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9jb250YWluZXInO1xyXG5pbXBvcnQge0NlbGxzfSBmcm9tICcuL2NlbGxzJztcclxuaW1wb3J0IHtTbGlkZX0gZnJvbSAnLi9zbGlkZSc7XHJcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge1Byb3BlcnRpZXMgYXMgQ2Fyb3VzZWxQcm9wZXJ0aWVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJvdXNlbCwgW2Nhcm91c2VsXScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIGNhcm91c2VsO1xyXG4gICAgY29udGFpbmVyO1xyXG4gICAgdXRpbHM7XHJcbiAgICBjZWxscztcclxuICAgIHNsaWRlO1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBfaW1hZ2VzOiBJbWFnZXM7XHJcbiAgICB0b3VjaGVzOiBhbnk7XHJcbiAgICBsYW5kc2NhcGVNb2RlOiBhbnk7XHJcbiAgICBtaW5UaW1lb3V0ID0gMzA7XHJcbiAgICBpc1ZpZGVvUGxheWluZzogYm9vbGVhbjtcclxuICAgIF9pc0NvdW50ZXI6IGJvb2xlYW47XHJcbiAgICBfd2lkdGg6IG51bWJlcjtcclxuICAgIF9jZWxsV2lkdGg6IG51bWJlciB8ICcxMDAlJyA9IDIwMDtcclxuICAgIF9sb29wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBfbGlnaHRET006IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTW92aW5nOiBib29sZWFuO1xyXG4gICAgaXNOZ0NvbnRlbnQ6IGJvb2xlYW47XHJcbiAgICBjZWxsTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBkb3RzQXJyOiBhbnk7XHJcbiAgICBjYXJvdXNlbFByb3BlcnRpZXM6IENhcm91c2VsUHJvcGVydGllcztcclxuICAgIHNhdmVkQ2Fyb3VzZWxXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgIGdldCBpc0NvbnRhaW5lckxvY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbC5pc0NvbnRhaW5lckxvY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNsaWRlQ291bnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbC5zbGlkZUNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXBDb3VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsLmxhcENvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0xhbmRzY2FwZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzU2FmYXJpKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISh1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvdW50ZXIoKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgY291bnRlciA9IHRoaXMuc2xpZGVDb3VudGVyICUgdGhpcy5jZWxsTGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSB0aGlzLnNsaWRlQ291bnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb3VudGVyICsgMSArIHRoaXMuY291bnRlclNlcGFyYXRvciArIHRoaXMuY2VsbExlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbHNFbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY2VsbHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBcnJvd3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dzICYmICF0aGlzLmZyZWVTY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQ291bnRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNDb3VudGVyICYmIHRoaXMuY2VsbExlbmd0aCA+IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjdGl2ZURvdEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaWRlQ291bnRlciAlIHRoaXMuY2VsbExlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbExpbWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsLmNlbGxMaW1pdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhcm91c2VsV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBldmVudHM6IEV2ZW50RW1pdHRlciA8IGFueSA+ID0gbmV3IEV2ZW50RW1pdHRlciA8IGFueSA+ICgpO1xyXG5cclxuICAgIEBJbnB1dCgpIGlkOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDIwMDtcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBhdXRvcGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgYXV0b3BsYXlJbnRlcnZhbDogbnVtYmVyID0gNTAwMDtcclxuICAgIEBJbnB1dCgpIHBhdXNlT25Ib3ZlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBkb3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBib3JkZXJSYWRpdXM6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIG1hcmdpbjogbnVtYmVyID0gMTA7XHJcbiAgICBASW5wdXQoKSBvYmplY3RGaXQ6ICdjb250YWluJyB8ICdjb3ZlcicgfCAnbm9uZScgPSAnY292ZXInO1xyXG4gICAgQElucHV0KCkgbWluU3dpcGVEaXN0YW5jZTogbnVtYmVyID0gMTA7XHJcbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDIwMDtcclxuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UnIHwgJ2Vhc2UtaW4nIHwgJ2Vhc2Utb3V0JyB8ICdlYXNlLWluLW91dCcgfCAnbGluZWFyJyA9ICdlYXNlLW91dCc7XHJcbiAgICBASW5wdXQoKSB2aWRlb1Byb3BlcnRpZXM6IGFueTtcclxuICAgIEBJbnB1dCgpIGNvdW50ZXJTZXBhcmF0b3I6IHN0cmluZyA9IFwiIC8gXCI7XHJcbiAgICBASW5wdXQoKSBvdmVyZmxvd0NlbGxzTGltaXQ6IG51bWJlciA9IDM7XHJcbiAgICBASW5wdXQoKSBsaXN0ZW5lcnM6ICdhdXRvJyB8ICdtb3VzZSBhbmQgdG91Y2gnID0gJ21vdXNlIGFuZCB0b3VjaCc7XHJcbiAgICBASW5wdXQoKSBjZWxsc1RvU2hvdzogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY2VsbHNUb1Njcm9sbDogbnVtYmVyID0gMTtcclxuICAgIEBJbnB1dCgpIGZyZWVTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGFycm93czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBhcnJvd3NPdXRzaWRlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgYXJyb3dzVGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgaW1hZ2VzKGltYWdlczogSW1hZ2VzICYgYW55KSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGltYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnY2VsbFdpZHRoJykgc2V0IGNlbGxXaWR0aCh2YWx1ZTogbnVtYmVyIHwgJzEwMCUnKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NlbGxXaWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2NvdW50ZXInKSBzZXQgaXNDb3VudGVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ291bnRlciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2xvb3AnKSBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb29wID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb29wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb29wO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnbGlnaHRET00nKSBzZXQgbGlnaHRET00odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRET00gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxpZ2h0RE9NKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRET007XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsJykgaG9zdENsYXNzQ2Fyb3VzZWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBob3N0U3R5bGVIZWlnaHQ6IHN0cmluZztcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBob3N0U3R5bGVXaWR0aDogc3RyaW5nO1xyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgb25XaW5kb3dSZXNpemUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnV0aWxzLnZpc2libGVXaWR0aCAhPT0gdGhpcy5zYXZlZENhcm91c2VsV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICAgIG9uTW91c2Vtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b3BsYXkgJiYgdGhpcy5wYXVzZU9uSG92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvbk1vdXNlbGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSAmJiB0aGlzLnBhdXNlT25Ib3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsLmF1dG9wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc05nQ29udGVudCA9IHRoaXMuY2VsbHNFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hlcyA9IG5ldyBUb3VjaGVzKHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5jZWxsc0VsZW1lbnQsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyczogdGhpcy5saXN0ZW5lcnMsXHJcbiAgICAgICAgICAgIG1vdXNlTGlzdGVuZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIm1vdXNlZG93blwiOiBcImhhbmRsZU1vdXNlZG93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb3VzZXVwXCI6IFwiaGFuZGxlTW91c2V1cFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaGVzLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaHN0YXJ0KTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMub24oJ2hvcml6b250YWwtc3dpcGUnLCB0aGlzLmhhbmRsZUhvcml6b250YWxTd2lwZSk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLm9uKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hlbmQpO1xyXG4gICAgICAgIHRoaXMudG91Y2hlcy5vbignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVUb3VjaHN0YXJ0KTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMub24oJ21vdXNldXAnLCB0aGlzLmhhbmRsZVRvdWNoZW5kKTtcclxuICAgICAgICB0aGlzLnRvdWNoZXMub24oJ3RhcCcsIHRoaXMuaGFuZGxlVGFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwuYXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2VsbExlbmd0aCA9IHRoaXMuZ2V0Q2VsbExlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuZG90c0FyciA9IEFycmF5KHRoaXMuY2VsbExlbmd0aCkuZmlsbCgxKTtcclxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5saW5lVXBDZWxscygpO1xyXG4gICAgICAgIHRoaXMuc2F2ZWRDYXJvdXNlbFdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoO1xyXG5cclxuICAgICAgICAvKiBTdGFydCBkZXRlY3RpbmcgY2hhbmdlcyBpbiB0aGUgRE9NIHRyZWUgKi9cclxuICAgICAgICB0aGlzLmRldGVjdERvbUNoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMud2lkdGggfHwgY2hhbmdlcy5oZWlnaHQgfHwgY2hhbmdlcy5pbWFnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREaW1lbnNpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwubGluZVVwQ2VsbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoZXMuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vdGhpcy5jYXJvdXNlbC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENhcm91c2VsKCkge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgY2VsbHNFbGVtZW50OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY2VsbHMnKSxcclxuICAgICAgICAgICAgaG9zdEVsZW1lbnQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBpbWFnZXM6IHRoaXMuaW1hZ2VzLFxyXG4gICAgICAgICAgICBjZWxsV2lkdGg6IHRoaXMuZ2V0Q2VsbFdpZHRoKCksXHJcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcCxcclxuICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbDogdGhpcy5hdXRvcGxheUludGVydmFsLFxyXG4gICAgICAgICAgICBvdmVyZmxvd0NlbGxzTGltaXQ6IHRoaXMub3ZlcmZsb3dDZWxsc0xpbWl0LFxyXG4gICAgICAgICAgICB2aXNpYmxlV2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhpcy5tYXJnaW4sXHJcbiAgICAgICAgICAgIG1pblN3aXBlRGlzdGFuY2U6IHRoaXMubWluU3dpcGVEaXN0YW5jZSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcclxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcclxuICAgICAgICAgICAgdmlkZW9Qcm9wZXJ0aWVzOiB0aGlzLnZpZGVvUHJvcGVydGllcyxcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyOiB0aGlzLmV2ZW50cyxcclxuICAgICAgICAgICAgZnJlZVNjcm9sbDogdGhpcy5mcmVlU2Nyb2xsLFxyXG4gICAgICAgICAgICBsaWdodERPTTogdGhpcy5saWdodERPTVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXRpbHMgPSBuZXcgVXRpbHModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRoaXMuY2VsbHMgPSBuZXcgQ2VsbHModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMsIHRoaXMudXRpbHMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih0aGlzLmNhcm91c2VsUHJvcGVydGllcywgdGhpcy51dGlscywgdGhpcy5jZWxscyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZSA9IG5ldyBTbGlkZSh0aGlzLmNhcm91c2VsUHJvcGVydGllcywgdGhpcy51dGlscywgdGhpcy5jZWxscywgdGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwgPSBuZXcgQ2Fyb3VzZWwodGhpcy5jYXJvdXNlbFByb3BlcnRpZXMsIHRoaXMudXRpbHMsIHRoaXMuY2VsbHMsIHRoaXMuY29udGFpbmVyLCB0aGlzLnNsaWRlKTtcclxuICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwuYXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMubGFuZHNjYXBlTW9kZSA9IHRoaXMuaXNMYW5kc2NhcGU7XHJcbiAgICAgICAgdGhpcy5zYXZlZENhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsV2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmNlbGxXaWR0aCA9IHRoaXMuZ2V0Q2VsbFdpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5jZWxscy51cGRhdGVQcm9wZXJ0aWVzKHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLnVwZGF0ZVByb3BlcnRpZXModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnVwZGF0ZVByb3BlcnRpZXModGhpcy5jYXJvdXNlbFByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGUudXBkYXRlUHJvcGVydGllcyh0aGlzLmNhcm91c2VsUHJvcGVydGllcyk7XHJcbiAgICAgICAgdGhpcy51dGlscy51cGRhdGVQcm9wZXJ0aWVzKHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLmxpbmVVcENlbGxzKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZS5zZWxlY3QoMCk7XHJcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdERvbUNoYW5nZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb21DaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNlbGxzRWxlbWVudCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRvbUNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsTGVuZ3RoID0gdGhpcy5nZXRDZWxsTGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5saW5lVXBDZWxscygpO1xyXG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHRoaXMuaG9zdFN0eWxlSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaG9zdFN0eWxlV2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsLmdldEltYWdlKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb3VjaHN0YXJ0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLmFkZEV2ZW50TGlzdGVuZXJzKFwibW91c2Vtb3ZlXCIsIFwiaGFuZGxlTW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuaGFuZGxlVG91Y2hzdGFydChldmVudCk7XHJcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSG9yaXpvbnRhbFN3aXBlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuaGFuZGxlSG9yaXpvbnRhbFN3aXBlKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb3VjaGVuZCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5oYW5kbGVUb3VjaGVuZChldmVudCk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKFwibW91c2Vtb3ZlXCIsIFwiaGFuZGxlTW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUYXAgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCBvdXRib3VuZEV2ZW50OiBhbnkgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdjbGljaydcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5jZWxsc0VsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgIGxldCBjZWxsRWxlbWVudCA9IGV2ZW50LnNyY0VsZW1lbnQuY2xvc2VzdChcIi5jYXJvdXNlbC1jZWxsXCIpO1xyXG4gICAgICAgIGNvbnN0IGkgPSBub2Rlcy5pbmRleE9mKGNlbGxFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjZWxsSW5kZXggPSBub2Rlcy5pbmRleE9mKGNlbGxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIC8vb3V0Ym91bmRFdmVudC5maWxlSW5kZXggPSB0aGlzLmNhcm91c2VsLmdldEZpbGVJbmRleChpKTtcclxuICAgICAgICAgICAgLy9vdXRib3VuZEV2ZW50LmZpbGUgPSB0aGlzLmNhcm91c2VsLmdldEZpbGUoY2VsbEluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRib3VuZEV2ZW50LmNlbGxJbmRleCA9IGNlbGxJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVHJhbnNpdGlvbmVuZENlbGxDb250YWluZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLmhhbmRsZVRyYW5zaXRpb25lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVWaWRlbyh2aWRlbykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9Qcm9wZXJ0aWVzLm5vUGxheSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1ZpZGVvUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1ZpZGVvUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGxXaWR0aCgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudFdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jZWxsc1RvU2hvdykge1xyXG4gICAgICAgICAgICBsZXQgbWFyZ2luID0gdGhpcy5jZWxsc1RvU2hvdyA+IDEgPyB0aGlzLm1hcmdpbiA6IDA7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbE1hcmdpbiA9IG1hcmdpbiAqICh0aGlzLmNlbGxzVG9TaG93IC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudFdpZHRoIC0gdG90YWxNYXJnaW4pIC8gdGhpcy5jZWxsc1RvU2hvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsV2lkdGggPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jZWxsV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5uZXh0KHRoaXMuY2VsbHNUb1Njcm9sbCk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5zdG9wQXV0b3BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwucHJldih0aGlzLmNlbGxzVG9TY3JvbGwpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNOZXh0QXJyb3dEaXNhYmxlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbC5pc05leHRBcnJvd0Rpc2FibGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzUHJldkFycm93RGlzYWJsZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWwuaXNQcmV2QXJyb3dEaXNhYmxlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsTGVuZ3RoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNlbGxzRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19