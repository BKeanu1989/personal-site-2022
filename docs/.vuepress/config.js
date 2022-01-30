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
        }, 
        {
            text: 'Systemadministration',
            children: [
                {
                    link: '/sysadmin/docker.md',
                    text: 'Docker'
                }, 
                {
                    link: '/sysadmin/hoster.md',
                    text: 'Hoster'
                }
            ]
        }, 
        {
            text: 'Electron',
            link: '/electron/'
        }
    ],
    sidebar: {
        '/wordpress/': [
            {
                text: 'Wordpress Home',
                link: '/wordpress/readme.md'
            },
            {
              text: 'Templates',
              link: '/wordpress/templates.md'
            },
            {
                text: 'Plugins',
                children: [
                    {
                        link: '/wordpress/plugins/README.md',
                        text: 'Plugins'
                    },
                    {
                        link: '/wordpress/plugins/boilerplate.md',
                        text: 'Boilerplate'
                    }
                ]
            }
        ],
        '/electron': [
            {
                text: 'Learnings',
                link: '/electron/learnings.md'
            }
        ]
    }
  },
  plugins: [
      [
        '@vuepress/plugin-search',
      ]
  ],
}