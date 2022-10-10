# Plugin Development Form
We are developing a form for inclusion via [shortcode](https://codex.wordpress.org/Shortcode_API).
It will make an api call to save the entered data on a remote server.

We'll be using:
- [Boilerplate](https://wppb.me/)
- [TailwindCss](https://tailwindcss.com/)
- [Docker](https://hub.docker.com/_/wordpress)

## Setup Wordpress Instance
Following snippet is an boilerplate for seting up Wordpress instances
```yml
version: '3.1'

services:

  wordpress:
    image: wordpress
    restart: always
    ports:
      - 8080:80
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: exampleuser
      WORDPRESS_DB_PASSWORD: examplepass
      WORDPRESS_DB_NAME: exampledb
    volumes:
      - wordpress:/var/www/html

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db:/var/lib/mysql

volumes:
  wordpress:
  db:
```

We will change it to fit our needs.
```yml{9,15-18,20}
version: '3.1'

services:

  wordpress:
    image: wordpress
    restart: always
    ports:
      - 3001:80
    environment:
      WORDPRESS_DB_HOST: formhost
      WORDPRESS_DB_USER: formuser
      WORDPRESS_DB_PASSWORD: formpass
      WORDPRESS_DB_NAME: formdb
      WORDPRESS_DEBUG: '1'
      WORDPRESS_CONFIG_EXTRA:
        define( 'WP_DEBUG_DISPLAY', false );
        define( 'WP_DEBUG_LOG', true );
    volumes:
      - ./wordpress/wp-content/plugins/geschlossen-form:/var/www/html/wp-content/plugins/geschlossen-form

  formhost:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: formdb
      MYSQL_USER: formuser
      MYSQL_PASSWORD: formpass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db:/var/lib/mysql

volumes:
  db:
```

We changed the port, added debug functionality & added our plugin.