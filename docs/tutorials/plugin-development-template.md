---
prev:
  text: Setup
  link: /tutorials/plugin-development-setup.md
---

# Plugin Development Template & Database

## Template
There are several ways to add template to wordpress. We are using the following way.

We'll create a file called in the includes directory.

class-sample-plugin-template.php
```php{7}
<?php

class Sample_Plugin_Template
{
    public function custom_template( $template ) {
        if ( is_page_template( 'sample-plugin-template.php' )) {
            $template = SAMPLE_PLUGIN_PATH . 'public/templates/sample-plugin-template.php';
        }
        return $template;

    }
}
```
As you might see we are using a constant. We are defining it in the main plugin file. In our case it's called sample-plugin.php

```php
define('SAMPLE_PLUGIN_PATH', plugin_dir_path( __FILE__ ));
```

Wordpress is using hooks for almost everything. So we need to do the following:

in class-sample-plugin.php

```php{14,48}
	public function __construct() {
		if ( defined( 'SAMPLE_PLUGIN_VERSION' ) ) {
			$this->version = SAMPLE_PLUGIN_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'sample-plugin';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

        $this->define_custom_template();
	}
    // ...
    private function define_custom_template()
    {
		$custom_template = new Sample_Plugin_Template($this->get_plugin_name(), $this->get_version());
		$this->loader->add_action('template_include', $custom_template, 'custom_template', 10, 1);
    }

    private function load_dependencies() {
		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-sample-plugin-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-sample-plugin-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-sample-plugin-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-sample-plugin-public.php';

        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-sample-plugin-template.php';

		$this->loader = new Sample_Plugin_Loader();

	}
```

## Database