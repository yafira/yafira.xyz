'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const ProjectBox = ({ title, imageUrl, link, description, links }) => (
	<div className='project-box line-box'>
		<div className='box-content'>
			<Image
				src={imageUrl}
				alt={title}
				width={60}
				height={60}
				className='project-image'
			/>
			<span className='box-text'>{title}</span>
		</div>
		{links ? (
			<div className='project-links'>
				{Object.entries(links).map(([key, url]) => (
					<a key={key} href={url} className={`project-link ${key}-btn`}>
						{key.charAt(0).toUpperCase() + key.slice(1)}
					</a>
				))}
			</div>
		) : (
			<a href={link} className='project-link'>
				View Project
			</a>
		)}
	</div>
)

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState(null)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const projectSections = {
		craft: [
			{
				title: 'AirSense',
				imageUrl: '/assets/airsense.png',
				link: 'https://electrocuteitp.wordpress.com/2025/03/16/troubleshooting-mqtt-connection-issues-in-react-from-vite-to-plain-javascript-back-to-react-more-updates/',
				description:
					'Indoor air quality monitor and dashboard using Arduino and React.',
			},
			{
				title: 'Glowmotion',
				imageUrl: '/assets/glow.gif',
				link: 'https://electrocuteitp.wordpress.com/2024/12/19/glowmotion/',
				description: 'Gesture-controlled interactive light.',
			},
			{
				title: 'Past, Pastry, Future',
				imageUrl: '/assets/ppf.gif',
				link: 'https://electrocuteitp.wordpress.com/2024/12/20/past-pastry-future-an-ar-time-travel-experience-with-vuforia-and-unity/',
				description: 'Augmented reality experience using Unity and Vuforia.',
			},
		],

		code: [
			{
				title: 'TinkerThread',
				imageUrl: '/assets/tt.gif',
				link: 'https://tinkerthread.netlify.app/',
				description: 'Circuit simulator made with JavaScript.',
			},
			{
				title: 'Cute Technologies',
				imageUrl: '/assets/cute-tech.gif',
				link: 'https://cutetech.tools/',
				description: 'A blog built with Next.js and Notion API.',
			},
			{
				title: 'Salvador DALL·E',
				imageUrl: '/assets/sdalle.gif',
				link: 'https://salvadordalle.vercel.app/',
				description: 'AI image generator using DALL·E 2.',
			},
			{
				title: 'Synthwave Chimes',
				imageUrl: '/assets/synthchime.gif',
				link: 'https://synthwave-chimes.netlify.app/',
				description: 'Interactive sound and shape sketch with p5.js.',
			},
			{
				title: 'Sailor Moon Calculator',
				imageUrl: '/assets/calculator.gif',
				link: 'https://sailor-moon-calculator.netlify.app/',
				description: 'On-screen calculator with a Sailor Moon theme.',
			},
			{
				title: 'Markie',
				imageUrl: '/assets/notes.gif',
				link: 'https://markie.netlify.app/',
				description: 'Markdown editor and preview app.',
			},
			{
				title: 'Scribble Pop',
				imageUrl: '/assets/scribble.gif',
				link: 'https://scribble-pop.netlify.app/',
				description: 'Creative drawing tool using canvas.',
			},
			{
				title: 'NewsBits',
				imageUrl: '/assets/news-app.gif',
				link: 'https://github.com/Yafira/newsBits',
				description: 'News reading app built with React Native.',
			},
		],

		design: [
			{
				title: 'Cosmic Snax',
				imageUrl: '/assets/cosmic-snax.gif',
				description: 'A snack ordering app for a movie theater',
				links: {
					prototype:
						'https://www.figma.com/proto/oTPH8BW7owaY91IVOlR6KC/Cosmic-Snax?page-id=248%3A2311&node-id=256%3A1892&viewport=245%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=256%3A1892',
					casestudy: 'assets/Cosmic Snax - Case study.pdf',
				},
			},
			{
				title: 'Seedling',
				imageUrl: '/assets/seedling.gif',
				description: 'A tool to help people develop their creativity',
				links: {
					mobile:
						'https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=36%3A1963&node-id=36%3A2223&viewport=245%2C48%2C0.22&scaling=min-zoom&starting-point-node-id=36%3A2223',
					web: 'https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=46%3A1304&node-id=50%3A3254&viewport=245%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=50%3A3254&show-proto-sidebar=1',
					casestudy: 'assets/Seedling - Case study.pdf',
				},
			},
			{
				title: 'bDazzled',
				imageUrl: '/assets/bdazzled.gif',
				description: 'A custom bicycle web shop',
				links: {
					prototype:
						'https://www.figma.com/proto/GdO2Bto4BnWhiwRuo6coS1/bDazzled?node-id=38%3A5020&starting-point-node-id=38%3A5020',
					casestudy: 'assets/bDazzled - Case study.pdf',
				},
			},
		],

		electronics: [
			{
				title: 'AirSense',
				imageUrl: '/assets/airsense.png',
				link: 'https://electrocuteitp.wordpress.com/2025/03/16/troubleshooting-mqtt-connection-issues-in-react-from-vite-to-plain-javascript-back-to-react-more-updates/',
				description:
					'Indoor air quality monitor and dashboard using Arduino and React.',
			},
			{
				title: 'Glowmotion',
				imageUrl: '/assets/glow.gif',
				link: 'https://electrocuteitp.wordpress.com/2024/12/19/glowmotion/',
				description: 'Gesture-controlled interactive light.',
			},
		],

		text: [],
	}

	const handleBoxClick = (section) => {
		if (activeSection === section) {
			setIsDrawerOpen(!isDrawerOpen)
		} else {
			setActiveSection(section)
			setIsDrawerOpen(true)
		}
	}

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false)
	}

	return (
		<div className='page-container'>
			<div className='main-section fixed'>
				<div className='image-box'>
					<Image
						src='/assets/flower.png'
						alt='flower shape'
						className='flower-image'
						width={500}
						height={500}
					/>

					<div
						className={`line-box box1 ${
							activeSection === 'craft' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('craft')}
					>
						<Image
							src='/assets/tools.png'
							alt='craft icon'
							width={60}
							height={60}
						/>
						<span className='box-text'>craft</span>
					</div>

					<div
						className={`line-box box2 ${
							activeSection === 'code' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('code')}
					>
						<Image
							src='/assets/code.png'
							alt='code icon'
							width={60}
							height={60}
						/>
						<span className='box-text'>code</span>
					</div>

					<div
						className={`line-box box3 ${
							activeSection === 'design' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('design')}
					>
						<Image
							src='/assets/design.png'
							alt='design icon'
							width={60}
							height={60}
						/>
						<span className='box-text'>design</span>
					</div>

					<div
						className={`line-box box4 ${
							activeSection === 'electronics' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('electronics')}
					>
						<Image
							src='/assets/circuit.png'
							alt='electronics icon'
							width={60}
							height={60}
						/>
						<span className='box-text'>electronics</span>
					</div>

					<div
						className={`line-box box5 ${
							activeSection === 'text' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('text')}
					>
						<Image
							src='/assets/text.png'
							alt='text icon'
							width={60}
							height={60}
						/>
						<span className='box-text'>text</span>
					</div>
				</div>
			</div>

			{activeSection && (
				<div
					className={`projects-drawer ${isDrawerOpen ? 'open' : ''}`}
					data-section={activeSection}
				>
					<button className='drawer-close' onClick={handleCloseDrawer}>
						<ChevronDown />
					</button>
					<h2 className='section-title'>{activeSection.toUpperCase()}</h2>
					<div className='projects-grid'>
						{projectSections[activeSection].map((project, index) => (
							<ProjectBox key={index} {...project} />
						))}
					</div>
				</div>
			)}
		</div>
	)
}
