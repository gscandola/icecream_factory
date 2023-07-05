export type Flavors = 'Vanilla' | 'Chocolate'

export interface IceCream {
  id: number,
  container: 'Cone' | 'Cup'
  scoops: Flavors[]
}
