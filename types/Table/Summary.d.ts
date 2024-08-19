import type { ColumnProps, TableStore } from ".";
export interface SummaryProps {
    data: TableStore;
    summaryMethod?: (columns: ColumnProps[], data: any[]) => any;
    onResizeSummary: (width: number, height: number) => void;
}
export declare function Summary(props: SummaryProps): import("solid-js").JSX.Element;
