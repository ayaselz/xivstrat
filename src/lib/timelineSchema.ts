import { z } from 'astro:content'

import { variantType } from '@/lib/variant'

import { timeSchema } from './utils'

const attackObj = z.object({
  type: z.literal('attack').default('attack'),
  time: timeSchema,
  base: timeSchema.optional(), // 保留？
  name: z.string().optional(),
  nameVariant: z.enum(variantType).optional(),
  damage: z.string(),
  damageType: z.enum(['physical', 'magical', 'special']),
}).strip()
// strict, passthrough, strip 选择处理多余的传入
const eventObj = z.object({
  type: z.literal('event').default('event'),
  time: timeSchema,
  base: timeSchema.optional(),
  class: z.string().optional(),
  content: z.string().optional(),
  component: z.string().optional(),
}).strip()

const castObj = z.object({
  type: z.literal('cast').default('cast'),
  time: timeSchema, // start
  base: timeSchema.optional(),
  duration: timeSchema.optional(),
  ability: z.string().default(''),
  badge: z.string().optional(),
  badgeVariant: z.enum(variantType).optional()
}).strip()

export const noteSchema = z.object({
  type: z.enum(['mechanic', 'solution', 'note']),
  dutyId: z.string(),
  phase: z.string(),
  time: timeSchema,
  author: z.string(),
  layout: z.string()
})

const timelineObj = z.discriminatedUnion('type', [
  attackObj,
  eventObj,
  castObj,
  noteSchema
])

export const timelineSchema = z.object({
  duty: z.string(),
  phases: z.array(
    z.object({
      href: z.string(),
      data: z.array(timelineObj)
    })
  )
})
