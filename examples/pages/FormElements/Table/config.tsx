/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'rowKey', desc: '指定数据的key', type: 'string', default: 'id'},
    {name: 'selectedRowKeys', desc: '勾选数据双向绑定', type: 'Signal', default: ''},
    {name: 'columns', desc: '表头字段信息', type: 'Array', default: ''},
    {name: 'data', desc: '数据体', type: 'Array', default: ''},
    {name: 'height', desc: '表格最大高度，超出表头固定', type: 'number', default: ''},
    {name: 'border', desc: '边框', type: 'boolean', default: ''},
    {name: 'stripe', desc: '斑马条纹', type: 'boolean', default: ''},
    {name: 'highlight', desc: '点击高亮选中的行', type: 'boolean', default: ''},
    {name: 'size', desc: '大小， small', type: 'string', default: ''},
    {name: 'loading', desc: '加载状态', type: 'boolean', default: ''},
    {name: 'spanMethod', desc: '行列合并的钩子', type: 'Function', default: ''},
    {name: 'onRowSelect', desc: '行选中事件 返回item', type: 'Function', default: ''},
    {name: 'onRowChecked', desc: '行选中事件 返回item', type: 'Function', default: ''},
    {name: 'onCheckedAll', desc: '全选事件, 所有选中的数据data', type: 'Function', default: ''},
    {name: 'onSort', desc: '排序事件 column, sotyType', type: 'Function', default: ''},
    {name: 'ref', desc: '表格组件的引用', type: 'any', default: ''},
]

export const columnData = [
    {name: 'name', desc: '字段名称', type: 'string', default: ''},
    {name: 'title', desc: '字段表头文案', type: 'JSXElement', default: ''},
    {name: 'render', desc: '自定义渲染函数， v, column, row', type: 'Function', default: ''},
    {name: 'type', desc: '字段类型 index, checkbox、 expend', type: 'string', default: ''},
    {name: 'width', desc: '字段宽度', type: 'string', default: ''},
    {name: 'minWidth', desc: '字段最小宽度', type: 'number', default: ''},
    {name: 'maxWidth', desc: '字段最大宽度', type: 'number', default: ''},
    {name: 'ellipsis', desc: '字段超过宽度使用省略号显示，内容不换行', type: 'boolean', default: ''},
    {name: 'tooltip', desc: '字段超过宽度使用省略号显示，内容不换行，鼠标滑过气泡显示完整内容', type: 'boolean', default: ''},
    {name: 'tooltipAlign', desc: 'popover的align属性', type: 'string', default: ''},
    {name: 'tooltipTheme', desc: 'popover的theme属性', type: 'string', default: ''},
    {name: 'tooltipMaxWidth', desc: 'popover的内容的最大宽度', type: 'number', default: ''},
    {name: 'tooltipStyle', desc: 'popover的内容的自定义样式', type: 'any', default: ''},
    {name: 'resize', desc: '可缩放宽度', type: 'boolean', default: ''},
    {name: 'sort', desc: '支持排序的列 custom', type: 'boolean | string', default: ''},
    {name: 'sortMethod', desc: '自定义排序方法 参数， a, b', type: 'Function', default: ''},
    {name: 'sortType', desc: '排序方式 asc|desc|\'\'', type: 'string', default: ''},
    {name: 'fixed', desc: '固定列的位置 left | right', type: 'string', default: ''},
    {name: 'tree', desc: '改列为树状字段， 展示展开收缩按钮', type: 'boolean', default: ''},
]


export const eventsData = [
    {name: 'onRowSelect', desc: '行选中事件', params: 'item'},
    {name: 'onRowChecked', desc: '行选中事件', params: 'item'},
    {name: 'onCheckedAll', desc: '全选事件', params: 'data'},
    {name: 'onSort', desc: '排序事件', params: 'column, sotyType'},
]

export const anchorData = [
    {id: 'table_base', text: '基础用法'},
    {id: 'table_border', text: '边框'},
    {id: 'table_stripe', text: '斑马纹'},
    {id: 'table_fixedHeader', text: '固定表头'},
    {id: 'table_fixedCol', text: '固定列'},
    {id: 'table_highlight', text: '行高亮'},
    {id: 'table_size', text: '小尺寸'},
    {id: 'table_loading', text: '加载中'},
    {id: 'table_span', text: '行列合并'},
    {id: 'table_checkbox', text: '选择框'},
    {id: 'table_sort', text: '排序'},
    {id: 'table_resize', text: '拖拽列宽'},
    {id: 'table_data', text: '动态数据'},
    {id: 'table_tree', text: '树状'},
    {id: 'table_expand', text: '展开'},
    {id: 'table_largedata', text: '大列表'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_column_props', text: 'Column属性'},
    {id: 'comp_events', text: '事件'},
]


import table_base from "./codes/table_base"
import table_border from "./codes/table_border"
import table_stripe from "./codes/table_stripe"
import table_fixedHeader from "./codes/table_fixedHeader"
import table_fixedCol from "./codes/table_fixedCol"
import table_highlight from "./codes/table_highlight"
import table_size from "./codes/table_size"
import table_loading from "./codes/table_loading"
import table_span from "./codes/table_span"
import table_checkbox from "./codes/table_checkbox"
import table_sort from "./codes/table_sort"
import table_resize from "./codes/table_resize"
import table_data from "./codes/table_data"
import table_tree from "./codes/table_tree"
import table_expand from "./codes/table_expand"
import table_largedata from "./codes/table_largedata"
export const codes = {
    table_base,
    table_border,
    table_stripe,
    table_fixedHeader,
    table_fixedCol,
    table_highlight,
    table_size,
    table_loading,
    table_span,
    table_checkbox,
    table_sort,
    table_resize,
    table_data,
    table_tree,
    table_expand,
    table_largedata,
}
