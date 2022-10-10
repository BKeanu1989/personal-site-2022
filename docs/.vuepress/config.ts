import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  lang: 'en-US',
  title: 'Blog - Kevin Fechner',
  description: '(Un)interesting things in a life of a developer',
  theme: defaultTheme({
    navbar: [
        {
          text: 'Home',
          link: '/',
        },
        {
            text: 'Resources',
            link: '/resources'
        },
        {
            text: 'Interesting',
            children: [
                {
                    text: 'Bucketlist',
                    link: '/interesting'
                },
                {
                    text: 'Snippets',
                    link: '/snippets'
                }
            ]
        },
        {
            text: 'Projects',
            link: '/projects'
        },
        {
            text: 'Tutorials',
            link: '/tutorials',
        },
        {
            text: 'About Me',
            children: [
                {
                    text: 'About me',
                    link: '/personal'
                },
            ]
        },
        {
            text: 'Web Development',
            link: '/webdevelopment'
        }
      ],
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
})