import { getCollection } from 'astro:content';

// Published = not a draft AND the publish date has arrived.
// Posts with a future date are scheduled: they appear automatically on the first build on or after that date
// (the GitHub workflow rebuilds the site every morning).
export async function publishedInsights() {
  const now = new Date();
  return (await getCollection('insights', ({ data }) => !data.draft && data.date <= now)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export const slugify = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
