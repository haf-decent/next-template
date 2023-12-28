import Document, {
	type DocumentContext,
	type DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript
} from "next/document"
import { ServerStyleSheet } from "styled-components"

import {
	SITE_BASE_URL,
	SITE_DESCRIPTION,
	SITE_FAVICON,
	SITE_OG_IMAGE,
	SITE_OG_IMAGE_DIM,
	SITE_TITLE,
	TWITTER_HANDLE
} from "@/utils"

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
					<meta name="title" content={SITE_TITLE} />
					<meta name="description" content={SITE_DESCRIPTION} />

					<meta name="application-name" content={SITE_TITLE} />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content={SITE_TITLE} />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="format-detection" content="telephone=no" />

					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="msapplication-tap-highlight" content="no" />

					<meta name="theme-color" content="#000000" />

					{/* <link rel="apple-touch-icon" href="/icon-128x128.png" /> */}

					{/* <link rel="icon" type="image/png" sizes="64x64" href="/icon-64x64.png" />*/}
					{/* <link rel="manifest" href="/manifest.json" /> */}
					{/* <link rel="mask-icon" href="/logo.svg" color="#ffffff" /> */}
					<link rel="shortcut icon" href={SITE_FAVICON} />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content={SITE_BASE_URL} />
					<meta name="twitter:title" content={SITE_TITLE} />
					<meta name="twitter:description" content={SITE_DESCRIPTION} />
					<meta name="twitter:image" content={SITE_OG_IMAGE || `${SITE_BASE_URL}/${SITE_FAVICON}`} />
					<meta name="twitter:creator" content={TWITTER_HANDLE} />

					<meta property="og:type" content="website" />
					<meta property="og:title" content={SITE_TITLE} />
					<meta property="og:description" content={SITE_DESCRIPTION} />
					<meta property="og:site_name" content={SITE_TITLE} />
					<meta property="og:url" content={SITE_BASE_URL} />
					<meta property="og:image" content={`${SITE_BASE_URL}/${SITE_FAVICON}`} />
					{!!SITE_OG_IMAGE_DIM && (<>
						<meta property="og:image:width" content={SITE_OG_IMAGE_DIM.width} />
						<meta property="og:image:height" content={SITE_OG_IMAGE_DIM.height} />
					</>)}

					{/* eslint-disable-next-line */}
					{/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
					<script dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', '${GOOGLE_ANALYTICS_ID}');
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
