export interface StrokeProps {
    percent: number;
    color: string;
}
declare type ProgressProps = {
    classList?: any;
    class?: string;
    hidePercent?: boolean;
    status?: 'normal' | 'error' | 'active' | 'success';
    value?: number;
    strokeWidth?: number;
    textInside?: boolean;
    infoRender?: Function;
    strokeColor?: string | string[] | StrokeProps[];
    type?: 'line' | 'circle';
    radius?: number;
    max?: number;
};
export declare function Progress(props: ProgressProps): import("solid-js").JSX.Element;
export {};
