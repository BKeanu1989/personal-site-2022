```php
function my_email_classes( ){
    $mailer = WC()->mailer();
    $mails = $mailer->get_emails();
	error_log(print_r($mails,1));

    // $mails['WC_Email_Cancelled_Order']->template_html = MY_TEMPLATE_PATH.'test.php';

    return $mails;
}

my_email_classes();
```