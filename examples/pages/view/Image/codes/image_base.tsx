export default `import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

<Row gutter={20} style={{'text-align': 'center'}}>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='contain' src={img1}/>
        <div>contain</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='cover' src={img1}/>
        <div>cover</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='fill' src={img1}/>
        <div>fill</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='none' src={img1}/>
        <div>none</div>
    </Col>
    <Col grid={1/5}>
        <Image width={100} height={100} fit='scale-down' src={img1}/>
        <div>scale-down</div>
    </Col>
</Row>`;