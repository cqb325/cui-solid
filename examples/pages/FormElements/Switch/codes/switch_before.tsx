export default `import { modal } from "../../../components/Modal";

<Space dir="h">
    <Switch onBeforeChange={(checked: boolean) => {
        return new Promise((resolve) => {
            modal.info({
                title: '提示',
                content: '确认进行切换？',
                onOk: () => {
                    resolve(true);
                }
            })
        })
    }}/>
</Space>`