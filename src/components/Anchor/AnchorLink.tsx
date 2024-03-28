import type { JSXElement} from "solid-js";
import { children } from "solid-js";

export interface AnchorLinkProps {
    href: string
    title: string|JSXElement,
    subItems () : AnchorLinkProps[]
}
export function AnchorLink (props: any) {
    const links = children(() => props.children);
    const evaluatedLinks = () => links.toArray() as unknown as AnchorLinkProps[]
    props.subItems = evaluatedLinks;
    return props as unknown as JSXElement
}
