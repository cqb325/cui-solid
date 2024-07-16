export default `const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称'},
    {name: 'x', title: 'X'},
    {name: 'y', title: 'Y'},
    {name: 'date', title: '日期', width: '200px'},
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

<Table columns={columns} data={data} border/>`
