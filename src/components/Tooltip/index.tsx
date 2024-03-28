import { createSignal } from "solid-js";
import { useClassList } from "../utils/useProps";
type TooltipProps = {
    classList?: any,
    class?: string,
    align?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    theme?: string,
    style?: any,
    children?: any,
    content?: any,
    disabled?: boolean
}

export function Tooltip (props: TooltipProps) {
    const [visible, setVisible] = createSignal(false);
    const [style, setStyle] = createSignal({
        display: 'none',
        visibility: 'hidden'
    } as any);
    const align = () => props.align ?? 'bottom';

    const onMouseEnter = () => {
        if (props.disabled) {
            return;
        }
        setVisible(true);
        setStyle({
            display: 'block',
            visibility: 'visible'
        });
    };

    const onMouseLeave = () => {
        if (props.disabled) {
            return;
        }
        setVisible(false);
        setTimeout(() => {
            setStyle({
                display: 'none',
                visibility: 'hidden'
            });
        }, 250);
    };

    const classList = () => useClassList(props, 'cm-tooltip', align(), {
        [`cm-tooltip-${props.theme}`]: props.theme
    });

    const popperClass = () => ({'cm-tooltip-popper': true, 'animation': visible()})

    return <div classList={classList()} style={props.style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div class="cm-tooltip-rel">
            {props.children}
        </div>
        <div classList={popperClass()} x-placement={align()} style={style()}>
            <div class="cm-tooltip-content">
                <svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-tooltip-arrow">
                    <path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1" />
                    <path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)" />
                </svg>
                <div class="cm-tooltip-inner cm-tooltip-inner-with-width">
                    {props.content}
                </div>
            </div>
        </div>
    </div>;
}
