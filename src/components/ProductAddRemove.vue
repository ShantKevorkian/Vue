<template>
  <div class="buttons">
    <button @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }" class="focus:outline-none bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded ml-10">Add to Cart</button>
    <button @click="removeFromCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }" class="focus:outline-none bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded ml-5">Remove from Cart</button>
  </div>
</template>

<script>

export default {
  name: 'ProductAdd',
  props: {
    inStock: {
      type: Number,
      require: true
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart')
    },
    removeFromCart() {
      this.$emit('removeFromCart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.disabledButton {
  background-color: #d8d8d8;
}

</style>