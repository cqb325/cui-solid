import type { Accessor, JSXElement, Signal} from "solid-js";
import { For, Show, createContext, createEffect, createSignal, onMount, useContext } from "solid-js";
import createModel from "../../utils/createModel";
import { useClassList } from "../../utils/useProps"
import { Value } from "../../inner/Value";
import { Dropdown } from "../../Dropdown";
import { Menu } from "./Menu";
import type { TreeCheckMod } from "../../Tree";
import { CascaderStore } from "./store";
import { Option } from "./Option";
import { Exception, NO_DATA_IMAGE } from "../../Exception";
import type { TagGroupProps } from "../../TagGroup";

export interface CascaderProps {
    classList?: any,
    class?: string,
    disabled?: boolean,
    clearable?: boolean,
    size?: 'small'|'large',
    prepend?: string | JSXElement,
    value?: string | string[] | number[] | Signal<any>,
    valueField?: string,
    titleField?: string,
    mode?: TreeCheckMod,
    showMax?: TagGroupProps['max'],
    max?: number
    onExceed?: () => void
    showMore?: boolean,
    filter?: boolean,
    emptyText?: string,
    seperator?: string,
    transfer?: boolean,
    header?: JSXElement,
    footer?: JSXElement,
    triggerRender?: (labels: any, values: any) => JSXElement
    align?: 'bottomLeft'|'bottomRight',
    revers?: boolean,
    data: any[],
    onSelect?: (item: any) => void,
    onChange?: (value: any) => void,
    trigger?:'click'|'hover',
    multi?: boolean,
    changeOnSelect?: boolean,
    placeholder?: string,
    asFormField?: boolean
    loadData?: (item: any) => Promise<any>
}

const CascaderContext = createContext();

