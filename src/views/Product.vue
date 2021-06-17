<template>
  <div>
    <div class="product mt-16">
      <ProductImage :image="image"/>
      <ProductInfo :inStock="inStock"/>
      <ProductAddRemove :inStock="inStock" @addToCart="addToCart" @removeFromCart="removeFromCart"/>
      <ProductColors :variants="variants" :updateProduct="updateProduct"/>
      <ProductReview/>
      {{ products }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductImage from '@/components/ProductImage.vue'
import ProductInfo from '@/components/ProductInfo.vue'
import ProductAddRemove from '@/components/ProductAddRemove.vue'
import ProductColors from '@/components/ProductColors.vue'
import ProductReview from '@/components/ProductReview.vue'
import GreenSocks from '@/assets/vmSocks-green.jpg'
import BlueSocks from '@/assets/vmSocks-blue.jpg'

export default {
  name: 'Home',
  components: {
    ProductImage,
    ProductInfo,
    ProductAddRemove,
    ProductColors,
    ProductReview,
  },
  data() {
    return {
      selectedVariant: 0,
      products: "",
      variants: [
       {
          variantId: 2234,
          variantColor: "green",
          variantImage: GreenSocks,
          variantQuantity: 10

        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: BlueSocks,
          variantQuantity: 2
        }
      ],
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addProduct', this.variants[this.selectedVariant])
    },
    removeFromCart() {
      this.$store.commit('removeProduct', this.variants[this.selectedVariant])
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    productAxios() {
      window.axios.get('/product', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.products = response.data
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.productAxios()
  },
  created() {
    console.log(this.$store.state.product)
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
  }
}
</script>
