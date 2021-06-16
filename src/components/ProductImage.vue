<template>
  <div class="product-image">
    <img :src="image" id="sockImage" class="rounded-full">
  </div>
</template>

<script>

export default {
  name: 'ProductImage',
  props: {
    image: {
      type: String,
      required: true
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.product-image {
  width: 30%;
}

#sockImage {
  border: 1px solid #d8d8d8;
  width: 80%;
  margin-bottom: 20px;
  box-shadow: 0px .5px 1px #d8d8d8;
}

</style>