<template>
  <div class="product-info">
    <h1>{{ product }}</h1>
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    <p v-if="inStock">Shipping: {{ shipping }}</p>
    <p v-if="inStock">{{ printOnSale }}</p>
    <ul>
      <li v-for="detail in details"> {{ detail }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ProductInfo',
  props: {
    inStock: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      onSale: true,
      premium: false,
      product: 'Socks',
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
    }
  },
  computed: {
    printOnSale() {
      return this.onSale ?  'This product is on sale' : 'This product is not on sale'
    },
    shipping() {
      return this.premium ? 'Free' : "2.99"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.product-info {
  margin-top: 10px;
  width: 70%;
}

p {
  margin-top: 10px;
}

</style>