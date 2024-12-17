import type { DraggableData } from './utils';
export interface DraggableProps {
    classList?: any;
    class?: string;
    defaultPosition?: any;
    position?: any;
    scale?: number;
    bounds?: string;
    onStart?: (e: any, data: DraggableData) => boolean | undefined;
    onDrag?: (e: any, data: DraggableData) => boolean | undefined;
    onStop?: (e: any, data: DraggableData) => boolean | undefined;
    axis?: 'x' | 'y' | 'both';
    style?: any;
    positionOffset?: any;
    grid?: number[];
    ref?: any;
    disabled?: boolean;
    handle?: string | HTMLElement;
    children?: any;
}
export declare function Draggable(props: DraggableProps): import("solid-js").JSX.Element;
