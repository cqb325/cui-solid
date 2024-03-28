import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { useLoginContext } from "./Login";

export function Submit (props: ButtonProps) {
    const type = props.type ?? 'primary';
    const ctx: any = useLoginContext();
    const onClick = () => {
        ctx?.onSubmit && ctx?.onSubmit();
    }
    const size = props.size ?? 'large';
    return <Button {...props} size={size} type={type} onClick={onClick} block>登 录</Button>
}
