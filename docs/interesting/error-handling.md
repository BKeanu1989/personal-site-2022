# Error Handling in node
https://www.youtube.com/watch?v=xBICbUafQrw&list=PLZt48JdgNiJFCMgxT-xR3zkIy9x2NJKqF&index=1

https://www.joyent.com/node-js/production/design/errors

It's quite easy to extend the Error Class in NodeJs.

For example:

```js
class ApplicationError extends Error {
    get name() {
        return this.constructor.name;
    }
}

class SomeCustomError extends ApplicationError {}

throw new SomeCustomError('Some custom error message')
```