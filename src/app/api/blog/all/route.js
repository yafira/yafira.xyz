// app/api/blog/all/route.js
export const revalidate = 900; // 15 min
export const runtime = 'nodejs';

const SITES = [
	{ host: 'electrocuteblog.wordpress.com', label: 'electrocute' },
	{ host: 'electrocuteitp.wordpress.com', label: 'itp' },
];

const FIELDS = '_fields=id,title,link,date';

async function fetchAllFromSite(host, label) {
	const perPage = 100; // WP.com max
	let page = 1;
	let out = [];

	// loop pages until we've got them all
	// (uses X-WP-TotalPages header to stop)
	// also breaks on empty pages
	// keeps payload light with _fields
	// newest-first by API, we’ll re-sort anyway
	while (true) {
		const url = `https://public-api.wordpress.com/wp/v2/sites/${host}/posts?per_page=${perPage}&page=${page}&orderby=date&order=desc&${FIELDS}`;
		const res = await fetch(url, { headers: { Accept: 'application/json' } });
		if (!res.ok) break;

		const items = await res.json();
		if (!Array.isArray(items) || items.length === 0) break;

		out = out.concat(
			items.map((p) => ({
				id: p.id,
				title: p?.title?.rendered || 'Untitled',
				link: p?.link || `https://${host}/?p=${p.id}`,
				date: p?.date,
				siteLabel: label,
			}))
		);

		const totalPages =
			Number(res.headers.get('X-WP-TotalPages')) ||
			Number(res.headers.get('x-wp-totalpages')) ||
			0;

		if (page >= totalPages) break;
		page++;
	}
	return out;
}

export async function GET() {
	try {
		const results = await Promise.all(
			SITES.map(({ host, label }) => fetchAllFromSite(host, label))
		);

		const merged = results
			.flat()
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		return new Response(JSON.stringify(merged), {
			status: 200,
			headers: {
				'content-type': 'application/json',
				'Cache-Control': 's-maxage=900, stale-while-revalidate=3600',
			},
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}
}
