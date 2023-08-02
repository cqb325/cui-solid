export default `const [min, setMin] = createSignal(true);

<div style={{width: min() ? '80px' : '280px', 'transition': 'all 0.25s ease-in-out', 'border-right': '1px solid var(--cui-color-border)'}}>
    <Menu dir='v' accordion min={min()}>
        <SubMenu name='1' icon={<Icon name='users'/>} title='角色管理'>
            <MenuItem name='11'>添加</MenuItem>
            <MenuItem name='12'>修改</MenuItem>
            <MenuItem name='13'>删除</MenuItem>
        </SubMenu>
        <MenuItem name='2' icon={<Icon name='user'/>}>用户管理</MenuItem>
        <MenuItem name='31' icon={<Icon name='list'/>}>菜单管理</MenuItem>
        <MenuItem name='33' icon={<Icon name='tool'/>}>权限管理</MenuItem>
        <SubMenu name='32' title='字典管理' icon={<Icon name='cog'/>}>
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
    </Menu>
    <Button onClick={() => {
        setMin(!min());
    }}>展开/收缩</Button>
</div>`