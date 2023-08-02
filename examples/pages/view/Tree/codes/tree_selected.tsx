export default `const data3 = [
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
const [selected, setSelected]: any = createSignal('xihu');

<Tree data={data3} opened={[opened, setOpened]} selected={[selected, setSelected]} onSelect={(node: any) => {
    console.log(node);
}}/>`