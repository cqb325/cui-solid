import { Show, createSignal } from "solid-js";
import { Loading } from "../../inner/Loading";
import { useCascaderContext } from ".";
import { InnerCheckbox } from "../../inner/Checkbox";
import type { CascaderStore } from "./store";
import { FeatherChevronRight } from "cui-solid-icons/feather";

export function Item (props: any) {
    const store: CascaderStore = props.store;
    const valueField = store.valueField || 'value';
    const titleField = store.titleField || 'title';
    const selected = () => (store.selectedKey().includes(props.data[valueField]));
    const classList = () => ({
        'cm-cascader-item': true,
        'cm-cascader-item-active': selected(),
        'cm-cascader-item-disabled': props.data.disabled
    })
    const ctx: any = useCascaderContext();
    const [loading, setLoading] = createSignal(false);
    const onClick = async () => {
        if (props.data.disabled) {
            return;
        }
        if (props.data.loading && ctx && ctx.loadData) {
            try {
                setLoading(true);
                await store.loadData(props.data, ctx.loadData);
            } catch (e) {
                // todo
            } finally {
                setLoading(false);
            }
        }
        if (props.trigger === 'click') {
            store.selectItem(props.data[valueField]);
        }
        ctx && ctx.onSelect(props.data);
    }
    // const activeItem = () => {
    //     const vals = [];
    //     for (let i = 0; i < props.level; i++) {
    //         vals.push(store.selectedValue[i]);
    //     }
    //     vals[props.level] = props.data.value;
    //     setStore('selectedValue', vals);
    // }

    let timer: any = null;
    const onMouseEnter = () => {
        if (props.data.disabled) {
            return;
        }
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            !selected() && store.selectItem(props.data[valueField]);
        }, 100);
    }

    const onCheckChange = (checked: boolean) => {
        store.checkNode(props.data[valueField], checked);
    }

    return <div classList={classList()} onClick={onClick}
        onMouseEnter={props.trigger === 'hover' ? onMouseEnter : undefined}>
        {props.data.icon}
        {ctx.multi ? <InnerCheckbox disabled={props.data.disabled} checked={props.data.checked} onChange={onCheckChange}/> : null}
        <span class="cm-cascader-text">{props.data[titleField]}</span>
        <Show when={(props.data.children && props.data.children.length) || props.data.loading}>
            <Show when={loading()} fallback={<FeatherChevronRight class="cm-menu-submenu-cert"/>}>
                <Loading color="#1890ff"/>
            </Show>
        </Show>
    </div>
}
