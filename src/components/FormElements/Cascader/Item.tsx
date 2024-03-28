import { Show, createSignal } from "solid-js";
import { Loading } from "../../inner/Loading";
import { Icon } from "../../Icon";
import { useCascaderContext } from ".";

export function Item (props: any) {
    const [store, setStore] = props.store;
    const selected = () => (store.selectedValue.includes(props.data.value));
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
                const children = await ctx.loadData(props.data);
                ctx && ctx.addChildren(props.data, children);
                props.data.loading = false;
            } catch (e) {
                // todo
            } finally {
                setLoading(false);
            }
        }
        if (props.trigger === 'click') {
            activeItem();
        }
        ctx && ctx.onSelect(props.data);
    }
    const activeItem = () => {
        const vals = [];
        for (let i = 0; i < props.level; i++) {
            vals.push(store.selectedValue[i]);
        }
        vals[props.level] = props.data.value;
        setStore('selectedValue', vals);
    }

    let timer: any = null;
    const onMouseEnter = () => {
        if (props.data.disabled) {
            return;
        }
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            activeItem();
        }, 100);
    }
    return <div classList={classList()} onClick={onClick}
        onMouseEnter={props.trigger === 'hover' ? onMouseEnter : undefined}>
        {props.data.icon}
        <span class="cm-cascader-text">{props.data.title}</span>
        <Show when={(props.data.children && props.data.children.length) || props.data.loading}>
            <Show when={loading()} fallback={<Icon name="chevron-right" class="cm-menu-submenu-cert"/>}>
                <Loading color="#1890ff"/>
            </Show>
        </Show>
    </div>
}
