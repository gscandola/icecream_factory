<script lang="ts">
import type { IceCream } from '@/types'

export default {
  emits: ['done'],
  computed: {
    countPerFlavor() {
      return this.scoops.reduce<Partial<Record<IceCream['scoops'][number], number>>>((acc, v) => {
        if (acc[v] !== undefined) {
          acc[v]!++
        } else {
          acc[v] = 1
        }
        return acc
      }, {})
    }
  },
  data(): { scoops: IceCream['scoops'] } {
    return {
      scoops: []
    }
  }
}
</script>

<template>
  <h1>Step 2: Flavors</h1>
  <div class="flavors">
    <button @click="scoops.push('Vanilla')">
      {{ countPerFlavor['Vanilla'] ? `(${countPerFlavor['Vanilla']})` : '' }} Vanilla 🟡
    </button>
    <button @click="scoops.push('Chocolate')">
      {{ countPerFlavor['Chocolate'] ? `(${countPerFlavor['Chocolate']})` : '' }} Chocolate 🟤
    </button>
  </div>
  <button @click="$emit('done', scoops)" :disabled="scoops.length === 0">Gimme 😋</button>
</template>

<style scoped>
.flavors {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
}
</style>
