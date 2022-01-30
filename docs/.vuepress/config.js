module.exports = {
  // site config
  lang: 'de-DE',
  title: 'Persönlicher Blog - Kevin Fechner',
  description: 'This is my first VuePress site',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
        {
            text: 'Wordpress',
            link: '/wordpress/'
        }
    ]
  },
  plugins: [
      [
        '@vuepress/plugin-search',
      ]
  ]
}