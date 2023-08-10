export default `<Skeleton active placeholder={<Row>
    <Col flex="1 1 0%">
        <Row>
            <Col flex="0">
                <Skeleton.Avatar style={{ 'margin-right': "16px"}}/>
            </Col>
            <Col flex="1 1 0%">
                <Skeleton.Title width="20%" />
                <Skeleton.Item width="50%" />
            </Col>
        </Row>
        <Skeleton.Item width="80%" />
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
    </Col>
    <Col flex="0">
        <Skeleton.Image width="280px" height="140px" />
    </Col>
</Row>} loading={true}>
    <div style={{display: 'flex', "align-items": 'flex-start'}}>
        
    </div>
</Skeleton>`