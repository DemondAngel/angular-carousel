export class Container {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1yZXNwb25zaXZlLWNhcm91c2VsL3NyYy9saWIvY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxTQUFTO0lBdUZsQixZQUFvQixrQkFBc0MsRUFDOUMsS0FBSyxFQUNMLEtBQUs7UUFGRyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQzlDLFVBQUssR0FBTCxLQUFLLENBQUE7UUFDTCxVQUFLLEdBQUwsS0FBSyxDQUFBO1FBeEZqQjs7V0FFRztRQUNILHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUU3QixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBQ3BDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQWtGWixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0lBN0VELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxr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TSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsQixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUNELElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtZQUNqQixPQUFPLE1BQU0sQ0FBQztTQUNqQjtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvcGVydGllcyBhcyBDYXJvdXNlbFByb3BlcnRpZXN9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIHtcclxuICAgIC8qIFRoZSBpbmRleCBvZiB0aGUgbmV3IHBvc2l0aW9uIHJlbGF0aXZlIHRvIFxyXG4gICAgICogdGhlIGFjdGl2ZSBpbmRleCwgZm9yIGV4YW1wbGUgLTEgb3IgKzEgXHJcbiAgICAgKi9cclxuICAgIG5ld1Bvc2l0aW9uSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBpc1Bvc2l0aW9uQ29ycmVjdGlvbjogYm9vbGVhbjtcclxuICAgIGluaXRpYWxQb3NpdGlvblg6IG51bWJlciA9IDA7XHJcbiAgICBpbml0aWFsRWxlbWVudFBvc2l0aW9uWDogbnVtYmVyID0gMDtcclxuICAgIGlzTG9ja2VkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1bGxMaW1pdCA9IDEwMDtcclxuICAgIHN0YXJ0VGltZTtcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgbW92ZVg6IG51bWJlcjtcclxuICAgIGlzU3dpcGVJblByb2dyZXNzOiBib29sZWFuO1xyXG5cclxuICAgIGdldCB2aXNpYmxlV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHMudmlzaWJsZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvdmVyZmxvd0NlbGxzTGltaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHMub3ZlcmZsb3dDZWxsc0xpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWFnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmltYWdlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMuY2VsbHNFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmcmVlU2Nyb2xsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5mcmVlU2Nyb2xsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmdWxsQ2VsbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5jZWxsV2lkdGggKyB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5tYXJnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mVmlzaWJsZUNlbGxzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxzLm51bWJlck9mVmlzaWJsZUNlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0cmFuc2l0aW9uRHVyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLnRyYW5zaXRpb25EdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsUHJvcGVydGllcy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbGxMZW5ndGgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHMuY2VsbExlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbGxMZW5ndGhJbkxpZ2h0RE9NTW9kZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZXMpIHtcclxuICAgICAgICAgICAgbGV0IGNlbGxMZW5ndGggPSB0aGlzLm51bWJlck9mVmlzaWJsZUNlbGxzICsgdGhpcy5vdmVyZmxvd0NlbGxzTGltaXQgKiAyO1xyXG4gICAgICAgICAgICBpZiAoY2VsbExlbmd0aCA+IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbExlbmd0aCA9IHRoaXMuaW1hZ2VzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2VsbExlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jZWxsTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9vRmV3Q2VsbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZWaXNpYmxlQ2VsbHMgPiB0aGlzLmNlbGxMZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvb0Zld0NlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYXJnaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLm1hcmdpbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNMaWdodERPTSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMubGlnaHRET00gfHwgdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMubG9vcDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcm91c2VsUHJvcGVydGllczogQ2Fyb3VzZWxQcm9wZXJ0aWVzLFxyXG4gICAgICAgIHByaXZhdGUgdXRpbHMsXHJcbiAgICAgICAgcHJpdmF0ZSBjZWxscykge1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY2Fyb3VzZWxQcm9wZXJ0aWVzOiBDYXJvdXNlbFByb3BlcnRpZXMpIHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsUHJvcGVydGllcyA9IGNhcm91c2VsUHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0V2lkdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb3VjaHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy51dGlscy5nZXRTdGFydFgoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsRWxlbWVudFBvc2l0aW9uWCA9IHRoaXMuZ2V0SW5pdGlhbEVsZW1lbnRQb3NpdGlvblgoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVIb3Jpem9udGFsU3dpcGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU3dpcGVJblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy51dGlscy5nZXRTdGFydFgoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxFbGVtZW50UG9zaXRpb25YID0gdGhpcy5nZXRJbml0aWFsRWxlbWVudFBvc2l0aW9uWCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1N3aXBlSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb3ZlWCA9IHRoaXMudXRpbHMuZ2V0TW92ZVgoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvdWNoZW5kKHNpbXBsZVByb2Nlc3Npbmc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIElmIHRvdWNoZW5kIHdhcyBwYXNzZWQgdG8gdGhlIFNsaWRlIGNsYXNzICovXHJcbiAgICAgICAgaWYgKHNpbXBsZVByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N3aXBlSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzU3dpcGVJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5maW5pc2hNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLmNsZWFySW5pdGlhbFZhbHVlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uWCA9IHRoaXMuZ2V0TW92ZVBvc2l0aW9uWCgpO1xyXG4gICAgICAgIGNvbnN0IGlzUHVsbGVkID0gdGhpcy5kZXRlY3RQdWxsZWQoKTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoaXNQdWxsZWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHVsbGVkLmVkZ2UgPT09IFwibGVmdFwiICYmIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiIHx8XHJcbiAgICAgICAgICAgICAgICBpc1B1bGxlZC5lZGdlID09PSBcInJpZ2h0XCIgJiYgZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25YID0gdGhpcy5zbG93ZG93bk9uUHVsbChwb3NpdGlvblgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uWChwb3NpdGlvblgsIDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mcmVlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uWCA9IHBvc2l0aW9uWDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1B1bGxlZCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQdWxsZWQuZWRnZSA9PT0gJ2xlZnQnICYmIGlzUHVsbGVkLm92ZXJmbG93WCA+IHRoaXMucHVsbExpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvblggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1B1bGxlZC5lZGdlID09PSAncmlnaHQnICYmIGlzUHVsbGVkLm92ZXJmbG93WCA+IHRoaXMucHVsbExpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvblggPSBwb3NpdGlvblg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW92ZVBvc2l0aW9uWCgpIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsRWxlbWVudFBvc2l0aW9uWCAtIGRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0WCAtIHRoaXMubW92ZVg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogSWYgdGhlIGNvbnRhaW5lciBpcyBwdWxsZWQgb3V0IG9mIHRoZSBsZWZ0IG9yIHJpZ2h0IGJvcmRlciAqL1xyXG4gICAgZGV0ZWN0UHVsbGVkKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvblggPSB0aGlzLmdldEN1cnJlbnRQb3NpdGlvblgoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvblggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlZGdlOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblg6IGN1cnJlbnRQb3NpdGlvblgsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1g6IE1hdGguYWJzKGN1cnJlbnRQb3NpdGlvblgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UG9zaXRpb25YIDwgdGhpcy5nZXRFbmRQb3NpdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlZGdlOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25YOiBjdXJyZW50UG9zaXRpb25YLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBNYXRoLmFicyhjdXJyZW50UG9zaXRpb25YIC0gdGhpcy5nZXRFbmRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsb3dkb3duT25QdWxsKF9wb3NpdGlvblgpIHtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLmdldERpc3RhbmNlKCkpO1xyXG4gICAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gdGhpcy5nZXRFbmRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGlzUHVsbGVkID0gdGhpcy5kZXRlY3RQdWxsZWQoKTtcclxuICAgICAgICBjb25zdCBkZWNlbGVyYXRpb25SYXRpbyA9IDMgKyBpc1B1bGxlZC5vdmVyZmxvd1ggLyA1MDtcclxuICAgICAgICBsZXQgcG9zaXRpb25YO1xyXG5cclxuICAgICAgICBpZiAoaXNQdWxsZWQuZWRnZSA9PT0gJ2xlZnQnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsRWxlbWVudFBvc2l0aW9uWCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZGlzdGFuY2UgLSBNYXRoLmFicyh0aGlzLmluaXRpYWxFbGVtZW50UG9zaXRpb25YKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcnViYmVyUG9zaXRpb25YID0gZGlzdGFuY2UgLyBkZWNlbGVyYXRpb25SYXRpbztcclxuICAgICAgICAgICAgcG9zaXRpb25YID0gcnViYmVyUG9zaXRpb25YO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbEVsZW1lbnRQb3NpdGlvblggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblggPSB0aGlzLmluaXRpYWxFbGVtZW50UG9zaXRpb25YICsgcnViYmVyUG9zaXRpb25YO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25YID4gdGhpcy5wdWxsTGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uWCA9IHRoaXMucHVsbExpbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNQdWxsZWQuZWRnZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBydWJiZXJQb3NpdGlvblggPSBlbmRQb3NpdGlvbiArICgoKHRoaXMuaW5pdGlhbEVsZW1lbnRQb3NpdGlvblggLSBkaXN0YW5jZSkgLSBlbmRQb3NpdGlvbikgLyBkZWNlbGVyYXRpb25SYXRpbyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb25YID0gcnViYmVyUG9zaXRpb25YO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbEVsZW1lbnRQb3NpdGlvblggPCAtKGNvbnRhaW5lcldpZHRoIC0gdGhpcy52aXNpYmxlV2lkdGgpKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblggPSAoKGNvbnRhaW5lcldpZHRoIC0gdGhpcy52aXNpYmxlV2lkdGgpICsgdGhpcy5pbml0aWFsRWxlbWVudFBvc2l0aW9uWCkgKyBydWJiZXJQb3NpdGlvblg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvblggPCBlbmRQb3NpdGlvbiAtIHRoaXMucHVsbExpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblggPSBlbmRQb3NpdGlvbiAtIHRoaXMucHVsbExpbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcG9zaXRpb25YO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaE1vdmluZygpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvblggPSB0aGlzLmdldE1vdmVQb3NpdGlvblgoKTtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25YO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mcmVlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uWCA9IHRoaXMuZ2V0SW5lcnRpYSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQWxpZ24gY29udGFpbmVyIHdoaWxlIHB1bGxpbmcgKi9cclxuICAgICAgICBuZXdQb3NpdGlvblggPSB0aGlzLmdldEFsaWduZWRQb3NpdGlvbk9uUHVsbChuZXdQb3NpdGlvblgpO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uWChuZXdQb3NpdGlvblgpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbFBvc2l0aW9uKHBvc2l0aW9uWCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmV0dXJucyB0aGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIgd2l0aCBpbmVydGlhICovXHJcbiAgICBnZXRJbmVydGlhKCkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY29uc3QgdGFwTGVuZ3RoID0gY3VycmVudFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgICAgICBsZXQgaW5lcnRpYSA9IChkaXN0YW5jZSAvIHRhcExlbmd0aCkgKiAxMDA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxQb3NpdGlvblggLSBpbmVydGlhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsaWduZWRQb3NpdGlvbk9uUHVsbChuZXdQb3NpdGlvblgpIHtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgbGV0IGVuZFBvc2l0aW9uID0gdGhpcy5nZXRFbmRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb25YIDwgZW5kUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmRQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvblggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uWDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50UG9zaXRpb25YKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFBvc2l0aW9uID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLmxlZnQgLSBwYXJlbnRQb3NpdGlvbi5sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVuZFBvc2l0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGlnaHRET00pIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlc0luQ29udGFpbmVyID0gdGhpcy5jZWxscy5pbWFnZVV0aWxzLmdldEltYWdlcygpO1xyXG4gICAgICAgICAgICByZXR1cm4gLShpbWFnZXNJbkNvbnRhaW5lci5sZW5ndGggKiB0aGlzLmZ1bGxDZWxsV2lkdGggLSB0aGlzLnZpc2libGVXaWR0aCAtIHRoaXMubWFyZ2luKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZVdpZHRoID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIHJldHVybiB2aXNpYmxlV2lkdGggLSB3aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtUG9zaXRpb25YKHZhbHVlLCBkdXJhdGlvbiA9IHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtICcgKyBkdXJhdGlvbiArICdtcyAnICsgdGhpcy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb247XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB2YWx1ZSArICdweCknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoKCkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuY2VsbExlbmd0aEluTGlnaHRET01Nb2RlICogdGhpcy5mdWxsQ2VsbFdpZHRoO1xyXG4gICAgICAgIGxldCB0b3RhbEltYWdlV2lkdGggPSB0aGlzLmNlbGxMZW5ndGggKiB0aGlzLmZ1bGxDZWxsV2lkdGg7XHJcblxyXG4gICAgICAgIGlmICh0b3RhbEltYWdlV2lkdGggPCB3aWR0aCkge1xyXG4gICAgICAgICAgICB3aWR0aCA9IHRvdGFsSW1hZ2VXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTGlnaHRET00gPyB3aWR0aCA6IHRvdGFsSW1hZ2VXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXaWR0aCgpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbml0aWFsUG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvblggPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbml0aWFsRWxlbWVudFBvc2l0aW9uWCgpIHtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbEVsZW1lbnRQb3NpdGlvbiA9IHRoaXMudXRpbHMuZ2V0Q2Fyb3VzZWxFbGVtZW50UG9zaXRpb24oKVsnbGVmdCddO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbigpWydsZWZ0J10gLSBjYXJvdXNlbEVsZW1lbnRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckluaXRpYWxWYWx1ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSB0aGlzLm1vdmVYID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbigpIHtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnNpZ24odGhpcy5zdGFydFggLSB0aGlzLm1vdmVYKTtcclxuXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=