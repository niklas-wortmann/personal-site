import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const talk = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    conf: z.string(),
    confLink: z.string().url(),
    location: z.string(),
    heroImage: image(),
    description: z.string(),
    pubDate: z.coerce.date(),
    url: z.string().url(),
    heroImageAlt: z.string(),
    codeUrl: z.string().url().optional(),
  })
})

export const collections = { blog, talk };
