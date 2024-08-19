<p align="center">
    <a href="https://cqb325.gitee.io/cui-solid-doc">
        <img width="200" src="https://gitee.com/cqb325/cui-solid/raw/master/examples/assets/images/logo.svg">
    </a>
</p>

<h1>
CUI-SOLID
    <h3>An UI component library and front-end solution based on solidjs</h3>
</h1>

[![CUI SolidJS](https://img.shields.io/npm/v/cui-solid.svg?style=flat-square)](https://www.npmjs.org/package/cui-solid)
[![NPM downloads](https://img.shields.io/npm/dm/cui-solid.svg?style=flat-square)](https://npmjs.org/package/cui-solid)
[![NPM downloads](https://img.shields.io/npm/dt/cui-solid.svg?style=flat-square)](https://npmjs.org/package/cui-solid)
![JS gzip size](https://img.shields.io/bundlejs/size/cui-solid?label=gzip%20JS%20&style=flat-square)
![CSS gzip size](https://img.badgesize.io/https://gitee.com/cqb325/cui-solid/blob/master/dist/styles/cui.css?compression=gzip&label=gzip%20size%20CSS&style=flat-square)

## Docs

[documents on vercel](https://cui-solid.vercel.app/ 'cui-solid')

[documents 国内](https://cui.cqb325.cn/ 'cui-solid')

## Repository

[Gitee](https://gitee.com/cqb325/cui-solid 'Gitee')

[Github](https://github.com/cqb325/cui-solid 'Github')

## Other Packages

[solid-vue-router a router package by vue-router](https://gitee.com/cqb325/solid-vue-router 'solid-vue-router')

[cui-pin a pin field input component](https://gitee.com/cqb325/cui-pin 'cui-pin')

[cui-solid-draggable followed by react-draggable](https://gitee.com/cqb325/cui-solid-draggable 'cui-solid-draggable')

## Install

    # npm
    npm install cui-solid
    # yarn
    yarn add cui-solid

## changeLog
    v1.05
    1、表格支持showHeader参数可隐藏表头
    2、Table支持合计功能
    3、Table支持复杂合并表头
    4、Table字段支持date datetime enum类型

    v1.0.4
    1、Table添加title、footer、empty自定义空内容
    2、修改Exception图片地址

    v1.0.3
    1、Button 支持round属性
    2、Card支持size和cover属性
    3、DropdownMenu支持背景色和字体颜色、支持自定义位置
    4、修复tree右键菜单显示位置问题
    5、Text、Title、Link支持渐变色
    6、Tag添加xlarge的尺寸
    7、Title支持inline模式和添加前缀
    8、Switch支持自定义图标和底色，支持方形，large尺寸修改

    v1.0.2
    1、添加Watermark组件
    2、添加Link组件

    v1.0.1
    1、fix: export new components
    
    v1.0.0
    1、Table selectedRowKeys 置空问题，数据变更无法回显问题
    2、添加 TableStyleLayout 组件
    3、divider 添加 margin 、 textMargin 和 color 属性
    4、Button 添加 danger 属性，危险按钮
    5、TagGroup 添加 extra 属性
    6、添加 InputGroup组件
    7、dropdown在滚动的时候实时更新位置
    8、新的Virtual List组件，提升性能
    9、新的Tree组件，支持更多的接口和功能，支持拖拽等
    10、增加spin类型
    11、Table selectedRowKeys 响应问题
    12、Virtual List 优化
    13、支持ssr源码使用

    v0.1.40
    1、Select 远程过滤和默认值 导致控制值显示不正确问题

    v0.1.39
    1、Col 添加max-width
    2、Table 添加自定义标识的 rowKey 和 勾选绑定 selectedRowKeys
    3、fix useSlots 无法获取context数据问题

    v0.1.38
    1、添加 resetFields 方法
    2、添加 useForm 泛型
    3、Modal添加onOk返回值控制Modal的关闭
    4、Anchor添加onChange回调
    5、Row/Col支持响应式

    v0.1.37
    1、添加eslint，并修改格式化代码
    2、form支持async-validator 校验方式

    v0.1.36
    1、修复Select 使用transfer不显示问题

    v0.1.35
    1、修复Select单选不显示问题
    2、Form添加浮动显示错误信息方式

    v0.1.34
    1、Select支持远程过滤和默认值
    2、badge添加offset属性
    3、popover支持confirm
    4、Tag默认无border添加border属性

    v0.1.33
    1、修复Modal溢出出现滚动条问题

    v0.1.32
    1、修改Upload clearFiles和手动clear的逻辑

    v0.1.31
    1、修复Notice 和 Messages 在Modal中被遮盖问题
    2、Upload添加自定义getFileUrl属性
    3、Modal添加hasCloseIcon属性

    v0.1.30
    1、修复Timepicker和DatePicker无法显示初始化值问题
    2、修复Month选择错误问题

    v0.1.29
    1、修复Modal实例方式调用增加dom的bug

    v0.1.28
    1、新增SideBySide组件

    v0.1.27
    1、修改menu dark模式下的style
    2、修复Drawer close mask 遮盖问题
    3、useTransition修复监听未注销问题
    4、修复Progress值溢出问题

    v0.1.26
    1、修改Exception减少打包尺寸
    2、Dropdown 定位和样式修改

    v0.1.25
    1、Pagination重构分页显示规则并添加mini型

    v0.1.24
    1、Pagination添加innerDisplayedPages属性

    v0.1.23
    1、List取消使用Slots

    v0.1.21
    1、新增Banner组件

    v0.1.16
    1、更新router依赖版本至v1.0.12

    v0.1.15
    1、修改popover采用useTransition

    v0.1.14
    1、修改anchor-link样式
    2、修改dropdown样式和动画采用useTransition
    3、添加Skeleton骨架屏组件

    v0.1.13
    1、添加IndexList索引列表组件
    2、添加WordCount数字统计组件
    3、添加PageFooter页脚组件

    v0.1.12
    1、Form 增加 checkField 单字段验证
    2、FormItem 增加 messages 字段， check函数参数由form.getFormData() 改为 form
    3、添加Login组件
    4、优化Progress样式
    5、update cui-virtual-list to v1.0.5

    v0.1.11
    1、Progress 新增圆形进度条
    2、更新solid-js 到最新1.7.8 typescript>=5.1.6

    v0.1.10
    1、添加Steps组件
    2、添加虚拟列表Demo

    v0.1.9
    1、添加Drawer组件
    2、优化一些响应性属性

    v0.1.8
    1、优化dark模式样式
    2、timeline优化
    3、fix：bugs

    v0.1.7
    1、Select/Table support large data uses cui-virtaul-list
