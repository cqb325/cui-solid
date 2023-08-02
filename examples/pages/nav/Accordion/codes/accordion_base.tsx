export default `<HView class="components-layout-demo" size="450px">
    <View size="250px" style={{'text-align': 'initial', 'box-shadow': '2px 0 8px 0 rgba(29, 35, 41, 0.05)'}} class="layout-demo-sider">
        <Accordion onSelect={(name: string, open: boolean, v: any) => {
            console.log(name, open, v);
        }}>
            <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
            <Accordion.Item name="a2" title={<BothSide>
                <span>Title2</span>
                <Tag size='small' theme='success'>1234</Tag>
            </BothSide>} icon={<Icon name='cog'/>}>
                <p>content2</p>
                <p>content2</p>
                <p>content2</p>
                <p>content2</p>
            </Accordion.Item>
        </Accordion>
    </View>
    <VView style={centerStyle}>
        <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        <View style={centerStyle}></View>
        <View class='layout-demo-header' size="64px" style={centerStyle}></View>
    </VView>
</HView>`;