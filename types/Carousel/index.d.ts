import type { Signal } from "solid-js";
import { CarouselItem } from "./Item";
export interface CarouselProps {
    classList?: any;
    class?: string;
    style?: any;
    height?: number;
    arrow?: boolean;
    children?: any;
    autoPlay?: boolean;
    duration?: number;
    effect?: 'fade' | 'slide' | 'card';
    dotType?: 'dot' | 'line' | 'columnar';
    dotAlign?: 'left' | 'right' | 'top' | 'bottom';
    dotColor?: string;
    dotActiveColor?: string;
    activeIndex?: Signal<any>;
    itemsPerView?: number | 'auto';
    gutter?: number;
    draggable?: boolean;
    dir?: 'h' | 'v';
    onChange?: (v: any) => void;
}
export declare function Carousel(props: CarouselProps): import("solid-js").JSX.Element;
export declare namespace Carousel {
    var Item: typeof CarouselItem;
}
export declare const useCarouselContext: () => unknown;
