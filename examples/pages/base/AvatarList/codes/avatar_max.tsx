export default `import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

<Space dir="h" align="center">
    <AvatarList max={3} excessStyle={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>
        <Avatar asProps title='头像1' src={img1}/>
        <Avatar asProps title='头像2' src={img2}/>
        <Avatar asProps title='头像3' src={img3}/>
        <Avatar asProps title='头像4' src={img4}/>
    </AvatarList>
</Space>`