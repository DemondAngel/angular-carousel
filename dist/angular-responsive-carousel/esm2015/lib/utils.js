export class Utils {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXJlc3BvbnNpdmUtY2Fyb3VzZWwvc3JjL2xpYi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sS0FBSztJQTRDZCxZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUUxRCxDQUFDO0lBNUNELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzNDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTFGLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixrQkFBa0IsR0FBRyxDQUFDLENBQUM7YUFDMUI7WUFFRCxPQUFPLGtCQUFrQixDQUFDO1NBQzdCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxJQUFJLHFCQUFxQjtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzNHLENBQUM7SUFFRCxJQUFJLG9CQUFvQjtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUksNkJBQTZCO1FBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM5RixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDbEgsQ0FBQztJQU1ELGdCQUFnQixDQUFDLGtCQUFzQztRQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDOUIsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRSxJQUFJLE1BQU0sQ0FBQztRQUVYLElBQUksT0FBTyxFQUFFO1lBQ1QsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUM7U0FDekQ7YUFBTTtZQUNILE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDO1NBQ3BEO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2YsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QixNQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNFLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO1NBQ3hEO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvcGVydGllcyBhcyBDYXJvdXNlbFByb3BlcnRpZXN9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIGdldCBpbWFnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmltYWdlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFyZ2luKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5tYXJnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG92ZXJmbG93Q2VsbHNMaW1pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5pc0ltYWdlc0xlc3NDZWxsTGltaXQpIHtcclxuICAgICAgICAgICAgbGV0IG92ZXJmbG93Q2VsbHNMaW1pdCA9IE1hdGguZmxvb3IoKHRoaXMuaW1hZ2VzLmxlbmd0aCAtIHRoaXMubnVtYmVyT2ZWaXNpYmxlQ2VsbHMpIC8gMik7XHJcblxyXG4gICAgICAgICAgICBpZiAob3ZlcmZsb3dDZWxsc0xpbWl0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dDZWxsc0xpbWl0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG92ZXJmbG93Q2VsbHNMaW1pdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMub3ZlcmZsb3dDZWxsc0xpbWl0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJbWFnZXNMZXNzQ2VsbExpbWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5vdmVyZmxvd0NlbGxzTGltaXQgKiAyICsgdGhpcy5udW1iZXJPZlZpc2libGVDZWxscyA+IHRoaXMuaW1hZ2VzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnVtYmVyT2ZWaXNpYmxlQ2VsbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnZpc2libGVXaWR0aCAvIHRoaXMuZnVsbENlbGxXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpc2libGVDZWxsc092ZXJmbG93Q29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5udW1iZXJPZlZpc2libGVDZWxscyAqIHRoaXMuZnVsbENlbGxXaWR0aCAtIHRoaXMubWFyZ2luKSA+IHRoaXMudmlzaWJsZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmdWxsQ2VsbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5jZWxsV2lkdGggKyB0aGlzLmNhcm91c2VsUHJvcGVydGllcy5tYXJnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpc2libGVXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMudmlzaWJsZVdpZHRoIHx8IHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmNlbGxzRWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Fyb3VzZWxQcm9wZXJ0aWVzOiBDYXJvdXNlbFByb3BlcnRpZXMpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvcGVydGllcyhjYXJvdXNlbFByb3BlcnRpZXM6IENhcm91c2VsUHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzID0gY2Fyb3VzZWxQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXJ0WChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxFbGVtZW50UG9zaXRpb24gPSB0aGlzLmdldENhcm91c2VsRWxlbWVudFBvc2l0aW9uKClbJ2xlZnQnXTtcclxuICAgICAgICBsZXQgc3RhcnRYO1xyXG5cclxuICAgICAgICBpZiAodG91Y2hlcykge1xyXG4gICAgICAgICAgICBzdGFydFggPSB0b3VjaGVzWzBdLmNsaWVudFggLSBjYXJvdXNlbEVsZW1lbnRQb3NpdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydFggPSBldmVudC5jbGllbnRYIC0gY2Fyb3VzZWxFbGVtZW50UG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhcnRYO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVYKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcclxuICAgICAgICBjb25zdCBjYXJvdXNlbEVsZW1lbnRQb3NpdGlvblggPSB0aGlzLmdldENhcm91c2VsRWxlbWVudFBvc2l0aW9uKClbJ2xlZnQnXTtcclxuXHJcbiAgICAgICAgaWYgKHRvdWNoZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdWNoZXNbMF0uY2xpZW50WCAtIGNhcm91c2VsRWxlbWVudFBvc2l0aW9uWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuY2xpZW50WCAtIGNhcm91c2VsRWxlbWVudFBvc2l0aW9uWDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2Fyb3VzZWxFbGVtZW50UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmhvc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG59Il19