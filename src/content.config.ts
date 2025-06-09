import { defineCollection, reference, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

import { noteSchema, timelineSchema } from '@/lib/timelineSchema'

const duties = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/data/duties' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      short: z.string(),
      type: z.union([z.literal('raid'), z.literal('ultimate'), z.literal('trial')]),
      title: z.string(),
      description: z.string(),
      banner: image(),
      date: z.string(),
      href: z.string(),
      status: z.union([z.literal('upcoming'), z.literal('live'), z.literal('done')]),
      indexAvailable: z.boolean(),
      phases: z.array(
        z.object({
          href: z.string(),
          title: z.string(),
          subtitle: z.string(),
          name: z.string(),
          mechanics: z.array(
            z.object({
              href: z.string(),
              name: z.string(),
            }),
          ),
        }),
      ),
      locales: z.record(
        z.object({
          cn: z.string().optional(),
          jp: z.string().optional(),
        }),
      ),
    }),
})

const dutyGroups = defineCollection({
  loader: file('src/data/dutyGroups.json'),
  schema: z.object({
    id: z.string(),
    group: z.string(),
    duties: z.array(reference('duties')),
  }),
})

const timeline = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/data/timeline' }),
  schema: timelineSchema
})

const notes = defineCollection({
  type: 'content',
  schema: noteSchema
})

export const collections = { duties, dutyGroups, timeline, notes }
