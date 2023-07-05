<script lang="ts">
import { store } from '@/store'

import IceCream from './IceCream.vue'

export default {
  components: {
    IceCream
  },
  data() {
    return { store }
  }
}
</script>

<template>
  <ul v-if="store.iceCreams.length > 0">
    <IceCream v-for="iceCream in store.iceCreams" :key="iceCream.id" :iceCream="iceCream" />
  </ul>
  <h3 v-else>No ice cream yet 😫</h3>
</template>
