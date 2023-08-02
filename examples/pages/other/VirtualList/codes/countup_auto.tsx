export default `
<style>
.listItem {
    border: 1px solid grey;
    width: 100%;
    height: 100%;
}
.ListItemEven {
    background-color: #e6e4dc;
}
.ListItemEven, .ListItemOdd {
    display: flex;
    align-items: center;
    justify-content: center;
}
*{
    box-sizing: border-box;
}
</style>
export const ListItem = (props: any) : JSXElement => {
    const style = {...props.style, height: (30 + props.item) + 'px'}
    return <div
      style={style}
      role="listitem"
      classList={{
        "ListItemOdd": props.index % 2 === 0,
        "ListItemEven": props.index % 2 === 1,
      }}
      ref={props.ref}
    >
      <div>Row {props.index}</div>
    </div>
}
export const createArray = (count: number) => {
    return new Array(count).fill(true).map(() => 1 + Math.round(Math.random() * 20))
};

<div style={{width: '300px', border: '1px solid #ccc'}}>
    <VirtualList height={300} items={createArray(1000)} itemEstimatedSize={20}>
        {ListItem}
    </VirtualList>
</div>`