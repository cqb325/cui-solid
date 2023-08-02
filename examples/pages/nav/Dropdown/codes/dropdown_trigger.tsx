export default `const [visible, setVisible] = createSignal(false);

<Space dir="h">
    <Dropdown trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>Click</Text>
    </Dropdown>



    <Dropdown trigger="contextMenu" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right"></Icon>
            <DropdownMenu>
                <DropdownItem name='挂炉烤鸭'>挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>rightClick</Text>
    </Dropdown>


    <Dropdown trigger="custom" align="bottom" 
        visible={[visible, setVisible]}
        menu={<div style={{width: '150px', padding: '20px', background: '#fff'}}>
        <div>dropdown内容</div>
        <Button type='primary' onClick={() => {
            setVisible(false)
        }}>关闭</Button>
    </div>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>custom</Text>
    </Dropdown>
</Space>`