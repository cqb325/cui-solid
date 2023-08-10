import { lazy } from 'solid-js';

export const menuData = [
    {
        name: 'home',
        path: '/',
        redirect: '/base/button'
    },
    {
        type: 'SubMenu', 
        name: 'base',
        title: '基础组件',
        path: '/base',
        children: [
            {name: 'button', title: 'Button 按钮', path: 'button', component: lazy(() => import('./pages/base/Button'))},
            {name: 'icon', title: 'Icon 图标', path: 'icon', component: lazy(() => import('./pages/base/Icon'))},
            {name: 'typography', title: 'Typography 排版', path: 'typography', component: lazy(() => import('./pages/base/Typography'))},
            {name: 'Avatar', title: 'Avatar 头像', path: 'avatar', component: lazy(() => import('./pages/base/Avatar'))},
            {name: 'AvatarList', title: 'AvatarList 头像列表', path: 'avatarList', component: lazy(() => import('./pages/base/AvatarList'))},
            {name: 'collapase', title: 'Collapase 折叠', path: 'collapase', component: lazy(() => import('./pages/base/Collapase'))},
            {name: 'popover', title: 'Popover 气泡提示', path: 'popover', component: lazy(() => import('./pages/base/Popover'))},
            {name: 'spin', title: 'Spin 加载中', path: 'spin', component: lazy(() => import('./pages/base/Spin'))},
            {name: 'tag', title: 'Tag 标签', path: 'tag', component: lazy(() => import('./pages/base/Tag'))},
            {name: 'tooltip', title: 'Tooltip 文字提示', path: 'tooltip', component: lazy(() => import('./pages/base/Tooltip'))},
            {name: 'divider', title: 'Divider 分割线', path: 'divider', component: lazy(() => import('./pages/base/Divider'))},
            {name: 'draggable', title: 'Draggable 拖拽', path: 'draggable', component: lazy(() => import('./pages/base/Draggable'))},
        ]
    },
    {
        type: 'SubMenu', 
        name: 'layout',
        title: '布局',
        path: '/layout',
        children: [
            {name: 'grid', title: 'Row/Col 栅格', path: 'grid', component: lazy(() => import('./pages/layout/Grid'))},
            {name: 'comview', title: 'View 视图', path: 'comview', component: lazy(() => import('./pages/layout/View'))},
            {name: 'space', title: 'Space 间隔', path: 'space', component: lazy(() => import('./pages/layout/Space'))},
            {name: 'list', title: 'List 列表', path: 'list', component: lazy(() => import('./pages/layout/List'))},
            {name: 'split', title: 'Split 面板分割', path: 'split', component: lazy(() => import('./pages/layout/Split'))},
            {name: 'skeleton', title: 'Skeleton 骨架屏', path: 'skeleton', component: lazy(() => import('./pages/layout/Skeleton'))},
        ]
    },
    {
        type: 'SubMenu', 
        name: 'nav',
        title: '导航',
        path: '/nav',
        children: [
            {name: 'breadcrumb', title: 'Breadcrumb 面包屑', path: 'breadcrumb', component: lazy(() => import('./pages/nav/Breadcrumb'))},
            {name: 'dropdown', title: 'Dropdown 下拉菜单', path: 'dropdown', component: lazy(() => import('./pages/nav/Dropdown'))},
            {name: 'menu', title: 'Menu 导航菜单', path: 'menu', component: lazy(() => import('./pages/nav/Menu'))},
            {name: 'accordion', title: 'Accordion 手风琴面板', path: 'accordion', component: lazy(() => import('./pages/nav/Accordion'))},
            {name: 'pagination', title: 'Pagination 分页', path: 'pagination', component: lazy(() => import('./pages/nav/Pagination'))},
            {name: 'tabs', title: 'Tabs 标签页', path: 'tabs', component: lazy(() => import('./pages/nav/Tabs'))},
            {name: 'Badge', title: 'Badge 徽标', path: 'badge', component: lazy(() => import('./pages/nav/Badge'))},
            {name: 'Anchor', title: 'Anchor 锚点', path: 'anchor', component: lazy(() => import('./pages/nav/Anchor'))},
            {name: 'LoadingBar', title: 'LoadingBar 加载进度条', path: 'loadingbar', component: lazy(() => import('./pages/nav/LoadingBar'))},
            {name: 'Steps', title: 'Steps 步骤', path: 'steps', component: lazy(() => import('./pages/nav/Steps'))},
            {name: 'IndexList', title: 'IndexList 索引列表', path: 'indexlist', component: lazy(() => import('./pages/nav/IndexList'))},
        ]
    },
    {
        type: 'SubMenu', 
        name: 'view',
        title: '视图',
        path: '/view',
        children: [
            {name: 'message', title: 'Message 消息提示', path: 'message', component: lazy(() => import('./pages/view/Message'))},
            {name: 'notice', title: 'Notice 通知', path: 'notice', component: lazy(() => import('./pages/view/Notice'))},
            {name: 'modal', title: 'Modal 对话框', path: 'modal', component: lazy(() => import('./pages/view/Modal'))},
            {name: 'tree', title: 'Tree 树状控件', path: 'tree', component: lazy(() => import('./pages/view/Tree'))},
            {name: 'image', title: 'Image 图片', path: 'image', component: lazy(() => import('./pages/view/Image'))},
            // {name: 'imagepreview', title: 'ImagePreview', path: 'imagepreview', component: lazy(() => import('./pages/view/ImagePreview'))},
            {name: 'Timeline', title: 'Timeline 时间轴', path: 'timeline', component: lazy(() => import('./pages/view/Timeline'))},
            {name: 'Carousel', title: 'Carousel 跑马灯', path: 'carousel', component: lazy(() => import('./pages/view/Carousel'))},
            {name: 'Exception', title: 'Exception 异常页面', path: 'exception', component: lazy(() => import('./pages/view/Exception'))},
            {name: 'QRCode', title: 'QRCode 二维码', path: 'qrcode', component: lazy(() => import('./pages/view/QRCode'))},
            {name: 'Drawer', title: 'Drawer 抽屉', path: 'drawer', component: lazy(() => import('./pages/view/Drawer'))},
            {name: 'PageFooter', title: 'PageFooter 页底', path: 'pagefooter', component: lazy(() => import('./pages/view/PageFooter'))},
        ]
    },
    {
        type: 'SubMenu', 
        name: 'formElements',
        title: '表单',
        path: '/forms',
        children: [
            {name: 'form', title: 'Form 表单', path: 'form', component: lazy(() => import('./pages/FormElements/Form'))},
            {name: 'checkbox', title: 'Checkbox 多选框', path: 'checkbox', component: lazy(() => import('./pages/FormElements/Checkbox'))},
            {name: 'radio', title: 'Radio 单选框', path: 'radio', component: lazy(() => import('./pages/FormElements/Radio'))},
            {name: 'input', title: 'Input 输入框', path: 'input', component: lazy(() => import('./pages/FormElements/Input'))},
            {name: 'select', title: 'Select 选择框', path: 'select', component: lazy(() => import('./pages/FormElements/Select'))},
            {name: 'table', title: 'Table 表格', path: 'table', component: lazy(() => import('./pages/FormElements/Table'))},
            {name: 'timepicker', title: 'Timepicker 时间选择', path: 'timepicker', component: lazy(() => import('./pages/FormElements/Timepicker'))},
            {name: 'datepicker', title: 'Datepicker 日期选择', path: 'datepicker', component: lazy(() => import('./pages/FormElements/Datepicker'))},
            {name: 'cascader', title: 'Cascader 级联选择', path: 'cascader', component: lazy(() => import('./pages/FormElements/Cascader'))},
            {name: 'slider', title: 'Slider 滑块', path: 'slider', component: lazy(() => import('./pages/FormElements/Slider'))},
            {name: 'treeSelect', title: 'TreeSelect 树选择', path: 'treeselect', component: lazy(() => import('./pages/FormElements/TreeSelect'))},
            {name: 'upload', title: 'Upload 上传', path: 'upload', component: lazy(() => import('./pages/FormElements/Upload'))},
            {name: 'progress', title: 'Progress 进度条', path: 'progress', component: lazy(() => import('./pages/FormElements/Progress'))},
            {name: 'Transfer', title: 'Transfer 穿梭框', path: 'transfer', component: lazy(() => import('./pages/FormElements/Transfer'))},
            {name: 'Switch', title: 'Switch 开关', path: 'switch', component: lazy(() => import('./pages/FormElements/Switch'))},
            {name: 'Rate', title: 'Rate 评分', path: 'rate', component: lazy(() => import('./pages/FormElements/Rate'))},
            {name: 'Spinner', title: 'Spinner 数字输入框', path: 'spinner', component: lazy(() => import('./pages/FormElements/Spinner'))},
            {name: 'AutoComplete', title: 'AutoComplete 自动完成', path: 'autocomplete', component: lazy(() => import('./pages/FormElements/AutoComplete'))},
            {name: 'ColorPicker', title: 'ColorPicker 颜色选择器', path: 'colorPicker', component: lazy(() => import('./pages/FormElements/ColorPicker'))},
            {name: 'Login', title: 'Login 登录', path: 'login', component: lazy(() => import('./pages/FormElements/Login'))},
        ]
    },
    {
        type: 'SubMenu', 
        name: 'other',
        title: '其他',
        path: '/other',
        children: [
            {name: 'CountUp', title: 'CountUp 数字动画', path: 'countup', component: lazy(() => import('./pages/other/CountUp'))},
            {name: 'CountDown', title: 'CountDown 倒计时', path: 'countdown', component: lazy(() => import('./pages/other/CountDown'))},
            {name: 'VirtualList', title: 'VirtualList 虚拟列表', path: 'virtuallist', component: lazy(() => import('./pages/other/VirtualList'))},
            {name: 'WordCount', title: 'WordCount 字数统计', path: 'wordcount', component: lazy(() => import('./pages/other/WordCount'))},
        ]
    }
];

// export const Rs = [
//     {path: '/base', title: '', name: '', children: [
//         {path: '/button', component: lazy(() => import('./pages/base/Button'))}
//     ]},
// ];