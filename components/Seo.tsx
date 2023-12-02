import Head from "next/head"

type SeoProps = {
	title?: string
	description?: string
	url?: string
	ogImage?: string,
	ogImageDimensions?: {
		width: string,
		height: string
	}
}

export function Seo({
	title,
	description,
	url,
	ogImage,
	ogImageDimensions
}: SeoProps) {
	return (
		<Head>
			{!!title && <title>{title}</title>}
			{!!description && <meta name="description" content={description}/>}

			{!!url && <meta name="twitter:url" content={url} />}
			{!!title && <meta name="twitter:title" content={title} />}
			{!!description && <meta name="twitter:description" content={description} />}
			{!!ogImage && <meta name="twitter:image" content={ogImage} />}

			{!!title && <meta property="og:title" content={title}/>}
			{!!description && <meta property="og:description" content={description}/>}
			{!!url && <meta property="og:url" content={url}/>}
			{!!ogImage && <meta property="og:image" content={ogImage}/>}
			{!!ogImageDimensions && (<>
				<meta property="og:image:width" content={ogImageDimensions.width}/>
				<meta property="og:image:height" content={ogImageDimensions.height}/>
			</>)}
		</Head>
	)
}
