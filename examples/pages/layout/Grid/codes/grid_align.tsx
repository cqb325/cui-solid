export default `
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5} style={{'margin-top': '20px'}}>
    <Row justify='center' align='top' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <Row justify='center' align='bottom' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <Row justify='center' align='middle' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
</Space>`;