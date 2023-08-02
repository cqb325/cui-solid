export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'dir', desc: '分割方向, 支持 v|h', type: 'string', default: 'v'},
    {name: 'split', desc: '前置面板的大小', type: 'number | string', default: ''},
    {name: 'min', desc: '前置面板的最小大小', type: 'number', default: '40'},
    {name: 'max', desc: '前置面板的最大大小', type: 'number', default: '40'},
]

export const slotsData = [
    { name: 'prev', desc: '前置面板' },
    { name: 'next', desc: '后置面板' },
]

export const eventsData = [
    
]

export const anchorData = [
    {id: 'split_base', text: '基础用法'},
    {id: 'split_h', text: '上下分割'},
    {id: 'split_insert', text: '嵌套'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import split_base from "./codes/split_base"
import split_h from "./codes/split_h"
import split_insert from "./codes/split_insert"
export const codes = {
    split_base,
    split_h,
    split_insert,
}