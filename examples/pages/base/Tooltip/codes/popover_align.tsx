export default `const style = {width: '120px', 'text-align': 'center'}

<Space dir="v" align="center">
    <Space dir="v" style={{width: '500px'}}>
        <Space dir="h" align="center" justify="center" size={30}>
            <Tooltip content="Content" align="topLeft">
                <Button style={style}>Top Left</Button>
            </Tooltip>
            <Tooltip content="Content" align="top">
                <Button style={style}>Top Center</Button>
            </Tooltip>
            <Tooltip content="Content" align="topRight">
                <Button style={style}>Top Right</Button>
            </Tooltip>
        </Space>
        <BothSide>
            <Space dir="v">
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftTop">
                    <Button>Left Top</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="left">
                    <Button>Left Center</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftBottom">
                    <Button>Left Bottom</Button>
                </Tooltip>
            </Space>
            <Space dir="v">
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightTop">
                    <Button>Right Top</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="right">
                    <Button>Right Center</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightBottom">
                    <Button>Right Bottom</Button>
                </Tooltip>
            </Space>
        </BothSide>
        <Space dir="h" align="center" justify="center" size={30}>
            <Tooltip content="Content" align="bottomLeft">
                <Button style={style}>Bottom Left</Button>
            </Tooltip>
            <Tooltip content="Content" align="bottom">
                <Button style={style}>Bottom Center</Button>
            </Tooltip>
            <Tooltip content="Content" align="bottomRight">
                <Button style={style}>Bottom Right</Button>
            </Tooltip>
        </Space>
    </Space>
</Space>`;