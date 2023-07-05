<script lang="ts">
import { store } from '@/store'
import type { IceCream } from '@/types'
import type { PropType } from 'vue'

export default {
  props: {
    iceCream: {
      type: Object as PropType<IceCream>,
      required: true
    }
  },
  computed: {
    scoopsCountsLabel() {
      const scoopsByFlavors = this.iceCream.scoops.reduce<
        Partial<Record<IceCream['scoops'][number], number>>
      >((acc, v) => {
        if (acc[v] !== undefined) {
          acc[v]!++
        } else {
          acc[v] = 1
        }
        return acc
      }, {})

      return Object.keys(scoopsByFlavors).map((flavor) => {
        return `${scoopsByFlavors[flavor as IceCream['scoops'][number]]} x ${flavor}`;
      }).join(', ')
    }
  },
  data() {
    return { store }
  }
}
</script>

<template>
  <li>
    A {{ iceCream.container }} of
    {{ iceCream.scoops.length === 1 ? 'a single scoop' : `${iceCream.scoops.length} scoops` }} :
    {{ scoopsCountsLabel }}
    <button @click="store.removeIceCream(iceCream)">Delete</button>
  </li>
</template>

<style scoped>
button {
  margin-left: 1rem;
}
</style>
