import { Properties as CarouselProperties } from './interfaces';
export declare class ImageUtils {
    cellStack: any;
    imageStack: any;
    element: any;
    constructor(element: any);
    getImages(): any;
    comparePositions(a: any, b: any): 1 | 0 | -1;
    filter(cell: any): boolean;
}
export declare class Cells {
    private carouselProperties;
    private utils;
    cells: HTMLCollection;
    element: HTMLElement;
    visibleWidth: number;
    counter: number;
    imageUtils: any;
    get images(): any;
    get cellLength(): number;
    get fullCellWidth(): number;
    get cellLengthInLightDOMMode(): any;
    get numberOfVisibleCells(): any;
    get overflowCellsLimit(): any;
    get isLightDOM(): boolean;
    constructor(carouselProperties: CarouselProperties, utils: any);
    updateProperties(carouselProperties: CarouselProperties): void;
    lineUp(): void;
    ifSequenceOfCellsIsChanged(): boolean;
    getCellPositionInContainer(cellIndexInDOMTree: any): number;
    getCellIndexInContainer(cellIndexInDOMTree: any): any;
    getImage(cellIndex: any): {
        image: any;
        imageIndex: any;
    };
    getImageIndex(cellIndexInDOMTree: number): any;
    setCounter(value: number): void;
    init(carouselProperties: CarouselProperties): void;
}
