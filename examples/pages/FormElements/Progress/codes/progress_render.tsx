export default `<Space dir="h" inline>
    <Progress type='circle' value={100} infoRender={(sta: string, value: number) => {
        if (value === 100) {
            return '完成'
        } else {
            return '进行中'
        }
    }}/>
</Space>`