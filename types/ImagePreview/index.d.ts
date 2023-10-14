declare type ImagePreviewProps = {
    classList?: any;
    class?: string;
    style?: any;
    failInfo?: string;
    previewList: string[];
    infinite?: boolean;
    onClose?: Function;
    visible?: Function[];
    onSwitch?: Function;
    maskClosable?: boolean;
    initIndex?: number;
};
export declare function downloadFile(url: string, name?: string): Promise<void>;
export declare function ImagePreview(props: ImagePreviewProps): import("solid-js").JSX.Element;
export {};
