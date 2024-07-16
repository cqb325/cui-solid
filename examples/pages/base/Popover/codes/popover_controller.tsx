export default `<Space dir="v">
    <div>
        <Popover visible={[visible, setVisible]} theme="light" content={<div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <Button type="text" size="small" onClick={() => {
                setVisible(false);
            }}>Close</Button>
        </div>} arrow trigger="click">
            <span>Click</span>
        </Popover>

        <div>
        <Popover theme="light" align="topRight" content={<Space dir="v" style={{width: '150px'}}>
            <div><Icon name="help-circle" color="var(--cui-warning-color)"/> <Text>确认用户信息</Text></div>
            <div>是否确认删除该信息</div>
        </Space>} arrow confirm onOk={() => {
            console.log(1);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(false);
                }, 2000)
            });
        }}>
            <span>confirm</span>
        </Popover>
        </div>
    </div>
</Space>`;
