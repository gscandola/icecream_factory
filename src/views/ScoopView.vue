<script lang="ts">
import { store } from '@/store'
import ContainerChoice from '@/components/ContainerChoice.vue'
import FlavorsChoice from '@/components/FlavorsChoice.vue'
import type { IceCream } from '@/types'

export default {
  components: {
    ContainerChoice,
    FlavorsChoice
  },
  data(): { containerType: IceCream['container'] | null; step: number } {
    return {
      containerType: null,
      step: 1
    }
  },
  methods: {
    goToFlavors(containerType: IceCream['container']) {
      this.containerType = containerType
      this.step++
    },
    addIceCream(scoops: IceCream['scoops']) {
      if (this.containerType) {
        store.addIceCream({
          container: this.containerType,
          scoops
        })
      }
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <ContainerChoice v-if="step === 1" @next-step="goToFlavors" />
  <FlavorsChoice v-else @done="addIceCream" />
</template>
