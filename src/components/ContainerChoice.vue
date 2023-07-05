<script lang="ts">
import type { IceCream } from '@/types'

export default {
  emits: ['next-step'],
  methods: {
    chooseContainer(type: IceCream['container']) {
      this.$emit('next-step', type)
    }
  }
}
</script>

<template>
  <h1>Step 1: Container</h1>
  <div class="containers">
    <button @click="chooseContainer('Cone')">Cone 🍦</button>
    <button @click="chooseContainer('Cup')">Cup 🍨</button>
  </div>
</template>

<style scoped>
.containers {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
}
</style>
