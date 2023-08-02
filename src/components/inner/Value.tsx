import { JSXElement, Match, Show, Switch } from "solid-js";
import { Icon } from "../Icon";
import { TagConfig, TagGroup } from "../TagGroup";

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
    valueClosable?: boolean,
    onClose?(item: TagConfig, e: any): void,
    onInput?(e: any): void,
    filter?: boolean,
    showMore?: boolean
}

export function Value (props: ValueProps) {
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
        if (props.multi && props.text && props.text instanceof Array) {
            return props.text.map((item: any, index: number) => {
                return {id: item.id, title: item.title};
            })
        }
        return [];
    };
    
    return <div classList={classList()} tabIndex="1">
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
                </div>
            </Match>
            <Match when={!props.multi}>
                <div class='cm-field-text'>
                    {
                        props.filter ? <input class="cm-select-input" value={props.text} onInput={props.onInput}/>
                        : props.text
                    }
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