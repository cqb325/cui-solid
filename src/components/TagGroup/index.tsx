import type { Accessor, JSXElement} from "solid-js";
import { For, Show, batch, createEffect, createMemo, createUniqueId, onCleanup, onMount, untrack } from "solid-js"
import { useClassList } from "../utils/useProps"
import { Tag } from "../Tag"
import type { PopoverProps } from "../Popover";
import { Popover } from "../Popover"
import { createStore, produce } from "solid-js/store"


export interface TagConfig {
    id: string|number
    title: string
    theme?: 'primary'|'danger'|'warning'|'success'|'info'|'magenta'|'red'|'volcano'|'orange'|'gold'|'yellow'|'lime'|'green'|'cyan'|'blue'|'geekblue'|'purple',
    avatar?: JSXElement
    [key: string]: any
}

export interface TagGroupProps {
    style?: any
    classList?: any
    class?: string
    data: TagConfig[]
    closable?: boolean
    max?: number | 'auto'
    showMore?: boolean
    moreCloseable?: boolean
    tooltipAlign?: PopoverProps['align'],
    tooltipTheme?: PopoverProps['color'],
    tooltipTrigger?: PopoverProps['trigger'],
    tooltipStyle?: PopoverProps['style'],
    size?: 'small'|'large'|'xlarge'
    extra?: JSXElement
    onClose? (item: TagConfig, e: any): void
}

export function TagGroup (props: TagGroupProps) {
    const classList = () => useClassList(props, 'cm-tag-group', {
        'cm-tag-group-overflow': props.max === 'auto',
    })
    const tooltipTheme = props.tooltipTheme ?? 'light';
    const tooltipAlign = props.tooltipAlign ?? 'top';
    const tooltipTrigger = props.tooltipTrigger ?? 'hover';
    let wrap: any;
    const showStyle = {
        position: '',
        height: '',
        'point-event': '',
        overflow: ''
    }

    const hideStyle = {
        position: 'absolute',
        height: '0px',
        'point-event': 'none',
        overflow: 'hidden'
    }

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
        queueMicrotask(() => {
            onSizeChange();
        })
    }

    createEffect(() => {
        const arr = props.data.map((item: any) => {
            if (item.id === undefined) {
                item.id = createUniqueId();
            }
            if (props.max === 'auto') {
                item._style = {...hideStyle};
            }
            return item;
        })
        setStore('list', arr);
    })

    createEffect(() => {
        const list = store.list;
        const show:TagConfig[] = [];
        const hide:TagConfig[] = [];
        if (props.max === 'auto') {
            setStore('hide', hide);
            queueMicrotask(() => {
                onSizeChange();
            })
        } else {
            const max = props.max ?? list.length;
            untrack(() => {
                for (let i = 0; i < max; i++) {
                    list[i] && show.push(list[i]);
                }
                const length = list.length;
                for (let j = max; j < length; j++) {
                    hide.push(list[j]);
                }
                setStore('show', show);
                setStore('hide', hide);
            })
        }
    })

    // 隐藏
    const hideTag = (index: number) => {
        if (!store.hide.includes(store.list[index])) {
            setStore('hide', store.hide.length, store.list[index]);
        }
        setStore('list', index, '_style', {...hideStyle});
    }

    // 显示
    const showTag = (index: number) => {
        // 已经隐藏的从hide中移除
        const idx = store.hide.indexOf(store.list[index]);
        if (idx > -1) {
            setStore('hide', produce(hide => {
                hide.splice(idx, 1);
            }));
        }
        setStore('list', index, '_style', {...showStyle});
    }

    const onSizeChange = () => {
        if (props.max !== 'auto') {
            return;
        }
        const wrapRect = wrap.getBoundingClientRect();
        const tags: any[] = wrap.querySelectorAll('.cm-tag:not(.cm-tag-more)');
        let w = 0;

        const more = wrap.querySelector('.cm-tag-more');
        const shows: number[] = [];
        const hides: number[] = [];
        tags.forEach((tag, index) => {
            const moreRect = more?.getBoundingClientRect();
            const moreWidth = moreRect ? 5 + moreRect?.width : 25;
            const tagWidth = tag.offsetWidth;
            if (w + (index === 0 ? 0 : 5) + tagWidth + moreWidth < wrapRect.width) {
                w = w + (index === 0 ? 0 : 5) + tagWidth;
                if (tag.style.height === '0px') {
                    shows.push(index);
                }
            } else {
                hides.push(index);
            }
        })
        // 批量修改
        batch(() => {
            shows.forEach(index => {
                showTag(index);
            })
            hides.forEach(index => {
                hideTag(index);
            })
        })
    }

    onMount(() => {
        const ob = new ResizeObserver(() => {
            onSizeChange();
        });
        if (props.max === 'auto') {
            ob.observe(wrap)
        }

        onCleanup(() => {
            ob.disconnect();
        })
    })

    return <div classList={classList()} style={props.style} ref={wrap}>
        <Show when={props.max === 'auto'} fallback={<For each={store.show}>
            {(item: any) => {
                return <Tag closable={props.closable} size={props.size} theme={item.theme} avatar={item.avatar} onClose={(e: any) => {
                    onClose(item, e);
                }}>{item.title}</Tag>
            }}
        </For>}>
            <For each={store.list}>
                {(item: any) => {
                    return <Tag closable={props.closable} style={item._style} size={props.size} theme={item.theme} avatar={item.avatar} onClose={(e: any) => {
                        onClose(item, e);
                    }}>{item.title}</Tag>
                }}
            </For>
        </Show>
        <Show when={store.hide.length}>
            <Show when={props.showMore} fallback={<Tag class="cm-tag-more"><span>+</span>{store.hide.length}</Tag>}>
                <Popover class="cm-tag-group-more-popover" align={tooltipAlign} arrow color={tooltipTheme}
                    trigger={tooltipTrigger} style={props.tooltipStyle} content={
                    <div class="cm-tag-group-more-wrap">
                        <For each={store.hide}>
                            {(item: TagConfig, index: Accessor<number>) => {
                                return <Tag size={props.size} theme={item.theme} closable={props.moreCloseable} onClose={(e: any) => {
                                    onClose(item, e);
                                }}
                                avatar={item.avatar}>{item.title}</Tag>
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
