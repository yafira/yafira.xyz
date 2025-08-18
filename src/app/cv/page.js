'use client';

import React from 'react';

export default function CVPage() {
	return (
		<div className='cv-page main-content'>
			{/* about */}
			<section className='cv-section'>
				<h1 className='cv-heading'>Yafira Martinez</h1>
				<p>
					i am a creative technologist blending engineering with art through
					experimental interfaces, wearable + soft technologies, and speculative
					interactive objects. my practice explores inclusive tech practices,
					open source development, and creative research. my goal is to build
					tools and platforms that expand access to creative computing and
					support expressive, thoughtful interaction.
				</p>
			</section>

			{/* experience */}
			<section className='cv-section'>
				<h2 className='cv-heading'>experience</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						<strong>
							incoming graduate assistant — creative computing (nyu itp/ima)
						</strong>
						<span className='cv-date'>starting sep 2025</span>
						<p>
							✿ supporting professor dan shiffman in teaching and mentoring for
							the creative computing course, a new minor open to all nyu
							students. <br />
							offering office hours, assisting in class workshops, and providing
							feedback on assignments. <br />
							<span className='skills-line'>
								<b>skills:</b> teaching, mentoring, technical guidance, feedback
							</span>
						</p>
					</div>

					<div className='cv-item'>
						<strong>
							machine learning researcher & web contributor — ml5.js
						</strong>
						<span className='cv-date'>jun 2025 – present</span>
						<p>
							✿ contributing to the growth of ml5.js by building creative ml
							features, supporting the website, and engaging the open-source
							community through development, documentation, and research.
						</p>
						<p>
							<b>skills:</b> gatsby, docsify, ml5.js
						</p>
					</div>

					<div className='cv-item'>
						<strong>
							research assistant — computational text (nyu itp/ima)
						</strong>
						<span className='cv-date'>may 2025 – present</span>
						<p>
							✿ assisting professor dan shiffman by leading technical research
							and developing resources for equitable computational text
							pedagogy, focusing on ml models and accessibility.
						</p>
						<p>
							<b>skills:</b> machine learning, syllabus design, research
						</p>
					</div>

					<div className='cv-item'>
						<strong>
							web application developer & designer — useless machines archive
						</strong>
						<span className='cv-date'>mar 2025 – present</span>
						<p>
							✿ lead developer/designer building a digital archive through
							full-stack development, ui/ux design, and iterative prototyping
							for blair simmons useless machine course at NYU IMA.
						</p>
						<p>
							<b>skills:</b> react.js, next.js, full-stack development, design
						</p>
					</div>

					<div className='cv-item'>
						<strong>
							web developer — equitable syllabus project (nyu itp/ima)
						</strong>
						<span className='cv-date'>nov 2024 – present</span>
						<p>
							✿ designing and developing a platform to support faculty in
							creating accessible, inclusive syllabi, with a focus on usability
							and visual design.
						</p>
						<p>
							<b>skills:</b> react.js, figma, accessibility
						</p>
					</div>

					<div className='cv-item'>
						<strong>camp counselor — itp camp</strong>
						<span className='cv-date'>jun – jul 2025</span>
						<p>
							✿ supported 150+ participants at nyu’s itp camp by providing
							hands-on technical help, running workshops, coordinating events,
							and producing the final showcase.
						</p>
						<p>
							<b>skills:</b> community support, event coordination, technical
							assistance
						</p>
					</div>
				</div>
			</section>

			{/* education */}
			<section className='cv-section'>
				<h2 className='cv-heading'>education</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						<strong>mps, interactive telecommunications program (itp)</strong>
						<span>new york university — tisch school of the arts</span>
						<span className='cv-date'>expected may 2026</span>
					</div>
					<div className='cv-item'>
						<strong>bs, computer science</strong>
						<span>city university of new york — lehman college</span>
						<span className='cv-date'>dec 2020</span>
					</div>
					<div className='cv-item'>
						<strong>
							bba, business administration (international business) · minor in
							journalism
						</strong>
						<span>city university of new york — lehman college</span>
						<span className='cv-date'>sep 2012</span>
					</div>
				</div>
			</section>

			{/* technical skills */}
			<section className='cv-section'>
				<h2 className='cv-heading'>technical skills</h2>
				<p>
					front-end/web development · ux/ui design · interaction design ·
					creative coding · data analysis · 3d modeling/printing · physical
					computing
				</p>
			</section>

			{/* tools & platforms */}
			<section className='cv-section'>
				<h2 className='cv-heading'>tools & platforms</h2>
				<p>
					vs code · figma · git/github · arduino ide · fritzing · adobe suite ·
					warp terminal · obsidian · notion · wordpress
				</p>
			</section>

			{/* certifications */}
			<section className='cv-section'>
				<h2 className='cv-heading'>certifications</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						artificial intelligence — samsung innovation campus (2022–2023)
					</div>
					<div className='cv-item'>
						human computer interaction — interaction design foundation (2022)
					</div>
					<div className='cv-item'>google ux design — coursera (2021)</div>
				</div>
			</section>

			{/* interests */}
			<section className='cv-section'>
				<h2 className='cv-heading'>interests</h2>
				<p>
					blending engineering with art; experimental interfaces; textile-based
					media; wearable + soft tech; speculative objects; open source
					development; archival systems.
				</p>
			</section>

			{/* workshops */}
			<section className='cv-section'>
				<h2 className='cv-heading'>workshops & creative explorations</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						un open source week hackathon — united nations (june 2025)
					</div>
					<div className='cv-item'>
						volt couture: wearables + e-textiles open mic (may 2025)
					</div>
					<div className='cv-item'>culturehub rejects auction (may 2025)</div>
					<div className='cv-item'>
						radiant fibers exhibition — nyu (jan–mar 2025)
					</div>
					<div className='cv-item'>mit reality hack (jan 2025)</div>
					<div className='cv-item'>
						ecothreads workshop — cornell tech (oct 2024)
					</div>
					<div className='cv-item'>
						fabric speakers workshop — nyc resistor (sep 2024)
					</div>
				</div>
			</section>
		</div>
	);
}