export function Cascader (props: CascaderProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [query, setQuery] = createSignal<string>('');
    const trigger = props.trigger ?? 'click';
    const emptyText = props.emptyText ?? '暂无数据';
    let filterWrap: any;
    const allTextNodes: Node[] = [];

    const titleField = props.titleField ?? 'title';
    const store = new CascaderStore(props);
    const seperator = props.seperator ?? '/';
    const align = props.align ?? 'bottomLeft';
    const classList = () => useClassList(props, 'cm-cascader', {
        'cm-cascader-disabled': props.disabled,
        'cm-cascader-clearable': !props.disabled && props.clearable && store.value() && store.value().length,
        [`cm-cascader-${props.size}`]: props.size
    });

    const text = () => {
        const vals = store.value();
        const arr = vals ? vals.map((val: any) => {
            const item = store.store.nodeMap[val];
            return props.multi ? item: item[titleField];
        }) : [];
        return props.multi ? arr : (arr.length ? arr.join(seperator) : '');
    }

    const onSelect = (item: any) => {
        // 点击的是叶子节点或者设置点击即改变
        if (!props.multi) {
            if (!(item.children && item.children.length) || props.changeOnSelect) {
                props.onSelect && props.onSelect(item);
                const vals = store.selectedKey();
                const rets = [...vals];
                store.setValue(rets);
                if (props.filter) {
                    setQuery('');
                }
                props.onChange && props.onChange(rets);
            }
        }
        // 点击叶子节点进行关闭
        if (!(item.children && item.children.length) && !props.multi) {
            setVisible(false);
        }
    }

    const onClear = () => {
        store.setValue([]);
        props.onChange && props.onChange([]);
    }

    // 过滤查询
    createEffect(() => {
        const queryStr = query();
        if (queryStr) {
            store.filter(queryStr);

            // 高亮搜索字符
            queueMicrotask(() => {
                buildNodes();
                hilightKeyword(queryStr);
            })
        }
    });

    // 高亮关键字
    const hilightKeyword = (queryStr: string) => {
        // 不支持高亮则返回
        if (!CSS.highlights) {
            return;
        }

        CSS.highlights.delete('cm-search-results');

        const str = queryStr.trim().toLowerCase();
        if (!str) {
            return
        }

        const ranges = allTextNodes
            .map((el) => {
                return { el, text: el.textContent?.toLowerCase() }
            })
            .map(({ text, el }) => {
                const indices = []
                let startPos = 0
                while (text && startPos < text.length) {
                    const index = text.indexOf(str, startPos)
                    if (index === -1) break
                    indices.push(index)
                    startPos = index + str.length
                }
                return indices.map((index) => {
                    const range = new Range()
                    range.setStart(el, index)
                    range.setEnd(el, index + str.length)
                    return range
                })
            });

        const searchResultsHighlight = new Highlight(...ranges.flat());
        CSS.highlights.set('cm-search-results', searchResultsHighlight)
    }

    // 撤消按键，删除最后一个value
    const onDeleteLastValue = () => {
        if (props.multi) {
            const val = store.value();
            if (val.length > 0) {
                const key = val.pop();
                store.checkNode(key!, false)
            }
        }
    }

    const clearQuery = () => {
        setQuery('');
    }

    /**
     * 构建搜索的节点
     * @returns
     */
    const buildNodes = () => {
        // 不支持高亮则返回
        if (!CSS.highlights) {
            return;
        }

        const treeWalker = document.createTreeWalker(filterWrap, NodeFilter.SHOW_TEXT);
        let currentNode = treeWalker.nextNode()
        while (currentNode) {
            allTextNodes.push(currentNode)
            currentNode = treeWalker.nextNode()
        }
    }

    return <CascaderContext.Provider value={{onSelect, loadData: props.loadData, multi: props.multi, clearQuery}}>
        <div classList={classList()} tabIndex="0">
            <Dropdown visible={[visible, setVisible]} transfer={props.transfer} align={align} revers={props.revers}
                    trigger="click" disabled={props.disabled} menu={
                        <div class="cm-cascader-dropdown">
                                <Show when={props.header}>
                                    {props.header}
                                </Show>
                            <Show when={query()} fallback={
                                <div class="cm-cascader-wrap">
                                    <For each={store.store.columns}>
                                        {(column: any[], index: Accessor<number>) => {
                                            return <Menu key={store.store.selectedKey()[index() - 1] || 'root'} data={column} trigger={trigger} titleField={props.titleField}
                                                store={store} level={index()} valueFile={props.valueField} emptyText={props.emptyText}/>
                                        }}
                                    </For>
                                </div>
                            }>
                                <div class="cm-cascader-wrap" ref={filterWrap}>
                                    <div classList={{'cm-cascader-list': true, 'cm-cascader-list-empty': !store.store.filteredList?.length}}>
                                        <Show when={store.store.filteredList?.length} fallback={
                                            <div class="cm-cascader-empty">
                                                <Exception width={100} type="empty" typeImage={NO_DATA_IMAGE} desc={emptyText}/>
                                            </div>
                                        }>
                                            <For each={store.store.filteredList}>
                                                {(item) => {
                                                    return <Option filter={props.filter} store={store} data={item} seperator={seperator}/>
                                                }}
                                            </For>
                                        </Show>
                                    </div>
                                </div>
                        </Show>
                        <Show when={props.footer}>
                            {props.footer}
                        </Show>
                    </div>
                }>
                <Show when={props.triggerRender} fallback={
                    <Value prepend={props.prepend} text={text()} showMore={props.showMore} showMax={props.showMax} onClear={onClear} clearable={props.clearable}
                        placeholder={props.placeholder} disabled={props.disabled} size={props.size} multi={props.multi}
                        query={[query, setQuery]} filter={props.filter} onDeleteLastValue={onDeleteLastValue}/>
                        }>
                    <span class="cm-cascader-trigger">{props.triggerRender?.(text(), store.value())}</span>
                </Show>
            </Dropdown>
        </div>
    </CascaderContext.Provider>
}

export const useCascaderContext = () => useContext(CascaderContext);
