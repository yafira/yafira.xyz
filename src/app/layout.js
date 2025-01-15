import { Pixelify_Sans } from 'next/font/google' // Import the font
import Link from 'next/link'
import './styles/globals.css'

const pixelifySans = Pixelify_Sans({
	weight: '400',
	subsets: ['latin'],
})

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={pixelifySans.className}>
				<nav className='navigation'>
					<div className='nav-links'>
						<Link href='/about'>about</Link>
						<Link href='/projects'>projects</Link>
						<Link href='/contact'>contact</Link>
					</div>
				</nav>
				<main className='main-content'>{children}</main>
			</body>
		</html>
	)
}
