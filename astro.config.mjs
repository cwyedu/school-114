// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '揚揚教學網--114學年',
			pagination: false,
			sidebar: [
				{
					label: '資訊科技',
					collapsed: true,
					autogenerate: {
						directory: '/it/'
					}
				},
				{
					label: '電腦遊戲製作',
					collapsed: true,
					autogenerate: {
						directory: '/game-dev/'
					}
				},
				{
					label: '互動多媒體實務',
					collapsed: true,
					autogenerate: {
						directory: '/im/'
					}
				},
				{
					label: 'AI帶你玩程式',
					collapsed: true,
					autogenerate: {
						directory: '/turtle-trip'
					}
				},
				{
					label: '軟體應用檢定',
					collapsed: true,
					autogenerate: {
						directory: '/cert'
					}
				},
				{
					label: '其它',
					collapsed: true,
					items: [
						{ label: '問 ChatGPT', link: '/misc/chatgpt-usage' },
						{ label: '均質化', link: '/misc/gamebit/gamebit' },
						{ label: '自己錄首歌', link: '/misc/recording' },
					],

				},
			],
		}),
	],
});
