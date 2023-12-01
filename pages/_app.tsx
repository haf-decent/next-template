import { useEffect, useState } from "react"
import type { AppProps } from "next/app"

import { ThemeProvider } from "@/providers/ThemeProvider"

import { GlobalStyle } from "@/styles"

export default function App({ Component, pageProps }: AppProps) {
	const [ mounted, setMounted ] = useState(false)

	useEffect(() => setMounted(true), [])

	return (
		<ThemeProvider>
			<GlobalStyle/>
			{mounted && <Component {...pageProps}/>}
		</ThemeProvider>
	)
}
