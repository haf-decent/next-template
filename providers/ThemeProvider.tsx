import { type Dispatch, createContext, useContext, useMemo, useReducer } from "react"

import type { ReactChildren } from "@/types"

import { ThemeProvider as SCThemeProvider } from "styled-components"
import { type Theme, darkTheme } from "@/styles/themes"

type ThemeId = "light" | "dark"

type ThemeContext = {
	themeId: ThemeId,
	theme: Theme,
	toggleTheme: Dispatch<ThemeId | undefined>
}

const defaultState: ThemeContext = {
	themeId: "dark",
	theme: darkTheme,
	toggleTheme: () => undefined
}

const ThemeContext = createContext<ThemeContext>(defaultState)

export const useTheme = () => useContext(ThemeContext)

type Props = {
	children?: ReactChildren
}
export function ThemeProvider({ children }: Props) {
	const [ themeId, toggleTheme ] = useReducer((t: ThemeId, id?: ThemeId) => {
		if (id) return id

		return t === "light"
			? "dark"
			: "light"
	}, "light")

	const theme = useMemo(() => {
		switch(themeId) {
			case "light":
				// If you have a lightTheme, add it here
				return darkTheme
			case "dark":
				return darkTheme
		}
	}, [ themeId ])

	return (
		<ThemeContext.Provider value={{
			themeId,
			theme,
			toggleTheme
		}}>
			<SCThemeProvider theme={theme}>
				{children}
			</SCThemeProvider>
		</ThemeContext.Provider>
	)
}
