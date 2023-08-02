export default `<Space dir="h">
    <Tooltip theme='light' content={<div>
        <Paragraph>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>

    <Tooltip content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`;