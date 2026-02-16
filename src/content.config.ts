import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const apartments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/apartments" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    location: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    area: z.number(),
    status: z.enum(["available", "sold", "rented"]),
    image: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/settings" }),
  schema: z.object({
    hero_headline: z.string().optional(),
    hero_subheadline: z.string().optional(),
    about_title: z.string().optional(),
    about_description: z.string().optional(),
    contact_phone: z.string().optional(),
    contact_email: z.string().optional(),
    contact_address: z.string().optional(),
    contact_whatsapp: z.string().optional(),
  }),
});

export const collections = { apartments, settings };
