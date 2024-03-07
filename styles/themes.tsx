import { breakpointTemplates } from "@/utils/constants"

export const darkTheme = {
	colors: {
		background: "white",
		text: "black"
	},
	font: {
		extraSmall: "0.5rem", // 8px
		small: "0.75rem", // 12px
		default: "16px",
		medium: "1.25rem", // 20px
		large: "1.5rem", // 24px
		extraLarge: "2.25rem", // 36px
	},
	border: {
		thin: "1px solid black",
		medium: "2px solid black",
		thick: "3px solid black"
	},
	breakpoint: breakpointTemplates
}

export type Theme = typeof darkTheme

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
