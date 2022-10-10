import { defineUserConfig, defaultTheme } from 'vuepress'

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
            link: '/interesting'
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
            text: 'Personal Thoughts',
            link: '/personalthoughts'
        },
        {
            text: 'Web Development',
            link: '/webdevelopment'
        }
      ],
  })
})