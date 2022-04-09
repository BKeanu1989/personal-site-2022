# Vue component not rendering

```js
<script setup lang="ts">
// const props = defineProps(['title'])
// const props = defineProps({
//   title: String
// })
</script>

<template>
    <div>
        AppCardnew test

        <div>
            slot: <slot></slot>
        </div>
    </div>
</template>
```

which is not working vs

vs

```js
<script setup lang="ts">
</script>

<template>
    <div>
        AppCardnew test

        <div>
            slot: <slot></slot>
        </div>
    </div>
</template>

which is