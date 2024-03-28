import { Show, createSignal } from "solid-js";
import { InnerCheckbox } from "../inner/Checkbox";
import { SubNodes } from "./SubNodes";
import { useTreeContext } from ".";
import { Loading } from "../inner/Loading";

export function Node (props: any) {
    const ctx: any = useTreeContext();
    const [loading, setLoading] = createSignal(false);
    const style = () => ({
        'padding-left': props.level * props.gutter + 'px'
    })

    const opened = () => {
        return props.store.dataMap[props.data.id]._opened;
    }
    const selected = () => {
        return props.store.dataMap[props.data.id]._selected;
    }

    const classList = () => ({
        'cm-tree-item': true,
        'cm-tree-item-open': opened(),
        'cm-tree-item-selected': selected()
    })

    const icon = () => {
        let icon = props.directory? (hasChildren() ? <span class="cm-tree-item-folder" />
        : <span class="cm-tree-item-file" />) : null;
        if (props.data.icon) {
            icon = <span class="cm-tree-item-icon">{props.data.icon}</span>;
        }
        return icon;
    }

    const onSelect = () => {
        if (props.store.dataMap[props.data.id].disabled) {
            return;
        }
        ctx && ctx.onSelect && ctx.onSelect(props.data);
    }

    const onOpenClose = async () => {
        if (ctx) {
            // 需要异步加载数据
            const item = props.store.dataMap[props.data.id];
            if (item.loading && ctx.loadData) {
                setLoading(true);
                try {
                    const ret = await ctx.loadData(props.data);
                    if (!(ret instanceof Array)) {
                        ctx.addChildren(item.id, props.data, [ret]);
                    } else {
                        ctx.addChildren(item.id, props.data, ret);
                    }
                    ctx.cancelLoading(item.id);
                } catch (e) {
                    // todo
                } finally {
                    setLoading(false);
                }
            }
            ctx.onOpenClose(props.data.id);
        }
    }

    const onChecked = (checked: boolean) => {
        ctx && ctx.onChecked(props.data.id, checked);
    }

    const hasChildren = () => props.data.children && props.data.children.length || props.data.loading;

    const checkStatus = () => {
        let checked: number | string = 0;
        checked = props.store.checkedMap[props.data.id];
        if (checked === 2) {
            return 'indeterminate';
        }
        return checked === 1;
    }

    const onContextMenu = (e: any) => {
        if (ctx && ctx.contextMenu) {
            // e.stopImmediatePropagation && e.stopImmediatePropagation();
            // e.preventDefault && e.preventDefault();
            // e.stopPropagation && e.stopPropagation();
            ctx.onContextMenu && ctx.onContextMenu({...props.data});
        }
    }

    return <li classList={classList()}>
        <div class="cm-tree-item-content" style={style()}>
            <Show when={loading()} fallback={<span class={`cm-tree-arrow ${hasChildren() ? '' : 'hide'}`} onClick={onOpenClose}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3571" width="16" height="16"><path d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z" p-id="3572" /></svg>
            </span>}>
                <Loading color={'#1890ff'} size={16}/>
            </Show>
            <Show when={props.multi}>
                <InnerCheckbox disabled={props.store.dataMap[props.data.id].disabled} checked={checkStatus()} onChange={onChecked}/>
            </Show>
            {icon()}
            <span onContextMenu={onContextMenu} class={`cm-tree-title ${props.store.dataMap[props.data.id].disabled ? 'disabled' : ''}`}>
                <span class="cm-tree-text" onClick={onSelect}>{props.data.title}</span>
                {props.data.patch ? <span class="cm-tree-patch">{props.data.patch}</span> : null}
            </span>
        </div>
        <Show when={props.data.children && props.data.children.length}>
            <SubNodes onSelect={onSelect} multi={props.multi} directory={props.directory}
                store={props.store} data={props.data.children} level={props.level + 1} gutter={props.gutter}/>
        </Show>
    </li>
}
