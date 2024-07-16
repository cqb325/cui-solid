import { createContext, useContext } from "solid-js"
import { useClassList } from "../utils/useProps"

export * from './Row';
export * from './Col';
export * from './Label';
export * from './Value';

export interface TableStyleLayoutProps {
    labelWidth?: number
    children?: any
    classList?: any
    class?: string
    style?: any
}

export interface TableStyleLayoutContextProps {
    labelWidth: number
}

const TableStyleLayoutContext = createContext<TableStyleLayoutContextProps>({ labelWidth: 100});

export const useTableStyleLayoutContext = () => useContext(TableStyleLayoutContext);

export function TableStyleLayout (props: TableStyleLayoutProps) {
    const classList = () => useClassList(props, 'cm-table-style-layout');
    return <TableStyleLayoutContext.Provider value={{ labelWidth: props.labelWidth || 100 }}>
        <div classList={classList()} style={props.style}>{props.children}</div>
    </TableStyleLayoutContext.Provider>
}
