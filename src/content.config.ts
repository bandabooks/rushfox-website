import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Insights: one Markdown file per post in src/content/insights/.
// Files starting with "_" (e.g. _TEMPLATE.md) are ignored.
const insights = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().max(200),
    date: z.coerce.date(),
    category: z.enum(['Security Tips', 'CCTV & Technology', 'Access Control', 'Business Security', 'Compliance', 'Company News']),
    author: z.string().default('Rush Fox Security'),
    readingMinutes: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
