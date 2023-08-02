interface ColorPickerProps {
    name?: string;
    value?: any;
    style?: any;
    classList?: any;
    class?: string;
    transfer?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    disabled?: boolean;
    alpha?: boolean;
    size?: 'small' | 'large';
    recommend?: boolean;
    colors?: string[];
    onChange?(v: string): void;
}
export declare function ColorPicker(props: ColorPickerProps): import("solid-js").JSX.Element;
export {};
