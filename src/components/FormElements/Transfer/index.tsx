import { createStore } from "solid-js/store"
import { Button } from "../../Button"
import { Icon } from "../../Icon"
import { useClassList } from "../../utils/useProps"
import { List } from "./List"
import type { Signal} from "solid-js";
import { createEffect } from "solid-js"
import createField from "../../utils/createField"

type TransferProps = {
    classList?: any,
    class?: string,
    style?: any,
    width?: number,
    height?: number,
    data?: any[],
    value?: any[] | Signal<any>,
    filter?: boolean,
    render?: (item: any) => any,
    onChange?: (value: any[]) => void,
}

export type TransferStore = {
    data: any[],
    sourceDisabled: boolean,
    targetDisabled: boolean,
    sourceIds: any[],
    targetIds: any[],
}
export function Transfer (props: TransferProps) {
    const [value, setValue] = createField<any[]>(props, []);
    const classList = () => useClassList(props, 'cm-transfer')
    const [store, setStore] = createStore<TransferStore>({
        data: [],
        sourceDisabled: true,
        targetDisabled: true,
        sourceIds: [],
        targetIds: []
    });

    createEffect(() => {
        setStore('data', props.data || []);
    });

    const onSelect = (data: any, checked: boolean) => {
        if (!data.disabled) {
            setStore('data', (item: any) => item.id === data.id, '_checked', checked);
        }
    }

    const transferToTarget = () => {
        store.sourceIds.forEach((id: any) => {
            setStore('data', (item: any) => item.id === id, '_checked', false);
        });
        let v = value();
        v = v.concat([...store.sourceIds]);
        setStore('sourceIds', []);
        setValue([...v]);
        props.onChange && props.onChange([...v]);
    }

    const transferToSource = () => {
        store.targetIds.forEach((id: any) => {
            setStore('data', (item: any) => item.id === id, '_checked', false);
        });
        const v = value();
        store.targetIds.forEach((id: any) => {
            v.splice(v.indexOf(id), 1);
        });
        setStore('targetIds', []);
        setValue([...v]);
        props.onChange && props.onChange([...v]);
    }

    return <div classList={classList()} style={props.style}>
        <List width={props.width} height={props.height} store={store} setStore={setStore} name="source"
            value={value()} onSelect={onSelect} filter={props.filter} render={props.render}/>
        <div class="cm-transfer-operation">
            <Button disabled={store.sourceDisabled} icon={<Icon name="chevron-right"/>} size="small" onClick={transferToTarget}>To Right</Button>
            <Button disabled={store.targetDisabled} icon={<Icon name="chevron-left"/>} size="small" onClick={transferToSource}>To Left</Button>
        </div>
        <List width={props.width} height={props.height} store={store} setStore={setStore} name="target"
            value={value()} onSelect={onSelect} filter={props.filter} render={props.render}/>
    </div>
}
