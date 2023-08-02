export default `<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable axis="both" bounds="parent" handle=".handler">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            <div class="handler" style={{cursor: 'move'}}>Handler</div>
        </div>
    </Draggable>
</div>`