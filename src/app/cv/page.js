'use client';

import React from 'react';

export default function CVPage() {
	return (
		<div className='cv-page main-content'>
			{/* about */}
			<section className='cv-section about'>
				<h1 className='cv-heading'>tldr; about me</h1>
				<p className='cv-summary'>
					i am a creative technologist who merges engineering with art,
					designing experimental interfaces, wearable/soft technologies, and
					speculative interactive objects. my work explores inclusive tech
					practices, open-source development, and creative research — with the
					goal of expanding access to creative computing and enabling
					expressive, thoughtful interaction.
				</p>
			</section>

			{/* experience */}
			<section className='cv-section experience'>
				<h2 className='cv-heading'>experience</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								incoming graduate assistant — creative computing (nyu itp/ima)
							</div>
							<span className='cv-date'>starting sep 2025</span>
						</div>
						<p className='cv-summary'>
							supporting professor dan shiffman in teaching and mentoring for
							the creative computing course, a new minor open to all nyu
							students, offering office hours, assisting in class workshops, and
							providing feedback on assignments.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> teaching, mentoring,
							technical guidance, feedback
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								open source contributor, web development & community — ml5.js
							</div>
							<span className='cv-date'>jun 2025 – present</span>
						</div>
						<p className='cv-summary'>
							contributing to the growth of ml5.js, an open-source,
							beginner-friendly machine learning library for the web, through
							technical development, creative ml research, documentation, and
							community engagement.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> gatsby, docsify, machine
							learning, user interface design, research
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								web application developer & designer — useless machines archive
							</div>
							<span className='cv-date'>mar 2025 – present</span>
						</div>
						<p className='cv-summary'>
							leading development and design of a digital archive for nyu
							assistant arts professor blair simmons’s <i>useless machines</i>{' '}
							course, blending speculative design with front-end development,
							ui/ux, and live are.na api integration; deployed on vercel.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> javascript, figma, ux/ui
							design, api integration, vercel
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								web developer — equitable syllabus project (nyu itp/ima)
							</div>
							<span className='cv-date'>nov 2024 – present</span>
						</div>
						<p className='cv-summary'>
							designing and developing a platform to support faculty in creating
							accessible, inclusive syllabi, with a focus on usability and
							visual design.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> react.js, figma,
							accessibility
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								research assistant — computational text (nyu itp/ima)
							</div>
							<span className='cv-date'>may – aug 2025</span>
						</div>
						<p className='cv-summary'>
							assisted professor dan shiffman in his course{' '}
							<i>computational text</i>
							(formerly programming a to z), leading technical research and
							developing resources for equitable pedagogy with a focus on ml
							models, and accessibility.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> machine learning, syllabus
							design, research
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>camp counselor — itp camp</div>
							<span className='cv-date'>jun – jul 2025</span>
						</div>
						<p className='cv-summary'>
							supported 150+ participants at nyu’s itp camp by providing
							hands-on technical help, running workshops, coordinating events,
							and producing the final showcase.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> community support, event
							coordination, technical assistance
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								software engineer & creative technologist intern — floreo labs
							</div>
							<span className='cv-date'>jan – may 2020</span>
						</div>
						<p className='cv-summary'>
							developed responsive front-end applications in react.js, designed
							ui/ux prototypes in adobe xd, and contributed to mobile
							development projects while managing agile workflows and producing
							technical documentation.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> react.js, mobile
							development, ui/ux design, agile project management
						</p>
					</div>
				</div>
			</section>

			{/* education */}
			<section className='cv-section education'>
				<h2 className='cv-heading'>education</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								mps, interactive telecommunications program (itp)
							</div>
							<span className='cv-date'>expected may 2026</span>
						</div>
						<div className='cv-org'>
							new york university — tisch school of the arts
						</div>
						<div className='cv-affiliations'>
							<strong>affiliations:</strong> adjacent (editor/web) · equitable
							syllabus project (web/research) · ml5.js (web/community/research)
						</div>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								experimental programming (creative coding & design)
							</div>
							<span className='cv-date'>jun 2022 – mar 2025</span>
						</div>
						<div className='cv-org'>
							school for poetic computation — new york (remote)
						</div>
						<p className='cv-skills'>
							<span className='label'>coursework:</span> gift interfaces;
							httpoetics; the musical web; algorithmic botany; expressive game
							design
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>bs, computer science</div>
							<span className='cv-date'>dec 2020</span>
						</div>
						<div className='cv-org'>
							city university of new york — lehman college
						</div>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								software engineering residency — cuny 2x tech / nyc tech talent
								pipeline
							</div>
							<span className='cv-date'>nov 2019 – may 2020</span>
						</div>
						<div className='cv-org'>
							city university of new york — lehman college
						</div>
						<p className='cv-summary'>
							4-week web development and professional skills bootcamp.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								bba, business administration (international business) · minor in
								journalism
							</div>
							<span className='cv-date'>sep 2012</span>
						</div>
						<div className='cv-org'>
							city university of new york — lehman college
						</div>
					</div>
				</div>
			</section>

			{/* technologies */}
			<section className='cv-section technologies'>
				<h2 className='cv-heading'>technologies</h2>
				<p className='cv-summary'>
					front-end / web (javascript, react, next.js, html/css) · ux/ui ·
					interaction design · git/github · creative coding (p5.js, ml5.js) ·
					data (sql, data analysis) · physical computing (arduino, raspberry pi,
					adafruit/sparkfun) · fabrication (laser cutting, 3d modeling &
					printing)
				</p>
			</section>

			{/* tools & platforms */}
			<section className='cv-section tools'>
				<h2 className='cv-heading'>tools & platforms</h2>
				<p className='cv-summary'>
					vs code · figma · arduino ide · fritzing · warp terminal · obsidian ·
					notion · craft docs · wordpress · adobe creative suite (illustrator,
					photoshop, xd, fresco)
				</p>
			</section>

			{/* certifications */}
			<section className='cv-section certifications'>
				<h2>certifications</h2>
				<ul className='certifications-list'>
					<li>
						artificial intelligence & machine learning — samsung innovation
						campus (2022–2023)
					</li>
					<li>
						human computer interaction — interaction design foundation (2022)
					</li>
					<li>google ux design — coursera (2021)</li>
				</ul>
			</section>

			{/* interests */}
			<section className='cv-section interests'>
				<h2 className='cv-heading'>interests</h2>
				<p className='cv-summary'>
					blending engineering with art; experimental interfaces; textile-based
					media; wearable + soft tech; speculative objects; open source
					development; archival systems.
				</p>
			</section>
		</div>
	);
}
