import { css } from "styled-components"

export const DEV = process.env.NODE_ENV !== "production"

export const SITE_TITLE = ""
export const SITE_DESCRIPTION = ""
export const SITE_FAVICON = ""
export const SITE_BASE_URL = ""
export const SITE_OG_IMAGE = ""
export const SITE_OG_IMAGE_DIM: { width: string, height: string } | undefined = undefined

export const TWITTER_HANDLE = ""
export const LINK_TO_TWITTER = `https://twitter.com/${TWITTER_HANDLE}`

export type Breakpoint =
	"largerThanSmall"
	| "largerThanMedium"
	| "largerThanLarge"
export const BREAKPOINTS: Record<Breakpoint, number> = {
	largerThanSmall: 576,
	largerThanMedium: 869,
	largerThanLarge: 1080,
}

export const breakpointTemplates: Record<Breakpoint, typeof css> =
	(Object.keys(BREAKPOINTS) as Breakpoint[])
		.reduce((accumulator, size) => {
			(accumulator as any)[size] = (a: any, b: any, c: any) => css`
					@media (min-width: ${BREAKPOINTS[size]}px) {
							${css(a, b, c)}
					}
			`
			return accumulator
		}, {}) as any
