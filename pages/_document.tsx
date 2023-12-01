import Document, {
	type DocumentContext,
	type DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript
} from "next/document"
import { ServerStyleSheet } from "styled-components"

const title = "Next App"
const description = "This is a nextjs app"
const favicon = "/favicon.ico"
const siteURL = "https://google.com"
const twitter = ""

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="application-name" content={title} />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content={title} />
					<meta name="description" content={description} />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#000000" />

					{/* <link rel="apple-touch-icon" href="/icon-128x128.png" />

					<link rel="icon" type="image/png" sizes="64x64" href="/icon-64x64.png" />
		<link rel="manifest" href="/manifest.json" /> */}
					<link rel="mask-icon" href="/logo.svg" color="#ffffff" />
					<link rel="shortcut icon" href={favicon} />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content={siteURL} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					<meta name="twitter:image" content={`${siteURL}/${favicon}`} />
					<meta name="twitter:creator" content={twitter} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="og:site_name" content={title} />
					<meta property="og:url" content={siteURL} />
					<meta property="og:image" content={`${siteURL}/${favicon}`} />

					{/* eslint-disable-next-line */}
					{/* <script async src="https://www.googletagmanager.com/gtag/js?id="></script>
					<script dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', '');
						`
					}}/> */}
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		)
	}
}
