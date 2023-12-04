import { DEV } from "./constants"

export const GOOGLE_ANALYTICS_ID = ""

export const ga_pageview = (url: string) => {
	if (DEV) return
	if (!GOOGLE_ANALYTICS_ID) {
		throw new Error("No analytics available")
	}

	(window as any).gtag(
		"config",
		GOOGLE_ANALYTICS_ID,
		{ page_path: url }
	)
}

export const GAEvent: Record<string, string> = {
	CLICK: "click"
}

export const ga_event = (action: string, params?: Record<string, any>) => {
	if (DEV) return
	if (!GOOGLE_ANALYTICS_ID) {
		throw new Error("No analytics available")
	}
	(window as any).gtag("event", action, params)
}
