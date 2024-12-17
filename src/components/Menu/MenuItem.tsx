import type { JSXElement} from "solid-js";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import { useClassList } from "../utils/useProps";
import { useMenuContext } from ".";
import { Popover } from "../Popover";
import { FeatherChevronDown } from "cui-solid-icons/feather";

export interface MenuItemProps {
    name?: string,
    disabled?: boolean,
    isSubmenuTitle?: boolean,
    onSelect?: () => void,
    data?: any,
    children?: any,
    icon?: JSXElement,
    cert?: boolean
}

export function MenuItem (props: MenuItemProps) {
    if (!props.isSubmenuTitle && !props.name) {
        console.warn("MenuItem need name prop");
    }

    const [min, setMin] = createSignal(false);

    const ctx: any = useMenuContext();
    const classList = () => useClassList(props, 'cm-menu-item', {
        'cm-menu-item-disabled': props.disabled,
        'cm-menu-item-active': !props.isSubmenuTitle && props.name && ctx?.store.activeName === props.name
    });

    // 展开的副作用，更新菜单项的padding
    createEffect(() => {
        let flag = false;
        if (ctx && self && !props.isSubmenuTitle) {
            const parentName = self.parentElement.getAttribute('x-name');
            flag = ctx.store.min && parentName === '__root';
        }
        setMin(flag);
        if (!flag && ctx?.dir === 'v') {
            setTimeout(() => {
                const parentPadding = self.parentElement.getAttribute('x-padding');
                const padding = parseInt(parentPadding) + 16;
                self.style.paddingLeft = padding + 'px';
            }, 20)
        }
    });

    let self: any;
    onMount(() => {
        const parentPadding = self.parentElement.getAttribute('x-padding');
        const padding = parseInt(parentPadding) + 16;

        self.style.paddingLeft = ctx?.dir === 'h' ? '16px' : padding + 'px';

        if (!props.isSubmenuTitle) {
            const parentName = self.parentElement.getAttribute('x-name');
            const item = {
                name: props.name,
                parent: null,
                children: []
            }
            if (ctx && props.name) {
                ctx.treeMap[props.name] = item;
                if (parentName === '__root') {
                    ctx?.tree.push(item)
                } else {
                    const parent = ctx.treeMap[parentName];
                    item.parent = parent;
                    parent.children.push(item);
                }
            }
        }
    });

    const onSelect = () => {
        if (props.isSubmenuTitle && !ctx.store.min) {
            props.onSelect && props.onSelect();
        } else {
            ctx?.onSelect(props.name, props.data);
        }
    }
    return <Show when={min()} fallback={
        <li classList={classList()} ref={self} onClick={onSelect}>
            <div class="cm-menu-item-icon">{props.icon}</div>
            <div class="cm-menu-item-text">{props.children}</div>
            <Show when={props.cert}>
                <div class="cm-menu-item-cert">
                    <FeatherChevronDown size={14}/>
                </div>
            </Show>
        </li>
    }>
        <Popover align="right" arrow theme={ctx.theme} content={
            <div class="cm-menu-item-text">{props.children}</div>
        }>
            <li classList={classList()} ref={self} onClick={onSelect}>
                <div class="cm-menu-item-icon">{props.icon}</div>
            </li>
        </Popover>
    </Show>
}
