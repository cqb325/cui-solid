import { For, Show, createEffect } from "solid-js";
import { BothSide } from "../../Layout";
import { InnerCheckbox } from "../../inner/Checkbox";
import { ListItem } from "./ListItem";
import type { SetStoreFunction} from "solid-js/store";
import { produce } from "solid-js/store";
import { Input } from "../Input";
import type { TransferStore } from ".";
import { FeatherSearch } from "cui-solid-icons/feather";

export interface TransferListProps {
    width?: number,
    height?: number,
    store?: any,
    setStore: SetStoreFunction<TransferStore>,
    name?: string,
    value?: any[],
    onSelect: (item: any, checked: boolean) => void,
    render?: (item: any) => any,
    filter?: boolean
}
export function List (props: TransferListProps) {
    const style = () => ({
        width: props.width ? `${props.width}px` : '',
        height: props.height ? `${props.height}px` : '',
    })
    const data = () => {
        const v = props.value || [];
        const map: any = {};
        v.forEach((vv: any) => {
            map[vv] = true;
        })
        return props.store.data.filter((item: any) => {
            if (props.name === 'source') {
                return !map[item.id];
            } else {
                return map[item.id];
            }
        })
    }

    const validLength = () => {
        let length = 0;
        data().forEach((item: any) => {
            if (!item.disabled) {
                length++;
            }
        })
        return length;
    }

    const onSelect = (data: any) => {
        props.onSelect(data, !data._checked);
        if (data._checked) {
            const key: any = `${props.name}Ids`;
            props.setStore(key, [...props.store[`${props.name}Ids`], data.id]);
        } else {
            const key: any = `${props.name}Ids`;
            props.setStore(key, produce((arr: any[]) => {
                arr.splice(arr.indexOf(data.id), 1);
            }));
        }
    }

    const isCheckedAll = () => {
        const arr = props.store[`${props.name}Ids`];
        if (arr.length > 0) {
            if (validLength() === arr.length) {
                return true;
            } else {
                return 'indeterminate';
            }
        } else {
            return false;
        }
    };

    const onCheckedAll = (checked: boolean) => {
        const ids: any[] = [];
        const items = data();
        items.forEach((item: any) => {
            props.onSelect(item, checked);
        })
        items.forEach((item: any) => {
            if (item._checked) {
                ids.push(item.id);
            }
        })
        props.setStore(`${props.name}Ids` as any, ids);
    }

    createEffect(() => {
        const arr = props.store[`${props.name}Ids`];
        if (arr.length) {
            props.setStore && props.setStore(`${props.name}Disabled` as any, false);
        } else {
            props.setStore && props.setStore(`${props.name}Disabled` as any, true);
        }
    });

    // 过滤
    const onFilter = (v: any) => {
        const arr = data();
        arr.forEach((item: any) => {
            const text = () => {
                if (props.render) {
                    return props.render(item);
                }
                return item.title;
            }
            props.setStore('data', (aitem: any) => aitem.id === item.id, '_hide', !text().includes(v));
        })
    }

    const count = () => data().length;
    const countInfo = () => {
        const arr = props.store[`${props.name}Ids`];
        return arr.length ? arr.length + '/' + count() : count()
    }
    return <div class="cm-transfer-list" style={style()}>
        <div class="cm-transfer-list-header">
            <BothSide>
                <div>
                    <InnerCheckbox checked={isCheckedAll()} onChange={onCheckedAll}/>
                    <span>{props.name === 'source' ? '源列表' : '目标列表'}</span>
                </div>
                <div class="">{countInfo()}</div>
            </BothSide>
        </div>
        <div class="cm-transfer-list-body">
            <Show when={props.filter}>
                <div class="cm-transfer-filter-wrap">
                    <Input append={<FeatherSearch/>} size="small" onInput={onFilter}/>
                </div>
            </Show>
            <div class="cm-transfer-list-content">
                <For each={data()}>
                    {(item: any) => {
                        return <ListItem data={item} onSelect={onSelect} store={props.store} render={props.render}/>
                    }}
                </For>
            </div>
        </div>
    </div>
}
