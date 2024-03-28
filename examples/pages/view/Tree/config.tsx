/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'data', desc: '源数据', type: 'Array', default: ''},
    {name: 'opened', desc: '可控打开节点id', type: 'Function[]', default: ''},
    {name: 'selected', desc: '可控选中节点id', type: 'Function[]', default: ''},
    {name: 'ref', desc: '组件引用对象', type: 'Object', default: ''},
    {name: 'gutter', desc: '错位距离', type: 'number', default: '24'},
    {name: 'value', desc: '可控值', type: 'Function[]', default: ''},
    {name: 'multi', desc: '多选，显示复选框', type: 'boolean', default: ''},
    {name: 'directory', desc: '显示目录图标', type: 'boolean', default: ''},
    {name: 'loadData', desc: '配合数据项的loading', type: 'Function', default: ''},
    {name: 'contextMenu', desc: '右键菜单配合DropdownMenu使用', type: 'JSXElement', default: ''},
    {name: 'checkRelation', desc: '选择框的级联关系 related|unRelated ', type: 'string', default: 'related'},
    {name: 'onSelect', desc: '节点选中事件', type: 'Function', default: ''},
    {name: 'onChange', desc: '复选框选中事件', type: 'Function', default: ''},
    {name: 'onContextMenu', desc: '右键菜单事件', type: 'Function', default: ''},
    {name: 'onSelectMenu', desc: '右键菜单项选中事件', type: 'Function', default: ''},
]


export const dataItemData = [
    {name: 'id', desc: '数据项标识字段', type: 'string|number', default: ''},
    {name: 'title', desc: '节点名称', type: 'string', default: ''},
    {name: 'loading', desc: '动态加载节点', type: 'boolean', default: ''},
    {name: 'icon', desc: '自定义图标', type: 'any', default: ''},
    {name: 'disabled', desc: '节点禁用', type: 'boolean', default: ''},
    {name: 'patch', desc: '追加数据', type: 'JSXElement', default: ''},
]


export const eventsData = [
    {name: 'onSelect', desc: '节点选中事件', params: 'node'},
    {name: 'onChange', desc: '复选框选中事件', params: 'value'},
    {name: 'onContextMenu', desc: '右键菜单事件', params: 'node'},
    {name: 'onSelectMenu', desc: '右键菜单项选中事件', params: 'name'},
]


export const anchorData = [
    {id: 'tree_base', text: '基础用法'},
    {id: 'tree_opened', text: '默认展开'},
    {id: 'tree_selected', text: '默认选中'},
    {id: 'tree_multi', text: '级联多选'},
    {id: 'tree_multi_unrelate', text: '非级联多选'},
    {id: 'tree_disabled', text: '禁用'},
    {id: 'tree_directory', text: '目录图标'},
    {id: 'tree_loadData', text: '动态加载'},
    {id: 'tree_contextmenu', text: '右键菜单'},
    {id: 'tree_methods', text: '实例接口'},
    {id: 'tree_data', text: '可控数据'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_dataprops', text: '数据项属性'},
    {id: 'comp_events', text: '事件'},
]

import tree_base from "./codes/tree_base"
import tree_opened from "./codes/tree_opened"
import tree_selected from "./codes/tree_selected"
import tree_multi from "./codes/tree_multi"
import tree_multi_unrelate from "./codes/tree_multi_unrelate"
import tree_disabled from "./codes/tree_disabled"
import tree_directory from "./codes/tree_directory"
import tree_loadData from "./codes/tree_loadData"
import tree_contextmenu from "./codes/tree_contextmenu"
import tree_methods from "./codes/tree_methods"
import tree_data from "./codes/tree_data"

export const codes = {
    tree_base,
    tree_opened,
    tree_selected,
    tree_multi,
    tree_multi_unrelate,
    tree_disabled,
    tree_directory,
    tree_loadData,
    tree_contextmenu,
    tree_methods,
    tree_data,
}
