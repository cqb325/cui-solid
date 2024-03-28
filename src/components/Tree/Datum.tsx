export const CheckedMode = {
    // 只返回全选数据，包含父节点和子节点
    Full: 0,

    // 返回全部选中子节点和部分选中的父节点
    Half: 1,

    // 只返回选中子节点
    Child: 2,

    // 如果父节点下所有子节点全部选中，只返回父节点
    Shallow: 3
};

class Datum {
    data: any[] = [];
    dataMap: any = {};
    valueMap: any = {};
    mode: number = 1;
    lastSelected: string = '';
    links: any;
    levels: any[] = [];
    checkRelation: string = 'related';

    constructor (props: any) {
        this.data = props.data;
        this.checkRelation = props.checkRelation;
        this.setData(this.data);
        this.setValue(props.value);
        this.initDisabled(null, false);
    }

    setData (data: any[]) {
        this.dataMap = {};
        this.valueMap = {};
        this.data = data;
        this.links = {};
        this.levels = [];

        if (!data) { return; }
        this.initData(null, data, 0);
    }

    initData (parent: any, data: any[], level: number) {
        const ids: any[] = [];
        this.levels[level] = [];
        data.forEach((item) => {
            item._level = level;
            ids.push(item.id);
            this.dataMap[item.id] = item;
            const link: any = {};
            this.links[item.id] = link;
            link.parent = parent ? parent.id : null;
            this.levels[level].push(item.id);
            if (item.children) {
                const childKeys = this.initData(item, item.children, level + 1);
                link.children = childKeys;
            }
        });
        return ids;
    }

    initValue (ids: null | any[], value: any[]): number|undefined {
        if (!this.data || !value) { return 0; }
        if (!ids) {
            ids = this.levels[0];
        }
        let checked: number|undefined = undefined;
        ids?.forEach(id => {
            const children = this.links[id].children;
            let childChecked: number|undefined = value.includes(id) ? 1 : 0;
            if (children && children.length > 0) {
                if (this.checkRelation === 'related') {
                    childChecked = this.initValue(children, value);
                } else {
                    this.initValue(children, value);
                }
            }
            this.setValueMap(id, childChecked);
            if (checked === undefined) {
                checked = childChecked;
            } else if (checked !== childChecked) {
                checked = 2;
            }
        });
        return checked;
    }

    initDisabled (ids: any[] | null, parentDisabled: boolean) {
        if (!ids) {
            ids = this.levels[0];
        }
        ids?.forEach((id: any) => {
            const disabled = this.dataMap[id].disabled || parentDisabled;
            this.dataMap[id].disabled = disabled;
            const children = this.links[id].children;
            if (children && children.length > 0) {
                this.initDisabled(children, disabled);
            }
        })
    }

    setValue (value: any[]) {
        this.initValue(null, value);
    }

    setValueMap (id: any, checked: number|undefined) {
        this.valueMap[id] = checked;
    }

    getAllChecked () {
        const ret: any = [];
        for (const val in this.valueMap) {
            if (this.valueMap[val]) {
                ret.push(val);
            }
        }
        return ret;
    }

    getParentIds (id: any, parentIds: any[]) {
        parentIds.push(id);
        const link = this.links[id];
        if (link.parent) {
            this.getParentIds(link.parent, parentIds);
        }
    }

    getOpened () {
        const ids: any[] = [];
        this.dataMap.forEach((item: any) => {
            if (item._open) {
                ids.push(item.id);
            }
        });
        return ids;
    }

