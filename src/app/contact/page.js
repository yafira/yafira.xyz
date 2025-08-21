'use client';

import { Github, Linkedin, Mail, Dribbble, Figma } from 'lucide-react';

export default function ContactPage() {
	return (
		<div className='contact-page main-content'>
			<section className='contact-hero'>
				<h1 className='contact-title'>contact</h1>
				<p className='contact-blurb'>
					want to collaborate, chat about creative tech, say hi? or play chess ☺
					reach me by email or any of the links below. thanks for stopping by! ✿
				</p>

				<a
					className='contact-button'
					href='mailto:yfr.mrtnz@gmail.com'
					aria-label='send me an email'
				>
					<Mail size={18} aria-hidden='true' />
					<span>email me</span>
				</a>
			</section>

			<section id='contact' className='contact-links bg-potpourri'>
				<ul className='social-links'>
					<li>
						<a
							id='profile-link1'
							aria-label='link to github profile'
							href='https://github.com/Yafira'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<Github aria-hidden='true' />
							<span>github</span>
						</a>
					</li>

					<li>
						<a
							id='profile-link2'
							aria-label='link to figma profile'
							href='https://www.figma.com/@electrocute'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<Figma aria-hidden='true' />
							<span>figma</span>
						</a>
					</li>

					<li>
						<a
							id='profile-link3'
							aria-label='link to dribbble profile'
							href='https://dribbble.com/yafira'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<Dribbble aria-hidden='true' />
							<span>dribbble</span>
						</a>
					</li>

					<li>
						<a
							id='profile-link4'
							aria-label='link to email'
							href='mailto:yfr.mrtnz@gmail.com'
							className='social-link'
						>
							<Mail aria-hidden='true' />
							<span>email</span>
						</a>
					</li>

					<li>
						<a
							id='profile-link5'
							aria-label='link to linkedin profile'
							href='https://www.linkedin.com/in/yafira/'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<Linkedin aria-hidden='true' />
							<span>linkedin</span>
						</a>
					</li>

					<li>
						<a
							id='profile-link6'
							aria-label='link to chess.com profile'
							href='https://www.chess.com/electr0cute'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<span className='chess-icon'>♞</span>
							<span>chess</span>
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}
