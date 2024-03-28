/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'value', desc: '目标值', type: 'number', default: ''},
    {name: 'prefix', desc: '前缀', type: 'string', default: ''},
    {name: 'suffix', desc: '后缀', type: 'string', default: ''},
    {name: 'format', desc: '格式化', type: 'string', default: ''},
    {name: 'onEnd', desc: '结束回调', type: 'Function', default: ''},
]


export const anchorData = [
    {id: 'countdown_base', text: '基础用法'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import countdown_base from "./codes/countdown_base"

export const codes = {
    countdown_base,
}
