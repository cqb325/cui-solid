export default `<Skeleton placeholder={<div style={{display: 'flex', "align-items": 'flex-start'}}>
    <Skeleton.Avatar shape='square' style={{ 'margin-right': '12px' }} />
    <div>
        <Skeleton.Title width='120px' style={{ 'margin-bottom': '12px', 'margin-top': '12px' }} />
        <Skeleton.Paragraph width={['240px', '220px', '180px']} rows={3} />
    </div>
    </div>} loading={true}>
    <div style={{display: 'flex', "align-items": 'flex-start'}}>
    <Avatar style={{ 'margin-right': '12px' }}>
        UI
    </Avatar>
    <div>
        <h3>Semi UI</h3>
        <p>Hi, Bytedance dance dance.</p>
        <p>Hi, Bytedance dance dance.</p>
        <p>Hi, Bytedance dance dance.</p>
    </div>
    </div>
</Skeleton>`