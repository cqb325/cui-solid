/* eslint-disable camelcase */
export const propsData = [
    {name: 'start', desc: '开始', type: 'Function', default: ''},
    {name: 'finish', desc: '结束', type: 'Function', default: ''},
    {name: 'error', desc: '错误', type: 'Function', default: ''},
]

export const eventsData = [

]

export const anchorData = [
    {id: 'loadingbar_base', text: '基础用法'},
]


import loadingbar_base from "./codes/loadingbar_base"
export const codes = {
    loadingbar_base,
}
