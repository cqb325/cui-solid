export default `
import img from '@/assets/images/avatar.png'

<Space dir="h" align="center">
    <Avatar icon={<Icon name='settings'/>}></Avatar>
    <Avatar>A</Avatar>
    <Avatar>Name</Avatar>
    <Avatar src={img}></Avatar>
    <Avatar style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>U</Avatar>
    <Avatar style={{'background-color': 'rgb(135, 208, 104)'}} icon={<Icon name='settings'/>}></Avatar>
</Space>`