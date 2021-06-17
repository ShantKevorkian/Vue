<template>
  <div id="app">
    <ul class="flex border-b justify-center bg-green-700 p-2 w-full fixed top-0">
      <li class="mr-2">
        <router-link to="/" class="inline-block py-2 px-4 text-gray-200 hover:text-white">Home</router-link>
      </li>
      <li class="mr-2">
        <router-link to="/product" class="inline-block py-2 px-4 text-gray-200 hover:text-white">Product</router-link>
      </li>
      <li class="mr-2">
        <router-link to="/about" class="inline-block py-2 px-4 text-gray-200 hover:text-white">About</router-link>
      </li>
      <li class="mr-2 absolute z-50 right-0">
        <router-link to="/cart" class="inline-block py-2 px-4 text-gray-200 hover:text-white">Cart({{ countProduct }})</router-link>
      </li>
    </ul>
      <router-view/>
  </div>
</template>

<script>

export default {
  computed: {
    countProduct() {
      return this.$store.getters.cardProducts.length
    }
  }
}
</script>

<style lang="scss">

.nav-bar {
  background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  height: 60px;
  margin-bottom: 15px;
}

ul li {
  list-style-type: none;
}

.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16C0B0;
  text-decoration: underline;
}

/*.full-cart {*/
/*    background-color: red;*/
/*}*/
</style>
