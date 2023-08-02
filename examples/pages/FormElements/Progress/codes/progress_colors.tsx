export default `const [value2, setValue2] = createSignal(20);

<Space dir="h" inline>
    <Progress type='circle' value={value2()} strokeColor={[
        {percent: 20, color: '#108ee9'},
        {percent: 50, color: '#87d068'},
        {percent: 70, color: '#d9363e'}
    ]}/>
</Space>
<Space dir="h">
    <Button type='primary' icon={<Icon name='plus'/>} onClick={() => {
        setValue2(value2() + 5);
    }}></Button>
    <Button type='primary' icon={<Icon name='minus'/>} onClick={() => {
        setValue2(value2() - 5);
    }}></Button>
</Space>`