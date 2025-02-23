import { defineCollection, z } from "astro:content";

const perlas = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.number(),
        main_image: z.string().url(),
        other_image: z.string().url().array(),
        description: z.string()
    })
});

const letras = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.number(),
        main_image: z.string().url(),
        other_image: z.string().url().array(),
        description: z.string()
    })
});

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

const anchetas = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.number(),
        main_image: z.string().url(),
        other_image: z.string().url().array(),
        description: z.string()
    })
});

export const collection = { perlas, letras, pulsas, flores, anchetas };