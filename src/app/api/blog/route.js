export const revalidate = 300;
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
const PER_SITE = 3;

async function fetchWpSite(host, label) {
  const url = `https://public-api.wordpress.com/wp/v2/sites/${host}/posts?per_page=${PER_SITE}&orderby=date&order=desc&${FIELDS}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) return [];
  const posts = await res.json();
  return posts.map((p) => ({
    id: p.id,
    title: p?.title?.rendered || "Untitled",
    link: p?.link || `https://${host}/?p=${p.id}`,
    date: p?.date,
    siteLabel: label,
  }));
}

async function fetchElectrocutePosts() {
  const res = await fetch(ELECTROCUTE_POSTS_URL, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return [];
  const posts = await res.json();
  return posts
    .slice(0, PER_SITE)
    .map((p) => ({ ...p, siteLabel: "electrocute" }));
}

export async function GET() {
  try {
    const [electrocutePosts, ...wpResults] = await Promise.all([
      fetchElectrocutePosts(),
      ...WP_SITES.map(({ host, label }) => fetchWpSite(host, label)),
    ]);

    const merged = [electrocutePosts, ...wpResults]
      .flat()
      .concat(EXTERNAL)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const MAX = 8;
    const trimmed = merged.slice(0, MAX);

    return new Response(JSON.stringify(trimmed), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "Cache-Control": "s-maxage=300, stale-while-revalidate=1800",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
