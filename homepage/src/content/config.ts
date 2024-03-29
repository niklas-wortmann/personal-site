import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    socialMediaImage: image().optional(),
    heroImageAlt: z.string(),
    public: z.boolean().default(true),
    keywords: z.array(z.string())
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
    public: z.boolean().default(true),
    keywords: z.array(z.string())
  })
})

export const collections = { blog, talk };
