import { Icon } from "../../Icon"

export function Value (props: any) {
    return <div class="cm-select-value" tabIndex="0" onClick={props.onShowHide}>
        <input type="hidden" name={props.name} value={props.value}/>
        {
            props.prefix
                ? <span class="cm-select-prefix">{props.prefix}</span>
                : null
        }
        <div class="cm-select-text"><div>{props.labels}</div></div>
        <Icon name="chevron-down" class="cm-select-cert"/>
        {
            props.clearable
                ? <Icon name="x-circle" class="cm-select-clear" onClick={props.onClear}/>
                : null
        }
    </div>
}
