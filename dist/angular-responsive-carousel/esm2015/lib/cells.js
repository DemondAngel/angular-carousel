export class ImageUtils {
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
export class Cells {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXJlc3BvbnNpdmUtY2Fyb3VzZWwvc3JjL2xpYi9jZWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sVUFBVTtJQUtuQixZQUFZLE9BQU87UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyxLQUFLO0lBNENkLFlBQW9CLGtCQUFzQyxFQUM5QyxLQUFLO1FBREcsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUM5QyxVQUFLLEdBQUwsS0FBSyxDQUFBO1FBekNqQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBMkNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTFDRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUks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a0IsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksVUFBVSxDQUFDO1FBRWYsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQy9ELFVBQVUsR0FBRyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7WUFFL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7Z0JBQzdDLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDaEQ7U0FDSjthQUFNO1lBQ0gsVUFBVSxHQUFHLGtCQUFrQixDQUFDO1NBQ25DO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLENBQUMsa0JBQXNDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDdkcsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9wZXJ0aWVzIGFzIENhcm91c2VsUHJvcGVydGllc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVV0aWxzIHtcclxuICAgIGNlbGxTdGFjaztcclxuICAgIGltYWdlU3RhY2s7XHJcbiAgICBlbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsU3RhY2suZmlsdGVyKHRoaXMuZmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wYXJlUG9zaXRpb25zKGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5wb3NpdGlvblggPCBiLnBvc2l0aW9uWCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLnBvc2l0aW9uWCA+IGIucG9zaXRpb25YKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoY2VsbCkge1xyXG4gICAgICAgIHJldHVybiBjZWxsLmltZyAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbHMge1xyXG4gICAgY2VsbHM6IEhUTUxDb2xsZWN0aW9uO1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICB2aXNpYmxlV2lkdGg6IG51bWJlcjtcclxuICAgIGNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBpbWFnZVV0aWxzO1xyXG5cclxuICAgIGdldCBpbWFnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmltYWdlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxscy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZ1bGxDZWxsV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmNlbGxXaWR0aCArIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLm1hcmdpbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VsbExlbmd0aEluTGlnaHRET01Nb2RlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xyXG4gICAgICAgICAgICBsZXQgY2VsbExlbmd0aCA9IHRoaXMubnVtYmVyT2ZWaXNpYmxlQ2VsbHMgKyB0aGlzLm92ZXJmbG93Q2VsbHNMaW1pdCAqIDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2VsbExlbmd0aCA+IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbExlbmd0aCA9IHRoaXMuaW1hZ2VzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2VsbExlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jZWxsTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnVtYmVyT2ZWaXNpYmxlQ2VsbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHMubnVtYmVyT2ZWaXNpYmxlQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG92ZXJmbG93Q2VsbHNMaW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dGlscy5vdmVyZmxvd0NlbGxzTGltaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTGlnaHRET00oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmxpZ2h0RE9NIHx8IHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmxvb3A7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJvdXNlbFByb3BlcnRpZXM6IENhcm91c2VsUHJvcGVydGllcyxcclxuICAgICAgICBwcml2YXRlIHV0aWxzKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VVdGlscyA9IG5ldyBJbWFnZVV0aWxzKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pbml0KGNhcm91c2VsUHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvcGVydGllcyhjYXJvdXNlbFByb3BlcnRpZXM6IENhcm91c2VsUHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzID0gY2Fyb3VzZWxQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmVVcCgpIHtcclxuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbjtcclxuICAgICAgICB0aGlzLmltYWdlVXRpbHMuY2VsbFN0YWNrID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSBjZWxsc1tpXTtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uWCA9IHRoaXMuZ2V0Q2VsbFBvc2l0aW9uSW5Db250YWluZXIoaSk7XHJcbiAgICAgICAgICAgIChjZWxsIGFzIEhUTUxFbGVtZW50KS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgcG9zaXRpb25YICsgJ3B4KSc7XHJcbiAgICAgICAgICAgIChjZWxsIGFzIEhUTUxFbGVtZW50KS5zdHlsZS53aWR0aCA9IHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmNlbGxXaWR0aCArICdweCc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRJbWFnZShpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVV0aWxzLmNlbGxTdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblgsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB0aGlzLmdldEltYWdlKGkpWydpbWFnZSddXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWZTZXF1ZW5jZU9mQ2VsbHNJc0NoYW5nZWQoKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICAgICAgcmV0dXJuIGNlbGxzWzBdWydzdHlsZSddLnRyYW5zZm9ybSAhPT0gJ3RyYW5zbGF0ZVgoMHB4KSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbFBvc2l0aW9uSW5Db250YWluZXIoY2VsbEluZGV4SW5ET01UcmVlKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uSW5kZXggPSB0aGlzLmdldENlbGxJbmRleEluQ29udGFpbmVyKGNlbGxJbmRleEluRE9NVHJlZSk7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uSW5kZXggKiB0aGlzLmZ1bGxDZWxsV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbEluZGV4SW5Db250YWluZXIoY2VsbEluZGV4SW5ET01UcmVlKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uSW5kZXg7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0xpZ2h0RE9NKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsSW5kZXhJbkRPTVRyZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2VsbExlbmd0aCA9IHRoaXMuY2VsbExlbmd0aEluTGlnaHRET01Nb2RlO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5jb3VudGVyIC0gdGhpcy5vdmVyZmxvd0NlbGxzTGltaXQ7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID4gY2VsbExlbmd0aCkge1xyXG4gICAgICAgICAgICBjb3VudGVyID0gY291bnRlciAlIGNlbGxMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGxJbmRleEluRE9NVHJlZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbkluZGV4ID0gY2VsbEluZGV4SW5ET01UcmVlIC0gY291bnRlcjtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkluZGV4ID0gY2VsbExlbmd0aCArIHBvc2l0aW9uSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbkluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKGNlbGxJbmRleCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbWFnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGltYWdlSW5kZXggPSB0aGlzLmdldEltYWdlSW5kZXgoY2VsbEluZGV4KTtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuaW1hZ2VzW2ltYWdlSW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAoZmlsZSAmJiAhZmlsZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGZpbGUudHlwZSA9ICdpbWFnZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZXNbaW1hZ2VJbmRleF0sXHJcbiAgICAgICAgICAgIGltYWdlSW5kZXhcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlSW5kZXgoY2VsbEluZGV4SW5ET01UcmVlOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkluZGV4ID0gdGhpcy5nZXRDZWxsSW5kZXhJbkNvbnRhaW5lcihjZWxsSW5kZXhJbkRPTVRyZWUpO1xyXG4gICAgICAgIGxldCBpbWFnZUluZGV4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gdGhpcy5vdmVyZmxvd0NlbGxzTGltaXQpIHtcclxuICAgICAgICAgICAgbGV0IGNlbGxMaW1pdE92ZXJmbG93ID0gdGhpcy5jb3VudGVyIC0gdGhpcy5vdmVyZmxvd0NlbGxzTGltaXQ7XHJcbiAgICAgICAgICAgIGltYWdlSW5kZXggPSBwb3NpdGlvbkluZGV4ICsgY2VsbExpbWl0T3ZlcmZsb3c7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VJbmRleCA9IGltYWdlSW5kZXggJSB0aGlzLmltYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWFnZUluZGV4ID0gY2VsbEluZGV4SW5ET01UcmVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q291bnRlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChjYXJvdXNlbFByb3BlcnRpZXM6IENhcm91c2VsUHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY2Fyb3VzZWxQcm9wZXJ0aWVzLmNlbGxzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNlbGxzID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZVdpZHRoID0gdGhpcy5jYXJvdXNlbFByb3BlcnRpZXMudmlzaWJsZVdpZHRoIHx8IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG59Il19