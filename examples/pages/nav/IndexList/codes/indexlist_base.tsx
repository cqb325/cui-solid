export default `const data = [{
    id: 'A', name: '安徽',
    children: [{name: '合肥', id: '1'},{name: '芜湖', id: '2'},{name: '蚌埠', id: '3'},{name: '淮南', id: '4'},{name: '马鞍山', id: '5'}
    ,{name: '淮北', id: '6'},{name: '铜陵', id: '7'},{name: '安庆', id: '8'}],
},{
    id: 'B', name: '北京',
    children: [{name: '北京市', id: '北京市'}],
}, {
    id: 'C', name: '重庆',
    children: [{name: '重庆市', id: '重庆市'}]
}, {
    id: 'F', name: '福建',
    children: [{name: '福州市', id: '福州市'}, {name: '厦门市', id: '厦门市'}, {name: '莆田市', id: '莆田市'}, {name: '三明市', id: '三明市'}]
}, {
    id: 'G', name: '甘肃',
    children: [{name: '兰州市', id: '兰州市'}, {name: '嘉峪关市', id: '嘉峪关市'}, {name: '金昌市', id: '金昌市'}, {name: '白银市', id: '白银市'}]
}];

<div style={{height: "500px"}}>
    <IndexList data={data}></IndexList>
</div>
`;