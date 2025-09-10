'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, Instagram, Figma } from 'lucide-react';
import { FaChessPawn } from 'react-icons/fa';
import MobileBack from '@/app/components/MobileBack';

export default function ContactPage() {
	return (
		<div className='contact-page main-content'>
			<MobileBack />
			<section className='contact-hero'>
				<h1 className='contact-title'>contact</h1>
				{/* flower image under the title */}
				<div className='flower-wrapper'>
					<Image
						src='/assets/flower-network-logo.png'
						alt='flower'
						width={60}
						height={60}
						className='flower-icon'
					/>
				</div>
				<p className='contact-blurb'>
					want to collaborate, chat about creative tech, say hi or play chess?
					ツ <br></br>
					reach me by email or any of the links below. thanks for stopping by! ♡
					꣑ৎ
				</p>

				<a
					className='contact-button'
					href='mailto:ym3317@nyu.edu'
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
							aria-label='link to are.na profile'
							href='https://www.are.na/yafira'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<Image
								src='/assets/arena-logo.png' // save the Are.na logo here
								alt='are.na'
								width={26}
								height={14}
							/>
							<span>are.na</span>
						</a>
					</li>

					<li>
						<a
							id='profile-link4'
							aria-label='link to instagram profile'
							href='https://www.instagram.com/electrocutelab/'
							className='social-link'
						>
							<Instagram aria-hidden='true' />
							<span>@electrocutelab</span>
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
							href='https://www.chess.com/member/electr0cute'
							target='_blank'
							rel='noopener noreferrer'
							className='social-link'
						>
							<FaChessPawn size={18} />
							<span>chess</span>
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}
