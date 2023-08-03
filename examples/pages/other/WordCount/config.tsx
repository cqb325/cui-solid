export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'value', desc: '监控数量的值', type: 'string', default: ''},
    {name: 'total', desc: '上限字数', type: 'number', default: ''},
    {name: 'prefix', desc: '前缀文案', type: 'string', default: ''},
    {name: 'prefixOverflow', desc: '前缀超过文案', type: 'string', default: ''},
    {name: 'suffix', desc: '后缀文案', type: 'string', default: ''},
    {name: 'suffixOverflow', desc: '后缀超过文案', type: 'string', default: ''},
    {name: 'circle', desc: '圆形', type: 'boolean', default: ''},
    {name: 'overflow', desc: '显示超出的字数', type: 'boolean', default: ''},
    {name: 'radius', desc: '圆形的半径', type: 'number', default: '10'},
]


export const anchorData = [
    {id: 'wordcount_base', text: '基础用法'},
    {id: 'wordcount_custom', text: '自定义文案'},
    {id: 'wordcount_circle', text: '圆形'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import wordcount_base from "./codes/wordcount_base"
import wordcount_custom from "./codes/wordcount_custom"
import wordcount_circle from "./codes/wordcount_circle"

export const codes = {
    wordcount_base,
    wordcount_custom,
    wordcount_circle,
}