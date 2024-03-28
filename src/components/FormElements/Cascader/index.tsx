import type { Accessor, JSXElement} from "solid-js";
import { For, createContext, useContext, createEffect } from "solid-js";
import createModel from "../../utils/createModel";
import { useClassList } from "../../utils/useProps"
import { Value } from "../../inner/Value";
import { Dropdown } from "../../Dropdown";
import { createStore, produce } from "solid-js/store";
import { Menu } from "./Menu";
import createField from "../../utils/createField";

type CascaderProps = {
    classList?: any,
    class?: string,
    disabled?: boolean,
    clearable?: boolean,
    size?: 'small'|'large',
    prepend?: string | JSXElement,
    value?: string | string[] | number[],
    seperator?: string,
    transfer?: boolean,
    align?: 'bottomLeft'|'bottomRight',
    revers?: boolean,
    data: any[],
    onSelect?: (item: any) => void,
    onChange?: (value: any) => void,
    trigger?:'click'|'hover',
    changeOnSelect?: boolean,
    placeholder?: string,
    loadData?: (item: any) => Promise<any>
}

const CascaderContext = createContext();

function buildDataArray (arr: any[], arrData: any[]) {
    if (arr && arr.length) {
        arr.forEach((item: any) => {
            arrData.push(item);
            if (item.children) {
                buildDataArray(item.children, arrData)
            }
        });
    }
}

function buildDataMap (arr: any[], map: any) {
    if (arr && arr.length) {
        arr.forEach((item: any) => {
            map[item.value] = item;
            if (item.children) {
                buildDataMap(item.children, map)
            }
        });
    }
}

export type CascaderStore = {
    selectedValue: any[],
    columns: any[][]
}

export function Cascader (props: CascaderProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [value, setValue] = createField<any[]>(props, []);
    const trigger = props.trigger ?? 'click';

    const arrData: any[] = [];
    const mapData: any = {};
    const orignData = JSON.parse(JSON.stringify(props.data));
    buildDataArray(props.data, arrData);
    buildDataMap(orignData, mapData);

    const [store, setStore] = createStore<CascaderStore>({
        selectedValue: value() || [],
        columns: []
    });

    const seperator = props.seperator ?? '/';
    const align = props.align ?? 'bottomLeft';
    const classList = () => useClassList(props, 'cm-cascader', {
        'cm-cascader-disabled': props.disabled,
        'cm-cascader-clearable': !props.disabled && props.clearable && value() && value().length,
        [`cm-cascader-${props.size}`]: props.size
    });


    const valMap: any = {};
    const level1 = props.data.map(item => item.value)

    createEffect(() => {
        const val = value() || [];
        setStore('selectedValue', [...val])
    })

    createEffect(() => {
        const vals = store.selectedValue;
        const columns = [level1];
        if (vals && vals.length) {
            vals.forEach((val: any) => {
                if (valMap[val]) {
                    columns.push(valMap[val]);
                } else {
                    const item = mapData[val];
                    if (item && item.children) {
                        const levelIds = item.children.map((aItem: any) => aItem.value);
                        valMap[val] = levelIds;
                        columns.push(levelIds);
                    }
                }
            });
        }
        setStore('columns', columns);
    })

    const text = () => {
        const vals = value();
        const arr = vals ? vals.map((val: any) => {
            const item = mapData[val];
            return item.title;
        }) : [];

        return arr.length ? arr.join(seperator) : '';
    }

    const onSelect = (item: any) => {
        // 点击的是叶子节点或者设置点击即改变
        if (!(item.children && item.children.length) || props.changeOnSelect) {
            props.onSelect && props.onSelect(item);
            const vals = store.selectedValue;
            const rets = vals.map((val: any) => {
                return val;
            })
            setValue(rets);
            props.onChange && props.onChange(rets);
        }
        // 点击叶子节点进行关闭
        if (!(item.children && item.children.length)) {
            setVisible(false);
        }
    }

    const addChildren = (item: any, children: any[]) => {
        item.loading = false;
        item.children = children;
        children.forEach((item: any) => {
            mapData[item.value] = item;
        });
    }

    const onClear = () => {
        setValue([]);
        props.onChange && props.onChange([]);
    }

    return <CascaderContext.Provider value={{onSelect, loadData: props.loadData, addChildren}}>
        <div classList={classList()} tabIndex="0">
            <Dropdown visible={[visible, setVisible]} transfer={props.transfer} align={align} revers={props.revers}
                    trigger="click" disabled={props.disabled} menu={<div class="cm-cascader-wrap">
                        <For each={store.columns}>
                            {(column: any[], index: Accessor<number>) => {
                                return <Menu data={column} trigger={trigger}
                                    store={[store, setStore]} mapData={mapData} level={index()}/>
                            }}
                        </For>
                    </div>}>
                {/* <Value prepend={props.prepend} text={text()} clearable={props.clearable} value={props.value} seperator={seperator}/> */}
                <Value prepend={props.prepend} text={text()} onClear={onClear} clearable={props.clearable}
                        placeholder={props.placeholder} disabled={props.disabled} size={props.size} />
            </Dropdown>
        </div>
    </CascaderContext.Provider>
}

export const useCascaderContext = () => useContext(CascaderContext);
