'use client';

import React from 'react';
import MobileBack from '@/app/components/MobileBack';

export default function CVPage() {
	return (
		<div className='cv-page main-content'>
			<MobileBack />
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
								ml5.js researcher, speech-to-text — ml5.js
							</div>
							<span className='cv-date'>sep 2025 – present</span>
						</div>
						<p className='cv-summary'>
							researching and prototyping speech-to-text models with the goal of
							integrating accessible, browser-based transcription into
							transformer.js.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> javascript, web-based
							machine learning implementation, research, speech recognition
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								graduate assistant, creative computing (nyu ima)
							</div>
							<span className='cv-date'>sep 2025 - present</span>
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
							<span className='cv-date'>jun 2025 – aug 2025</span>
						</div>
						<p className='cv-summary'>
							contributing to the growth of ml5.js, an open-source,
							beginner-friendly machine learning library for the web, through
							technical development, creative ml research, documentation, and
							community engagement.
						</p>
						<p className='cv-skills'>
							<span className='label'>skills:</span> gatsby, docsify,
							javascript, user interface design, research
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

			{/* creative explorations */}
			<section className='cv-section creative-explorations'>
				<h2 className='cv-heading'>creative explorations</h2>
				<div className='cv-list'>
					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								UN Open Source Week Hackathon — “Ahead of the Storm” Challenge
							</div>
							<span className='cv-date'>jun 2025</span>
						</div>
						<div className='cv-org'>
							united nations headquarters — new york, ny
						</div>
						<p className='cv-summary'>
							participated in a global hackathon focused on open-source
							solutions for child-centered climate emergency response, advancing
							un sustainable development goals through geospatial data and
							collaborative innovation.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								volt couture: wearables + e-textiles “open mic”
							</div>
							<span className='cv-date'>may 2025</span>
						</div>
						<div className='cv-org'>nyc resistor — brooklyn, ny</div>
						<p className='cv-summary'>
							presented <i>static chic</i>, a 3d-printed inductive handbag that
							wirelessly lights up embedded leds. part of an open mic curated by
							kari love and liza stark.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								rejects: a benefit auction for culturehub
							</div>
							<span className='cv-date'>may 2025</span>
						</div>
						<div className='cv-org'>culturehub — new york, ny</div>
						<p className='cv-summary'>
							contributed three oddities — <i>gothic teacrypt</i>,{' '}
							<i>orbit offtrack</i>, and <i>pixel shell</i> — to a curated
							auction of discarded prototypes celebrating the charm of
							unfinished ideas and studio leftovers.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								e-textile swatch open call — radiant fibers exhibition
							</div>
							<span className='cv-date'>jan – mar 2025</span>
						</div>
						<div className='cv-org'>nyu clive davis gallery — brooklyn, ny</div>
						<p className='cv-summary'>
							accepted into radiant fibers for <i>soft glitch</i>, an e-textile
							swatch combining punch needle, chaotic yarns, and
							electroluminescent thread to explore digital disruption through
							texture and light.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>mit reality hack 2025</div>
							<span className='cv-date'>jan 2025</span>
						</div>
						<div className='cv-org'>
							massachusetts institute of technology — cambridge, ma
						</div>
						<p className='cv-summary'>
							implemented sound and haptic feedback for <i>hangarpro vr</i>, a
							training simulation powered by cognitive 3d. designed to enhance
							pre-flight safety through visual interaction analysis for
							aerospace exploration.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								ecothreads: sustainable smart textiles workshop
							</div>
							<span className='cv-date'>oct 2024</span>
						</div>
						<div className='cv-org'>hybrid body lab — cornell tech</div>
						<p className='cv-summary'>
							created biodegradable thermo-chromic conductive threads with a diy
							wet spinning tool, exploring eco-conscious approaches in e-textile
							design.
						</p>
					</div>

					<div className='cv-item'>
						<div className='cv-meta'>
							<div className='cv-title'>
								noisy speakers: crafting fabric speakers
							</div>
							<span className='cv-date'>sep 2024</span>
						</div>
						<div className='cv-org'>nyc resistor — brooklyn, ny</div>
						<p className='cv-summary'>
							crafted fabric-based speakers using conductive threads, sensors,
							and an amplifier, blending soft materials with sound.
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
							<strong>affiliations:</strong> ml5.js (web/community/research) ·
							equitable syllabus project (web/research) · adjacent (editor/web)
							· nyu ability project: making fashion accessible
							(design/fabrication, hardware/software/tool hacking)
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
						<div className='cv-activities'>
							<strong>activities:</strong> tech talent pipeline (ttp), women in
							computer science (wics), google developer group (gdg)
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
					blending engineering with art; web dev/design, experimental
					interfaces; textile-based media; wearable + soft tech; speculative
					objects; open source development; archival systems.
				</p>
			</section>
		</div>
	);
}
