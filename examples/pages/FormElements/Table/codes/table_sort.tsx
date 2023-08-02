export default `const columns = [
    {name: 'name', title: '名称', width: '150px', sort: true},
    {name: 'x', title: 'X', width: '300px', sort: true},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];


const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} />
</Space>`