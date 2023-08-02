export default `
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v'>
    <Row gutter={16} class='example-demo'>
        <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
        <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
    </Row>

    <Row gutter={16} class='example-demo'>
        <Col grid={0.5} offset={0.25}><ColText>0.5 offset 0.25</ColText></Col>
    </Row>
</Space>`;