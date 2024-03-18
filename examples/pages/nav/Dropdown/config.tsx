export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'trigger', desc: '触发方式 hover|click|contextMenu|custom', type: 'string', default: 'hover'},
    {name: 'handler', desc: '触发事件的元素', type: 'string', default: ''},
    {name: 'align', desc: '触发方式 bottom|bottomLeft|bottomRight|right|left|rightTop|leftTop', type: 'string', default: 'bottom'},
    {name: 'menu', desc: '下拉菜单内容', type: 'any', default: ''},
    {name: 'visible', desc: '菜单显隐绑定属性', type: 'Function[]', default: ''},
    {name: 'transfer', desc: '是否将弹层放置于 body 内，在overflow 为 hidden的容器内效果更友好', type: 'boolean', default: ''},
    {name: 'fixWidth', desc: '是否在使用transfer时打开弹框后弹框固定宽度至出发元素宽度，在select中使用', type: 'boolean', default: ''},
    {name: 'theme', desc: '主题色 dark|light', type: 'string', default: 'light'},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: ''},
    {name: 'revers', desc: '超出范围反向显示', type: 'boolean', default: ''},
    {name: 'onSelect', desc: '选择菜单项选中事件', type: 'Function', default: ''},
]

export const itemPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: ''},
    {name: 'name', desc: '菜单项名称', type: 'string', default: ''},
]


export const eventsData = [
    {name: 'OnSelect', desc: '选择菜单项选中事件', params: '菜单项名称 name'}
]

export const anchorData = [
    {id: 'dropdown_base', text: '基础用法'},
    {id: 'dropdown_trigger', text: '触发条件'},
    {id: 'dropdown_theme', text: '主题'},
    {id: 'dropdown_transfer', text: 'Transfer'},
    {id: 'dropdown_align', text: '位置'},
    {id: 'dropdown_disabled', text: '禁用'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_item_props', text: '菜单项属性'},
]


import dropdown_base from "./codes/dropdown_base"
import dropdown_trigger from "./codes/dropdown_trigger"
import dropdown_theme from "./codes/dropdown_theme"
import dropdown_transfer from "./codes/dropdown_transfer"
import dropdown_align from "./codes/dropdown_align"
import dropdown_disabled from "./codes/dropdown_disabled"
export const codes = {
    dropdown_base,
    dropdown_trigger,
    dropdown_theme,
    dropdown_transfer,
    dropdown_align,
    dropdown_disabled,
}