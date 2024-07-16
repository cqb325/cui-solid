import type { Accessor, JSXElement} from "solid-js";
import { For, Show, createEffect, createMemo, createUniqueId, untrack } from "solid-js"
import { useClassList } from "../utils/useProps"
import { Tag } from "../Tag"
import { Popover } from "../Popover"
import { createStore } from "solid-js/store"


export interface TagConfig {
    id: string|number
    title: string
    theme?: 'primary'|'danger'|'warning'|'success'|'info'|'magenta'|'red'|'volcano'|'orange'|'gold'|'yellow'|'lime'|'green'|'cyan'|'blue'|'geekblue'|'purple',
    avatar?: JSXElement
}

export interface TagGroupProps {
    style?: any
    classList?: any
    class?: string
    data: TagConfig[]
    closable?: boolean
    max?: number
    showMore?: boolean,
    size?: 'small'|'large'
    extra?: JSXElement
    onClose? (item: TagConfig, e: any): void
}

export function TagGroup (props: TagGroupProps) {
    const classList = () => useClassList(props, 'cm-tag-group', {})

    const [store, setStore] = createStore({
        list: [],
        show: [],
        hide: []
    } as {list: TagConfig[], show: TagConfig[], hide: TagConfig[]});

    const onClose = (item: TagConfig, e: any) => {
        const newList = store.list.filter(aitem => {
            return aitem.id !== item.id;
        })
        setStore('list', newList);
        props.onClose && props.onClose(item, e);
    }

    createEffect(() => {
        setStore('list', props.data);
    })

    createEffect(() => {
        const list = store.list;
        const max = props.max ?? list.length;

        const show:TagConfig[] = [];
        const hide:TagConfig[] = [];
        untrack(() => {
            for (let i = 0; i < max; i++) {
                list[i] && show.push(list[i]);
            }
            const length = props.data.length;
            for (let i = max; i < length; i++) {
                hide.push(list[i]);
            }
            setStore('show', show);
            setStore('hide', hide);
        })
    })

    return <div classList={classList()} style={props.style}>
        <For each={store.show}>
            {(item: any) => {
                return <Tag closable={props.closable} size={props.size} theme={item.theme} avatar={item.avatar} onClose={(e: any) => {
                    onClose(item, e);
                }}>{item.title}</Tag>
            }}
        </For>
        <Show when={props.max && store.list.length > props.max}>
            <Show when={props.showMore} fallback={<Tag class="cm-tag-more"><span>+</span>{store.hide.length}</Tag>}>
                <Popover align="top" arrow theme="light" content={
                    <div class="cm-tag-group-more-wrap">
                        <For each={store.hide}>
                            {(item: TagConfig, index: Accessor<number>) => {
                                return <Tag size={props.size} theme={item.theme} avatar={item.avatar}>{item.title}</Tag>
                            }}
                        </For>
                    </div>
                }>
                    <Tag class="cm-tag-more"><span>+</span>{store.hide.length}</Tag>
                </Popover>
            </Show>
        </Show>
        { props.extra }
    </div>
}
