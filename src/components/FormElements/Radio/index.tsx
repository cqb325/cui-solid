import { Checkbox, CheckboxProps } from "../Checkbox";
import { useClassList } from "../../utils/useProps";

export function Radio (props: CheckboxProps) {
    const classList = () => useClassList(props, 'cm-radio');
    return <Checkbox {...props} classList={classList()} type='radio'/>
}