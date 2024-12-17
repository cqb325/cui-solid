import type { JSX, Signal } from "solid-js";
export interface TeleportBoxItem {
    value: any;
    label: any;
    disabled?: boolean;
    checked?: boolean;
    children?: TeleportBoxItem[];
    [key: string]: any;
}
export interface TeleportBoxProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    data?: TeleportBoxItem[];
    value?: Signal<any[]>;
    defaultValue?: any[];
    disabled?: boolean;
    virtual?: boolean;
    onChange?: (value: any[]) => void;
    renderSourceItem?: (item: TeleportBoxItem, onChange: (checked: boolean) => void) => JSX.Element;
    renderSelectedItem?: (item: TeleportBoxItem, onRemove: () => void) => JSX.Element;
    filter?: (item: TeleportBoxItem, keyword: string) => boolean;
}
export declare function TeleportBox(props: TeleportBoxProps): JSX.Element;
