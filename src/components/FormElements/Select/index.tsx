import type { Accessor, JSXElement } from 'solid-js';
import { children, createEffect, createMemo, createSignal, For, onCleanup, onMount, Show, untrack } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { Option } from './InnerOption';
import { EmptyOption } from './EmptyOption';
import { Value } from '../../inner/Value';
import createField from "../../utils/createField";
import { useClassList } from '../../utils/useProps';
import type { TagConfig, TagGroupProps } from '../../TagGroup';
import { Dropdown } from '../../Dropdown';
import type { SelectOptionProps } from './Option';
import { VirtualList } from '../../virtual-list';
import { Exception, NO_DATA_IMAGE } from '../../Exception';
import { FeatherChevronDown } from 'cui-solid-icons/feather';
export * from './Option'
export * from './OptionGroup'

export interface SelectOptions {
    name?: string
    value?: any
    disabled?: boolean
    size?: 'small' | 'large'
    clearable?: boolean
    multi?: boolean
    prefix?: any
    style?: any
    placeholder?: string
    data?: Array<any>
    textField?: string
    valueField?: string
    class?: any
    classList?: any
    filter?: boolean
    renderOption?: (data: any) => any
    renderSelectedItem?: (data: any) => JSXElement
    ref?: any
    emptyText?: string
    emptyOption?: any
    onChange?: (value: any, option?: any) => void
    showMax?: TagGroupProps['max']
    max?: number
    status?: 'warning'|'error'
    footer?: JSXElement
    header?: JSXElement
    triggerRender?: (text: string|JSXElement|any[]) => JSXElement
    onExceed?: () => void
    valueClosable?: boolean
    transfer?: boolean
    align?: 'bottomLeft' | 'bottomRight'
    showMore?: boolean
    loading?: boolean
    children?: any
    remoteMethod?: (queryStr: any) => void
    maxHeight?: number
    debounceTime?: number
    asFormField?: boolean
    defaultLabel?: string | string[]
}

