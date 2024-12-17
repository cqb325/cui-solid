import type { InnerPopupProps } from "../inner/InnerPopup";
import { InnerPopup } from "../inner/InnerPopup";

export interface PopoverProps extends InnerPopupProps {
}

export function Popover (props: PopoverProps) {
    const theme = props.theme || "light";

    return <InnerPopup {...props} theme={theme}/>
}
