const { path } = require("@vuepress/utils");

module.exports = {
  // site config
  //   lang: 'de-DE',
  title: "Blog - Kevin Fechner",
  description: "(Un)interesting things in a life of a developer",

  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      {
        text: "Web Development",
        link: "/webdevelopment",
        children: [
          {
            text: "Frameworks",
            link: "/webdevelopment/frameworks",
          },
          {
            text: "Tutorials",
            link: "/webdevelopment/tutorials",
          },
          {
            text: "Tools",
            link: "/webdevelopment/tools",
          },
          {
            text: "Resources",
            link: "/webdevelopment/resources",
          },
          {
            text: "News",
            link: "/webdevelopment/news",
          },
        ],
      },
      {
        text: "Bucketlist",
        link: "/interesting",
      },
      {
        text: "Misc",
        children: [
          {
            text: "Artificial Intelligence",
            link: "/ai",
          },
          {
            text: "Internet of Things",
            link: "/iot",
          },
          {
            text: "Smart Contract",
            link: "/smartcontracts",
          },
        ],
      },
      {
        text: "Personal",
        link: "/personal",
        children: [
          {
            text: "Books",
            link: "/personal/books",
          },
        ],
      },
      {
        text: "Software Development",
        link: "/softwaredevelopment",
        children: [
          {
            text: "Electron",
            link: "/softwaredevelopment/electron",
          },
          {
            text: "Tauri",
            link: "/softwaredevelopment/tauri",
          },
        ],
      },
      {
        text: "Tutorials",
        link: "/tutorials",
      },
      {
        text: "Snippets",
        link: "/snippets",
      },
      // {
      //     text: 'Programming Languages',
      //     link: '/programming-languages'
      // }
      // {
      //     text: 'Wordpress',
      //     link: '/wordpress/'
      // },
      // {
      //     text: 'Systemadministration',
      //     children: [
      //         {
      //             link: '/sysadmin/docker.md',
      //             text: 'Docker'
      //         },
      //         {
      //             link: '/sysadmin/hoster.md',
      //             text: 'Hoster'
      //         }
      //     ]
      // },
      // {
      //     text: 'Backend',
      //     children: [
      //         {
      //             link: '/backend/nodejs.md',
      //             text: 'NodeJS'
      //         },
      //         {
      //             link: '/backend/php.md',
      //             text: 'PHP'
      //         },
      //         {
      //             link: '/backend/python.md',
      //             text: 'Python'
      //         },
      //         {
      //             link: '/backend/ruby.md',
      //             text: 'Ruby'
      //         }
      //     ]
      // },
      // {
      //     text: 'Frontend',
      //     children: [
      //         {
      //             link: '/frontend/frameworks.md',
      //             text: 'Frameworks'
      //         },
      //         {
      //             link: '/frontend/html.md',
      //             text: 'HTML'
      //         },
      //         {
      //             link: '/frontend/css.md',
      //             text: 'CSS'
      //         }
      //     ]
      // },
      // {
      //     text: 'Tutorials',
      //     children: [
      //         {
      //             link: '/tutorials/plugin-development-setup.md',
      //             text: 'Plugin Development'
      //         }
      //     ]
      // },
      // {
      //     text: 'Interesting',
      //     children: [
      //         {
      //             link: '/interesting/tailwindcss.md',
      //             text: 'TailwindCss'
      //         },
      //         {
      //             link: '/interesting/resources.md',
      //             text: 'Resources'
      //         },
      //         // {

      //         // }
      //     ]
      // },
      // {
      //     text: 'Electron',
      //     link: '/electron/'
      // },
      // {
      //     text: 'Fitness',
      //     link: '/fitness/'
      // }
    ],
    sidebar: {
      "/wordpress/": [
        {
          text: "Wordpress Home",
          link: "/wordpress/readme.md",
        },
        {
          text: "Templates",
          link: "/wordpress/templates.md",
        },
        {
          text: "Plugins",
          children: [
            {
              link: "/wordpress/plugins/README.md",
              text: "Plugins",
            },
            {
              link: "/wordpress/plugins/boilerplate.md",
              text: "Boilerplate",
            },
          ],
        },
      ],
      "/frontend": [
        {
          text: "Frameworks",
          link: "/frontend/frameworks.md",
        },
        {
          text: "HTML",
          link: "/frontend/html.md",
        },
        {
          text: "CSS",
          link: "/frontend/css.md",
        },
      ],
      "/electron": [
        {
          text: "Learnings",
          link: "/electron/learnings.md",
        },
      ],
      "/sysadmin": [
        {
          text: "Docker",
          link: "/sysadmin/docker.md",
        },
        {
          text: "Linux",
          link: "/sysadmin/linux.md",
        },
      ],
      "/tutorials": [
        {
          text: "Wordpress",
          children: [
            {
              text: "Plugin Development Setup",
              link: "/tutorials/plugin-development-setup.md",
            },
            {
              text: "Plugin Development Template & Database",
              link: "/tutorials/plugin-development-template.md",
            },
            {
              text: "Plugin Development Form",
              link: "/tutorials/plugin-dev-rave.md",
            },
          ],
        },
        {
          text: "Progress Web Apps (PWA)",
          link: "/tutorials/pwa",
        },
        // {
        //     text: 'Docker',
        //     link: ''
        // },
        {
          text: "QR Codes",
          link: "/tutorials/qr-code",
        },
        {
          text: "Chat (Web Sockets)",
          link: "/tutorials/chat",
        },
        {
          text: "Map Routing (Open Source)",
          link: "/tutorials/open-routing",
        },
        {
          text: "Temporal Api",
          link: "/webdevelopment/news/temporalApi.md",
        },
      ],
      "/snippets": [
        {
          text: "Wordpress",
          children: [
            {
              text: "Wordpress Site Import",
              link: "/snippets/wordpress-site-import.md",
            },
          ],
        },
        {
          text: "Docker",
          children: [
            {
              text: "Wordpress debug",
              link: "/snippets/docker-debug.md",
            },
          ],
        },
      ],
      "/interesting": [
        {
          text: "Bucketlist - Interesting",
          children: [
            {
              text: "Curl Problems",
              link: "/interesting/curl-debug.md",
            },
            {
              text: "Cross Browser Problems",
              link: "/interesting/x-browser.md",
            },
            {
              text: "Woocommerce Confirmation Email",
              link: "/interesting/woocommerce-confirmation-email.md",
            },
            {
              text: "Error Handling",
              link: "/interesting/error-handling.md",
            },
            {
              text: "Beautiful Human",
              link: "/interesting/beautiful-human.md",
            },
            {
              text: "Typescript",
              link: "/interesting/typescript.md",
            },
            {
              text: "Local SSL",
              link: "/interesting/local-ssl",
            },
          ],
        },
      ],
      "/webdevelopment/news": [
        {
          text: "News",
          children: [
            {
              text: "Temporal API",
              link: "/webdevelopment/news/TemporalApi.md",
            },
          ],
        },
      ],
    },
  },
  plugins: [
    ["@vuepress/plugin-search"],
    //   [
    //     '@vuepress/register-components',
    //     {
    //         componentsDir: path.resolve(__dirname, 'components')
    //     }
    //   ]
  ],
};
