```ts
import Fotos from './components/single-actor/MyPhotos.vue';
import Vita from './components/single-actor/MyVita.vue';
import Demo from './components/single-actor/MyDemo.vue';
import News from './components/single-actor/MyNews.vue';

import SingleActor from './SingleActor.vue';
const app = createApp( SingleActor );
// app.use(VueDraggableNext)
app.component( 'Fotos', Fotos );
app.component( 'Vita', Vita );
app.component( 'Demo', Demo );
app.component( 'News', News );

```

```ts
<script setup lang="ts">
import { ref, markRaw, shallowRef } from 'vue';

// import Fotos from './components/single-actor/MyPhotos.vue';
// import Vita from './components/single-actor/MyVita.vue';
// import Demo from './components/single-actor/MyDemo.vue';
// import News from './components/single-actor/MyNews.vue';
import { computed } from '@vue/reactivity';
// import MyPhotos from './components/single-actor/MyPhotos.vue';

const tabs =  [
    'Fotos', 'Vita', 'Demo', 'News'

] 

// const current = shallowRef(Fotos)
const activeIndex = ref(0)
const current = computed(() => tabs[activeIndex.value])
</script>

<template>
    <div>
        <button v-for="(tab, index) in tabs" :key="index" @click="activeIndex = index">
            {{ tab }}
        </button>
        <div>
            current Tab is: {{ current }}
        </div>
        <component :is="current" ></component>
        --- hard & working
        <fotos></fotos>
        <Fotos></Fotos>
        <!-- <MyPhotos></MyPhotos> -->
    </div>
</template>
```

vs
which is not working


```ts
<script setup lang="ts">
import { ref, markRaw, shallowRef } from 'vue';

import Fotos from './components/single-actor/MyPhotos.vue';
import Vita from './components/single-actor/MyVita.vue';
import Demo from './components/single-actor/MyDemo.vue';
import News from './components/single-actor/MyNews.vue';
// import MyPhotos from './components/single-actor/MyPhotos.vue';

const tabs =  [
    'Fotos', 'Vita', 'Demo', 'News'

] 

// const current = shallowRef(Fotos)
const current = ref('Fotos')
const activeIndex = ref(0)
</script>

<template>
    <div>
        <button v-for="(tab, index) in tabs" :key="index" @click="current = tab">
            {{ tab }}
        </button>
        <div>
            current Tab is: {{ current }}
        </div>
        <component :is="current" ></component>
        <component :is="'Fotos'" ></component>
        <component is="Fotos" ></component>



        --- hard & working
        <fotos></fotos>
        <Fotos></Fotos>
        <!-- <MyPhotos></MyPhotos> -->
    </div>
</template>
```