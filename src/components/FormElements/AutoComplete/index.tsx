import { createEffect, createSignal, For, untrack } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { Collapase } from '../../inner/Collapase';
import { Option } from './Option';
import { Value } from '../../inner/Value';
import createField from "../../utils/createField";
import { useClassList } from '../../utils/useProps';
import { Icon } from '../../Icon';
import { Dropdown } from '../../Dropdown';


type SelectOptions = {
    name?: string,
    value?: any,
    disabled?: boolean,
    size?: 'small'|'large',
    clearable?: boolean,
    prefix?: any,
    style?: any,
    data?: Array<any>,
    textField?: string,
    valueField?: string,
    class?: any,
    classList?: any,
    filter?: boolean,
    placeholder?: string,
    renderOption?: (data: any) => any,
    ref?: any,
    emptyOption?: any,
    onChange?: (value: any, item?: any) => void,
    onSearch?: (query: string) =>void,
    transfer?: boolean,
    align?: 'bottomLeft'|'bottomRight'
}

export function AutoComplete (props: SelectOptions) {
    const [open, setOpen] = createSignal(false);
    const align = props.align ?? 'bottomLeft';
    const [value, setValue] = createField<any>(props, '');
    const [query, setQuery] = createSignal('');

    const classList = () => useClassList(props, 'cm-select', 'cm-autocomplete', {
        'cm-select-disabled': props.disabled,
        [`cm-select-${props.size}`]: props.size,
        'cm-select-clearable': !props.disabled && props.clearable && (value().length !== 0),
        'cm-select-open': open(),
        'cm-select-with-prefix': props.prefix,
        // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
    });
    let wrap: any;
    const textField = 'label';
    const valueField = props.valueField || 'value';
    let isClickChanging = false;

    let newData: any[] = [];
    if (props.data) {
        newData = props.data.map(item => {
            if (typeof item === 'object') {
                item._show = true;
                return item;
            } else {
                return {[valueField]: item, label: item, _show: true};
            }
        })
    }

    const [store, setStore] = createStore({ list: newData });

    createEffect(() => {
        const val = value();
        setStore(
            'list',
            item => item,
            produce((item: any) => {
                item._checked = val === item[valueField];
            }),
        );
    });
    createEffect(() => {
        if (props.data) {
            newData = props.data.map(item => {
                if (typeof item === 'object') {
                    item._show = true;
                    return item;
                } else {
                    return {[valueField]: item, label: item, _show: true};
                }
            });
            setStore(
                'list',
                () => [...newData],
            );
            if (newData.length) {
                setOpen(true);
            }
        }
    });

    createEffect(() => {
        const queryStr = query();
        if (isClickChanging) {
            return;
        }
        if (queryStr.length) {
            props.onSearch && props.onSearch(queryStr);
        }
    })

    const onOptionClick = (v: any, item: any) => {
        setValue(v);
        isClickChanging = true;
        setQuery(item[textField]);
        queueMicrotask(() => {
            isClickChanging = false; // 防止触发查询
        })
        props.onChange && props.onChange(v, item);
        setOpen(false);
    }

    const labels = () => {
        const v = value();
        let active: any;
        untrack(() => {
            active = store.list.find((item: any) => {
                return item[valueField] === v;
            });
        })

        return active ? active[textField] : (props.emptyOption ? props.emptyOption : '');
    }

    const onClear = (e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        props.onChange && props.onChange('');
        setValue('');
    }

    const onBeforeDrop = () => {
        if (store.list && store.list.length) {
            return true;
        }
        return false;
    }

    return <div classList={classList()} style={props.style} ref={wrap}>
    <Dropdown transfer={props.transfer} fixWidth align={align} disabled={props.disabled} trigger="click" visible={[open, setOpen]}
    onBeforeDrop={onBeforeDrop}
        menu={<div class="cm-select-options-wrap">
        <Collapase open={open()}>
            <div class="cm-select-options">
                <ul class="cm-select-option-list">
                    <For each={store.list}>
                        {(item) => {
                            return <Option renderOption={props.renderOption} visible={item._show}
                                disabled={item.disabled} data={item} checked={item._checked}
                                valueField={valueField} textField={textField} onClick={onOptionClick} />
                        }}
                    </For>
                </ul>
            </div>
        </Collapase>
    </div>}>
        <Value text={labels()} disabled={props.disabled} filter query={[query, setQuery]}
                clearable={props.clearable} onClear={onClear} placeholder={props.placeholder}
                prepend={props.prefix} size={props.size} icon={<Icon name="chevron-down" class="cm-select-cert"/>} />
    </Dropdown>
    </div>
}
