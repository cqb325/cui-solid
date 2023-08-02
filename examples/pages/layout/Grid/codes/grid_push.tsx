export default `
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v'>
    <Row class='example-demo'>
        <Col grid={3/4} push={1/4}><ColText>3/4 push-1/4</ColText></Col>
        <Col grid={1/4} pull={3/4}><ColText>1/4 pull-3/4</ColText></Col>
    </Row>
</Space>`;