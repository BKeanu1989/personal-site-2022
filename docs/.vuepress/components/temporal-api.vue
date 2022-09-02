<template>
    <div>
        test
    </div>
</template>

<script>
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import { onMounted } from 'vue';
export default {
    setup() {
        onMounted(() => {
            console.log("Test")
        })
    }
}
</script>