export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'shape', desc: '可以选择 normal|circle', type: 'string', default: 'normal'},
    {name: 'size', desc: '分页尺寸 small|large', type: 'string', default: ''},
    {name: 'current', desc: '当前页', type: 'number', default: ''},
    {name: 'total', desc: '总数据量', type: 'number', default: ''},
    {name: 'pageSize', desc: '每页数据量', type: 'number', default: ''},
    {name: 'pages', desc: '每页数据量选项', type: 'Array', default: ''},
    {name: 'showJumper', desc: '是否显示跳转', type: 'boolean', default: 'true'},
    {name: 'showPage', desc: '是否显示页数选择', type: 'boolean', default: 'true'},
    {name: 'showTotal', desc: '是否显示总数', type: 'boolean', default: 'true'},
    {name: 'showNums', desc: '是否显示页号', type: 'boolean', default: 'true'},
    {name: 'onChange', desc: '页号选择事件', type: 'Function', default: ''},
    {name: 'onChangePageSize', desc: '每页数量变化事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '页号选择事件', params: 'pageNum'},
    {name: 'onChangePageSize', desc: '每页数量变化事件', params: 'pageSize'}
]

export const anchorData = [
    {id: 'pagination_base', text: '基础用法'},
    {id: 'pagination_small', text: '尺寸'},
    {id: 'pagination_hide', text: '数字分页'},
    {id: 'pagination_min', text: '最小化分页'},
    {id: 'pagination_circle', text: '圆形'},
    {id: 'pagination_pages', text: '每页数'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]


import pagination_base from "./codes/pagination_base"
import pagination_small from "./codes/pagination_small"
import pagination_hide from "./codes/pagination_hide"
import pagination_min from "./codes/pagination_min"
import pagination_circle from "./codes/pagination_circle"
import pagination_pages from "./codes/pagination_pages"
export const codes = {
    pagination_base,
    pagination_small,
    pagination_hide,
    pagination_min,
    pagination_circle,
    pagination_pages,
}