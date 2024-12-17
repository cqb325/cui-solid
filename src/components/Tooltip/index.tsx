import type { InnerPopupProps } from "../inner/InnerPopup";
import { InnerPopup } from "../inner/InnerPopup";

export interface TooltipProps extends Omit<InnerPopupProps, 'title'>{
}

export function Tooltip (props: TooltipProps) {
    const align = props.align ?? 'top';
    const arrow = props.arrow ?? true;
    return <InnerPopup {...props} clsPrefix="cm-tooltip"
        varName="tooltip" align={align} arrow={arrow} confirm={false}/>;
}
