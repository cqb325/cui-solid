type SwitchProps = {
    size?: 'small' | 'default' | 'large';
    disabled?: boolean;
    style?: any;
    name?: string;
    classList?: any;
    class?: any;
    checked?: any;
    labels?: any[];
    values?: any[];
    onBeforeChange?: (currentStatus: boolean) => Promise<boolean>;
    onChange?: (value: any) => void;
    loading?: boolean;
};
export declare function Switch(props: SwitchProps): import("solid-js").JSX.Element;
export {};
