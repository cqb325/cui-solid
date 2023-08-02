export default `const [index, setIndex] = createSignal(0);

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Space id="image_base" dir="v">
    <Carousel dotType="line" activeIndex={[index, setIndex]}>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img1} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img2} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img3} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img4} fit="cover"/>
            </div>
        </Carousel.Item>
    </Carousel>
    <div>
        <Button type="primary" onClick={() => {
            setIndex((index() + 1) % 4)
        }}>Next</Button>
    </div>
</Space>`;