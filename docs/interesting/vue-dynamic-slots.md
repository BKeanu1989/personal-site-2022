## Example

Icons 
navigation icons


vue script setup attr instead of props
```js
// const props = defineProps<{
//    'items': NavItem[],
//    'abc': string,
// //    'rightItems':   
// }>()

const props = defineProps({
    items: {
        type: Array as PropType<NavItem[]>
    }
})

```
## side note
use v-once more