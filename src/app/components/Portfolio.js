'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ProjectBox from '@/app/components/ProjectBox';

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const svgRef = useRef(null);
	const flowerRef = useRef(null);
	const boxRefs = {
		craft: useRef(null),
		code: useRef(null),
		design: useRef(null),
		electronics: useRef(null),
		text: useRef(null),
	};

	const [lines, setLines] = useState([]);

	const projectSections = {
		craft: [
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
				title: 'Moon Pocket',
				imageUrl: '/assets/moonpocket.png',
				link: 'https://months-tap-da9.craft.me/moonpocket',
				description:
					'A poetic connected device for tracking lunar and tidal cycles in real time.',
			},
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
	};

	useEffect(() => {
		const updateLines = () => {
			if (!svgRef.current) return;

			const flower = document.querySelector('.image-box');
			const boxes = document.querySelectorAll('.line-box');

			// Log for debugging
			console.log('Flower element:', flower);
			console.log('Box elements:', boxes);
			console.log('SVG element:', svgRef.current);

			if (!flower || boxes.length < 5) {
				console.log(
					'Missing elements - flower:',
					!!flower,
					'boxes count:',
					boxes.length
				);
				return;
			}

			const svgRect = svgRef.current.getBoundingClientRect();
			const flowerRect = flower.getBoundingClientRect();

			const centerX = flowerRect.left + flowerRect.width / 2 - svgRect.left;
			const centerY = flowerRect.top + flowerRect.height / 2 - svgRect.top;

			console.log('Center coordinates:', { centerX, centerY });

			const newLines = Array.from(boxes).map((box, index) => {
				const boxRect = box.getBoundingClientRect();
				const x = boxRect.left + boxRect.width / 2 - svgRect.left;
				const y = boxRect.top + boxRect.height / 2 - svgRect.top;

				console.log(`Box ${index} coordinates:`, { x, y });

				return { x1: centerX, y1: centerY, x2: x, y2: y };
			});

			console.log('New lines:', newLines);
			setLines(newLines);
		};

		// Add a small delay to ensure elements are rendered
		const timeout = setTimeout(updateLines, 100);

		window.addEventListener('resize', updateLines);
		window.addEventListener('load', updateLines);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', updateLines);
			window.removeEventListener('load', updateLines);
		};
	}, []);

	// Also update lines when active section changes
	useEffect(() => {
		const updateLines = () => {
			if (!svgRef.current) return;

			const flower = document.querySelector('.image-box');
			const flowerNetwork = document.querySelector('.flower-network');
			const boxes = flowerNetwork?.querySelectorAll('.line-box');

			if (!flower || !boxes || boxes.length !== 5) return;

			const svgRect = svgRef.current.getBoundingClientRect();
			const flowerRect = flower.getBoundingClientRect();

			const centerX = flowerRect.left + flowerRect.width / 2 - svgRect.left;
			const centerY = flowerRect.top + flowerRect.height / 2 - svgRect.top;

			const newLines = Array.from(boxes).map((box) => {
				const boxRect = box.getBoundingClientRect();
				const x = boxRect.left + boxRect.width / 2 - svgRect.left;
				const y = boxRect.top + boxRect.height / 2 - svgRect.top;
				return { x1: centerX, y1: centerY, x2: x, y2: y };
			});

			setLines(newLines);
		};

		const timeout = setTimeout(updateLines, 100);

		window.addEventListener('resize', updateLines);
		window.addEventListener('load', updateLines);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', updateLines);
			window.removeEventListener('load', updateLines);
		};
	}, []);

	const handleBoxClick = (section) => {
		if (activeSection === section) {
			setIsDrawerOpen(!isDrawerOpen);
		} else {
			setActiveSection(section);
			setIsDrawerOpen(true);
		}
	};

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false);
	};

	return (
		<div className='page-container'>
			<div className='main-section fixed'>
				<div className='flower-network'>
					<svg
						className='connector-lines'
						ref={svgRef}
						xmlns='http://www.w3.org/2000/svg'
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: 0,
							left: 0,
							zIndex: 1,
							pointerEvents: 'none',
						}}
					>
						{lines.map((line, index) => (
							<line
								key={index}
								x1={line.x1}
								y1={line.y1}
								x2={line.x2}
								y2={line.y2}
								stroke='#333'
								strokeWidth='2'
								strokeOpacity='0.7'
							/>
						))}
					</svg>

					<div className='image-box' ref={flowerRef}>
						<div style={{ position: 'relative', width: 500, height: 500 }}>
							<Image
								src='/assets/flower.png'
								alt='flower shape'
								fill
								style={{ objectFit: 'contain' }}
								className='flower-image'
								priority
							/>
						</div>
					</div>

					<div
						className={`line-box box1 ${
							activeSection === 'craft' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('craft')}
						ref={boxRefs.craft}
					>
						<Image
							src='/assets/tools.png'
							alt='craft icon'
							width={60}
							height={60}
							style={{ background: 'transparent' }}
						/>
						<span className='box-text'>craft</span>
					</div>
					<div
						className={`line-box box2 ${
							activeSection === 'code' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('code')}
						ref={boxRefs.code}
					>
						<Image
							src='/assets/code.png'
							alt='code icon'
							width={60}
							height={60}
							style={{ background: 'transparent' }}
						/>
						<span className='box-text'>code</span>
					</div>
					<div
						className={`line-box box3 ${
							activeSection === 'design' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('design')}
						ref={boxRefs.design}
					>
						<Image
							src='/assets/design.png'
							alt='design icon'
							width={60}
							height={60}
							style={{ background: 'transparent' }}
						/>
						<span className='box-text'>design</span>
					</div>
					<div
						className={`line-box box4 ${
							activeSection === 'electronics' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('electronics')}
						ref={boxRefs.electronics}
					>
						<Image
							src='/assets/circuit.png'
							alt='electronics icon'
							width={60}
							height={60}
							style={{ background: 'transparent' }}
						/>
						<span className='box-text'>electronics</span>
					</div>
					<div
						className={`line-box box5 ${
							activeSection === 'text' ? 'active' : ''
						}`}
						onClick={() => handleBoxClick('text')}
						ref={boxRefs.text}
					>
						<Image
							src='/assets/text.png'
							alt='text icon'
							width={60}
							height={60}
							style={{ background: 'transparent' }}
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
					<div className='projects-scroll-container'>
						<div className='projects-drawer-grid'>
							{projectSections[activeSection].map((project, index) => (
								<ProjectBox key={index} {...project} category={activeSection} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
