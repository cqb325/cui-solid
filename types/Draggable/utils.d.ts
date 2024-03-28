export type ControlPosition = {
    x: number;
    y: number;
};
export type DraggableData = {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
};
export declare function getTouchIdentifier(e: any): any;
export declare function offsetXYFromParent(evt: {
    clientX: number;
    clientY: number;
}, offsetParent: HTMLElement, scale: number): ControlPosition;
export declare function findInArray(array: Array<any> | TouchList, callback: any): any;
export declare function getTouch(e: any, identifier: number): null | {
    clientX: number;
    clientY: number;
};
export declare function getControlPosition(e: any, touchIdentifier: any, props: any, node: any): null | ControlPosition;
export declare function createCoreData(node: any, lastX: number, lastY: number, x: number, y: number): DraggableData;
export declare function addEvent(el: any, event: string, handler: any, inputOptions?: any): void;
export declare function removeEvent(el: any, event: string, handler: any, inputOptions?: any): void;
export declare function snapToGrid(grid: [number, number], pendingX: number, pendingY: number): [number, number];
export declare function addUserSelectStyles(doc: any): void;
export declare function removeUserSelectStyles(doc: any): void;
export declare function createDraggableData(store: any, scale: number, coreData: DraggableData): DraggableData;
export declare function int(a: string): number;
export declare function outerHeight(node: HTMLElement): number;
export declare function outerWidth(node: HTMLElement): number;
export declare function innerHeight(node: HTMLElement): number;
export declare function innerWidth(node: HTMLElement): number;
export declare function isNum(num: any): boolean;
export declare function getBoundPosition({ bounds, node }: any, x: number, y: number): [number, number];
export declare function canDragX(axis: string): boolean;
export declare function canDragY(axis: string): boolean;
export declare function getTranslation({ x, y }: ControlPosition, positionOffset: any, unitSuffix: string): string;
export declare function createCSSTransform(controlPos: ControlPosition, positionOffset: any): any;
