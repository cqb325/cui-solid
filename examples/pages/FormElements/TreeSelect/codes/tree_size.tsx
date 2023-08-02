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

<Row>
    <Col grid={0.33}>
        <TreeSelect data={data} size='small'/>
    </Col>
    <Col grid={0.33}>
        <TreeSelect data={data}/>
    </Col>
    <Col grid={0.33}>
        <TreeSelect data={data} size='large'/>
    </Col>
</Row>`