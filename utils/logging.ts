import { DEV } from "./constants"

export const createStyledLogger = (name: string, style = "") => {
	const mainLogger = (...data: any) => {
		if (!DEV) return
		console.log(`%c${name}:`, `font-weight: bold; padding: 0 3px; ${style}`, ...data)
	}
	mainLogger.warn = (...data: any) => {
		if (!DEV) return
		console.log(`%c${name}:`, `font-weight: bold; padding-right: 3px; border-left: 3px solid #ffff00; ${style}`, ...data)
	}
	mainLogger.error = (...data: any) => {
		console.log(`%c${name}:`, `font-weight: bold; padding-right: 3px; border-left: 3px solid #ffff00; ${style}`, ...data)
	}
	return mainLogger
}

export const generalLogger = createStyledLogger("SYSTEM", `color: white; background-color: #3d3d3d;`)
