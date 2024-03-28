/* eslint-disable camelcase */
export const propsData = [
    {name: 'align', desc: '位置top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom', type: 'string', default: 'right'},
    {name: 'trigger', desc: '触发条件 hover|click', type: 'string', default: 'hover'},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: ''},
    {name: 'arrow', desc: '显示箭头', type: 'boolean', default: ''},
    {name: 'theme', desc: '主题', type: 'string', default: ''},
    {name: 'hideDelay', desc: '隐藏延迟', type: 'number', default: '200'},
    {name: 'content', desc: '提示内容', type: 'string|JSXElement', default: ''},
    {name: 'visible', desc: '显示隐藏控制', type: 'Function[]', default: ''},
    {name: 'onOpen', desc: '打开回调函数', type: 'Function', default: ''},
]


export const anchorData = [
    {id: 'popover_base', text: '基础用法'},
    {id: 'popover_align', text: '位置'},
    {id: 'popover_controller', text: '可控'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '气泡属性'},
]

import popover_base from "./codes/popover_base"
import popover_align from "./codes/popover_align"
import popover_controller from "./codes/popover_controller"
export const codes = {
    popover_base,
    popover_align,
    popover_controller,
}
