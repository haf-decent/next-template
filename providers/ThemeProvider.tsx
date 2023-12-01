import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from "react"

import { ThemeProvider as SCThemeProvider } from "styled-components"
import { type Theme, darkTheme } from "@/styles/themes"

type ThemeContext = {
	themeId: "light" | "dark",
	theme: Theme,
	toggleTheme: Dispatch<"light" | "dark" | undefined>
}

const defaultState: ThemeContext = {
	themeId: "dark",
	theme: darkTheme,
	toggleTheme: () => undefined
}

const ThemeContext = createContext<ThemeContext>(defaultState)

export const useTheme = () => useContext(ThemeContext)

type Props = {
	children?: ReactNode | ReactNode[]
}
export function ThemeProvider({ children }: Props) {
	const [ themeId, toggleTheme ] = useReducer((
		t: ThemeContext[ "themeId" ],
		id?: ThemeContext[ "themeId" ]
	) => {
		if (id) return id

		return t === "light"
			? "dark"
			: "light"
	}, "light")

	const theme = useMemo(() => {
		switch(themeId) {
			case "light":
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
