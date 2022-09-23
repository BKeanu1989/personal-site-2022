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
in declaration file
some-example.d.ts

```js

declare global {
    interface Window {
        clientConfig: any
    }
}
```


```txt
Type '{ class: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'. Did you mean 'className'?
```

for rxjs
source: https://stackoverflow.com/questions/54475893/typescript-type-x-is-missing-the-following-properties-from-type-y-length-pop
```ts

public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`api/products/v1/`);
}
```

index.d.ts
package.json -> typings

## in js files
```js
/**
 * @typedef { import("../types/holdersArea").LiveTokensData }
 * @typedef { import("../types/holdersArea").HoldersArea }
 * @typedef { import("../types/holdersArea").ShowBackStory }
 */
```