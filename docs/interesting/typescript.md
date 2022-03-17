source:
https://javascript.tutorialink.com/typescript-type-string-is-not-assignable-to-type/

Typescript Type ‘string’ is not assignable to type

```js
export type Fruit = "Orange" | "Apple" | "Banana";
let myString: string = "Banana";

let myFruit: Fruit = myString as Fruit;

```

tsconfig.json

    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],  



---
```js
declare global {
    interface Window {
        clientConfig: any
    }
}
```

