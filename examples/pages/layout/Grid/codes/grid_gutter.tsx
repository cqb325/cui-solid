export default `
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Row gutter={16} class="example-demo">
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
</Row>
<div>row2</div>
<Row gutter={[16, 16]} class="example-demo">
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
</Row>`;
