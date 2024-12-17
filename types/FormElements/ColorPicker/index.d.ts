interface ColorPickerProps {
    name?: string;
    value?: any;
    style?: any;
    classList?: any;
    class?: string;
    transfer?: boolean;
    inline?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    disabled?: boolean;
    alpha?: boolean;
    size?: 'small' | 'large';
    recommend?: boolean;
    colors?: string[];
    asFormField?: boolean;
    onChange?(v: string): void;
}
export declare function ColorPicker(props: ColorPickerProps): import("solid-js").JSX.Element;
export {};
