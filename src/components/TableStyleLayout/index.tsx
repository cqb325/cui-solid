import type { JSX} from "solid-js";
import { createContext, splitProps, useContext } from "solid-js"
import { useClassList } from "../utils/useProps"

export * from './Row';
export * from './Col';
export * from './Label';
export * from './Value';

export interface TableStyleLayoutProps extends JSX.HTMLAttributes<HTMLDivElement> {
    labelWidth?: number
}

export interface TableStyleLayoutContextProps {
    labelWidth: number
}

const TableStyleLayoutContext = createContext<TableStyleLayoutContextProps>({ labelWidth: 100});

export const useTableStyleLayoutContext = () => useContext(TableStyleLayoutContext);

export function TableStyleLayout (props: TableStyleLayoutProps) {
    const [local, rest] = splitProps(props, ['children', 'class', 'classList']);
    const classList = () => useClassList(local, 'cm-table-style-layout');
    return <TableStyleLayoutContext.Provider value={{ labelWidth: props.labelWidth || 100 }}>
        <div classList={classList()} {...rest}>{local.children}</div>
    </TableStyleLayoutContext.Provider>
}