    getValue (mode: 0|1|2|3) {
        const value: any[] = [];
        for (const id in this.valueMap) {
            const checked = this.valueMap[id];
            switch (mode) {
                case CheckedMode.Full:
                    if (checked === 1) { value.push(id); }
                    break;
                case CheckedMode.Half:
                    if (checked >= 1) { value.push(id); }
                    break;
                case CheckedMode.Child: {
                    const children = this.links[id].children;
                    if (checked === 1 && (!children || children.length === 0)) { value.push(id); }
                    break;
                }
                case CheckedMode.Shallow:
                    if (checked === 1) {
                        const parentChecked = (() => {
                            const pid = this.links[id].parent;
                            if (!pid) { return false; }
                            return this.valueMap[pid] === 1;
                        })();
                        if (!parentChecked) { value.push(id); }
                    }
                    break;
                default:
            }
        }
        return value;
    }
    getAllCheckedData (ids: any[]) {
        const arr: any[] = [];
        ids.forEach((id: any) => {
            const item = this.dataMap[id];
            arr.push(item);
        });
        return arr;
    }
    getText (ids: any[]) {
        const text: string[] = [];
        ids.forEach((id: any) => {
            const item = this.dataMap[id];
            text.push(item.title);
        });
        return text;
    }

    /**
     * 预先选择，返回被选择的节点
     * @param ids
     * @param direction
     */
    ifSets (ids: any[]) {
        const map: any = {};
        ids.forEach((id: any) => {
            this.ifSet(id, 1, '', map);
        });
        const arr = [];
        for (const key in map) {
            if (map[key]) {
                arr.push(key);
            }
        }
        return arr;
    }

    ifSet (id: any, checked: number, direction: string, map: any) {
        if (!this.isDisabled(id)) { map[id] = checked; }
        const { parent, children } = this.links[id];

        // children
        if (direction !== 'asc') {
            children && children.forEach((cid: any) => {
                this.ifSet(cid, checked, 'desc', map);
            });
        }

        // parent
        if (direction !== 'desc' && parent) {
            const parentId = parent;
            let parentChecked = checked;
            this.links[parentId].children.forEach((cid: any) => {
                if (parentChecked !== map[cid]) {
                    parentChecked = 2;
                }
            });
            this.ifSet(parentId, parentChecked, 'asc', map);
        }
    }

    set (id: any, checked: number, direction: string) {
        // self
        if (!this.isDisabled(id)) { this.setValueMap(id, checked); }
        if (this.checkRelation === 'unRelated') {
            return;
        }
        const { parent, children } = this.links[id];

        // children
        if (direction !== 'asc') {
            children && children.forEach((cid: any) => {
                this.set(cid, checked, 'desc');
            });
        }

        // parent
        if (direction !== 'desc' && parent) {
            const parentId = parent;
            let parentChecked = checked;
            this.links[parentId].children.forEach((cid: any) => {
                if (parentChecked !== this.valueMap[cid]) {
                    parentChecked = 2;
                }
            });
            this.set(parentId, parentChecked, 'asc');
        }
    }

    // select (id) {
    //     if (this.lastSelected) {
    //         const update = this.nodeEvents[this.lastSelected];
    //         update && update();
    //     }
    //     const update = this.nodeEvents[id];
    //     update && update();
    //     this.lastSelected = id;
    // }

    // isSelected (id) {
    //     return this.lastSelected === id;
    // }

    // setOpened (ids, opened) {
    //     const temp = new Set(ids.split(','));
    //     for (const id in this.dataMap) {
    //         const item = this.dataMap[id];
    //         const hasChildren = item.children && item.children.length;
    //         if (hasChildren && temp.has(id)) {
    //             if (opened !== undefined) {
    //                 item.open = opened;
    //             }
    //             const update = this.nodeEvents[id];
    //             if (update) {
    //                 update();
    //             }
    //         }
    //     }
    // }

    disabledNode (id: any) {
        this.initDisabled([id], true);
    }

    isDisabled (id: any) {
        const node = this.dataMap[id];
        if (node) { return node.disabled; }
        return false;
    }

    /**
     * 动态添加子节点
     * @param id
     * @param children
     */
    addChildren (id: any, children: any[]) {
        const item = this.dataMap[id];
        if (item) {
            children.forEach((child: any) => {
                this.dataMap[child.id] = child;
            });
        }
        const link: any = this.links[id];
        const ids = children.map((child: any) => {
            const link: any = {};
            this.links[child.id] = link;
            link.parent = id;
            return child.id;
        });
        link.children = ids;
    }
}

export default Datum;
