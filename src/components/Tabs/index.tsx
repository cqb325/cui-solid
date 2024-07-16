import { For, Show, children, createEffect, onMount, untrack } from "solid-js";
import { Icon } from "../Icon";
import { useClassList } from "../utils/useProps";
import { createStore, produce } from "solid-js/store";
import type { TabProps } from "./Tab";

export * from './Tab';

type TabsProps = {
    card?: boolean,
    style?: any,
    classList?: any,
    class?: any,
    children?: any,
    activeName?: string,
    ref?: any,
    extra?: any,
    onTabClick?: (item: any) => void,
    onRemove?: (name: string) => void,
    duration?: number
}

type TabStore = {
    activeName: string,
    tabs: TabProps[],
    scroll: boolean,
    scrollLeft: number
}

export function Tabs(props: TabsProps) {
    let line: any;
    let scroll: any;
    let header: any;
    const classList = () => useClassList(props, 'cm-tabs', {
        'cm-tabs-card': props.card,
        'cm-tabs-overflow': store.scroll
    });

    const tabs = children(() => props.children)
    const evaluatedTabs = () => tabs.toArray() as unknown as TabProps[]

    const [store, setStore] = createStore({
        activeName: '',
        tabs: [],
        scroll: false,
        scrollLeft: 0
    } as TabStore);

    createEffect(() => {
        setStore('tabs', evaluatedTabs());
        Promise.resolve().then(() => {
            updateScroll();
        })
    })

    // 往前滚动
    const scrollPrev = () => {
        const scrollWidth = scroll.getBoundingClientRect().width;
        let scrollLeft = store.scrollLeft + scrollWidth;
        scrollLeft = Math.min(0, scrollLeft);
        header.style.transform = `translate(${scrollLeft}px, 0)`;
        setStore('scrollLeft', scrollLeft);
    }

    // 往后滚动
    const scrollNext = () => {
        const scrollWidth = scroll.getBoundingClientRect().width;
        const headerWidth = header.getBoundingClientRect().width;
        let scrollLeft = store.scrollLeft - scrollWidth;
        const maxLeft = scrollWidth - headerWidth;
        scrollLeft = Math.max(maxLeft, scrollLeft);
        header.style.transform = `translate(${scrollLeft}px, 0)`;
        setStore('scrollLeft', scrollLeft);
    }

    const addTab = (obj: TabProps) => {
        setStore('tabs', produce((tabs: TabProps[]) => {
            tabs.push(obj);
        }));

        setTimeout(() => {
            updateScroll();
        });
    }

    const onTabClick = (item: TabProps) => {
        setStore('activeName', item.name);
        props.onTabClick && props.onTabClick(item);
    }

    /**
     * 删除tab
     * @param name
     * @param e
     */
    const onRemove = (name: string, e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        const newArr: TabProps[] = store.tabs.filter((tab: TabProps) => {
            return tab.name !== name;
        });
        if (store.activeName === name) {
            setStore('activeName', newArr[newArr.length - 1].name);
        }
        setStore('tabs', newArr);
        props.onRemove && props.onRemove(name);
        updateScroll();
    }

    /**
     * 内容滚动样式
     * @returns
     */
    const contextStyle = () => {
        const avtiveName = store.activeName;
        let currentIndex: number = 0;
        store.tabs.forEach((atab: any, index: number) => {
            if (atab.name === avtiveName) {
                currentIndex = index;
            }
        });

        const s: any = {
            'transform': `translate(${-currentIndex * 100}%, 0)`
        }

        if (props.duration !== undefined && typeof props.duration === 'number') {
            s['transition-duration'] = props.duration + 'ms';
        }

        return s;
    }

    createEffect(() => {
        const currentActive = untrack(() => store.activeName);
        if (props.activeName && currentActive !== props.activeName) {
            setStore('activeName', props.activeName ?? '');
        }
    });

    createEffect(() => {
        setStore('tabs', evaluatedTabs());
    })

    onMount(() => {
        updateScroll();
    });

    const updateScroll = () => {
        const scrollWidth = scroll.getBoundingClientRect().width;
        const headerWidth = header.getBoundingClientRect().width;
        if (headerWidth > scrollWidth && !store.scroll) {
            setStore('scroll', true);

        }
        if (headerWidth < scrollWidth && store.scroll) {
            setStore('scroll', false);
            scrollPrev();
        }
    }

    // 更新下线的移动位置
    const lineStyle = () => {
        if (!props.card) {
            if (!header) return;
            const avtiveName = store.activeName;
            let currentIndex: number = 0;
            store.tabs.forEach((atab: any, index: number) => {
                if (atab.name === avtiveName) {
                    currentIndex = index;
                }
            });

            const eles = header.querySelectorAll('.cm-tabs-header-item');
            const ele = eles[currentIndex];
            if (!ele) {
                return;
            }
            const wrap = header.closest('.cm-tabs-header-wrap');
            const close = ele.querySelector('.cm-tabs-close');
            const closeW = close ? close.getBoundingClientRect().width : 0;

            const rect = ele.getBoundingClientRect();
            const wrapRect = wrap.getBoundingClientRect();
            const headerLeft = rect.left - wrapRect.left;
            const width = rect.width - closeW;
            line.style.width = `${width}px`;
            line.style.left = `${headerLeft}px`;
            return {
                width: `${width}px`,
                left: `${headerLeft}px`
            }
        }
    }

    props.ref && props.ref({
        addTab
    });

    return <div classList={classList()} style={props.style}>
        <div class="cm-tabs-header-wrap">
            <div class="cm-tabs-active-line" ref={line} style={lineStyle()} />
            <div class="cm-tabs-scroll" ref={scroll}>
                <ul class="cm-tabs-header" ref={header}>
                    <For each={store.tabs}>
                        {(item: TabProps) => {
                            const className = () => ({
                                'cm-tabs-header-item': true,
                                'cm-tabs-header-item-active': item.name === store.activeName,
                                'cm-tabs-header-item-disabled': item.disabled
                            });
                            return <li classList={className()}
                                onClick={onTabClick.bind(null, item)}>
                                {item.icon}
                                {item.title}
                                <Show when={item.closeable}>
                                    <Icon name="x" onClick={onRemove.bind(null, item.name)} class="cm-tabs-close" size={12} />
                                </Show>
                            </li>
                        }}
                    </For>
                </ul>
            </div>
            <Show when={props.extra}>
                {props.extra}
            </Show>
            <div class="cm-tabs-prev" onClick={scrollPrev}>
                <Icon name="chevron-left" size={14} />
            </div>
            <div class="cm-tabs-next" onClick={scrollNext}>
                <Icon name="chevron-right" size={14} />
            </div>
        </div>
        <div class="cm-tabs-content" style={contextStyle()}>
            <For each={store.tabs}>
                {(item: TabProps) => {
                    const panelClass = () => useClassList(item, 'cm-tab-panel', {
                        'cm-tab-panel-active': item.name === store.activeName
                    });
                    return <div classList={panelClass()} >{item.children}</div>
                }}
            </For>
        </div>
    </div>
}
