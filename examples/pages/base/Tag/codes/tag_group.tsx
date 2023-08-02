export default `<Space dir="h">
    <Space dir="v">
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup data={[
                {id: '1', title: '标签一'},
                {id: '2', title: '标签二'},
            ]}/>
        </div>
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup size='large' data={[
                {id: '1', title: '标签一'},
                {id: '2', title: '标签二'},
            ]}/>
        </div>
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup data={[
                {id: '1', title: '标签一'},
                {id: '2', title: '标签二'},
                {id: '3', title: '标签三'},
                {id: '4', title: '标签四'},
            ]} closable max={2}/>
        </div>
    </Space>
</Space>`;