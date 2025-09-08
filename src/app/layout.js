import { Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import './styles/globals.css';
import './styles/styles.css';
import './styles/mobile.css';

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	// leave zoom enabled for a11y (don’t set maximumScale unless necessary)
};

export const metadata = {
	icons: {
		icon: [
			{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico' },
		],
		apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
	},
	manifest: '/site.webmanifest',
	applicationName: 'my-website',
	appleWebApp: { title: 'my-website' },
};

const pixelifySans = Pixelify_Sans({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head />
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
