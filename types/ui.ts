import { type HTMLProps, type ReactNode, type SVGProps } from "react"

export type ReactChildren = JSX.Element | ReactNode | ReactNode[]

export type AnchorProps = Omit<HTMLProps<HTMLAnchorElement>, "ref" | "as" | "href">

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
	size?: number
}

export type DirectionalIconProps = IconProps & {
	direction?: "up"
		| "down"
		| "left"
		| "right"
		| "upRight"
		| "upLeft"
		| "downRight"
		| "downLeft"
}

export type Sorting = {
	key: string,
	direction: "desc" | "asc"
}
