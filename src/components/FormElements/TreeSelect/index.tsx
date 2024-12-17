import { useClassList } from "../../utils/useProps"
import { Tree, TreeCheckMod } from "../../Tree";
import { Dropdown } from "../../Dropdown";
import { Value } from "../../inner/Value";
import type { NodeKeyType, TreeInstanceProps, TreeNode, TreeProps } from "../../Tree";
import createField from "../../utils/createField";
import { createEffect, createMemo, createSignal } from "solid-js";
import type { TagConfig } from "../../TagGroup";
import { FeatherChevronDown } from "cui-solid-icons/feather";

export interface TreeSelectProps extends TreeProps {
    classList?: any,
    class?: string,
    style?: any,
    data: TreeNode[],
    transfer?: boolean,
    align?: 'bottomLeft'|'bottomRight',
    disabled?: boolean,
    clearable?: boolean,
    prepend?: any,
    mode?: TreeCheckMod,
    size?: 'small'|'large',
    showMax?: number,
    valueClosable?: boolean,
    placeholder?: string,
    showMore?: boolean
    multi?: boolean,
    asFormField?: boolean
    onChange?: (value: NodeKeyType|NodeKeyType[]) => void,
}

export function TreeSelect (props: TreeSelectProps) {
    const [value, setValue] = createField<NodeKeyType|NodeKeyType[]>(props, props.multi ? [] : '');
    const [text, setText] = createSignal<any>('');
    const align = props.align ?? 'bottomLeft';
    let tree: TreeInstanceProps | undefined;
    const mode: TreeCheckMod = props.mode ?? TreeCheckMod.HALF;
    const checkRelation = props.checkRelation ?? 'related';
    const classList = () => useClassList(props, 'cm-tree-select', {
        'cm-tree-select-disabled': props.disabled,
        [`cm-tree-select-${props.size}`]: props.size,
    });
    const onSelect = (data: any) => {
        if (!props.multi) {
            props.onChange && props.onChange(data.id);
        }
    }

    const onTreeChange = (ids: NodeKeyType[]|NodeKeyType) => {
        setValue(ids);
        props.onChange && props.onChange(getChecked());
    }

    const onClear = () => {
        const ret: NodeKeyType | NodeKeyType[] = props.multi ? [] : '';
        setValue(ret);
        props.onChange && props.onChange(ret);
    }

    const onValueClose = (item: TagConfig, e: any) => {
        const v = value() as NodeKeyType[];
        v.splice(v.indexOf(item.id), 1);
        setValue([...v]);
    }

    const getChecked = () => {
        const all = tree?.getCheckedKeys(mode);
        return all || [];
    }

    createEffect(() => {
        const outValue = value();
        if (props.multi && (outValue as NodeKeyType[]).join(',') === getChecked().join(',')) {
            return;
        }
    })

    createMemo(() => {
        let vals = value();
        props.data;
        if (props.multi) {
            if (typeof vals === 'string') {
                vals = vals.split(',');
                setValue(vals);
                return;
            }

            setTimeout(() => {
                const all: any[] = tree?.getChecked(mode).map((item: TreeNode) => {
                    return {
                        id: item[props.keyField || 'id'],
                        title: item[props.titleField || 'title']
                    }
                }) || [];
                setText(all);
            })
        } else {
            setTimeout(() => {
                const data: TreeNode | undefined = tree?.getNode(vals as NodeKeyType);
                if (data) {
                    setText(data[props.titleField || 'title']);
                } else {
                    setText('');
                }
            });
        }
    });

    props.ref && props.ref({...tree});

    return <div classList={classList()} style={props.style} tabIndex="1">
        <Dropdown transfer={props.transfer} fixWidth align={align} disabled={props.disabled} trigger="click" menu={<div class="cm-tree-select-wrap">
            <Tree data={props.data} checkable={props.multi} onNodeSelect={onSelect} onChange={onTreeChange} ref={tree}
                value={props.multi ? [value, setValue] as any[] : []} selected={props.multi ? '' : [value, setValue] as any} checkRelation={props.checkRelation}/>
        </div>}>
            <Value text={text()} multi={props.multi} showMax={props.showMax} disabled={props.disabled} showMore={props.showMore}
                valueClosable={props.valueClosable} clearable={props.clearable} onClear={onClear}
                prepend={props.prepend} size={props.size} icon={<FeatherChevronDown/>} onClose={onValueClose}/>
        </Dropdown>
    </div>
}
