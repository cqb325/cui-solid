export default `const data6 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫', disabled: true},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]
<Tree data={data6} multi />`