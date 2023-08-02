export default `const data9 = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Tree data={data9} multi directory onContextMenu={(data: any) => {
    console.log(data);
}} contextMenu={<DropdownMenu>
    <DropdownItem name='add'>添加</DropdownItem>
    <DropdownItem name='modity'>修改</DropdownItem>
</DropdownMenu>} onSelectMenu={(name: string) => {
    console.log(name);
}}/>`