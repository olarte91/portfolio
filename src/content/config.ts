import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    desc: z.string(),
    image: image(),
    githubBackend: z.string().url(),
    githubFrontend: z.string().url().optional(),
    techStack: z.array(image()),
  }),
});

export const collections = {
  'projects': projectsCollection,
};