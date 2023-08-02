import { Accessor, children, createEffect, createMemo, createSignal, For, JSXElement, onCleanup, onMount, untrack } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { Option } from './InnerOption';
import { EmptyOption } from './EmptyOption';
import { Value } from '../../inner/Value';
import { Input } from '../Input';
import createField from "../../utils/createField";
import { useClassList } from '../../utils/useProps';
import { Icon } from '../../Icon';
import { TagConfig } from '../../TagGroup';
import { Dropdown } from '../../Dropdown';
import { SelectOptionProps } from './Option';
import { VirtualList } from 'cui-virtual-list';
export * from './Option'
export * from './OptionGroup'

type SelectOptions = {
    name?: string,
    value?: any,
    disabled?: boolean,
    size?: 'small'|'large',
    clearable?: boolean,
    multi?: boolean,
    prefix?: any,
    style?: any,
    data?: Array<any>,
    textField?: string,
    valueField?: string,
    class?: any,
    classList?: any,
    filter?: boolean,
    renderOption?: Function,
    ref?: any,
    emptyOption?: any,
    onChange?: Function,
    showMax?: number,
    valueClosable?: boolean,
    transfer?: boolean,
    align?: 'bottomLeft'|'bottomRight',
    showMore?: boolean,
    children?: any,
    maxHeight?: number
}

export function Select (props: SelectOptions) {
    const [open, setOpen] = createSignal(false);
    const align = props.align ?? 'bottomLeft';
    const items = children(() => props.children)
	const evaluatedItems = () => items.toArray() as unknown as SelectOptionProps[];
    const [value, setValue] = createField(props, props.multi ? [] : '');

    const classList = () => useClassList(props, 'cm-select', {
        'cm-select-disabled': props.disabled,
        [`cm-select-${props.size}`]: props.size,
        'cm-select-clearable': !props.disabled && props.clearable && (`${value()}`.length !== 0),
        'cm-select-multi': props.multi,
        'cm-select-open': open(),
        'cm-select-with-prefix': props.prefix,
        // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
    });
    let wrap: any;
    const textField = props.textField || 'label';
    const valueField = props.valueField || 'value';

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
        const data = evaluatedItems();
        dataMap = {};
        let newData: any[] = [];
        if (props.emptyOption) {
            newData.push({[valueField]: '', [textField]: props.emptyOption, _show: true, emptyOption: true});
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
        setStore(
            'list',
            item => item,
            produce((item: any) => {
                if (props.multi) {
                    item._checked = val.includes(item[valueField]);
                } else {
                    item._checked = val === item[valueField];
                }
            }),
        );
    })

    // 将选中的数据同步至store的数据项中
    createEffect(() => {
        const val = value();
        setStore(
            'list',
            item => item,
            produce((item: any) => {
                if (props.multi) {
                    item._checked = val.includes(item[valueField]);
                } else {
                    item._checked = val === item[valueField];
                }
            }),
        );
    });

    // 点击更新setValue 并触发onChange事件
    const onOptionClick = (v: any) => {
        if (dataMap[v]) {
            if (dataMap[v].items && dataMap[v].items.length) {
                return;
            }
        }
        if (props.multi) {
            let val = value();
            const index = val.indexOf(v);
            if (index > -1) {
                val.splice(index, 1);
            } else {
                val = [...val]
                val.push(v);
            }
            
            setValue([...val]);
            props.onChange && props.onChange(val);
        } else {
            setValue(v);
            setOpen(false);
            props.onChange && props.onChange(v);
        }
    }

    const labels = () => {
        const arr: any[] = [];
        store.list.forEach(item => {
            if (item._checked) {
                arr.push({id: item[valueField], title: item[textField]});
            }
        });
        if (props.multi) {
            return arr.length ? arr : (props.emptyOption ? [{id: '', title: props.emptyOption}] : []);
        } else {
            return arr.length ? arr[0].title : (props.emptyOption ? props.emptyOption : '');
        }
    }

    // 清空数据
    const onClear = (e: any) => {
        if (props.multi) {
            props.onChange && props.onChange([]);
            setValue([]);
        } else {
            props.onChange && props.onChange('');
            setValue('');
            setOpen(false);
        }
    }

    const onFilter = (v: any) => {
        setStore(
            'list',
            item => item,
            produce((item: any) => {
                item._show = item[textField].indexOf(v) > -1;
            }),
        );
    }

    // 多选场景下删除value
    const onValueClose = (item: TagConfig, e: any) => {
        if (props.multi) {
            let val = value();
            const index = val.indexOf(item.id);
            if (index > -1) {
                val.splice(index, 1);
            }
            setValue([...val]);
            props.onChange && props.onChange(val);
        }
    }

    const displayItems = createMemo(() => {
        return store.list.filter(item => item._show);
    });

    return <div classList={classList()} style={props.style} ref={wrap}>
        <Dropdown transfer={props.transfer} align={align} disabled={props.disabled} trigger='click' visible={[open, setOpen]}
            menu={<div class='cm-select-options-wrap'>
            <div class='cm-select-options' style={{'max-height': props.maxHeight ? `${props.maxHeight}px` : ''}}>
                {
                    props.filter ? <div class='cm-select-filter-wrap'>
                        <Input notCreateFiled class='cm-select-filter' size='small' clearable onInput={onFilter}/>
                    </div>
                    : null
                }
                <ul class='cm-select-option-list'>
                    <VirtualList items={displayItems()} itemEstimatedSize={30} maxHeight={200}>
                        {(props: any) : JSXElement => {
                            const item = props.item;
                            if (item.emptyOption) {
                                return <EmptyOption visible data={{label: item[textField], value: ''}} checked={value() === ''} onClick={onClear}/>
                            } else {
                                return <Option ref={props.ref} renderOption={props.renderOption} visible={item._show} disabled={item.disabled} data={item} checked={item._checked} 
                                    textField={textField} valueField={valueField} onClick={onOptionClick}></Option>
                            }
                        }}
                    </VirtualList>
                    {/* {
                        props.emptyOption ? <EmptyOption visible data={{
                            label: props.emptyOption,
                            value: ''
                        }} checked={value() === ''} onClick={onClear}/>
                        : null
                    }
                    <For each={store.list}>
                        {(item) => {
                            return <Option renderOption={props.renderOption} visible={item._show} disabled={item.disabled} data={item} checked={item._checked} 
                                textField={textField} valueField={valueField} onClick={onOptionClick}></Option>
                        }}
                    </For> */}
                </ul>
            </div>
        </div>}>
            <Value text={labels()} multi={props.multi} showMax={props.showMax} disabled={props.disabled} showMore={props.showMore}
                valueClosable={props.valueClosable} clearable={props.clearable} onClear={onClear} 
                prepend={props.prefix} size={props.size} icon={<Icon name='chevron-down' class="cm-select-cert"/>} onClose={onValueClose}/>
        </Dropdown>
        
    </div>
}