import type { JSX, Signal} from "solid-js";
import { createEffect, For, Show, splitProps, untrack } from "solid-js"
import { useClassList } from "../utils/useProps"
import createModel from "../utils/createModel"
import { Input } from "../FormElements/Input"
import { FeatherSearch, FeatherX } from "cui-solid-icons/feather"
import { Button } from "../Button"
import { InnerCheckbox } from "../inner/Checkbox";
import { createMutable } from "solid-js/store";
import { Text } from "../Typography/Text";
import { VirtualList } from "../virtual-list";

export interface TeleportBoxItem {
    value: any
    label: any
    disabled?: boolean
    checked?: boolean
    children?: TeleportBoxItem[]
    [key: string]: any
}

export interface TeleportBoxProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    data?: TeleportBoxItem[]
    value?: Signal<any[]>
    defaultValue?: any[]
    disabled?: boolean
    virtual?: boolean
    onChange?: (value: any[]) => void
    renderSourceItem?: (item: TeleportBoxItem, onChange: (checked: boolean) => void) => JSX.Element
    renderSelectedItem?: (item: TeleportBoxItem, onRemove: () => void) => JSX.Element
    filter?: (item: TeleportBoxItem, keyword: string) => boolean
}

export function TeleportBox (props: TeleportBoxProps) {
    const [local, rest] = splitProps(props, ['classList', 'class', 'data', 'style', 'onChange',
        'disabled', 'renderSourceItem', 'renderSelectedItem', 'filter', 'value', 'defaultValue', 'virtual']);
    const classList = () => useClassList(local, 'cm-teleport-box', {
        'cm-teleport-box--disabled': local.disabled
    });
    const [value, setValue] = createModel<any[]>(local, 'value', []);
    const store = createMutable({
        leftList: [] as TeleportBoxItem[],
        rightList: [] as TeleportBoxItem[],
        originList: [] as TeleportBoxItem[],
        flatList: [] as TeleportBoxItem[],
        dataMap: {},
        checkedAll: false
    })

    const onFilter = (v: any) => {
        if (v) {
            const list = store.flatList?.filter(item => {
                if (local.filter) {
                    return local.filter(item, v);
                }
                if (item.children?.length) {
                    const childs = item.children?.filter(sub => (item.label as string).includes(v))
                    return childs?.length
                }
                return (item.label as string).includes(v);
            });
            store.leftList = list || [];
        } else {
            store.leftList = store.flatList || [];
        }
    }

    const initData = () => {
        const map: { [key: string]: TeleportBoxItem } = {};
        let originList: TeleportBoxItem[] = [];
        const vals = untrack(() => value());
        if (local.defaultValue) {
            local.defaultValue.forEach(v => {
                if (!vals.includes(v)) {
                    vals.push(v);
                }
            })
        }
        const list = props.data?.flatMap(item => {
            if (item.children?.length) {
                originList = originList.concat(item.children);
            } else {
                originList.push(item);
            }
            return [item, ...(item.children ? item.children : [])].flat();
        })
        list?.forEach(item => {
            if (vals.includes(item.value)) {
                item.checked = true;
            }
            map[item.value] = item;
        });
        store.originList = originList;
        store.flatList = list || [];
        store.dataMap = map;
        store.leftList = list || [];

        setValue([...vals]);
    }

    initData();

    createEffect(() => {
        initData();
    })

    createEffect(() => {
        const val = value();
        const total = store.originList.filter(item => !item.disabled || (item.disabled && item.checked)).length;
        if (props.data?.length && val.length === total) {
            store.checkedAll = true;
        } else {
            store.checkedAll = false;
        }
        const arr = val.map(v => {
            return (store.dataMap as any)[v];
        })
        store.rightList = arr;
    })

    const onChecked = (checked: boolean, item: TeleportBoxItem) => {
        if (props.disabled || item.disabled) {
            return;
        }
        item.checked = checked;
        let val: any[] = value() || [];
        const v = item.value;
        if (checked) {
            if (!val.includes(v)) {
                val = val.concat(v);
            }
        } else {
            const index = val.indexOf(v);
            if (index > -1) {
                val.splice(index, 1);
            }
        }
        setValue([...val]);
        props.onChange?.(value());
    }

    const onRemoveItem = (item: TeleportBoxItem) => {
        if (item.disabled) {
            return;
        }
        item.checked = false;
        const val = value();
        const index = val.indexOf(item.value);
        if (index > -1) {
            val.splice(index, 1);
        }
        setValue([...val]);
        props.onChange?.([...val]);
    }

    const clearAll = () => {
        const vals = value();
        const restVals: any[] = [];
        vals.forEach(val => {
            const item = (store.dataMap as any)[val];
            if (item.disabled) {
                restVals.push(item.value);
                return;
            }
            item.checked = false;
        })
        setValue(restVals);
        props.onChange?.(restVals);
    }

    const selectAll = () => {
        const vals: any[] = [];
        for (const val in store.dataMap) {
            const item = (store.dataMap as any)[val];
            if (item.children?.length) {
                continue;
            }
            if (item.disabled) {
                if (item.checked) {
                    vals.push(item.value);
                }
                continue;
            }
            item.checked = true;
            vals.push(item.value);
        }
        setValue(vals);
    }

    const renderSourceList = () => {
        return <For each={store.leftList}>
            {(item, index) => {
                if (item.children?.length) {
                    return <div class="cm-teleport-group-title">{item.label}</div>
                }
                return local.renderSourceItem?.(item, (checked: boolean) => {
                    onChecked(checked, item);
                }) || <InnerCheckbox disabled={item.disabled} checked={item.checked} onChange={(v) => onChecked(v, item)} label={item.label}/>
            }}
        </For>
    }

    const renderTargetList = () => {
        return <For each={value()}>
            {(val) => {
                const item: TeleportBoxItem = (store.dataMap as any)[val];
                if (!item) return null;
                return local.renderSelectedItem?.(item, () => {
                    onRemoveItem(item);
                }) || <div class="cm-teleport-right-item">
                    <Text>{item.label}</Text>
                    <Show when={!item.disabled}>
                        <FeatherX class="cm-teleport-right-item-close" onClick={() => onRemoveItem(item)}/>
                    </Show>
                </div>
            }}
        </For>;
    }

    return <div classList={classList()} style={local.style} {...rest}>
        <section class="cm-teleport-left">
            <div class="cm-teleport-header">
                <span class="cm-teleport-header-total">总个数：{store.originList?.length}</span>
                <Show when={store.checkedAll} fallback={
                    <Button size="small" theme="borderless" class="cm-teleport-select-all" onClick={selectAll}>全选</Button>
                }>
                    <Button size="small" theme="borderless" class="cm-teleport-select-all" onClick={clearAll}>取消全选</Button>
                </Show>
            </div>
            <div class="cm-teleport-filter">
                <Input suffix={<FeatherSearch/>} trigger="input" onChange={onFilter} placeholder="搜索" clearable/>
            </div>
            <div class="cm-teleport-left-list">
                <Show when={local.virtual} fallback={renderSourceList()}>
                    <VirtualList items={store.leftList} itemEstimatedSize={30} itemComponent={{
                        component: SourceItem,
                        props: {
                            renderSourceItem: local.renderSourceItem,
                            onChecked
                        }
                    }} />
                </Show>
            </div>
        </section>
        <section class="cm-teleport-right">
            <div class="cm-teleport-header cm-teleport-right-header">
                <span class="cm-teleport-header-total">已选个数：{value().length}</span>
                <Show when={value().length}>
                    <Button size="small" theme="borderless" class="cm-teleport-clear" onClick={clearAll}>清空</Button>
                </Show>
            </div>
            <div class="cm-teleport-right-list">
                <Show when={local.virtual} fallback={renderTargetList()}>
                    <VirtualList items={store.rightList} itemEstimatedSize={30} itemComponent={{
                        component: TargetItem,
                        props: {
                            renderSelectedItem: local.renderSelectedItem,
                            onRemoveItem,
                            store
                        }
                    }} />
                </Show>
            </div>
        </section>
    </div>
}

const SourceItem = (props: any) => {
    const item = props.item;
    return <Show when={item.children?.length} fallback={
            <div ref={props.ref}>
                {
                    props.renderSourceItem?.(item, (checked: boolean) => {
                        props.onChecked?.(checked, item);
                    }) || <InnerCheckbox ref={props.ref} disabled={item.disabled} checked={item.checked} onChange={(v) => props.onChecked(v, item)} label={item.label}/>
                }
            </div>
        }>
        <div ref={props.ref} class="cm-teleport-group-title">{item.label}</div>
    </Show>
}

const TargetItem = (props: any) => {
    const item: TeleportBoxItem = props.item;
    return <Show when={!(!item)}>{
            <div ref={props.ref}>
                {
                    props.renderSelectedItem?.(item, () => {
                        props.onRemoveItem?.(item);
                    }) || <div class="cm-teleport-right-item">
                        <Text>{item.label}</Text>
                        <Show when={!item.disabled}>
                            <FeatherX class="cm-teleport-right-item-close" onClick={() => props.onRemoveItem?.(item)}/>
                        </Show>
                    </div>
                }
            </div>
        }
    </Show>
}
