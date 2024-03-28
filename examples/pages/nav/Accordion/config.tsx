/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'multi', desc: '可以选择多个面板展开', type: 'boolean', default: ''},
    {name: 'activeKey', desc: '选中面板，绑定属性', type: 'Function[]', default: ''},
    {name: 'flex', desc: 'flex布局并且占满容器', type: 'boolean', default: ''},
    {name: 'onSelect', desc: '面板选中事件', type: 'Function', default: ''},
]


export const itemPropsData = [
    {name: 'name', desc: '面板名称', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'title', desc: '面板标题', type: 'any', default: ''},
    {name: 'icon', desc: '面板标题图标', type: 'JSXElement', default: ''},
]


export const eventsData = [
    {name: 'OnSelect', desc: '面板选中事件', params: 'name'}
]

export const anchorData = [
    {id: 'accordion_base', text: '基础用法'},
    {id: 'accordion_multi', text: '多选'},
    {id: 'accordion_flex', text: '占满容器'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_item_props', text: '子项属性'},
]

import accordion_base from "./codes/accordion_base"
import accordion_multi from "./codes/accordion_multi"
import accordion_flex from "./codes/accordion_flex"
export const codes = {
    accordion_base,
    accordion_multi,
    accordion_flex,
}
