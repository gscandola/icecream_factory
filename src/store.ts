import { reactive } from 'vue'
import type { IceCream } from './types'

type Store = {
  iceCreams: IceCream[]
  addIceCream: (iceCream: Omit<IceCream, 'id'>) => void
  removeIceCream: (iceCream: IceCream) => void
}

let id = 0
export const store = reactive<Store>({
  iceCreams: [],
  addIceCream(iceCream) {
    this.iceCreams.push({
      ...iceCream,
      id: ++id
    })
  },
  removeIceCream(iceCream) {
    this.iceCreams = this.iceCreams.filter((ic) => ic !== iceCream)
  }
})
