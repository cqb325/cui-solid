import { Component, JSXElement } from "solid-js"
import { SlotProps } from "../utils/useSlots"

export const Slot: Component<SlotProps> = (props) => {
	return props as unknown as JSXElement
}