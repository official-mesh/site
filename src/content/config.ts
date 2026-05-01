import { defineCollection, z } from "astro:content";

const components = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    order: z.number(),
    languages: z.array(z.string()),
    platforms: z.array(z.string()),
    repo: z.string().url(),
    install: z.string(),
    highlights: z.array(z.string()).min(1),
  }),
});

export const collections = { components };
