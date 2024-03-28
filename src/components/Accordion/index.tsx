import { createContext, useContext } from 'solid-js';
import { useClassList } from '../utils/useProps';
import createModel from '../utils/createModel';
import { Item } from './Item';

export const AccordionContext = createContext();

type AccordionProps = {
    classList?: any,
    class?: string,
    style?: any,
    children?: any,
    multi?: boolean,
    onSelect?: (name: string, open: boolean, ids: any[]) => any,
    activeKey?: any,
    flex?: boolean
}

export function Accordion (props: AccordionProps) {
    const classList = () => useClassList(props, 'cm-accordion', {
        'cm-flex-accordion': props.flex
    });
    const [activeKey, setActiveKey] = createModel(props, 'activeKey', props.multi ? [] : '');
    const ctx = {flex: props.flex, multi: props.multi, signal: [activeKey, setActiveKey], onSelect: props.onSelect};
    return <AccordionContext.Provider value={ctx}>
        <div classList={classList()} style={props.style}>{props.children}</div>
    </AccordionContext.Provider>
}

Accordion.Item = Item;

export const useAccordionContext = () => useContext(AccordionContext);
