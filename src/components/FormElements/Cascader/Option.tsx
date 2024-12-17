import { useCascaderContext } from ".";
import { CascaderNode, CascaderStore, NodeKeyType } from "./store";

export interface OptionProps {
    data: CascaderNode[]
    seperator: string
    store: CascaderStore
    filter?: boolean
}

export function Option (props: OptionProps) {
    const { store } = props;
    const ctx: any = useCascaderContext();
    const title = () => props.data.map((item: CascaderNode) => item[store.titleField]).join(' / ');
    const onClick = () => {
        const lastItem = props.data[props.data.length - 1];
        if (lastItem.disabled) {
            return;
        }
        const vals: NodeKeyType[] = props.data.map(item => item[store.valueField]);
        if (ctx?.multi) {
            if (props.filter) {
                ctx?.clearQuery('');
            }
            store.checkNode(vals[vals.length - 1], true);
        } else {
            store.setSelectedKey(vals);
            ctx?.onSelect(props.data[props.data.length - 1]);
        }
    };

    const classList = () => ({
        'cm-cascader-item': true,
        'cm-cascader-item-disabled': props.data[props.data.length - 1].disabled
    })
    return <div classList={classList()} onClick={onClick}>
        {title()}
    </div>
}
