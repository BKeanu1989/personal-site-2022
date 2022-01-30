# Live to local - Local to live

Variablen:
- wpdb_prefix
- FROM
- TO

```sql
UPDATE {wpdb_prefix}_options SET option_value = replace(option_value, '{FROM}', '{TO}') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE {wpdb_prefix}_posts SET post_content = replace(post_content, '{FROM}', '{TO}');
UPDATE {wpdb_prefix}_postmeta SET meta_value = replace(meta_value, '{FROM}','{TO}');
UPDATE {wpdb_prefix}_posts SET guid = replace(guid, '{FROM}', '{TO}');
```