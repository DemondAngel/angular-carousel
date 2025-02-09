import { Properties as CarouselProperties } from './interfaces';
export declare class Utils {
    private carouselProperties;
    get images(): any;
    get margin(): number;
    get overflowCellsLimit(): number;
    get isImagesLessCellLimit(): boolean;
    get numberOfVisibleCells(): number;
    get visibleCellsOverflowContainer(): boolean;
    get fullCellWidth(): number;
    get visibleWidth(): number;
    constructor(carouselProperties: CarouselProperties);
    updateProperties(carouselProperties: CarouselProperties): void;
    getStartX(event: any): any;
    getMoveX(event: any): number;
    getCarouselElementPosition(): DOMRect;
}
