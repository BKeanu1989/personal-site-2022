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
For our Database we'll use php namespaces. If you have experience using NPM (Node Package Manager), there is an Php equivalent called [Composer](https://getcomposer.org/).

We'll create a directory called 'src/Sample' in our plugin root.

```php
<?php
namespace Sample;
use Sample\Helpers;

class DatabaseTable {
    const VERSION = '1.0.0';
    const TABLE_NAME = 'geschlossen_morgen';

    public static function get_table_name() 
    {
        global $wpdb;
        return $wpdb->prefix . self::TABLE_NAME;
    }

    public static function install_table() 
    {
        try {
            global $wpdb;
            $charset_collate = $wpdb->get_charset_collate();
            $table_name = self::get_table_name();

			$sql = "CREATE TABLE IF NOT EXISTS $table_name (
				`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
				`order_id` int(11) NOT NULL,
				`first_name` varchar(55) NOT NULL,
				`last_name` varchar(55) NOT NULL,
				`ticket_code` varchar(20) NOT NULL,
				`email` varchar(100) NOT NULL DEFAULT '',
				`activated` BOOLEAN NOT NULL DEFAULT 0,
				`birth_date` varchar(10) NOT NULL DEFAULT '',
				`via_admin` BOOLEAN NOT NULL DEFAULT 0
			) $charset_collate";

			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
			dbDelta( $sql );
            update_option('geschlossen_morgen_db_version', self::VERSION);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * add_new
     * 
     * We are just setting the ticket code here for full flexibility
     * Firstname, lastname & birthdate will be set later.
     * 
     * @param [int] $order_id
     * @return void
     */
    public static function add_new($order_id) 
    {
        global $wpdb;
        $table_name = self::get_table_name();
        $contains_rave_product = Helpers::is_rave_order($order_id);
        if (!$contains_rave_product) return;
        $ticket_code = bin2hex(random_bytes(6));

        $wpdb->insert($table_name, [
            'order_id' =>  $order_id,
            'first_name' => '',
            'last_name' => '',
            'ticket_code' => $ticket_code,
            'email' => '',
            'birth_date' => ''
        ], [
            '%d',
            '%s',
            '%s',
            '%s'
        ]);
    }

    public static function is_ticket_code_valid($ticket_code)
    {
        global $wpdb;

        $table_name = self::get_table_name();

        $found = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$table_name} WHERE ticket_code = %s AND activated = 0", $ticket_code));

        if ($found) return true;
        return false;
    }

    public static function signup_user_for_rave($formData)
    {
        global $wpdb;
        $table_name = self::get_table_name();
        $success = $wpdb->update(
            $table_name,
            [
                'activated' => 1,
                'first_name' => $formData['first_name'],
                'last_name' => $formData['last_name'],
                'birth_date' => $formData['birth_date'],
                'email' => $formData['email'],
            ],
            [
                'ticket_code' => $formData['ticket_code']
            ],
            [
                '%d',
                '%s',
                '%s',
                '%s'
            ],
            [
                '%s'
            ]
        );
        
        if ($success !== false) {
            return true;
        }
        return false;
    }

	
    public static function get_ticket_code_by_order_id($order_id)
    {
        global $wpdb;

        $table_name = self::get_table_name();

        $ticket_code = $wpdb->get_var($wpdb->prepare("SELECT ticket_code FROM {$table_name} WHERE order_id = %d", $order_id));

        if ($ticket_code) {
            return $ticket_code;
        }

        return false;
    }

    public static function get_order_id_by_ticket_code($ticket_code)
    {
        global $wpdb;

        $table_name = self::get_table_name();

        $order_id = $wpdb->get_var($wpdb->prepare("SELECT order_id FROM {$table_name} WHERE ticket_code = %s", $ticket_code));

        if ($order_id) {
            return $order_id;
        }

        return false;
    }
}
```
The highlighted lines handle the 'version control' for the table. If you ever need to alter it.

