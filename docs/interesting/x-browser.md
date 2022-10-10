# Safari problems...
I developed a custom template for woocommerce products - so it's Wordpress again. Everything was working fine on my end, so I was quite shocked, it wasn't working for any Safari Users.

Safari is the worst thing to debug, if you don't have any macos system. For some time now Safari is only for Apple devices. But luckily one of my clients (my absolute favorite - we have been working together for quite some time now), sold me one of his recently. Altough it was at my GF's place... Anyway I digress.

After I got the mac in my hands I had to setup the development environment again. But with Docker it's really easy & fast to setup. But locally it was working fine as well. Which kinda made me happy, but I had 0 clues what was causing the error. The devtools didn't show anything.

In that case most of the suggestions for debugging stuff like that in Wordpress is to:
- deactivate all plugins
- activate them one by one again
- profit??

So deactivating all plugins is a no go for my client. So what to do? I was pretty sure it's not a fault at my part. Luckily over the years I gained a lot of experience working with wordpress. Hummingbird is a pretty nice performance enhancing plugin. It can combine files and therefore serving 'more' with less http overhead.

But it can also lead to some problems, so I went ahead to the Asset Optimization Tab and removed the combination (as mentioned above) for that file.

3 ... 2 ... 1
It was working again.
Only cost me like 8 hours, because I had to drive through the whole city to get the mac. 

:::tip
Check for Hummingbird or any other Optimization Plugin if it fucks up your app.
:::