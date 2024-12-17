import type { InnerPopupProps } from "../inner/InnerPopup";
export interface TooltipProps extends Omit<InnerPopupProps, 'title'> {
}
export declare function Tooltip(props: TooltipProps): import("solid-js").JSX.Element;
