import Head from "next/head";

interface SeoProps {
	title: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
}

{/*TODO: add url upon deployment*/ }
export const Seo: React.FC<SeoProps> = ({
	title,
	description = "A simplified social media app with Next.js and GraphQL",
	keywords = "nextjs, graphql, social media",
	image = "/default-og-image.jpg",
	url = ""
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<link rel="canonical" href={url} />
		</Head>
	)
};
