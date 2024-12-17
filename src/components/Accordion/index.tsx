import type { JSX} from 'solid-js';
import { createContext, splitProps, useContext } from 'solid-js';
import { useClassList } from '../utils/useProps';
import createModel from '../utils/createModel';
import { Item } from './Item';

export const AccordionContext = createContext();

export interface AccordionProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onSelect'>{
    multi?: boolean,
    onSelect?: (name: string, open: boolean, ids: any[]) => any,
    activeKey?: any,
    flex?: boolean
}

export function Accordion (props: AccordionProps) {
    const [local, rest] = splitProps(props, ['multi', 'onSelect', 'activeKey', 'flex', 'class', 'classList']);
    const classList = () => useClassList(local, 'cm-accordion', {
        'cm-flex-accordion': local.flex
    });
    const [activeKey, setActiveKey] = createModel(local, 'activeKey', local.multi ? [] : '');
    const ctx = {flex: local.flex, multi: local.multi, signal: [activeKey, setActiveKey], onSelect: local.onSelect};
    return <AccordionContext.Provider value={ctx}>
        <div classList={classList()} {...rest} />
    </AccordionContext.Provider>
}

Accordion.Item = Item;

export const useAccordionContext = () => useContext(AccordionContext);
