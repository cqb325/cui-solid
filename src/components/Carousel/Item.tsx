import { createUniqueId, type JSXElement} from "solid-js";

export interface CarouselItemProps {
    children?: JSXElement;
    id: string;
}
export function CarouselItem (props: any) {
    const id = createUniqueId();
    props.id = id;
    return props as unknown as JSXElement;
}
