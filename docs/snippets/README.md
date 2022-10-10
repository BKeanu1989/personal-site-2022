# Snippets

## Docker

```
docker-compose --verbose up
```

docker-compose.yml
```yml
      WORDPRESS_DEBUG: '1'
      WORDPRESS_CONFIG_EXTRA:
        define( 'WP_DEBUG_DISPLAY', false );
        define( 'WP_DEBUG_LOG', true );
```