/* eslint-disable camelcase */

export const propsData = [
    {name: 'type', desc: '类型 404|403|500|empty|fail|deny', type: 'Object', default: ''},
    {name: 'typeImage', desc: '自定义图片', type: 'JSXElement', default: ''},
    {name: 'desc', desc: '描述文案', type: 'string', default: ''},
    {name: 'showDesc', desc: '显示描述文案', type: 'boolean', default: 'true'},
    {name: 'link', desc: '按钮地址', type: 'string', default: ''},
    {name: 'showAction', desc: '显示按钮', type: 'boolean', default: 'true'},
]

export const eventsData = [

]

export const anchorData = [
    {id: 'exp_base', text: '403页面'},
    {id: 'exp_hideAction', text: '隐藏按钮'},
    {id: 'exp_404', text: '404页面'},
    {id: 'exp_500', text: '500页面'},
    {id: 'exp_empty', text: '空页面'},
    {id: 'exp_fail', text: '失败页面'},
    {id: 'exp_deny', text: '拒绝页面'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '数据项属性'},
]

import exp_base from "./codes/exp_base"
import exp_hideAction from "./codes/exp_hideAction"
import exp_404 from "./codes/exp_404"
import exp_500 from "./codes/exp_500"
import exp_empty from "./codes/exp_empty"
import exp_fail from "./codes/exp_fail"
import exp_deny from "./codes/exp_deny"

export const codes = {
    exp_base,
    exp_hideAction,
    exp_404,
    exp_500,
    exp_empty,
    exp_fail,
    exp_deny,
}
