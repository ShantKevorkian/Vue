<template>
  <div class="cart mt-16 grid grid-cols-3 gap-4">
    <div v-for="product in products">
      <p class="flex justify-center mb-2">{{ product.variantColor }}</p>
      <div class="flex justify-center">
        <img :src="product.variantImage" id="sockImage" class="rounded-full">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: this.$store.getters.cardProducts
    }
  },
}
</script>

<style scoped lang="scss">

#sockImage {
  border: 1px solid #d8d8d8;
  width: 50%;
  margin-bottom: 20px;
  box-shadow: 0px .5px 1px #d8d8d8;
}

</style>
