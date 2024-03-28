import { Show, createEffect, createSignal } from "solid-js";
import { Icon } from "../../Icon";

export function Value (props: any) {
    const [bgColorStyle, setBgColorStyle] = createSignal<any>({});
    createEffect(() => {
        const style = props.open ? {
            background: `rgba(${props.currentValue.rgba.r},${props.currentValue.rgba.g},${props.currentValue.rgba.b},${props.currentValue.rgba.a})`
        } : { background: props.value};
        setBgColorStyle(style)
    })

    return <div class="cm-color-picker-value" tabIndex="0">
        {/* 文字对齐辅助 */}
        <span style={{width: '0px', "font-size": '12px', visibility: 'hidden', 'line-height': 'initial'}}>A</span>
        <input type="hidden" name={props.name} value={props.value}/>
        <div class="cm-select-color-wrap">
            <Show when={bgColorStyle().background} fallback={<div class="cm-select-color cm-select-color-empty"><Icon name="x" size={12}/></div>}>
                <div class="cm-select-color" style={bgColorStyle()} />
            </Show>
        </div>
    </div>
}
