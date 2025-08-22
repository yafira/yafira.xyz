import '@/app/styles/globals.css';

export const projectSections = {
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
			description: 'A cute tech tools blog, Next.js and Notion API.',
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
			title: 'Snax',
			imageUrl: '/assets/snax.png',
			link: 'https://www.snax.blog/',
			description: 'Vegan snack reviews blog.',
		},
		{
			title: 'Write Mind',
			imageUrl: '/assets/write-mind.png',
			link: 'https://the-write-mind.vercel.app/',
			description: 'Simple writing tool exploring creative cognition.',
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
			description: 'Markdown editor and preview app built with React.',
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
			description: 'A snack ordering app for a movie theater.',
			links: {
				prototype:
					'https://www.figma.com/proto/oTPH8BW7owaY91IVOlR6KC/Cosmic-Snax?page-id=248%3A2311&node-id=256%3A1892&viewport=245%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=256%3A1892',
				casestudy: 'assets/Cosmic Snax - Case study.pdf',
			},
		},
		{
			title: 'Seedling',
			imageUrl: '/assets/seedling.gif',
			description: 'A tool to help people develop their creativity.',
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
			description: 'A custom bicycle web shop.',
			links: {
				prototype:
					'https://www.figma.com/proto/GdO2Bto4BnWhiwRuo6coS1/bDazzled?node-id=38%3A5020&starting-point-node-id=38%3A5020',
				casestudy: 'assets/bDazzled - Case study.pdf',
			},
		},
		{
			title: 'Kawaii ML',
			imageUrl: '/assets/kawaii-ml.png',
			link: 'https://www.figma.com/community/file/1282166884816539041',
			description: 'Cute digital card deck exploring machine learning.',
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
				'Indoor air quality monitor and dashboard built with Arduino and React.',
		},
		{
			title: 'Glowmotion',
			imageUrl: '/assets/glow.gif',
			link: 'https://electrocuteitp.wordpress.com/2024/12/19/glowmotion/',
			description: 'Gesture-controlled interactive light.',
		},
		{
			title: 'Custom LEDs',
			imageUrl: '/assets/leds.jpg',
			link: 'https://months-tap-da9.craft.me/UPIseOWDQQ2AAx',
			description: 'Custom LEDs experimenting with resin.',
		},
		{
			title: 'Electrojute',
			imageUrl: '/assets/electrojute.png',
			link: 'https://months-tap-da9.craft.me/n728rE3K9pjrQx',
			description:
				'E-textile tote bag exploring jute fiber and conductive materials.',
		},
	],
	craft: [
		{
			title: 'Past, Pastry, Future',
			imageUrl: '/assets/ppf.gif',
			link: 'https://electrocuteitp.wordpress.com/2024/12/20/past-pastry-future-an-ar-time-travel-experience-with-vuforia-and-unity/',
			description:
				'Time travel augmented reality experience, Unity/C# and Vuforia.',
		},
	],
	text: [], // will be populated from WordPress (blogPosts)
};

export const allProjects = Object.entries(projectSections).flatMap(
	([category, arr]) => arr.map((p) => ({ ...p, category }))
);