export function Select (props: SelectOptions) {
    let wrap: any;
    const textField = props.textField || 'label';
    const valueField = props.valueField || 'value';
    const [open, setOpen] = createSignal(false);
    const align = props.align ?? 'bottomLeft';
    const items = children(() => props.children)
    const evaluatedItems = () => items.toArray() as unknown as SelectOptionProps[];
    const [value, setValue] = createField<any>(props, props.multi ? [] : '');
    const allTextNodes: Node[] = [];
    let filterWrap: any;

    let initLabels: any[] = [];
    if (props.filter && props.defaultLabel) {
        if (props.multi && props.defaultLabel instanceof Array) {
            props.defaultLabel.forEach((label: string, index: number) => {
                initLabels.push({ [valueField]: value()[index], [textField]: label });
            })
        } else {
            initLabels = [{ [valueField]: value(), [textField]: props.defaultLabel }];
        }
    }
    let isClickChanging = true;
    const [query, setQuery] = createSignal('');
    // 当单选且有默认label时先禁止查询，后放开
    queueMicrotask(() => {
        isClickChanging = false;
    })
    const [showLabels, setShowLabels] = createSignal<any[]>(initLabels);
    let debounceTimer: any = null;

    const classList = () => useClassList(props, 'cm-select', {
        'cm-select-disabled': props.disabled,
        [`cm-select-${props.size}`]: props.size,
        'cm-select-clearable': !props.disabled && props.clearable && (`${value()}`.length !== 0),
        'cm-select-multi': props.multi,
        'cm-select-open': open(),
        'cm-select-with-prefix': props.prefix,
        [`cm-select-status-${props.status}`]: props.status,
        // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
    });

    let dataMap: any = {};
    // 重新构建数据
    function buildData (arr: any[], target: any[]) {
        arr && arr.forEach(item => {
            target.push(item);
            item._show = true;
            dataMap[item[valueField]] = item;
            if (item.items) {
                buildData(item.items, target);
            }
        });
    }

    // 传入的data变化同步更新
    const newData: Accessor<any[]> = createMemo<any[]>(() => {
        const data = props.data || evaluatedItems() || [];
        dataMap = {};
        const newData: any[] = [];
        if (props.emptyOption) {
            newData.push({ [valueField]: '', [textField]: props.emptyOption, _show: true, emptyOption: true });
        }
        if (initLabels) {
            initLabels.forEach(label => {
                newData.push({ ...label, _show: true });
            })
        }
        if (data) {
            buildData(data, newData);
        }
        return newData;
    })

    const [store, setStore] = createStore({ list: [] as any[] });

    createEffect(() => {
        const val = untrack(() => value());
        setStore("list", newData());
        const labels: string[] = [];
        setStore(
            'list',
            item => item,
            produce((item: any) => {
                if (props.multi) {
                    item._checked = val.includes(item[valueField]);
                } else {
                    item._checked = val === item[valueField];
                }
                if (item._checked) {
                    labels.push(item);
                }
            }),
        );
        setShowLabels(labels);
    })

    // 将选中的数据同步至store的数据项中
    createEffect(() => {
        const val = value();
        const labels: string[] = [];
        setStore(
            'list',
            item => item,
            produce((item: any) => {
                if (props.multi) {
                    item._checked = val.includes(item[valueField]);
                } else {
                    item._checked = val === item[valueField];
                }
                if (item._checked) {
                    labels.push(item);
                }
            }),
        );
        setShowLabels(labels);
    });

    // 点击更新setValue 并触发onChange事件
    const onOptionClick = (v: any, option: any) => {
        if (dataMap[v]) {
            if (dataMap[v].items && dataMap[v].items.length) {
                return;
            }
        }
        let arr: any[] = untrack(() => showLabels());
        if (props.multi) {
            let val = value();
            const index = val.indexOf(v);
            if (index > -1) {
                val.splice(index, 1);
                arr.splice(index, 1);
            } else {
                if (props.max && val.length >= props.max) {
                    props.onExceed?.();
                    return;
                }
                val = [...val]
                val.push(v);
                arr.push(option);
            }

            setValue([...val]);
            setQuery('');
            setShowLabels([...arr]);
            props.onChange && props.onChange(val, option);
        } else {
            isClickChanging = true;
            arr = [option]
            setValue(v);
            setQuery('');
            // setQuery(option[textField]);
            setShowLabels([...arr]);
            Promise.resolve().then(() => {
                isClickChanging = false;
            });
            setOpen(false);
            props.onChange && props.onChange(v, option);
        }
    }

    const labels = createMemo(() => {
        const arr: any[] = [];
        const showLabelsData = showLabels();
        showLabelsData.map(item => {
            arr.push({ data: item, id: item[valueField], title: item[textField] });
        });
        if (props.multi) {
            return arr.length ? arr.map(item => {
                item.title = props.renderSelectedItem?.(item.data) || item.title;
                return item;
            }) : (props.emptyOption ? [{ id: '', title: props.renderSelectedItem?.(null) || props.emptyOption }] : []);
        } else {
            return arr.length ? (props.renderSelectedItem?.(arr[0].data) || arr[0].title) : (props.emptyOption ? props.emptyOption : '');
        }
    });

    // 清空数据
    const onClear = (e: any) => {
        setShowLabels([]);
        if (props.multi) {
            props.onChange && props.onChange([]);
            setValue([]);
        } else {
            props.onChange && props.onChange('');
            setValue('');
            setQuery('');
            setOpen(false);
        }
    }

    // 过滤查询
    createEffect(() => {
        const queryStr = query();
        // 远程查询
        if (props.remoteMethod) {
            if (isClickChanging) {
                return;
            }
            if (queryStr) {
                initLabels = [];
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    props.remoteMethod?.(queryStr);
                    // 保持打开状态
                    setOpen(true);
                }, props.debounceTime || 300);
            }
        } else { // 本地过滤
            setStore(
                'list',
                item => item,
                produce((item: any) => {
                    item._show = item[textField].indexOf(queryStr) > -1;
                }),
            );
            // 高亮搜索字符
            queueMicrotask(() => {
                buildNodes();
                hilightKeyword(queryStr as string);
            })
        }
    })

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

        const searchResultsHighlight = new window.Highlight(...ranges.flat());
        CSS.highlights.set('cm-search-results', searchResultsHighlight)
    }

    // createEffect(() => {
    //     if (!open() && props.filter) {
    //         if (!props.multi) {
    //             const labels = untrack(() => showLabels());
    //             const queryStr = untrack(() => query());
    //             if (labels.length && labels[0][textField] !== queryStr) {
    //                 isClickChanging = true;
    //                 // setQuery(labels[0][textField]);
    //                 queueMicrotask(() => {
    //                     isClickChanging = false;
    //                 })
    //             }
    //         } else {// 多选关闭的时候过滤值置空
    //             setQuery('');
    //         }
    //     }
    // })

    // 多选场景下删除value
    const onValueClose = (item: TagConfig, e: any) => {
        if (props.multi) {
            const arr: any[] = showLabels();
            const val = value();
            const index = val.indexOf(item.id);
            if (index > -1) {
                val.splice(index, 1);
                arr.splice(index, 1);
            }
            setValue([...val]);
            setShowLabels([...arr]);
            props.onChange && props.onChange(val);
        }
    }

    // 撤消按键，删除最后一个value
    const onDeleteLastValue = () => {
        if (props.multi) {
            const arr: any[] = showLabels();
            const val = value();

            if (val.length > 0) {
                val.pop();
                arr.pop();
                setValue([...val]);
                setShowLabels([...arr]);
                props.onChange && props.onChange(val);
            }
        }
    }

    const displayItems = createMemo(() => {
        return store.list.filter(item => item._show);
    });

    return <div classList={classList()} style={props.style} ref={wrap}>
        <Dropdown transfer={props.transfer} fixWidth align={align} disabled={props.disabled} trigger="click" visible={[open, setOpen]}
            menu={<div class="cm-select-options-wrap">
                {
                    props.header
                    ? <div class="cm-select-header">{props.header}</div>
                    : null
                }
                <div class="cm-select-options" style={{ 'max-height': props.maxHeight ? `${props.maxHeight}px` : '' }}>
                    <Show when={!props.loading} fallback={<div class="cm-select-loading">加载中</div>}>
                        <ul class="cm-select-option-list" ref={filterWrap}>
                            <Show when={displayItems().length} fallback={
                                <Exception width={100} type="empty" typeImage={NO_DATA_IMAGE} desc={props.emptyText}/>
                            }>
                                <VirtualList items={displayItems()} itemEstimatedSize={30} maxHeight={props.maxHeight ?? 200} itemComponent={{
                                    component: OptionWrap,
                                    props: {
                                        textField, valueField,
                                        renderOption: props.renderOption,
                                        onClear,
                                        onOptionClick,
                                        value,
                                    }
                                }} />
                            </Show>
                        </ul>
                    </Show>
                </div>
                {
                    props.footer
                    ? <div class="cm-select-footer">{props.footer}</div>
                    : null
                }
            </div>}>
            <Show when={props.triggerRender} fallback={
                <Value text={labels()} multi={props.multi} showMax={props.showMax} disabled={props.disabled} showMore={props.showMore}
                    valueClosable={props.valueClosable || (props.filter)} clearable={props.clearable} onClear={onClear} placeholder={props.placeholder}
                    prepend={props.prefix} size={props.size} icon={<FeatherChevronDown class="cm-select-cert"/>} onClose={onValueClose}
                    query={[query, setQuery]} filter={props.filter} onDeleteLastValue={onDeleteLastValue} />
            }>
                <span class="cm-select-trigger">{props.triggerRender?.(labels())}</span>
            </Show>
        </Dropdown>

    </div>
}

const OptionWrap = (props: any) => {
    const item = props.item;
    return <Show when={item.emptyOption} fallback={
        <Option ref={props.ref} renderOption={props.renderOption} visible={item._show} disabled={item.disabled} data={item} checked={item._checked}
            textField={props.textField} valueField={props.valueField} onClick={(v: any) => props.onOptionClick(v, item)} />
    }>
        <EmptyOption visible data={{ label: item[props.textField], value: '' }} checked={props.value() === ''} onClick={props.onClear} />
    </Show>
}
