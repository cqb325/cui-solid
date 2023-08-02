export default `<Space dir="v">
    <CheckboxGroup textField="title" valueField="id" data={[{title: '苹果', id: '1'}, {title: '桃子', id: '2'}]} onChange={(v: any) => {
        console.log(v);
    }}></CheckboxGroup>
</Space>`