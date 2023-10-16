import { useClassList } from "../../utils/useProps"
import { Tree } from "../../Tree";
import { Dropdown } from "../../Dropdown";
import { Value } from "../../inner/Value";
import { TreeProps } from "../../Tree";
import createField from "../../utils/createField";
import { createEffect, createMemo, createSignal } from "solid-js";
import { Icon } from "../../Icon";
import { TagConfig } from "../../TagGroup";

type TreeSelectProps = {
    classList?: any,
    class?: string,
    style?: any,
    data?: any[],
    transfer?: boolean,
    align?: 'bottomLeft'|'bottomRight',
    disabled?: boolean,
    clearable?: boolean,
    prepend?: any,
    mode?: 'All'|'Half'|'Leaf'|'Shallow',
    size?: 'small'|'large',
    showMax?: number,
    valueClosable?: boolean,
    placeholder?: string,
    showMore?: boolean
} & TreeProps;

const ModeMap = {
    'All': 0,
    'Half': 1,
    'Leaf': 2,
    'Shallow': 3,
}

export function TreeSelect (props: TreeSelectProps) {
    const [value, setValue] = createField(props, props.multi ? [] : '');
    const [text, setText] = createSignal('');
    const align = props.align ?? 'bottomLeft';
    let tree: any;
    let mode: number = ModeMap[props.mode ?? 'Half'];
    const checkRelation = props.checkRelation ?? 'related';
    const classList  = () => useClassList(props, 'cm-tree-select', {
        'cm-tree-select-disabled': props.disabled,
        [`cm-tree-select-${props.size}`]: props.size,
    });
    const onSelect = (data: any) => {
        if (!props.multi) {
            props.onChange && props.onChange(data.id);
        }
    }

    const onTreeChange = (ids: any[]) => {
        if (checkRelation === 'related') {
            setValue(getChecked());
            props.onChange && props.onChange(getChecked());
        } else {
            setValue(ids);
            props.onChange && props.onChange(ids);
        }
    }

    const onClear = () => {
        const ret = props.multi ? [] : '';
        setValue(ret);
        props.onChange && props.onChange(ret);
    }

    const onValueClose = (item: TagConfig, e: any) => {
        let v = value();
        v.splice(v.indexOf(item.id), 1);
        setValue([...v]);
    }

    const getChecked = () => {
        let all = [];
        switch (mode) {
            case 0: {
                all = tree.getAllChecked();
                break;
            }
            case 1: {
                all = tree.getHalfChecked();
                break;
            }
            case 2: {
                all = tree.getChildChecked();
                break;
            }
            case 3: {
                all = tree.getShallowChecked();
                break;
            }
        }
        return all;
    }

    createEffect(() => {
        const outValue = value();
        
        if (props.multi && outValue.join(',') === getChecked().join(',')) {
            return;
        }
        if (props.multi) {
            if (checkRelation === 'unRelated') {
                tree.setValue(outValue);
            } else {
                if (mode === 0) {
                    tree.setValue(outValue);
                }
                if (mode === 1) {
                    tree.setValue(outValue);
                }
                if (mode === 2) {
                    tree.setValue(outValue);
                }
                if (mode === 3) {
                    if (outValue.join(',') === getChecked().join(',')) {
                        tree.setValue(tree.getAllChecked());
                    } else {
                        tree.setValue(tree.getIfSets(outValue));
                    }
                }
            }
        } else {
            // setVal(outValue);
        }
    })

    createMemo(() => {
        let vals = value();
        if (props.multi) {
            if (typeof vals === 'string') {
                vals = vals.split(',');
                setValue(vals);
                return;
            }
            
            setTimeout(() => {
                let all = checkRelation === 'related' ? getChecked() : tree.getAllChecked();
                const arr = tree.getAllCheckedData(all);
                setText(arr);
            })
        } else {
            setTimeout(() => {
                const data = tree.getSelectNode();
                if (data) {
                    setText(data.title);
                } else {
                    setText('');
                }
            });
        }
    });

    props.ref && props.ref({...tree});

    return <div classList={classList()} style={props.style} tabIndex='1'>
        <Dropdown transfer={props.transfer} align={align} disabled={props.disabled} trigger='click' menu={<div class='cm-tree-select-wrap'>
            <Tree data={props.data} multi={props.multi} onSelect={onSelect} onChange={onTreeChange} ref={tree} value={value()}
                selected={props.multi ? '' : [value, setValue]} checkRelation={props.checkRelation}/>
        </div>}>
            <Value text={text()} multi={props.multi} showMax={props.showMax} disabled={props.disabled} showMore={props.showMore}
                valueClosable={props.valueClosable} clearable={props.clearable} onClear={onClear} 
                prepend={props.prepend} size={props.size} icon={<Icon name='chevron-down'/>} onClose={onValueClose}/>
        </Dropdown>
    </div>
}