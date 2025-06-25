// Este arquivo gera o sitemap.xml automaticamente para sites estáticos
export async function GET() {
  const baseUrl = "https://psijaninecorrea.com.br";

  const pages = ["/"]; // Como é SPA, apenas a home

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
