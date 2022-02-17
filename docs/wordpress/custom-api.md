# Custom Api


## Sources:
https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/

https://developer.wordpress.org/rest-api/extending-the-rest-api/routes-and-endpoints/

https://developer.wordpress.org/rest-api/extending-the-rest-api/controller-classes/

### Auth:
https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/

application passwords - rest api
https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/

https://developer.wordpress.org/rest-api/using-the-rest-api/discovery/


```php
Feature Availability
By default, Application Passwords is available to all users on sites served over SSL/HTTPS. This can be customized using the wp_is_application_passwords_available and wp_is_application_passwords_available_for_user filters.

For example, to completely disable Application Passwords add the following code snippet to your site.

add_filter( 'wp_is_application_passwords_available', '__return_false' );
Without SSL, it is possible for the Application Password to be seen by an attacker on your network or the network between your site and the authorized application. If you are ok with this risk, you can force availability with the following code snippet.

add_filter( 'wp_is_application_passwords_available', '__return_true' );
```

listing all routes
If you don’t use pretty permalinks, use “?rest_route=” instead of “wp-json”. Either way, what you’re seeing here is an example of a route and an endpoint. “/wp-json/” and “/?rest_route=/” are routes. They allow you to access the WordPress REST API through the GET HTTP method. The WordPress REST API displayed to you, or the data if you will, is an endpoint served to us via a JSON response.


?rest_route= didn't work for me

so I changed it to prettylink

rest client instead of postman

current_user_can

vite

# important
use btob function for encoding coding string 
```js
const base64EncodedAuthString = `Basic ${btoa(USERNAME + ':' + PASSWORD)}`
```