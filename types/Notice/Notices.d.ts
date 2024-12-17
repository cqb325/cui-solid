import type { JSX } from "solid-js";
declare type NoticesProps = {
    data?: any;
    onClose?: (key: any, dock: any) => void;
    docker?: string;
};
export declare function NoticeBox(props: NoticesProps): JSX.Element;
export declare function Notices(props: NoticesProps): JSX.Element;
export {};
