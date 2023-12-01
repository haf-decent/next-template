import { type SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
	size?: number
}
