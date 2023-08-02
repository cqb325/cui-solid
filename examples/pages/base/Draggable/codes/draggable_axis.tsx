export default `<div style={{height: '200px', position: 'relative'}}>

<Draggable axis="both" bounds="parent">
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        Both
    </div>
</Draggable>

<Draggable axis="x" bounds="parent" defaultPosition={{x: 200, y: 0}}>
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        X
    </div>
</Draggable>

<Draggable axis="y" bounds="parent" defaultPosition={{x: 400, y: 0}}>
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        Y
    </div>
</Draggable>
</div>`