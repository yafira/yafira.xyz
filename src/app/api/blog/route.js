// app/api/blog/route.js
export const revalidate = 300;
export const runtime = 'nodejs';

const SITES = [
	{ host: 'https://blog.electrocute.io/', label: 'electrocute' },
	{ host: 'electrocuteitp.wordpress.com', label: 'itp' },
];

// single external you manually add (you can add more later)
const EXTERNAL = [
	{
		id: 'ml5-docsify-soft-ui',
		title: 'Contributing to ml5.js: From Docsify Plugins to Soft Interactions',
		link: 'https://ml5js.org/blog/docsify-plugins-soft-ui/',
		date: '2025-07-31',
		siteLabel: 'ml5.js', // ← source name becomes the badge text
	},
];

const FIELDS = '_fields=id,title,link,date';
const PER_SITE = 3; // 3 per site, then we also include the externals

export async function GET() {
	try {
		const results = await Promise.all(
			SITES.map(async ({ host, label }) => {
				const url = `https://public-api.wordpress.com/wp/v2/sites/${host}/posts?per_page=${PER_SITE}&orderby=date&order=desc&${FIELDS}`;
				const res = await fetch(url, {
					headers: { Accept: 'application/json' },
				});
				if (!res.ok) return [];
				const posts = await res.json();
				return posts.map((p) => ({
					id: p.id,
					title: p?.title?.rendered || 'Untitled',
					link: p?.link || `https://${host}/?p=${p.id}`,
					date: p?.date,
					siteLabel: label,
				}));
			})
		);

		// add your manual externals, then sort newest-first and cap if you want
		const merged = results
			.flat()
			.concat(EXTERNAL)
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		// keep the list tight (e.g., 6–8 cards); tweak as you like
		const MAX = 8;
		const trimmed = merged.slice(0, MAX);

		return new Response(JSON.stringify(trimmed), {
			status: 200,
			headers: {
				'content-type': 'application/json',
				'Cache-Control': 's-maxage=300, stale-while-revalidate=1800',
			},
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}
}
