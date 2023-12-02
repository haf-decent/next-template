import { useEffect, useState } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import { ga_pageview } from "@/utils"
import { ThemeProvider } from "@/providers/ThemeProvider"

import { GlobalStyle } from "@/styles"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			ga_pageview(url)
		}
		router.events.on("routeChangeComplete", handleRouteChange)
		
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [ router.events ])

	const [ mounted, setMounted ] = useState(false)

	useEffect(() => setMounted(true), [])

	return (
		<ThemeProvider>
			<GlobalStyle/>
			{mounted && <Component {...pageProps}/>}
		</ThemeProvider>
	)
}
