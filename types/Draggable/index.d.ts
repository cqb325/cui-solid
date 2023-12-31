type DraggableProps = {
    classList?: any;
    class?: string;
    defaultPosition?: any;
    position?: any;
    scale?: number;
    bounds?: string;
    onStart?: Function;
    onDrag?: Function;
    onStop?: Function;
    axis?: 'x' | 'y' | 'both';
    style?: any;
    positionOffset?: any;
    grid?: number[];
    ref?: any;
    disabled?: boolean;
    handle?: string | HTMLElement;
    children?: any;
};
export declare function Draggable(props: DraggableProps): import("solid-js").JSX.Element;
export {};
