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
					{' '}
					For as long as I can remember, I have lived in the orbit of
					creativity. As a child, I filled notebooks with drawings and
					scrapbooks with magazine clippings, assembling mood boards before I
					even knew the term existed. I invented with cardboard and scraps,
					finding joy in self-expression through art and storytelling. In high
					school, this passion expanded: a marketing internship I tried on a
					whim made me consider business as a future path, while winning a
					writing contest that brought me on a short trip to London sparked my
					love for writing and travel. For a time, I dreamed of creating an
					international print magazine — a life of creative direction,
					storytelling, visual design, and exploration.{' '}
				</p>{' '}
				<p>
					{' '}
					That dream eventually led me to pursue a BBA, but I soon realized the
					spark I longed for was missing. Business offered structure, but not
					the creativity that had always driven me. After graduating, it took
					time — and uncertainty — to recognize what I truly wanted. Drawn by my
					fascination with electricity, physics, and the hidden mechanics of how
					things work, I returned to school for electrical engineering. Entering
					a field where women were underrepresented felt daunting, but I was
					determined to explore it fully. Everything shifted when I took my
					first programming class: something clicked. I fell in love with the
					logic, creativity, and problem-solving of code, and shortly after, I
					switched my major to computer science.{' '}
				</p>
				<p>
					Looking back, my journey into tech has been one of self-discovery and
					curiosity, rooted in the creative spark that shaped me since
					childhood. From customizing MySpace pages and playing computer games
					to tinkering with electronics, I began to see technology as my medium
					— a way to build tools, stories, and experiences that feel both useful
					and joyful. And what better way to combine all these interests than
					finding my place at ITP, where creativity and computation speak the
					same language.
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
