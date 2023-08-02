export default `const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Space dir="v">
    <div>Leaf:</div>
    <TreeSelect multi data={data} clearable mode='Leaf' />
    <div>Shallow:</div>
    <TreeSelect multi data={data} clearable mode='Shallow' />
    <div>All:</div>
    <TreeSelect multi data={data} clearable mode='All' />
</Space>`