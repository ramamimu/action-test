export const state = () => ({
  counter: 141
})
 
export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  }
}