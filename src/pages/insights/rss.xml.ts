import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publishedInsights } from '../../lib/insights';

export async function GET(context: APIContext) {
  const posts = await publishedInsights();
  return rss({
    title: 'Rush Fox Security – Insights',
    description: 'Security tips, CCTV and access control guidance, compliance updates and company news.',
    site: context.site!,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/insights/${p.id}/`, categories: [p.data.category] })),
    customData: '<language>en-za</language>',
  });
}
