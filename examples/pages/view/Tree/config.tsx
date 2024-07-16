/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'data', desc: '源数据', type: 'TreeNode[]', default: ''},
    {name: 'checkable', desc: '是否开启选择框模式', type: 'boolean', default: ''},
    {name: 'checkRelation', desc: '选择框的级联关系 related|unRelated ', type: 'string', default: 'related'},
    {name: 'directory', desc: '显示目录图标', type: 'boolean', default: ''},
    {name: 'contextMenu', desc: '右键菜单配合DropdownMenu使用', type: 'JSXElement', default: ''},
    {name: 'ref', desc: '组件引用对象', type: 'Object', default: ''},
    {name: 'draggable', desc: '是否开始拖拽', type: 'boolean', default: ''},
    {name: 'loadData', desc: '配合数据项的loading', type: 'Function', default: ''},
    {name: 'beforeDropMethod', desc: '拖拽释放前的逻辑判断返回true才允许释放', type: 'Function', default: ''},
    {name: 'beforeExpand', desc: '展开节点前的方法，返回true才能展开', type: 'Function', default: ''},
    {name: 'selected', desc: '可控选中节点id', type: 'NodeKeyType | Signal<NodeKeyType>', default: ''},
    {name: 'value', desc: '可控值', type: 'NodeKeyType[] | Signal<NodeKeyType[]>', default: ''},
    {name: 'keyField', desc: '节点key的字段', type: 'string', default: 'id'},
    {name: 'titleField', desc: '节点标题的字段', type: 'string', default: 'title'},
    {name: 'selectedClass', desc: '节点选中时的class', type: 'string', default: ''},
    {name: 'dragHoverClass', desc: '节点拖拽经过时的class', type: 'string', default: ''},
    {name: 'draggingClass', desc: '被拖拽节点的class', type: 'string', default: ''},
    {name: 'customIcon', desc: '自定义图标函数', type: 'Function', default: ''},
    {name: 'arrowIcon', desc: '自定义箭头图标函数', type: 'Function', default: ''},
    {name: 'mode', desc: '树数据选择模式，FULL、HALF、CHILD、SHALLOW', type: 'String', default: ''},
    {name: 'emptyText', desc: '数据为空时的提示字符', type: 'string', default: '暂无数据'},
    {name: 'onChange', desc: '复选框选中事件', type: 'Function', default: ''},
    {name: 'onSelectMenu', desc: '右键菜单项选中事件', type: 'Function', default: ''},
    {name: 'onNodeSelect', desc: '节点选中事件', type: 'Function', default: ''},
    {name: 'onContextMenu', desc: '右键菜单事件', type: 'Function', default: ''},
    {name: 'onNodeCheck', desc: '节点选择事件', type: 'Function', default: ''},
    {name: 'onNodeDrop', desc: '节点拖拽释放事件', type: 'Function', default: ''},
    {name: 'onNodeDragStart', desc: '节点拖拽开始事件', type: 'Function', default: ''},
    {name: 'onNodeDragEnter', desc: '节点拖入事件', type: 'Function', default: ''},
    {name: 'onNodeDragOver', desc: '节点拖拽Over事件', type: 'Function', default: ''},
    {name: 'onNodeDragLeave', desc: '节点拖拽离开事件', type: 'Function', default: ''},
    {name: 'onNodeExpand', desc: '节点展开事件', type: 'Function', default: ''},
    {name: 'onNodeCollapse', desc: '节点收起事件', type: 'Function', default: ''},
]

export const dataItemData = [
    {name: 'id', desc: '数据项标识字段', type: 'string|number', default: ''},
    {name: 'title', desc: '节点名称', type: 'string', default: ''},
    {name: 'loading', desc: '动态加载节点', type: 'boolean', default: ''},
    {name: 'icon', desc: '自定义图标', type: 'any', default: ''},
    {name: 'disabled', desc: '节点禁用', type: 'boolean', default: ''},
    {name: 'patch', desc: '追加数据', type: 'JSXElement', default: ''},
    {name: 'expand', desc: '展开节点', type: 'boolean', default: ''},
    {name: 'checked', desc: '节点是否勾选', type: 'boolean', default: ''},
    {name: 'selected', desc: '节点是否选中', type: 'boolean', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '复选框选中事件', params: 'value:NodeKeyType[]'},
    {name: 'onSelectMenu', desc: '右键菜单项选中事件', params: 'name:string'},
    {name: 'onNodeSelect', desc: '节点选中事件', params: 'node:TreeNode'},
    {name: 'onContextMenu', desc: '右键菜单事件', params: 'node:TreeNode'},
    {name: 'onNodeCheck', desc: '节点勾选事件', params: 'node:TreeNode, checked: boolean'},
    {name: 'onNodeDrop', desc: '节点拖拽释放事件', params: 'e: any, node: TreeNode, dragNode: TreeNode, hoverPart: dragHoverPartEnum'},
    {name: 'onNodeDragStart', desc: '节点拖拽开始事件', params: 'e: any, node: TreeNode'},
    {name: 'onNodeDragEnter', desc: '节点拖入事件', params: 'e: any, node: TreeNode, hoverPart: dragHoverPartEnum'},
    {name: 'onNodeDragOver', desc: '节点拖拽Over事件', params: 'e: any, node: TreeNode, hoverPart: dragHoverPartEnum'},
    {name: 'onNodeDragLeave', desc: '节点拖拽离开事件', params: 'e: any, node: TreeNode, hoverPart: dragHoverPartEnum'},
    {name: 'onNodeExpand', desc: '节点展开事件', params: 'node: TreeNode'},
    {name: 'onNodeCollapse', desc: '节点收起事件', params: 'node: TreeNode'},
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
    {id: 'tree_search', text: '搜索'},
    {id: 'tree_customIcon', text: '自定义图标'},
    {id: 'tree_customArrow', text: '自定义箭头'},
    {id: 'tree_mod', text: '模式'},
    {id: 'tree_append', text: 'append'},
    {id: 'tree_expand', text: 'expand'},
    {id: 'tree_rename', text: '重命名'},
    {id: 'tree_dragable', text: '拖拽'},
    {id: 'tree_scroll', text: '滚动到节点'},
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
