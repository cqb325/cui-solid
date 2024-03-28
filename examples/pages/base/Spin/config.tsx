/* eslint-disable camelcase */
export const propsData = [
    {name: 'type', desc: '类型,支持 pulse|gear', type: 'string', default: 'pulse'},
    {name: 'size', desc: '大小尺寸', type: 'string', default: ''},
    {name: 'title', desc: '标题', type: 'string', default: 'Loading...'},
]


export const anchorData = [
    {id: 'spin_base', text: '基础用法'},
    {id: 'spin_control', text: '可控'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import spin_base from "./codes/spin_base"
import spin_control from "./codes/spin_control"

export const codes = {
    spin_base,
    spin_control
}
