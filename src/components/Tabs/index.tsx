import type { JSX} from "solid-js";
import { For, Show, children, createEffect, createSignal, onCleanup, onMount, untrack } from "solid-js";
import { useClassList } from "../utils/useProps";
import { createStore, produce } from "solid-js/store";
import type { TabPaneProps } from "./TabPane";
import { FeatherChevronDown, FeatherChevronLeft, FeatherChevronRight, FeatherChevronUp, FeatherMoreHorizontal, FeatherX } from "cui-solid-icons/feather";
import type { DropdownProps } from "../Dropdown";
import { Dropdown, DropdownItem, DropdownMenu } from "../Dropdown";
import { useDebounce } from "../utils/useDebounce";
import { Tooltip, type TooltipProps } from "../Tooltip";

export * from './TabPane';

export interface TabsProps {
    type?: 'line'|'card'|'button',
    buttonTheme?: 'solid'|'outline'| 'light' | 'borderless',
    style?: any,
    classList?: any,
    class?: any,
    children?: any,
    activeName?: string,
    ref?: any,
    append?: JSX.Element
    prepend?: JSX.Element
    centered?: boolean
    bordered?: boolean
    arrowPosition?: 'start'|'both'|'end'
    more?: boolean
    moreDropdownProps?: Omit<DropdownProps, 'children'|'menu'>
    renderMore?: () => JSX.Element
    data?: TabPaneProps[]
    onTabClick?: (item: any) => void,
    onRemove?: (name: string) => void,
    duration?: number
    align?: 'top'|'bottom'|'left'|'right'
    animation?: boolean
    keepHeight?: boolean
    maxTabSize?: number
    tooltip?: boolean
    tooltipProps?: TooltipProps
    contextMenu?: JSX.Element
    onContextMenu?: (e: any) => void
    onSelectContextMenu?: (name: string, data: any) => void
    dropdownProps?: Omit<DropdownProps, 'children'|'menu'>
}

export interface TabStore {
    tabs: TabPaneProps[],
    moreList: TabPaneProps[],
    morePrevList: TabPaneProps[],
    moreNextList: TabPaneProps[],
    scroll: boolean,
    scrollLeft: number
}

