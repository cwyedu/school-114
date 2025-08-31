// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '揚揚教學網--114學年',
			sidebar: [
				{
      label: '軟體應用檢定',
      collapsed: true,
      autogenerate: {
        directory: '/cert/'
      }
				},
			],
		}),
	],
});
