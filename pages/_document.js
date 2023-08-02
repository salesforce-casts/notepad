import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
			<script
				defer
				data-domain="iseditor.com"
				src="http://data.salesforcecasts.com/js/script.js"
			></script>
		</Html>
	);
}
