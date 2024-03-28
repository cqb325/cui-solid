import { Icon } from "../../Icon"

export function Value (props: any) {
    return <div class="cm-select-value" tabIndex="0" onClick={props.onShowHide}>
        <input class="cm-select-input" value={props.labels} onInput={props.onFilter}/>
        {
            props.prefix
                ? <span class="cm-select-prefix">{props.prefix}</span>
                : null
        }
        <Icon name="chevron-down" class="cm-select-cert"/>
        {
            props.clearable
                ? <Icon name="x-circle" class="cm-select-clear" onClick={props.onClear}/>
                : null
        }
    </div>
}
