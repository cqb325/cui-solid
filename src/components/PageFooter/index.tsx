import { useClassList } from "../utils/useProps"

export interface PageFooterProps {
    classList?: any;
    class?: string;
    style?: any;
    children?: any;
}

export function PageFooter (props: PageFooterProps){
    const classList = () => useClassList(props, 'cm-page-footer');
    return <div classList={classList()} style={props.style}>
        {props.children}
    </div>
}

export * from './Floor';
export * from './Navigations';
