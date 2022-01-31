module.exports = {
  // site config
  lang: 'de-DE',
  title: 'Persönlicher Blog - Kevin Fechner',
  description: '(Un)interessante Dinge im Leben eines Entwicklers',

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
            text: 'Backend',
            children: [
                {
                    link: '/backend/nodejs.md',
                    text: 'NodeJS'
                }, 
                {
                    link: '/backend/php.md',
                    text: 'PHP'
                }
            ]
        }, 
        {
            text: 'Frontend',
            children: [
                {
                    link: '/frontend/frameworks/vuejs.md',
                    text: 'VueJs'
                }, 
                {
                    link: '/frontend/frameworks/angular.md',
                    text: 'Angular'
                },
                {
                    link: '/frontend/frameworks/react.md',
                    text: 'React'
                },
                {
                    link: '/frontend/html.md',
                    text: 'HTML'
                },
                {
                    link: '/frontend/css.md',
                    text: 'CSS'
                }
            ]
        },
        {
            text: 'Tutorials',
            children: [
                {
                    link: '/tutorials/plugin-development-setup.md',
                    text: 'Plugin Development'
                }
            ]
        },
        {
            text: 'Miscellaneous',
            children: [
                {
                    link: '/interesting/tailwindcss.md',
                    text: 'TailwindCss'
                },
                {
                    link: '/interesting/resources.md',
                    text: 'Resources'
                },
                
            ]
        },
        {
            text: 'Electron',
            link: '/electron/'
        },
        {
            text: 'Fitness',
            link: '/fitness/'
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
        ],
        '/tutorials': [
            {
                text: 'Wordpress',
                children: [
                    {
                        text: 'Plugin Development Setup',
                        link: '/tutorials/plugin-development-setup.md'
                    },
                    {
                        text: 'Plugin Development Template & Database',
                        link: '/tutorials/plugin-development-template.md'
                    },
                ]
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