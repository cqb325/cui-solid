import type { Signal} from "solid-js";
import { Show, batch, createContext, createEffect, createMemo, untrack, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import createModel from "../utils/createModel";
import { useClassList } from "../utils/useProps";
import Datum from "./Datum";
import { SubNodes } from "./SubNodes";
import { Dropdown } from "../Dropdown";

export type TreeProps = {
    classList?: any,
    class?: string,
    style?: any,
    data?: any[],
    onSelect?: (data: any) => void,
    opened?: any[],
    selected?: string | number | Signal<any>,
    ref?: any,
    gutter?: number,
    value?: any[],
    multi?: boolean,
    directory?: boolean,
    onChange?: (vals: any) => void,
    loadData?: (data: any) => any,
    onContextMenu?: (data: any) => void,
    contextMenu?: any,
    onSelectMenu?: ((name: string) => void),
    checkRelation?: 'related'|'unRelated'
}

const TreeContext = createContext();

export function Tree (props: TreeProps) {
    const classList = () => useClassList(props, 'cm-tree');
    const [value, setValue] = createModel(props, 'value', '');
    const [opened, setOpened] = createModel<any[]>(props, 'opened', []);
    const [selected, setSelected] = createModel(props, 'selected', '');
    const gutter = props.gutter ?? 24;
    const checkRelation = props.checkRelation ?? 'related';

    let datum: any = new Datum({
        value: value() || [],
        checkRelation,
        data: props.data
    });

    createEffect(() => {
        datum = new Datum({
            value: [],
            checkRelation,
            data: props.data
        });

        batch(() => {
            setStore('data', props.data);
            setStore('dataMap', datum.dataMap);
            setStore('selected', '');
            setStore('openIds', []);
            setStore('checkedMap', {...datum.valueMap});
        });
        untrack(() => {
            // setSelected(selected() || '');
        })
    })

    const [store, setStore] = createStore({
        data: props.data,
        dataMap: datum.dataMap,
        selected: '',
        openIds: [],
        checkedMap: {...datum.valueMap}
    } as any);

    /**
     * 打开某个id
     * @param id
     */
    const openNode = (id: any) => {
        const openIds = opened();
        if (!openIds.includes(id)) {
            openIds.push(id);
            setOpened([...openIds]);
        }
    }

    const closeNode = (id: any) => {
        const openIds = opened();
        if (openIds.includes(id)) {
            const index = openIds.indexOf(id);
            openIds.splice(index, 1);
            setOpened(openIds);
        }
    }

    const checkNode = (id: any, checked: boolean) => {
        datum.set(id, checked ? 1 : 0, '');
        const vals = datum.getAllChecked();
        setValue(vals);
    }

    // 展开控制
    createEffect(() => {
        const openIds = opened();

        untrack(() => {
            store.openIds.forEach((lastOpenId: any) => {
                if (!openIds.includes(lastOpenId)) {
                    setStore('dataMap', lastOpenId, produce((item: any) => {
                        if (item._opened) {
                            item._opened = false;
                        }
                    }))
                }
            })
        })

        openIds.forEach((openId: any) => {
            setStore('dataMap', openId, produce((item: any) => {
                if (!item._opened) {
                    item._opened = true;
                }
            }))
        })
        setStore('openIds', openIds.concat([]));
    });

    // 选择控制
    createEffect(() => {
        const selectedId = selected();
        setStore('dataMap', store.selected, produce((item: any) => {
            item._selected = false;
        }))
        setStore('dataMap', selectedId, produce((item: any) => {
            item._selected = true;
        }))
        setStore('selected', selectedId);
    });

    // 选择框选择
    createEffect(() => {
        let vals: any = value();
        if (props.multi && typeof vals === 'string') {
            vals = vals.split(',');
        }

        datum.setValue(vals);
        const all = datum.getAllChecked();

        const lastChecked: any[] = [];
        untrack(() => {
            for (const i in store.checkedMap) {
                if (store.checkedMap[i] && !vals.includes(i)) {
                    lastChecked.push(i);
                }
            }
        })
        lastChecked.forEach((lastChecked: any) => {
            setStore('checkedMap', lastChecked, datum.valueMap[lastChecked]);
        })

        all && all.forEach((val: string | number) => {
            setStore('checkedMap', val, datum.valueMap[val]);
        })
    });

    const onOpenClose = (id: any) => {
        const openIds = opened();
        if (openIds.includes(id)) {
            const index = openIds.indexOf(id);
            openIds.splice(index, 1);
        } else {
            openIds.push(id);
        }
        setOpened([...openIds]);
    }

    const onSelect = (data: any) => {
        setSelected(data.id);
        props.onSelect && props.onSelect(data);
    }

    const selectNode = (id: any) => {
        setSelected(id);
    }

    // 选择框选中修改value值
    const onChecked = (id: any, checked: boolean) => {
        datum.set(id, checked ? 1 : 0, '');
        const vals = datum.getAllChecked();
        setValue(vals);
        props.onChange && props.onChange(vals);
    }

    /**
     * 动态添加子节点
     * @param id
     * @param item
     * @param children
     */
    const addChildren = (id: any, item: any, children: any[]) => {
        const aitem = store.dataMap[id];
        if (aitem) {
            datum.addChildren(id, children);
            datum.set(id, 0, '');
            const vals = datum.getAllChecked();
            setValue(vals);
            setStore('dataMap', id, produce((node: any) => {
                node.children = [];
                setTimeout(() => {
                    node.children = children;
                });
            }));

            setStore('dataMap', produce((map: any) => {
                children.map((child: any) => {
                    map[child.id] = child;
                });
            }))
        }
    }

    const cancelLoading = (id: any) => {
        setStore('dataMap', id, 'loading', false);
    }

    /**
     * 获取选中的节点
     * @returns
     */
    const getSelectNode = () => {
        return store.dataMap[store.selected];
    }

    props.ref && props.ref({
        openNode,
        closeNode,
        checkNode,
        getAllChecked: () => {
            return datum.getValue(0)
        },
        getAllCheckedData: (ids: any[]) => {
            return datum.getAllCheckedData(ids);
        },
        getHalfChecked: () => {
            return datum.getValue(1)
        },
        getChildChecked: () => {
            return datum.getValue(2)
        },
        getShallowChecked: () => {
            return datum.getValue(3)
        },
        getText: (ids: any[]) => {
            return datum.getText(ids);
        },
        disabledNode: datum.disabledNode,
        selectNode,
        getSelectNode,
        setValue: (ids: any) => {
            setValue(ids);
        },
        getIfSets: (ids: any[]) => {
            return datum.ifSets(ids)
        }
    });

    return <TreeContext.Provider value={{signal: [store, setStore], onSelect , onOpenClose, onChecked,
        loadData: props.loadData, addChildren, cancelLoading, onContextMenu: props.onContextMenu,
        contextMenu: props.contextMenu}}>
        <Show when={props.contextMenu} fallback={
            <div classList={classList()}>
                <SubNodes store={store} data={store.data} level={0} gutter={gutter} multi={props.multi} directory={props.directory}/>
            </div>
        }>
            <Dropdown trigger="contextMenu" handler=".cm-tree-text" align="bottomLeft" menu={props.contextMenu} onSelect={props.onSelectMenu}>
                <div classList={classList()}>
                    <SubNodes store={store} data={store.data} level={0} gutter={gutter} multi={props.multi} directory={props.directory}/>
                </div>
            </Dropdown>
        </Show>
    </TreeContext.Provider>
}

export const useTreeContext = () => useContext(TreeContext);
