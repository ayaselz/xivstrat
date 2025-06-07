import mdx from '@astrojs/mdx'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://xivstrat.com',

  integrations: [vue(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
})
