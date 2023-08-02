export default `const data2 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]
const [opened, setOpened]: any = createSignal(['zhejiang']);

<Tree data={data2} opened={[opened, setOpened]}/>`