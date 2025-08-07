import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
	return (
		<div className='about-page' id='about'>
			<div className='bio-content'>
				<div className='avatar-container'>
					<Image
						src='/assets/avatar.png'
						alt='avatar illustration'
						width={600}
						height={600}
						className='avatar'
						priority
					/>
				</div>

				<h1 className='typewriter'>
					<span className='typing-text'>Hello, World</span>
					<Image
						src='/assets/flower-sm.png'
						alt='flower shape logo'
						width={20}
						height={20}
						className='flower-image'
						priority
					/>
				</h1>

				<p>
					I'm Yafira (YAH-fee-rah) — a programmer, designer, and creative
					technologist based in NYC. I build at the intersection of code,
					design, and human interaction — crafting digital and physical
					experiences that are as thoughtful as they are functional.
				</p>
				<p>
					Currently, I'm a graduate student at NYU's Interactive
					Telecommunications Program (ITP), where I experiment with creative
					coding, physical computing, and interaction design. My work lives at
					the expressive overlap of technology and art — spanning front-end
					development, UX/UI/product design, and playful, tactile computing.
				</p>
				<p>
					With a background in computer science and a lifelong passion for
					aesthetics, I like to think of myself as a{' '}
					<strong>design engineer</strong> — someone who codes with intention
					and designs with care. My focus is on building intuitive, meaningful
					interfaces and experiences that empower users, challenge norms, and
					embrace simplicity. I'm deeply inspired by Dieter Rams'{' '}
					<em>Ten Principles of Good Design</em> and John Maeda's{' '}
					<em>Laws of Simplicity</em>, and I believe that <em>less</em> is often{' '}
					<em>more</em>.
				</p>
				<p>
					Before ITP, I earned my BSc in Computer Science at CUNY — but my path
					to tech wasn’t straightforward. I originally studied Business
					Administration with a minor in journalism, but just before graduating,
					I realized business wasn’t my calling. I felt lost and unsure of my
					direction. Since I’d always been fascinated by electricity, physics,
					and how things work, I decided to go back to school for electrical
					engineering. But everything changed when I took my first programming
					class — something clicked. I fell in love with the logic, creativity,
					and problem-solving that code offered, and eventually switched my
					major to computer science. <br></br>
					<br></br>My journey into tech has been shaped by self-discovery,
					curiosity, and a childhood love for customizing MySpace pages, playing
					computer games, and tinkering with electronics. Over time, I realized
					that technology could be my creative medium — a way to make useful,
					joyful, and meaningful things.
				</p>

				<h2>whoami? </h2>
				<p>
					I'm a visual learner, creative thinker, and detail-oriented developer
					who thrives in imaginative environments. Whether designing interfaces
					or soldering circuits, I care deeply about clarity, craft, and user
					experience. I'm passionate about creating tools, artifacts, and
					systems that translate digital ideas into interactive, often physical,
					inventions.
				</p>

				<h2>why i compute</h2>
				<p>
					Programming is my paintbrush — a way to solve puzzles, express ideas,
					and build things that matter. I see code as craft: a practice of
					shaping the world around me in practical, poetic ways. I code because
					it challenges me, and because it gives form to imagination.
				</p>

				<h2>feeling through form</h2>
				<p>
					Design is where I feel most at home. It's where logic and emotion meet
					— the art of interface at its most meaningful. I've always been drawn
					to the quiet power of arrangement, detail, and color — and how good
					design can turn the ordinary into something magical.
				</p>
				<h2>tea & terminal</h2>
				<p>
					These days, you'll find me coding interfaces, designing playful
					experiences, learning new tools, and always making something. I'm
					seeking opportunities in web development and product/UI design —
					especially those that merge art, code, and engineering. I'm also drawn
					to projects involving e-textiles, physical computing, and tactile
					interaction — anywhere technology meets texture, gesture, or form. In
					my orbit: you'll often find me taking photos, sketching ideas,
					experimenting in the kitchen, reviewing snacks at{' '}
					<a href='https://snax.blog' target='_blank' rel='noopener noreferrer'>
						snax
					</a>
					, playing chess, building odd prototypes, or tending to my side
					project:{' '}
					<a
						href='https://instagram.com/electrocutelab'
						target='_blank'
						rel='noopener noreferrer'
					>
						@electrocutelab
					</a>{' '}
					☺
				</p>
			</div>
		</div>
	);
}
