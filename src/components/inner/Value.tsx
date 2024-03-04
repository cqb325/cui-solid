import { JSXElement, Match, Show, Switch } from "solid-js";
import { Icon } from "../Icon";
import { TagConfig, TagGroup } from "../TagGroup";
import { InnerInput } from "../FormElements/Input/input";

export interface ValueProps {
    onClear?: Function
    prepend?: any
    text?: string | Array<any>
    clearable?: boolean
    icon?: JSXElement
    disabled?: boolean
    size?: 'small'|'large'
    multi?: boolean
    showMax?: number
    placeholder?: string
    valueClosable?: boolean,
    onClose?(item: TagConfig, e: any): void,
    onInput?(e: any): void,
    filter?: boolean,
    query?: [Function, Function]
    showMore?: boolean,
    onDeleteLastValue?: Function
}

export function Value (props: ValueProps) {
    const [query, setQuery] = props.query ?? [() => {}, () => {}];
    let filterInput: any;
    const onClear = (e: any) => {
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        props.onClear && props.onClear();
    }
    const classList = () => ({
        'cm-field-value': true,
        'cm-field-clearable': props.clearable && !!props.text && !!props.text.length,
        'cm-field-disabled': props.disabled,
        [`cm-field-value-${props.size}`]: !!props.size,
    })
    const text = () => {
        Promise.resolve().then(() => {
            if (props.filter && filterInput) {
                filterInput.focus();
            }
        })
        if (props.multi && props.text && props.text instanceof Array) {
            return props.text.map((item: any, index: number) => {
                return {id: item.id, title: item.title};
            })
        }
        return [];
    };

    const inputStyle = () => {
        const str = props.filter ? query() : '';
        return {
            width: str !== undefined ? str.length * 12 + 20 + 'px' : '100%',
        }
    }

    const onValueClick = () => {
        if (props.filter && filterInput) {
            filterInput.focus();
        }
    }

    const onFilterKeyDown = (e: any) => {
        const queryStr = query();
        if (e.key === 'Backspace' || e.code === 'Backspace'
        || e.key === 'Delete' || e.code === 'Delete') {
            if (queryStr.length === 0) {
                props.onDeleteLastValue && props.onDeleteLastValue();
            }
        }
    }
    
    return <div classList={classList()} tabIndex="1" onClick={onValueClick}>
        <input type="hidden"></input>
        {/* 文字对齐辅助 */}
        <span style={{width: '0px', "font-size": '12px', visibility: 'hidden', 'line-height': 'initial'}}>A</span>
        <Show when={props.prepend}>
            <div class="cm-field-prepend">
                {props.prepend}
            </div>
        </Show>
        <Switch>
            <Match when={props.multi}>
                <div class="cm-field-selection">
                    <TagGroup data={text()} closable={props.valueClosable} max={props.showMax} showMore={props.showMore} onClose={props.onClose}
                        size={props.size === 'small' ? 'small' : 'large'}/>
                    { 
                        props.filter
                        ? <InnerInput ref={filterInput} style={inputStyle()} notCreateFiled class='cm-select-filter' 
                            trigger='input' size={props.size} value={[query, setQuery]} onKeyDown={onFilterKeyDown}/>
                        : null
                    }
                </div>
            </Match>
            <Match when={!props.multi}>
                <div class='cm-field-text'>
                    <Show when={!props.filter}>
                        {props.text ? props.text : <span class="cm-field-placeholder">{props.placeholder??''}</span>}
                    </Show>
                    <Show when={props.filter}>
                        <InnerInput ref={filterInput} style={inputStyle()} notCreateFiled class='cm-select-filter' 
                            trigger='input' size={props.size} value={[query, setQuery]}/>
                    </Show>
                </div>
            </Match>
        </Switch>
        <span class="cm-field-cert">
            {props.icon}
        </span>
        <Show when={props.clearable && props.text && props.text !== ''}>
            <Icon name='x-circle' class='cm-field-clear' onClick={onClear}/>
        </Show>
    </div>
}