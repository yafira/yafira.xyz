'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ProjectBox from '@/app/components/ProjectBox';

export default function FlowerNetwork({ projectSections }) {
	const [activeSection, setActiveSection] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [lines, setLines] = useState([]);
	const svgRef = useRef(null);
	const flowerRef = useRef(null);

	// line drawing logic (your existing code)...
	useEffect(() => {
		const updateLines = () => {
			if (!svgRef.current) return;
			const flower = document.querySelector('.image-box');
			const boxes = document.querySelectorAll('.line-box');
			if (!flower || boxes.length < 5) return;

			const svgRect = svgRef.current.getBoundingClientRect();
			const flowerRect = flower.getBoundingClientRect();
			const centerX = flowerRect.left + flowerRect.width / 2 - svgRect.left;
			const centerY = flowerRect.top + flowerRect.height / 2 - svgRect.top;

			const newLines = Array.from(boxes).map((box) => {
				const r = box.getBoundingClientRect();
				return {
					x1: centerX,
					y1: centerY,
					x2: r.left + r.width / 2 - svgRect.left,
					y2: r.top + r.height / 2 - svgRect.top,
				};
			});
			setLines(newLines);
		};

		const t = setTimeout(updateLines, 100);
		window.addEventListener('resize', updateLines);
		window.addEventListener('load', updateLines);
		return () => {
			clearTimeout(t);
			window.removeEventListener('resize', updateLines);
			window.removeEventListener('load', updateLines);
		};
	}, []);

	const handleBoxClick = (section) => {
		if (activeSection === section) setIsDrawerOpen(!isDrawerOpen);
		else {
			setActiveSection(section);
			setIsDrawerOpen(true);
		}
	};

	return (
		<div className='page-container'>
			<div className='main-section fixed'>
				<div className='flower-network'>
					<svg className='connector-lines' ref={svgRef}>
						{lines.map((ln, i) => (
							<line
								key={i}
								{...ln}
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

					{/* 5 category nodes */}
					{['code', 'design', 'electronics', 'craft', 'text'].map((sec, i) => (
						<div
							key={sec}
							className={`line-box box${i + 1} ${
								activeSection === sec ? 'active' : ''
							}`}
							onClick={() => handleBoxClick(sec)}
						>
							<Image
								src={`/assets/${sec === 'electronics' ? 'circuit' : sec}.png`}
								alt={`${sec} icon`}
								width={60}
								height={60}
								style={{ background: 'transparent' }}
							/>
							<span className='box-text'>{sec}</span>
						</div>
					))}
				</div>
			</div>

			{activeSection && (
				<div
					className={`projects-drawer ${isDrawerOpen ? 'open' : ''}`}
					data-section={activeSection}
				>
					<button
						className='drawer-close'
						onClick={() => setIsDrawerOpen(false)}
					>
						<ChevronDown />
					</button>
					<div className='projects-scroll-container'>
						<div className='projects-drawer-grid'>
							{projectSections[activeSection].map((p, i) => (
								<ProjectBox key={i} {...p} category={activeSection} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
