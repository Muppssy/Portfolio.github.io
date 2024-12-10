import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';




export default defineConfig({
  
  // ...
  integrations: [tailwind()],
  content: {
    collections: {
      projects: {
        schema: {
          title: 'string',
          date: 'string',
          description: 'string',
          image: 'string',
        },
      },
    },
  },
});