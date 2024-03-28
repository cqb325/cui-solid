import { Collapase } from "../inner/Collapase";
// import CTitle from "./Title";
import { Icon } from "../Icon";
import { useAccordionContext } from ".";
import { useClassList } from "../utils/useProps";
import type { JSXElement} from "solid-js";
import { createEffect, createSignal } from "solid-js";

type AccordionItemProps = {
    name?: string,
    style?: any,
    title?: any,
    icon?: JSXElement,
    children?: any
}

export function Item (props: AccordionItemProps) {
    const ctx: any = useAccordionContext();
    const signal = ctx?.signal;
    const onSelect = ctx?.onSelect;
    const multi = ctx?.flex ? false : ctx?.multi;
    const [activeKey, setActiveKey] = signal;
    const [opened, setOpened] = createSignal(false);
    const [end, setEnd] = createSignal(false);

    const onTitleClick = () => {
        let v;
        let open = false;
        if (!multi) {
            if (activeKey() === props.name) {
                if (ctx?.flex) {
                    return;
                }
                v = '';
                open = false;
            } else {
                v = props.name;
                open = true;
            }
        } else {
            const currentKey = activeKey();
            if (currentKey.includes(props.name)) {
                const index = currentKey.indexOf(props.name);
                currentKey.splice(index, 1);
                v = [].concat(currentKey);
                open = false;
            } else {
                currentKey.push(props.name);
                v = [].concat(currentKey);
                open = true;
            }
        }
        setActiveKey(v);
        onSelect && onSelect(props.name, open, v);
    }

    createEffect(() => {
        let open = false;
        const currentKey = activeKey();
        if (!multi) {
            open = currentKey === props.name;
        } else {
            open = currentKey.includes(props.name);
        }
        setEnd(false);
        setOpened(open);
    });

    const classList = () => useClassList(props, 'cm-accordion-item', {
        'cm-accordion-item-active': opened(),
        'cm-accordion-item-full': opened() && end()
    });

    const onEnd = () => {
        setEnd(true);
    }
    return <div classList={classList()} style={props.style}>
        <div class="cm-accordion-title" onClick={onTitleClick}>
            {props.icon}
            <div class="cm-accordion-item-title-text">{props.title}</div>
            <Icon class="cm-accordion-title-arrow" name="chevron-right"/>
        </div>
        <Collapase open={opened()} onEnd={onEnd}>
            <div class="cm-accordion-content">{props.children}</div>
        </Collapase>
    </div>
}
