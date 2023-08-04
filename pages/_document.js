import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Free online notepad app</title>
				<meta name="description">
					Free online notepad app. No logn required. 100% FREE.
				</meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			<script
				defer
				data-domain="iseditor.com"
				src="https://data.salesforcecasts.com/js/script.js"
			></script>
		</Html>
	);
}
