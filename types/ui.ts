import { type HTMLProps, type ReactNode } from "react"

export type ReactChildren = JSX.Element | ReactNode | ReactNode[]

export type AnchorProps = Omit<HTMLProps<HTMLAnchorElement>, "ref" | "as" | "href">

export type Sorting = {
	key: string,
	direction: "desc" | "asc"
}
