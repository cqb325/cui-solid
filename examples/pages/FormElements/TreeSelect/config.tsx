export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'data', desc: '源数据', type: 'Array', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'clearable', desc: '可清空', type: 'boolean', default: ''},
    {name: 'prepend', desc: '前缀', type: 'JSXElement', default: ''},
    {name: 'mode', desc: '值的选择模式 支持All|Half|Leaf|Shallow', type: 'string', default: 'Half'},
    {name: 'size', desc: '尺寸 small|large', type: 'string', default: ''},
    {name: 'transfer', desc: '下拉使用Portal渲染', type: 'boolean', default: ''},
    {name: 'showMax', desc: '最多显示个数', type: 'number', default: ''},
    {name: 'value', desc: '可控值', type: 'Function[]', default: ''},
    {name: 'multi', desc: '多选，显示复选框', type: 'boolean', default: ''},
    {name: 'directory', desc: '显示目录图标', type: 'boolean', default: ''},
    {name: 'checkRelation', desc: '选择框的级联关系 related|unRelated ', type: 'string', default: 'related'},
    {name: 'align', desc: '下拉的位置 bottomLeft|bottomRight ', type: 'string', default: 'bottomLeft'},
    {name: 'valueClosable', desc: '值可关闭 ', type: 'boolean', default: ''},
    {name: 'showMore', desc: '是否鼠标滑过显示隐藏的值 ', type: 'boolean', default: ''},
    {name: 'onChange', desc: '复选框选中事件', type: 'Function', default: ''},
]



export const eventsData = [
    {name: 'onChange', desc: '值变化事件', params: 'value'},
]


export const anchorData = [
    {id: 'tree_base', text: '基础用法'},
    {id: 'tree_disabled', text: '禁用'},
    {id: 'tree_size', text: '尺寸'},
    {id: 'tree_clearable', text: '可清空'},
    {id: 'tree_prepend', text: '前缀'},
    {id: 'tree_multi', text: '多选'},
    {id: 'tree_relation', text: '多选非级联'},
    {id: 'tree_showMax', text: '显示个数'},
    {id: 'tree_valueClosable', text: '可关闭'},
    {id: 'tree_mode', text: '选择模式'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]


import tree_base from "./codes/tree_base"
import tree_disabled from "./codes/tree_disabled"
import tree_size from "./codes/tree_size"
import tree_clearable from "./codes/tree_clearable"
import tree_prepend from "./codes/tree_prepend"
import tree_multi from "./codes/tree_multi"
import tree_relation from "./codes/tree_relation"
import tree_showMax from "./codes/tree_showMax"
import tree_valueClosable from "./codes/tree_valueClosable"
import tree_mode from "./codes/tree_mode"
export const codes = {
    tree_base,
    tree_disabled,
    tree_size,
    tree_clearable,
    tree_prepend,
    tree_multi,
    tree_relation,
    tree_showMax,
    tree_valueClosable,
    tree_mode,
}