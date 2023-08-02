export default `const [city, setCity] = createSignal<number>();
<Space>
    <Input type='select' value={[city, setCity]} clearable emptyOption='全部' onChange={(v: any) => {
        console.log(v);
    }}>
        <Option value={1} label="北京"></Option>
        <Option value={2} label="上海"></Option>
        <Option value={3} label="杭州"></Option>
        <Option value={4} label="武汉"></Option>
        <Option value={5} label="天津"></Option>
    </Input>
    <Button type='primary' onClick={() => {
        setCity(2);
    }}>改变值</Button>
</Space>`