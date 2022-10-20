# Wordpress Site import

Replace:
- WP_PREFIX
- DB_URL
- NEW_URL

```sql
UPDATE WP_PREFIX_options SET option_value = replace(option_value, 'DB_URL', 'NEW_URL') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE WP_PREFIX_posts SET post_content = replace(post_content, 'DB_URL', 'NEW_URL');
UPDATE WP_PREFIX_postmeta SET meta_value = replace(meta_value, 'DB_URL', 'NEW_URL');
UPDATE WP_PREFIX_posts SET guid = replace(guid, 'DB_URL', 'NEW_URL');
```
