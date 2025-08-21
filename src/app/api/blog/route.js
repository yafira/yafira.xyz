// app/api/blog/route.js
export const revalidate = 300;
export const runtime = 'nodejs';

const SITES = [
	{ host: 'electrocuteblog.wordpress.com', label: 'electrocute' },
	{ host: 'electrocuteitp.wordpress.com', label: 'itp' },
];

const FIELDS = '_fields=id,title,link,date'; // only what we render
const PER_SITE = 3;

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
					siteLabel: label, // used for your hover badge
				}));
			})
		);

		// combine both sites; newest first overall (6 total)
		const merged = results
			.flat()
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		return new Response(JSON.stringify(merged), {
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
