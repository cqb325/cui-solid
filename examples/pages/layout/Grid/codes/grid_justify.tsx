export default `
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5} style={{'margin-top': '20px'}}>
    <div>start</div>
    <Row justify='start' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>end</div>
    <Row justify='end' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>center</div>
    <Row justify='center' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>space-between</div>
    <Row justify='space-between' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>space-around</div>
    <Row justify='space-around' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
</Space>`;