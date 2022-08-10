<template>
<div>
  <p class="text-3xl">hello world {{$store.state.counter}}</p>
  <p>yang ini dicoba</p>
  <p @click="$store.commit('increment')">tapi di statenya gk bsa response</p>  
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
