// @ts-check
// https://www.fzeba.com/posts/7_latex-in-astro/ 加入 latex 支援
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
						{ label: '用 Visual Studio Code 寫網頁', link: '/misc/vscode-web' },
					],

				},
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css',
					},
				},
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
