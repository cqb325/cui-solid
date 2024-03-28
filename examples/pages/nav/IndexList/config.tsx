/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'data', desc: '传入的数据源', type: 'array', default: ''},
    {name: 'selectable', desc: '可选择的', type: 'boolean', default: ''},
    {name: 'promote', desc: '显示提示信息', type: 'boolean', default: 'true'},
    {name: 'border', desc: '显示带边框的列表', type: 'boolean', default: ''},
    {name: 'renderItem', desc: '自定义渲染方法', type: 'Function', default: ''},
    {name: 'onChange', desc: '选择选项改变事件', type: 'Function', default: ''},
]

export const itemPropsData = [
    {name: 'id', desc: '选项标识', type: 'string|number', default: ''},
    {name: 'name', desc: '显示名称', type: 'string', default: ''},
    {name: 'children', desc: '子元素', type: 'any[]', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '选择选项改变事件', params: 'value[]'}
]

export const anchorData = [
    {id: 'indexlist_base', text: '基础用法'},
    {id: 'indexlist_selectable', text: '可选择'},
    {id: 'indexlist_border', text: '边框'},
    {id: 'indexlist_custom', text: '自定义渲染'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_item_props', text: '数据属性'},
]


import indexlist_base from "./codes/indexlist_base"
import indexlist_selectable from "./codes/indexlist_selectable"
import indexlist_border from "./codes/indexlist_border"
import indexlist_custom from "./codes/indexlist_custom"
export const codes = {
    indexlist_base,
    indexlist_selectable,
    indexlist_border,
    indexlist_custom,
}
