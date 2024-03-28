/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'size', desc: '尺寸 small | large', type: 'string', default: ''},
    {name: 'clearable', desc: '可清空', type: 'boolean', default: ''},
    {name: 'multi', desc: '多选', type: 'boolean', default: ''},
    {name: 'prefix', desc: '前缀', type: 'string|JSXElement', default: ''},
    {name: 'data', desc: '传入的数据', type: 'Array', default: ''},
    {name: 'textField', desc: '文案字段', type: 'string', default: 'label'},
    {name: 'valueField', desc: '值字段', type: 'string', default: 'value'},
    {name: 'filter', desc: '支持过滤', type: 'boolean', default: ''},
    {name: 'renderOption', desc: '自定义选项渲染', type: 'Function', default: ''},
    {name: 'emptyOption', desc: '空选项', type: 'string', default: ''},
    {name: 'transfer', desc: '下拉内容使用Portal渲染', type: 'boolean', default: ''},
    {name: 'align', desc: '下拉内容位置 bottomLeft|bottomRight', type: 'string', default: 'bottomLeft'},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
    {name: 'onSearch', desc: '输入数据查询事件 参数：输入的内容', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'value'},
    {name: 'onSearch', desc: '输入数据查询事件', params: 'keyword'},
]

export const anchorData = [
    {id: 'auto_base', text: '基础用法'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import auto_base from "./codes/auto_base"

export const codes = {
    auto_base
}
