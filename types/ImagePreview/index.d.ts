import type { Signal } from "solid-js";
export interface ImagePreviewProps {
    classList?: any;
    class?: string;
    style?: any;
    failInfo?: string;
    previewList: string[];
    infinite?: boolean;
    onClose?: () => void;
    visible?: Signal<boolean>;
    onSwitch?: (index: number) => void;
    maskClosable?: boolean;
    initIndex?: number;
}
export declare function downloadFile(url: string, name?: string): Promise<void>;
export declare function ImagePreview(props: ImagePreviewProps): import("solid-js").JSX.Element;
