// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
    site: 'https://fajriisnanto.com/',
    integrations: [
        mdx(), 
        react(), 
        tailwind({
        applyBaseStyles: false,
    }), icon(), 
        sitemap(), 
        pagefind({
      //      indexOnly: false,           // tambahkan ini
      //      bundle: true
        }), 

    ],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
    experimental: {
        svg: true,
    }});