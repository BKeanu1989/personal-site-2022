# Curl Problems
https://stackoverflow.com/questions/3757071/php-debugging-curl

For some unknown reason my curl call to 'http://localhost:3000' didn't work as expected.
After some trial and errors I noticed, that my API was still working, but my PHP application didn't hit my local server via curl.

So I needed to know how to debug this problem. Luckily curl has some inbuilt verbose functionality. So just with the highlighted lines we get more information about what is going wrong.

```php{1,8-9}
    $fp = fopen(dirname(__FILE__).'/errorlog.txt', 'w+');

    $ch = curl_init("{$url}/gateway");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10000);
    curl_setopt($ch, CURLOPT_STDERR, $fp);
    curl_setopt($ch, CURLOPT_VERBOSE, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER,
    array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string),
        )
    );
    $result = curl_exec($ch);

```

In the errorlog.txt I saw that the curl call is not going to 'http://localhost:3000' but '127.0.0.1:3000' which is the address of my local machine. So I needed to do some more googling... And to be honest, I didn't want to hassle with that anymore, so I just used NodeJs. I had to use for something else anyway. So why not just use it for that as well? :) 