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

export default function InteractivePortfolio() {
	const [activeSection, setActiveSection] = useState(null)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const projectSections = {
		craft: [
			{ title: 'Craft Project 1', imageUrl: '/assets/tools.png', link: '#' },
			{ title: 'Craft Project 2', imageUrl: '/assets/tools.png', link: '#' },
			{ title: 'Craft Project 3', imageUrl: '/assets/tools.png', link: '#' },
			{ title: 'Craft Project 4', imageUrl: '/assets/tools.png', link: '#' },
			{ title: 'Craft Project 5', imageUrl: '/assets/tools.png', link: '#' },
			{ title: 'Craft Project 6', imageUrl: '/assets/tools.png', link: '#' },
		],
		code: [
			{
				title: 'cute technologies',
				imageUrl: '/assets/Logo.png',
				link: 'https://cutetech.tools',
				description:
					'A digital catalog featuring a collection of cybertwee functional tools and resources to make your computing .env cuter.',
			},
			{
				title: 'snax',
				imageUrl: '/assets/Logo2.png',
				link: 'https://snax.blog',
				description:
					'A pokedex-like blog for sharing my own reviews and ratings on vegan/plant-based snacks and bevs. Also a peanut-free zone.',
			},
			{
				title: 'sailor moon calculator',
				imageUrl: '/assets/Logo3.png',
				link: 'https://sailor-moon-calculator.glitch.me/',
				description:
					'A basic on-screen calculator inspired by one of the communicators used in Sailor Moon.',
			},
			{
				title: 'synthwave chimes',
				imageUrl: '/assets/Logo14.png',
				link: 'https://synthwave-chimes.glitch.me/',
				description:
					'A digital synth chime that blends shapes with interactive sound.',
			},
			{
				title: 'salvador dalle',
				imageUrl: '/assets/salvador.png',
				link: 'https://salvadordalle.vercel.app/',
				description: 'A surrealist AI art generator inspired by Salvador Dalí.',
			},
			{
				title: 'markie',
				imageUrl: '/assets/markie.png',
				link: 'https://markie.netlify.app/',
				description:
					'A markdown editor and previewer for creating formatted text.',
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
				title: 'Tap Rhythms',
				imageUrl: '/assets/circuit.png',
				link: 'https://months-tap-da9.craft.me/n728rE3K9pjrQx',
				description:
					'An exploration of rhythm through tap interactive electronics.',
			},
			{
				title: 'Glow Motion',
				imageUrl: '/assets/circuit.png',
				link: 'https://months-tap-da9.craft.me/glowmotion',
				description: 'Interactive light installation responding to movement.',
			},
			{
				title: 'LED Matrix Display',
				imageUrl: '/assets/circuit.png',
				link: '#',
				description: 'Programmable LED matrix for dynamic pattern displays.',
			},
			{
				title: 'Sound Reactive LEDs',
				imageUrl: '/assets/circuit.png',
				link: '#',
				description: 'LED system that responds to ambient sound.',
			},
			{
				title: 'Touch Sensors',
				imageUrl: '/assets/circuit.png',
				link: '#',
				description: 'Capacitive touch sensor experiments.',
			},
			{
				title: 'Arduino Synthesizer',
				imageUrl: '/assets/circuit.png',
				link: '#',
				description: 'DIY synthesizer built with Arduino.',
			},
		],
		text: [
			{ title: 'Text Project 1', imageUrl: '/assets/text.png', link: '#' },
			{ title: 'Text Project 2', imageUrl: '/assets/text.png', link: '#' },
			{ title: 'Text Project 3', imageUrl: '/assets/text.png', link: '#' },
			{ title: 'Text Project 4', imageUrl: '/assets/text.png', link: '#' },
			{ title: 'Text Project 5', imageUrl: '/assets/text.png', link: '#' },
			{ title: 'Text Project 6', imageUrl: '/assets/text.png', link: '#' },
		],
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
					<h2 className='section-title'>
						{activeSection.toUpperCase()} Projects
					</h2>
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
