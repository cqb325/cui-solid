export declare const CheckedMode: {
    Full: number;
    Half: number;
    Child: number;
    Shallow: number;
};
declare class Datum {
    data: any[];
    dataMap: any;
    valueMap: any;
    mode: number;
    lastSelected: string;
    links: any;
    levels: any[];
    checkRelation: string;
    constructor(props: any);
    setData(data: any[]): void;
    initData(parent: any, data: any[], level: number): any[];
    initValue(ids: null | any[], value: any[]): number | undefined;
    initDisabled(ids: any[] | null, parentDisabled: boolean): void;
    setValue(value: any[]): void;
    setValueMap(id: any, checked: number | undefined): void;
    getAllChecked(): any;
    getParentIds(id: any, parentIds: any[]): void;
    getOpened(): any[];
    getValue(mode: 0 | 1 | 2 | 3): any[];
    getAllCheckedData(ids: any[]): any[];
    getText(ids: any[]): string[];
    /**
     * 预先选择，返回被选择的节点
     * @param ids
     * @param direction
     */
    ifSets(ids: any[]): string[];
    ifSet(id: any, checked: number, direction: string, map: any): void;
    set(id: any, checked: number, direction: string): void;
    disabledNode(id: any): void;
    isDisabled(id: any): any;
    /**
     * 动态添加子节点
     * @param id
     * @param children
     */
    addChildren(id: any, children: any[]): void;
}
export default Datum;
