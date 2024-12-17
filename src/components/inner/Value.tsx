import type { JSXElement, Signal} from "solid-js";
import { createSignal, Match, Show, Switch } from "solid-js";
import type { TagConfig, TagGroupProps} from "../TagGroup";
import { TagGroup } from "../TagGroup";
import { Input } from "../FormElements/Input";
import { FeatherXCircle } from "cui-solid-icons/feather";

export interface ValueProps {
    onClear?: (e?: any) => void
    prepend?: any
    text?: string | JSXElement | Array<any>
    clearable?: boolean
    icon?: JSXElement
    disabled?: boolean
    size?: 'small'|'large'
    multi?: boolean
    showMax?: TagGroupProps['max']
    onlyInput?: boolean
    placeholder?: string
    valueClosable?: boolean,
    onClose?(item: TagConfig, e: any): void,
    onInput?(e: any): void,
    filter?: boolean,
    query?: Signal<any>
    showMore?: boolean,
    onDeleteLastValue?: () => void
}

export function Value (props: ValueProps) {
    const [query, setQuery] = props.query ?? [() => '', () => {}];
    const [filterStr, setFilterStr] = createSignal('');
    let filterInput: any;
    let selection: any;
    const onClear = (e: any) => {
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        props.onClear && props.onClear(e);
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
        // 查询内容变化时，更新输入框的宽度
        const str = props.filter ? query() : '';
        updateFilterStyle();
        return {
            width: '10px',
            // width: str !== undefined ? str.length * 12 + 20 + 'px' : '100%',
        }
    }

    const updateFilterStyle = () => {
        filterInput.style.width = '10px';
        filterInput.style.width = filterInput.scrollWidth + 'px';

        Promise.resolve().then(() => {
            filterInput.style.width = '10px';
            const maxWidth = Math.floor(selection?.getBoundingClientRect().width || 10);
            filterInput.style.width = filterInput.scrollWidth + 'px';
            filterInput.parentElement.style.width = Math.min(maxWidth-20, filterInput.scrollWidth) + 'px';
        })
    }

    // 因为Input输入中文时不会触发change事件，所以需要监听input事件进行更新
    const onFilterChange = (v: string, e: any) => {
        updateFilterStyle();
        setFilterStr(v);
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

    const onFilterBlur = () => {
        if (props.onlyInput) {
            return;
        }
        if (props.filter) {
            setFilterStr('');
            setTimeout(() => {
                setQuery('');
            }, 100)
        }
    }

    return <div classList={classList()} tabIndex="1" onClick={onValueClick}>
        <input type="hidden" />
        {/* 文字对齐辅助 */}
        <span style={{width: '0px', "font-size": '12px', visibility: 'hidden', 'line-height': 'initial'}}>A</span>
        <Show when={props.prepend}>
            <div class="cm-field-prepend">
                {props.prepend}
            </div>
        </Show>
        <Switch>
            <Match when={props.multi}>
                <div class="cm-field-selection" ref={selection}>
                    <TagGroup data={text()} closable={props.valueClosable} max={props.showMax} showMore={props.showMore} onClose={props.onClose}
                        size={props.size === 'small' ? 'small' : 'large'} extra={
                            props.filter
                            ? <Input ref={filterInput} style={inputStyle()} class="cm-select-filter" onBlur={onFilterBlur}
                                trigger="input" size={props.size} value={[query, setQuery]} onKeyDown={onFilterKeyDown} onInput={onFilterChange}/>
                            : null
                        }/>
                </div>
            </Match>
            <Match when={!props.multi}>
                <div class="cm-field-text" ref={selection}>
                    <Show when={!props.onlyInput}>
                        {props.text ? <span style={{display: filterStr() ? 'none' : 'inline-block'}}>{props.text}</span> : <span class="cm-field-placeholder" style={{display: filterStr() ? 'none' : 'inline-block'}}>{props.placeholder??''}</span>}
                    </Show>
                    <Show when={props.filter}>
                        <Input ref={filterInput} style={inputStyle()} class="cm-select-filter"
                            trigger="input" size={props.size} value={[query, setQuery]} onInput={onFilterChange} onBlur={onFilterBlur}/>
                    </Show>
                </div>
            </Match>
        </Switch>
        <span class="cm-field-cert">
            {props.icon}
        </span>
        <Show when={props.clearable && props.text && props.text !== ''}>
            <FeatherXCircle class="cm-field-clear" onClick={onClear}/>
        </Show>
    </div>
}
