---
next:
  text: Template & Database
  link: /tutorials/plugin-development-template.md
---

# Plugin Development Beispiel
Wir werden ein Plugin entwickeln, welches einen Benutzer ermöglicht sich für ein Offline Event anzumelden.
Die Berechtigung erfolgt nach einem Kauf eines Produkts. Daraufhin wird zur Verifizierung ein Ticketcode erstellt und nach fertiger Anmeldung ein QR Code verschickt, das die Daten der Anmeldung widerspiegelt. 

Zusätzlich soll es möglich sein, dass ein Ticketcode im Dashboard genierbar sein soll.

## Boilerplate
Wir werden das Boilerplate von [wppb.me](https://wppb.me) nutzen. Einen kurzer Einblick dazu gibt es [hier](/wordpress/plugins/boilerplate.md).

## Anforderungen
- QR Code
- Admin Menu
- Tailwind CSS
- Woocommerce 
- Anmeldeseite
- Pdf?

## Technologien
- Docker
- Wordpress 
- Composer
- VueJs

## Start
So sieht unsere Dateistruktur zum Anfang unseres Projekts aus.

![Dateistruktur](/images/sample-plugin-structure.png)

Da das Plugin abhängig von Woocommerce ist, müssen wir es bei der Aktivierung prüfen. Das können wir ganz einfach mit folgendem Snippet machen.

class-sample-plugin-activator.php
```php{9-11}
	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		if ( !is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
			wp_die(__('Woocommerce needs to be installed & active'), __('Activation failed'), ['back_link' => true]);
		}
	}
```
We also need to save the ticket codes in the database. For that we'll create a table upon activation. Moreover we'll create an upload directory for the plugin and automatically create a page for the signup process.

class-sample-plugin-activator.php
```php
	public static function create_upload_dir() 
	{
		$upload_dir = wp_upload_dir();
		$base_upload = $upload_dir['basedir'];
	
		wp_mkdir_p( $base_upload . '/sample-plugin' );
	}

	public static function create_signup_page()
	{
		$page_title = 'Sample Plugin Signup';
		$check_page_exist = get_page_by_title($page_title, 'OBJECT', 'page');
		// Check if the page already exists
		if(empty($check_page_exist)) {
			$page_id = wp_insert_post(
				array(
				'comment_status' => 'close',
				'ping_status'    => 'close',
				'post_author'    => 1,
				'post_title'     => ucwords($page_title),
				'post_name'      => strtolower(str_replace(' ', '-', trim($page_title))),
				'post_status'    => 'publish',
				'post_content'   => '',
				'post_type'      => 'page',
				'post_slug'		 => 'rave'				
				)
			);
			update_option('_sample_plugin_page', $page_id);

			// in future: we will need to set these later - 
			// $template_path = 'sample-plugin-template.php';
			// update_post_meta( $page_id, '_wp_page_template', $template_path );
		}
	}
```

