import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
	return (
		<div className='about-page' id='about'>
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
				I'm <strong>Yafira</strong> — a programmer, designer, and creative
				technologist based in NYC. I build at the intersection of code, design,
				and human interaction — crafting digital and physical experiences that
				are as thoughtful as they are functional.
			</p>
			<p>
				Currently, I'm a graduate student at NYU's Interactive
				Telecommunications Program (ITP), where I experiment with creative
				coding, physical computing, and interaction design. My work lives at the
				expressive overlap of technology and art — spanning front-end
				development, UI/product design, and playful, tactile computing.
			</p>
			<p>
				With a background in computer science and a lifelong passion for
				aesthetics, I like to think of myself as a{' '}
				<strong>design engineer</strong> — someone who codes with intention and
				designs with care. My focus is on building intuitive, meaningful
				interfaces and experiences that empower users, challenge norms, and
				embrace simplicity. I'm deeply inspired by Dieter Rams'{' '}
				<em>Ten Principles of Good Design</em> and John Maeda's{' '}
				<em>Laws of Simplicity</em>, and I believe that <em>less</em> is often{' '}
				<em>more</em>.
			</p>
			<p>
				Before ITP, I earned my BSc in Computer Science at CUNY and a BBA in
				Business Administration with a minor in journalism. My journey into tech
				wasn't linear — it was sparked by self-discovery, curiosity, and a
				childhood love for customizing MySpace pages, playing computer games,
				and tinkering with electronics. I eventually realized that technology
				could be my creative medium — a way to make useful, joyful, and
				impactful things.
			</p>

			<h2>whoami? </h2>
			<p>
				I'm a visual learner, creative thinker, and detail-oriented developer
				who thrives in imaginative environments. Whether designing interfaces or
				soldering circuits, I care deeply about clarity, beauty, and user
				experience. I'm passionate about creating tools, artifacts, and systems
				that translate digital ideas into interactive, often physical,
				inventions.
			</p>

			<h2>Why I Compute</h2>
			<p>
				Programming is my paintbrush — a way to solve puzzles, express ideas,
				and build things that matter. I see code as craft: a practice of shaping
				the world around me in practical, poetic ways. I code because it
				challenges me, and because it gives form to imagination.
			</p>

			<h2>Feeling Through Form</h2>
			<p>
				Design is where I feel most at home. It's where logic and emotion meet —
				the art of interface at its most meaningful. I've always been drawn to
				the quiet power of arrangement, detail, and color — and how good design
				can turn the ordinary into something magical.
			</p>
			<h2>Tea & Terminal</h2>
			<p>
				These days, you'll find me coding interfaces, designing playful
				experiences, learning new tools, and always making something. I'm
				seeking opportunities in web development and product/UI design — and I'm
				especially interested in projects that merge art and engineering. In my
				orbit: you'll often find me taking photos, sketching ideas,
				experimenting in the kitchen, playing chess, or tending to my side
				project: :{' '}
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
	);
}
