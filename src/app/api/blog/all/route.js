export const revalidate = 900;
export const runtime = "nodejs";

const WP_SITES = [{ host: "electrocuteitp.wordpress.com", label: "itp" }];

const ELECTROCUTE_POSTS_URL = "https://blog.electrocute.io/api/posts.json";

const EXTERNAL = [
  {
    id: "ml5-docsify-soft-ui",
    title: "Contributing to ml5.js: From Docsify Plugins to Soft Interactions",
    link: "https://ml5js.org/blog/docsify-plugins-soft-ui/",
    date: "2025-07-31",
    siteLabel: "ml5.js",
  },
];

const FIELDS = "_fields=id,title,link,date";

async function fetchAllFromWpSite(host, label) {
  const perPage = 100;
  let page = 1;
  let out = [];
  while (true) {
    const url = `https://public-api.wordpress.com/wp/v2/sites/${host}/posts?per_page=${perPage}&page=${page}&orderby=date&order=desc&${FIELDS}`;
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) break;
    const items = await res.json();
    if (!Array.isArray(items) || items.length === 0) break;
    out = out.concat(
      items.map((p) => ({
        id: p.id,
        title: p?.title?.rendered || "Untitled",
        link: p?.link || `https://${host}/?p=${p.id}`,
        date: p?.date,
        siteLabel: label,
      })),
    );
    const totalPages =
      Number(res.headers.get("X-WP-TotalPages")) ||
      Number(res.headers.get("x-wp-totalpages")) ||
      0;
    if (page >= totalPages) break;
    page++;
  }
  return out;
}

async function fetchAllElectrocutePosts() {
  const res = await fetch(ELECTROCUTE_POSTS_URL, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return [];
  const posts = await res.json();
  return posts.map((p) => ({ ...p, siteLabel: "electrocute" }));
}

export async function GET() {
  try {
    const [electrocutePosts, ...wpResults] = await Promise.all([
      fetchAllElectrocutePosts(),
      ...WP_SITES.map(({ host, label }) => fetchAllFromWpSite(host, label)),
    ]);

    const merged = [electrocutePosts, ...wpResults]
      .flat()
      .concat(EXTERNAL)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return new Response(JSON.stringify(merged), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
