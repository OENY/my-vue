<template>
  <h3>
    hello world
  </h3>
  <button></button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  color: rebeccapurple;
}
</style>