export function Tabs (props: TabsProps) {
    let line: any;
    let scroll: any;
    let header: any;
    const type = () => props.type ?? 'line';
    const animation = props.animation ?? false;
    const align = props.align ?? 'top';
    const classList = () => useClassList(props, 'cm-tabs', {
        [`cm-tabs-${type()}`]: !!type(),
        [`cm-tabs-${align}`]: !!align,
        'cm-tabs-overflow': store.scroll,
        'cm-tabs-centered': props.centered,
        'cm-tabs-bordered': props.bordered,
        'cm-tabs-with-animation': animation,
        'cm-tabs-keep-height': props.keepHeight,
    });
    const [activeName, setActiveName] = createSignal(props.activeName || '');
    const tabs = children(() => props.children)
    const evaluatedTabs = () => tabs.toArray() as unknown as TabPaneProps[]
    const isContextMenu = () => !!props.contextMenu;

    const [store, setStore] = createStore({
        tabs: [],
        moreList: [],
        morePrevList: [],
        moreNextList: [],
        scroll: false,
        scrollLeft: 0
    } as TabStore);

    createEffect(() => {
        setStore('tabs', evaluatedTabs());
        untrack(() => {
            if (store.tabs.length === 1) {
                setActiveName(store.tabs[0].name);
                props.onTabClick && props.onTabClick({...store.tabs[0]});
            }
        })
    })

    createEffect(() => {
        activeName();
        const activeItem = header.querySelector('.cm-tabs-header-item-active');
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }
    })

    // 往前滚动
    const scrollPrev = () => {
        const prop = (align === 'top' || align === 'bottom') ? 'width' : 'height';
        const scrollProp = (align === 'top' || align === 'bottom') ? 'scrollLeft' : 'scrollTop';
        const scrollAttr = (align === 'top' || align === 'bottom') ? 'left' : 'top';
        const scrollWidth = scroll.getBoundingClientRect()[prop];
        const left = scroll[scrollProp] - scrollWidth;
        const scrollParams = {
            [`${scrollAttr}`]: left,
            behavior: "smooth"
        }
        scroll.scrollTo(scrollParams);
    }

    // 往后滚动
    const scrollNext = () => {
        const prop = (align === 'top' || align === 'bottom') ? 'width' : 'height';
        const scrollProp = (align === 'top' || align === 'bottom') ? 'scrollLeft' : 'scrollTop';
        const scrollAttr = (align === 'top' || align === 'bottom') ? 'left' : 'top';
        const scrollWidth = scroll.getBoundingClientRect()[prop];
        const left = scroll[scrollProp] + scrollWidth;
        const scrollParams = {
            [`${scrollAttr}`]: left,
            behavior: "smooth"
        }
        scroll.scrollTo(scrollParams);
    }

    const addTab = (obj: TabPaneProps) => {
        setStore('tabs', produce((tabs: TabPaneProps[]) => {
            tabs.push(obj);
        }));
        queueMicrotask(() => {
            setActiveName(obj.name);
        })
    }

    const onTabClick = (item: TabPaneProps) => {
        setActiveName(item.name);
        props.onTabClick && props.onTabClick({...item});
    }

    // more dropdown onSelect
    const onSelectByName = (name: string, item: any) => {
        onTabClick(item);
    }

    /**
     * 删除tab
     * @param name
     * @param e
     */
    const onRemove = (name: string, e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        const lastIndex = store.tabs.findIndex((tab: TabPaneProps) => {
            return tab.name === name;
        })
        const newArr: TabPaneProps[] = store.tabs.filter((tab: TabPaneProps) => {
            return tab.name !== name;
        });
        if (activeName() === name) {
            const willActiveIndex = Math.max(lastIndex - 1, 0);
            if (newArr.length) {
                onTabClick(newArr[willActiveIndex]);
            }
        }
        props.onRemove && props.onRemove(name);
        setStore('tabs', newArr);
    }

    /**
     * 内容滚动样式
     * @returns
     */
    const contextStyle = () => {
        const avtiveName = activeName();
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

    // 滚动的时候计算是否被遮盖
    const onScroll = () => {
        observeIntersectionFunc();
        lineStyle();
    }

    // 鼠标滚轮事件
    const onMouseWheel = (e: any) => {
        if (!store.scroll){
            return;
        }
        e.preventDefault && e.preventDefault();
        if (align === 'top' || align === 'bottom') {
            if (e.deltaY > 0) {
                scroll.scrollLeft += 50;
            } else {
                scroll.scrollLeft -= 50;
            }
        } else {
            if (e.deltaY > 0) {
                scroll.scrollTop += 50;
            } else {
                scroll.scrollTop -= 50;
            }
        }
    }

    onMount(() => {
        const bo = new ResizeObserver((entries) => {
            updateScroll();
        });
        bo.observe(scroll);
        bo.observe(header);
        updateScroll();

        onCleanup(() => {
            bo.disconnect();
        })
    });

    // tab是否被遮盖
    const observeIntersection = () => {
        const ob = new IntersectionObserver((entries) => {
            const names: string[] = [];
            let firstDisplayItemName = '';
            entries.forEach((entry) => {
                const ele = entry.target;
                if (entry.intersectionRatio < 0.98) {
                    names.push((ele as HTMLElement).dataset.name!);
                } else {
                    if (!firstDisplayItemName) {
                        firstDisplayItemName = (ele as HTMLElement).dataset.name!;
                    }
                }
            })
            const firstDisplayIndex = store.tabs.findIndex(item => item.name === firstDisplayItemName)!;

            const list: TabPaneProps[] = [];
            const prevList: TabPaneProps[] = [];
            const nextList: TabPaneProps[] = [];
            names.forEach(name => {
                const index = store.tabs.findIndex(item => item.name === name)!;
                const item = store.tabs[index];
                list.push(item);
                if (index < firstDisplayIndex) {
                    prevList.push(item);
                } else {
                    nextList.push(item);
                }
            })
            setStore('moreList', list);
            setStore('morePrevList', prevList);
            setStore('moreNextList', nextList);
            ob.disconnect();
        }, {
            root: scroll,
            rootMargin: '0px',
            threshold: 0
        })
        const items = header.querySelectorAll('.cm-tabs-header-item');
        items.forEach((item: any) => {
            ob.observe(item);
        })
    }

    const observeIntersectionFunc = useDebounce(observeIntersection, 200);
    const updateScroll = useDebounce(() => {
        const prop = (align === 'top' || align === 'bottom') ? 'width' : 'height';
        const scrollWidth = scroll.getBoundingClientRect()[prop];
        const headerWidth = header.getBoundingClientRect()[prop];

        if (headerWidth > scrollWidth && !store.scroll) {
            setStore('scroll', true);
            lineStyle();
        }
        if (headerWidth < scrollWidth && store.scroll) {
            setStore('scroll', false);
            lineStyle();
        }

        // 是否被遮盖
        observeIntersectionFunc();
    }, 100);

    // 更新下线的移动位置
    const lineStyle = () => {
        const avtiveName = activeName();
        if (type() === 'line') {
            if (!header) return;
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
            const close = ele.querySelector('.cm-tabs-close');

            const rect = ele.getBoundingClientRect();
            const wrapRect = scroll.getBoundingClientRect();
            const scrollProp = (align === 'top' || align === 'bottom') ? 'scrollLeft' : 'scrollTop';
            const scrollOffset = scroll[scrollProp];
            const headerLeft = scrollOffset + ((align === 'top' || align === 'bottom') ? rect.left - wrapRect.left : rect.top - wrapRect.top);
            const width = rect.width;
            const height = rect.height;
            if (align === 'top' || align === 'bottom') {
                line.style.width = `${width}px`;
                line.style.left = `${headerLeft}px`;
            } else {
                line.style.height = `${height}px`;
                line.style.top = `${headerLeft}px`;
            }
            return (align === 'top' || align === 'bottom') ? {
                width: `${width}px`,
                left: `${headerLeft}px`
            } : {
                height: `${height}px`,
                top: `${headerLeft}px`
            }
        }
    }

    props.ref && props.ref({
        addTab
    });

    const renderMore = (arr: TabPaneProps[]) => {
        return <DropdownMenu>
            <For each={arr}>
                {(item: TabPaneProps) => {
                    return <DropdownItem data={item} name={item.name} icon={item.icon}>{item.title}
                        <Show when={item.closeable}>
                            <FeatherX onClick={onRemove.bind(null, item.name)} size={12} />
                        </Show>
                    </DropdownItem>
                }}
            </For>
        </DropdownMenu>
    }

    const prevDropdownAlign = () :DropdownProps['align'] => {
        if (align === 'bottom') {
            return props.arrowPosition === 'end' ? 'topRight' : 'topLeft';
        }
        if (align === 'left') {
            return props.arrowPosition === 'end' ? 'rightBottom' : 'rightTop';
        }
        if (align === 'right') {
            return props.arrowPosition === 'end' ? 'leftBottom' : 'leftTop';
        }
        if (align === 'top') {
            return props.arrowPosition === 'end' ? 'bottomRight' : 'bottomLeft';
        }
    }

    const nextDropdownAlign = () :DropdownProps['align'] => {
        if (align === 'bottom') {
            return props.arrowPosition === 'start' ? 'topLeft' : 'topRight';
        }
        if (align === 'left') {
            return props.arrowPosition === 'start' ? 'rightTop' : 'rightBottom';
        }
        if (align === 'right') {
            return props.arrowPosition === 'start' ? 'leftTop' : 'leftBottom';
        }
        if (align === 'top') {
            return props.arrowPosition === 'start' ? 'bottomLeft' : 'bottomRight';
        }
    }

    const moreDropdownAlign = () :DropdownProps['align'] => {
        if (align === 'bottom') {
            return 'topRight';
        }
        if (align === 'left') {
            return 'rightBottom';
        }
        if (align === 'right') {
            return 'leftBottom';
        }
        if (align === 'top') {
            return 'bottomRight';
        }
    }

    return <div classList={classList()} style={props.style}>
        <div class="cm-tabs-header-wrap">
            <Show when={props.prepend}>
                <div class="cm-tabs-extra-prepend">
                    {props.prepend}
                </div>
            </Show>
            <Show when={props.arrowPosition === 'start' || props.arrowPosition === 'both'}>
                <Dropdown disabled={!props.more} align={prevDropdownAlign()} onSelect={onSelectByName}
                    class={"cm-tabs-more-dropdown"}
                    menu={renderMore(store.morePrevList)}>
                    <div classList={{
                        'cm-tabs-prev': true,
                        'cm-tabs-prev-disabled': !store.morePrevList.length
                    }} onClick={scrollPrev}>
                        <Show when={align === 'top' || align === 'bottom'} fallback={<FeatherChevronUp size={16} />}>
                            <FeatherChevronLeft size={16} />
                        </Show>
                    </div>
                </Dropdown>
            </Show>
            <Show when={props.arrowPosition === 'start'}>
                <Dropdown disabled={!props.more} align={nextDropdownAlign()} onSelect={onSelectByName}
                    class={"cm-tabs-more-dropdown"}
                    menu={renderMore(store.moreNextList)}>
                    <div classList={{
                        'cm-tabs-next': true,
                        'cm-tabs-next-disabled': !store.moreNextList.length
                    }} onClick={scrollNext}>
                        <Show when={align === 'top' || align === 'bottom'} fallback={<FeatherChevronDown size={16} />}>
                            <FeatherChevronRight size={16} />
                        </Show>
                    </div>
                </Dropdown>
            </Show>
            <Dropdown trigger="contextMenu" transfer menu={props.contextMenu} handler=".cm-tabs-header-item"
                    align="bottom" onSelect={props.onSelectContextMenu} {...props.dropdownProps}>
                <div class="cm-tabs-scroll" ref={scroll} onScroll={onScroll} onWheel={onMouseWheel}>
                    <div class="cm-tabs-active-line" ref={line} style={lineStyle()} />
                    <ul class="cm-tabs-header" ref={header}>
                        <For each={store.tabs}>
                            {(item: TabPaneProps) => {
                                const className = () => ({
                                    'cm-tabs-header-item': true,
                                    [`cm-tabs-header-item-${props.buttonTheme}`]: !!props.buttonTheme,
                                    'cm-tabs-header-item-active': item.name === activeName(),
                                    'cm-tabs-header-item-disabled': item.disabled
                                });
                                const el = () => <li classList={className()}
                                    data-name={item.name}
                                    onClick={onTabClick.bind(null, item)}
                                    onContextMenu={props.onContextMenu?.bind(null, {...item})}
                                    >
                                    <div>
                                        {item.icon}
                                        <span class="cm-tabs-header-item-text" style={{"max-width": `${props.maxTabSize}px`}}>{item.title}</span>
                                        <Show when={item.closeable}>
                                            <FeatherX onClick={onRemove.bind(null, item.name)} class="cm-tabs-close" size={12} />
                                        </Show>
                                    </div>
                                </li>;
                                return props.tooltip
                                    ? <Tooltip content={item.title} align="bottom" theme="light" {...props.tooltipProps}>
                                        {el()}
                                    </Tooltip>
                                    : el();
                            }}
                        </For>
                    </ul>
                </div>
            </Dropdown>
            <Show when={store.scroll && props.more && store.moreList.length && !props.arrowPosition}>
                <Dropdown align={moreDropdownAlign()} {...props.moreDropdownProps}
                    onSelect={onSelectByName} class={"cm-tabs-more-dropdown"}
                    menu={<DropdownMenu>
                        <For each={store.moreList}>
                            {(item: TabPaneProps) => {
                                return <DropdownItem data={item} name={item.name}>{item.title}
                                    <Show when={item.closeable}>
                                        <FeatherX onClick={onRemove.bind(null, item.name)} size={12} />
                                    </Show>
                                </DropdownItem>
                            }}
                        </For>
                    </DropdownMenu>}>
                    <div class="cm-tabs-more">
                        {props.renderMore?.() ?? <FeatherMoreHorizontal size={14} />}
                    </div>
                </Dropdown>
            </Show>
            <Show when={props.arrowPosition === 'end'}>
                <Dropdown disabled={!props.more} align={prevDropdownAlign()} onSelect={onSelectByName}
                    class={"cm-tabs-more-dropdown"}
                    menu={renderMore(store.morePrevList)}>
                    <div classList={{
                        'cm-tabs-prev': true,
                        'cm-tabs-prev-disabled': !store.morePrevList.length
                    }} onClick={scrollPrev}>
                        <Show when={align === 'top' || align === 'bottom'} fallback={<FeatherChevronUp size={16} />}>
                            <FeatherChevronLeft size={16} />
                        </Show>
                    </div>
                </Dropdown>
            </Show>
            <Show when={props.arrowPosition === 'end' || props.arrowPosition === 'both'}>
                <Dropdown disabled={!props.more} align={nextDropdownAlign()} onSelect={onSelectByName}
                    class={"cm-tabs-more-dropdown"}
                    menu={renderMore(store.moreNextList)}>
                    <div classList={{
                        'cm-tabs-next': true,
                        'cm-tabs-next-disabled': !store.moreNextList.length
                    }} onClick={scrollNext}>
                        <Show when={align === 'top' || align === 'bottom'} fallback={<FeatherChevronDown size={16} />}>
                            <FeatherChevronRight size={16} />
                        </Show>
                    </div>
                </Dropdown>
            </Show>
            <Show when={props.append}>
                <div class="cm-tabs-extra-append">
                    {props.append}
                </div>
            </Show>
        </div>
        <div class="cm-tabs-content-wrap">
            <div class="cm-tabs-content" style={contextStyle()}>
                <For each={store.tabs}>
                    {(item: TabPaneProps) => {
                        const panelClass = () => useClassList(item, 'cm-tab-panel', {
                            'cm-tab-panel-active': item.name === activeName()
                        });
                        return <div classList={panelClass()}>{item.children}</div>
                    }}
                </For>
            </div>
        </div>
    </div>
}
