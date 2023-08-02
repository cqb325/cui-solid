export default `const [activeName, setActiveName] = createSignal('2');

<div style={{width: '220px', 'border-right': '1px solid var(--cui-color-border)'}}>
    <Menu dir='v' activeName={[activeName, setActiveName]}>
        <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
            <MenuItem name='11'>添加</MenuItem>
            <MenuItem name='12'>修改</MenuItem>
            <MenuItem name='13'>删除</MenuItem>
        </SubMenu>
        <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
        <SubMenu name='3' icon={<Icon name='cog'/>} title='系统管理'>
            <MenuItem name='31'>菜单管理</MenuItem>
            <SubMenu name='32' title='字典管理'>
                <MenuGroup name='321' title="系统字典">
                    <MenuItem name='3211'>添加</MenuItem>
                    <MenuItem name='3212'>修改</MenuItem>
                    <MenuItem name='3213'>删除</MenuItem>
                </MenuGroup>
                <MenuGroup name='322' title="客户字典">
                    <MenuItem name='3221'>添加</MenuItem>
                    <MenuItem name='3222'>修改</MenuItem>
                    <MenuItem name='3223'>删除</MenuItem>
                </MenuGroup>
            </SubMenu>
            <MenuItem name='33'>权限管理</MenuItem>
        </SubMenu>
    </Menu>
    <Button onClick={() => {
        setActiveName('3212');
    }}>选中指定菜单</Button>
</div>`