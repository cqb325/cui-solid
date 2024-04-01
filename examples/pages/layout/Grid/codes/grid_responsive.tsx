export default `<Space dir="v" size={5} style={{'margin-top': '20px'}}>
    <div>width, offset</div>
    <Row class="example-demo" gutter={16}>
        <Col xs={{grid: 1/6, offset: 1 / 24}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
        <Col xs={{grid: 5/12, offset: 1 / 12}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
        <Col xs={{grid: 1/6, offset: 1 / 12}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
    </Row>
    <div>gutter</div>
    <Row class="example-demo" gutter={{xs: [8, 8], lg: [32, 32]}}>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
        <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
    </Row>
</Space>`
