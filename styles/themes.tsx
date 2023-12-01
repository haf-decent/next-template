import { mediaWidthTemplates } from "@/utils/constants"

export const darkTheme = {
	colors: {
		background: "white",
		text: "black"
	},
	font: {
		extraSmall: "0.75rem", // 12px
		small: "0.875rem", // 14px
		default: "16px",
		medium: "1.125rem", // 18px
		large: "1.25rem", // 20px
		extraLarge: "1.5rem", // 24px
	},
	border: {
		thin: "1px solid black",
		medium: "2px solid black",
		thick: "3px solid black"
	},
	mediaWidth: mediaWidthTemplates
}

export type Theme = typeof darkTheme

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
