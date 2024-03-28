/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'value', desc: '值，可控值', type: 'any', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'transfer', desc: '下拉内容使用Portal渲染', type: 'boolean', default: ''},
    {name: 'align', desc: '下拉内容位置 bottomLeft|bottomRight', type: 'string', default: 'bottomLeft'},
    {name: 'alpha', desc: '开启透明度', type: 'boolean', default: ''},
    {name: 'size', desc: '尺寸 small | large', type: 'string', default: ''},
    {name: 'recommend', desc: '使用预设颜色', type: 'boolean', default: ''},
    {name: 'colors', desc: '自定义预设颜色', type: 'string[]', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]

export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'color'},
]

export const anchorData = [
    {id: 'cp_base', text: '基础用法'},
    {id: 'cp_alpha', text: '透明'},
    {id: 'cp_recommand', text: '颜色预设'},
    {id: 'cp_size', text: '尺寸'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import cp_base from "./codes/cp_base"
import cp_alpha from "./codes/cp_alpha"
import cp_recommand from "./codes/cp_recommand"
import cp_size from "./codes/cp_size"

export const codes = {
    cp_base,
    cp_alpha,
    cp_recommand,
    cp_size,
}
