import type { JSXElement } from "solid-js";
export interface SwitchProps {
    size?: 'small' | 'default' | 'large';
    disabled?: boolean;
    style?: any;
    name?: string;
    classList?: any;
    class?: any;
    checked?: any;
    labels?: any[];
    values?: any[];
    round?: boolean;
    icon?: JSXElement | JSXElement[];
    colors?: string[];
    onBeforeChange?: (currentStatus: boolean) => Promise<boolean>;
    onChange?: (value: any) => void;
    loading?: boolean;
    asFormField?: boolean;
}
export declare function Switch(props: SwitchProps): import("solid-js").JSX.Element;
