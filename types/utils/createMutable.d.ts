declare const $NODE: unique symbol;
declare type DataNode = {
    (): any;
    $(value?: any): void;
};
declare type DataNodes = Record<PropertyKey, DataNode | undefined>;
interface StoreNode {
    [$NODE]?: DataNodes;
    [key: PropertyKey]: any;
}
export declare function createMutable<T extends StoreNode>(state: T, options?: {
    onUpdateField?: (key: string, value: any, path: string) => void;
}): T;
export {};
