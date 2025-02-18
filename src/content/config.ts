import { defineCollection, z } from "astro:content";

const pulsas = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.number(),
        main_image: z.string().url(),
        other_image: z.string().url().array(),
        description: z.string()
    })
});

const flores = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.number(),
        main_image: z.string().url(),
        other_image: z.string().url().array(),
        description: z.string()
    })
});

export const collection = { pulsas, flores };