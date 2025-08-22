import { Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import './styles/globals.css';
import './styles/styles.css';
import './styles/mobile.css';

const pixelifySans = Pixelify_Sans({
	weight: '400',
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<link
				rel='icon'
				type='image/png'
				href='/favicon-96x96.png'
				sizes='96x96'
			/>
			<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			<link rel='shortcut icon' href='/favicon.ico' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			/>
			<meta name='apple-mobile-web-app-title' content='my-website' />
			<link rel='manifest' href='/site.webmanifest' />
			<body className={pixelifySans.className}>
				<nav className='navigation'>
					<div className='nav-links'>
						<Link href='/' className='home-icon'>
							⌂
						</Link>
						<Link href='/about'>about</Link>
						<Link href='/projects'>projects</Link>
						<Link href='/cv'>cv</Link>
						<Link href='/contact'>contact</Link>
					</div>
				</nav>
				<main className='main-content'>{children}</main>
			</body>
		</html>
	);
}
