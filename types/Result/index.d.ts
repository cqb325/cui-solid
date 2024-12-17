import { JSX, JSXElement } from "solid-js";
export interface ResultProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title'> {
    layout?: 'h' | 'v';
    icon?: JSXElement;
    status?: 'success' | 'warning' | 'error' | 'info';
    title?: string | JSXElement;
    subTitle?: string | JSXElement;
    extra?: JSXElement;
    desc?: string | JSXElement;
}
export declare function Result(props: ResultProps): JSX.Element;
