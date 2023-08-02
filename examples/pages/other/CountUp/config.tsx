export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'value', desc: '目标值', type: 'number', default: ''},
    {name: 'start', desc: '起始值', type: 'number', default: '0'},
    {name: 'duration', desc: '持续时间单位秒', type: 'number', default: '2'},
    {name: 'decimal', desc: '小数点小数位数', type: 'number', default: ''},
    {name: 'useGrouping', desc: '使用组', type: 'boolean', default: 'true'},
    {name: 'useEasing', desc: 'ease 动画', type: 'boolean', default: 'true'},
    {name: 'separator', desc: '分隔符', type: 'string', default: ','},
    {name: 'formattingFn', desc: '自定义格式函数', type: 'Function', default: ''},
    {name: 'prefix', desc: '前缀', type: 'string', default: ''},
    {name: 'suffix', desc: '后缀', type: 'string', default: ''},
    {name: 'onEnd', desc: '结束回调', type: 'Function', default: ''},
]


export const anchorData = [
    {id: 'countup_base', text: '基础用法'},
    {id: 'countup_decimal', text: '小数'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import countup_base from "./codes/countup_base"
import countup_decimal from "./codes/countup_decimal"

export const codes = {
    countup_base,
    countup_decimal,
}