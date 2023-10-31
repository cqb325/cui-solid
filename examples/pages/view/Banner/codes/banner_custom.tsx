export default `<Space dir="v" style={{width: '450px'}}>
    <Banner
        fullMode={false}
        title="Title"
        type="warning"
        bordered
    >
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
        <Slot name="extra">
            <div style={{margin: '16px 0', "text-align": 'right'}}>
                <Space justify="end">
                    <Button type="text">No, thanks.</Button>
                    <Button type="warning">Sounds great!</Button>
                </Space>
            </div>
        </Slot>
    </Banner>
</Space>
`