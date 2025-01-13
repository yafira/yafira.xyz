import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
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
