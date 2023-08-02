export const propsData = [
    {name: 'height', desc: '固定高度', type: 'number', default: ''},
    {name: 'maxHeight', desc: '最大高度', type: 'number', default: ''},
    {name: 'itemEstimatedSize', desc: '项目预估高度', type: 'number', default: ''},
    {name: 'overscan', desc: '前后预留数量', type: 'number', default: '3'},
    {name: 'items', desc: '数据项', type: 'any[]', default: ''},
]


export const anchorData = [
    {id: 'virtual_base', text: '基础用法'},
    {id: 'countup_auto', text: '动态高度'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import virtual_base from "./codes/virtual_base"
import countup_auto from "./codes/countup_auto"

export const codes = {
    virtual_base,
    countup_auto,
}