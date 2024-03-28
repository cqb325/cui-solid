import type { JSXElement} from "solid-js";
import { For, Show, createComputed, createSignal, createUniqueId, onCleanup } from "solid-js";
import { useClassList } from "../utils/useProps"
import createModel from "../utils/createModel";
import { createStore } from "solid-js/store";

export interface IndexListProps {
    classList?: any;
    class?: string;
    style?: any;
    data: any[];
    selectable?: boolean;
    promote?: boolean;
    border?: boolean;
    renderItem?(item: any, active: boolean): JSXElement;
    onChange?(value: any[]): void
}

export function IndexList (props: IndexListProps){
    const promote = () => props.promote ?? true;
    const [value, setValue] = createModel<any[]>(props, 'value', []);
    const [activeAnchor, setActiveAnchor] = createSignal('');
    const [showPromote, setShowPromote] = createSignal(false);
    const [promoteText, setPromoteText] = createSignal('');
    const [store, setStore] = createStore({
        list: [],
        listMap: {}
    } as {
        list: any[],
        listMap: {[key: string|number]: any}
    });

    // 构建数据结构
    let map: {[key: string|number]: any} = {};
    let wrap: any;
    const topMap: {[key: string|number]: number} = {};
    createComputed(() => {
        const list: any[] = [];
        map = {};
        const listMap: {[key: string|number]: any} = {};
        props.data.forEach((item: any) => {
            if (item.id === undefined || item.id === null) {
                item.id = createUniqueId();
            }
            const newItem: any = { id: item.id };
            map[item.id] = item;
            listMap[item.id] = newItem;
            list.push(newItem);
            if (item.children) {
                newItem.children = [];
                item.children.forEach((subItem: any) => {
                    if (subItem.id === undefined || subItem.id === null) {
                        subItem.id = createUniqueId();
                    }
                    map[subItem.id] = subItem;
                    const newSubItem = { id: subItem.id };
                    listMap[subItem.id] = newSubItem;
                    newItem.children.push(newSubItem)
                })
            }
        });
        setStore({
            list,
            listMap
        })
    })
    const classList = () => useClassList(props, 'cm-index-list', {
        'cm-index-list-border': props.border
    });
    const onItemClick = (subItem: any) => {
        if (!props.selectable) {
            return;
        }
        const val = value();
        const id = subItem.id;

        if (subItem.active) {
            const index = val.indexOf(id);
            val.splice(index, 1);
            setValue(val);
        } else {
            val.push(id)
            setValue([...val]);
        }
        props.onChange && props.onChange(value());
        setStore('listMap', subItem.id, 'active', !subItem.active);
    }

    let promoteTimer: any = null;
    const gotoAnchor = (id: string, name: string, e: Event) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        const ele = document.querySelector(id);

        if (ele) {
            if (promote()) {
                setPromoteText(name);
                setShowPromote(true);
                if (promoteTimer) {
                    clearTimeout(promoteTimer);
                }
                promoteTimer = setTimeout(() => {
                    scrollEnd();
                }, 1000)
            }
            const eleOff = ele.getBoundingClientRect().top;
            const parentOff = wrap.getBoundingClientRect().top;
            const scrollTop = eleOff - parentOff;
            wrap.scrollTo({
                top: wrap.scrollTop + scrollTop,
                behavior: "smooth",
            });
        }
    }

    const scrollEnd = () => {
        setShowPromote(false);
    }

    const handleScroll = () => {
        const scrollTop = wrap.scrollTop;
        const id = getAnchorByScrollTop(scrollTop);
        setActiveAnchor(id);
    }

    const getAnchorByScrollTop = (scrollTop: number) => {
        let minId = ''; let min = Number.MAX_VALUE;
        for (const id in topMap){
            const t = Math.abs(topMap[id] - scrollTop);
            if (min > t) {
                min = t;
                minId = id;
            }
        }
        return minId;
    }

    const initTop = (e: HTMLElement, id: string) => {
        queueMicrotask(() => {
            topMap[id] = e.offsetTop;
        });
    }

    const promoteClass = () => ({
        'cm-index-list-promote': true,
        'cm-index-list-promote-show': showPromote()
    })

    return <div classList={classList()} style={props.style}>
        <div class="cm-index-list-list" ref={wrap} onScroll={handleScroll}>
            <For each={store.list}>
                {(item: any) => {
                    const dataItem = map[item.id];
                    return <dl id={`cm_index_list_${item.id}`} ref={(e: HTMLElement) => {
                        initTop(e, item.id);
                    }}>
                        <dt>{dataItem.name}</dt>
                        <For each={item.children}>
                            {(subItem: any) => {
                                const subDataItem = map[subItem.id];
                                return <dd class={subItem.active ? 'active' : ''} onClick={onItemClick.bind(null, subItem)}>
                                    {props.renderItem ? props.renderItem(subDataItem, subItem.active) : subDataItem.name}
                                </dd>
                            }}
                        </For>
                    </dl>
                }}
            </For>
        </div>
        <div class="cm-index-list-nav">
            <For each={store.list}>
                {(item: any) => {
                    const dataItem = map[item.id];
                    const active = () => activeAnchor() === item.id;
                    const classList = () => ({
                        'cm-index-list-nav-item': true,
                        'active': active()
                    })
                    return <div classList={classList()} onClick={gotoAnchor.bind(null, `#cm_index_list_${item.id}`, dataItem.id)}>{dataItem.id}</div>
                }}
            </For>
        </div>
        <Show when={promote()}>
            <div classList={promoteClass()}>
                {promoteText()}
            </div>
        </Show>
    </div>
}
