import type { Signal } from "solid-js";
import { CarouselItem } from "./Item";
type CarouselProps = {
    classList?: any;
    class?: string;
    style?: any;
    arrow?: 'hover' | 'always' | 'never';
    children?: any;
    autoPlay?: boolean;
    duration?: number;
    effect?: 'fade' | 'slide';
    dotType?: 'dot' | 'line' | 'columnar';
    dotAlign?: 'left' | 'center' | 'right';
    activeIndex?: Signal<any>;
    onChange?: (v: any) => void;
};
export declare function Carousel(props: CarouselProps): import("solid-js").JSX.Element;
export declare namespace Carousel {
    var Item: typeof CarouselItem;
}
export declare const useCarouselContext: () => unknown;
export {};
