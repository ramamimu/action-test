<template>
  <div>
    <p class="text-3xl">hello world {{ $store.state.counterer }}</p>
    <p>yang ini dicoba</p>
    <p @click="$store.commit('increment')">tapi di statenya gk bsa response</p>
    <p @click="piniaStore.increment()">
      yang ini adalah pinia {{ piniaStore.count }}
    </p>
    <p @click="piniaStore.$reset()">buat reset pinia</p>
    <p>coba ah, hehehe</p>
  </div>
</template>

<script>
import { useCounterStore } from "../store/counter";

export default {
  name: "IndexPage",
  setup() {
    let piniaStore = useCounterStore();
    console.log("tes eslint");
    return { piniaStore };
  },
  // return current time in seconds
};
</script>
