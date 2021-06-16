<template>
  <div class="colors">
    <div id="colorSocks" v-for="(variant, index) in variants" :key="variant.variantId"
         class="rounded-full w-10 h-10 float-left ml-5"
         :style="{ backgroundColor: variant.variantColor }"
         @mouseover="updateProduct(index)">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductColors',
  props: {
    variants: {
      type: Array,
      require: true
    },
    updateProduct: {
      type: Function,
      require: true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

//.colors {
//  width: 60%;
//}
//
//#colorSocks {
//  float: left;
//  margin-left: 10px;
//}
//
//.color-box {
//  width: 40px;
//  height: 40px;
//  border-radius: 50%;
//  margin-top: 5px;
//}

</style>