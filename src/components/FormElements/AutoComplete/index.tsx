import { createEffect, createSignal, For, on, onCleanup, onMount } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { Collapase } from '../../inner/Collapase';
import { useClickOutside } from '../../utils/useClickOutside';
import { Option } from './Option';
import { Value } from '../../inner/Value';
import createField from "../../utils/createField";
import { useClassList } from '../../utils/useProps';
import { Icon } from '../../Icon';
import { Dropdown } from '../../Dropdown';
import { untrack } from 'solid-js/web';

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
    renderOption?: Function,
    ref?: any,
    emptyOption?: any,
    onChange?: Function,
    onSearch?: Function,
    transfer?: boolean,
    align?: 'bottomLeft'|'bottomRight'
}

export function AutoComplete (props: SelectOptions) {
    const [open, setOpen] = createSignal(false);
    const align = props.align ?? 'bottomLeft';
    const [value, setValue] = createField(props, '');

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

    const onOptionClick = (v: any, item: any) => {
        setValue(v);
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

    const onFilter = (e: any) => {
        if (e.target.value.length) {
            props.onSearch && props.onSearch(e.target.value);
        }
    }

    const onBeforeDrop = () => {
        if (store.list && store.list.length) {
            return true;
        }
        return false;
    }

    return <div classList={classList()} style={props.style} ref={wrap}>
    <Dropdown transfer={props.transfer} align={align} disabled={props.disabled} trigger='click' visible={[open, setOpen]}
    onBeforeDrop={onBeforeDrop}
        menu={<div class='cm-select-options-wrap'>
        <Collapase open={open()}>
            <div class='cm-select-options'>
                <ul class='cm-select-option-list'>
                    <For each={store.list}>
                        {(item) => {
                            return <Option renderOption={props.renderOption} visible={item._show}
                                disabled={item.disabled} data={item} checked={item._checked} 
                                valueField={valueField} textField={textField} onClick={onOptionClick}></Option>
                        }}
                    </For>
                </ul>
            </div>
        </Collapase>
    </div>}>
        <Value text={labels()} disabled={props.disabled} filter onInput={onFilter}
                clearable={props.clearable} onClear={onClear} 
                prepend={props.prefix} size={props.size} icon={<Icon name='chevron-down' class="cm-select-cert"/>} />
    </Dropdown>
    </div>
}