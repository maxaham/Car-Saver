<template>
<div>
  <h1> Your Cars </h1>
  <CartList :products="cart" />
  <div class="repo">
    <h2>
      <a href="https://github.com/maxaham/Car-Saver">Repository</a>
    </h2>
  </div>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'CartCars',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
}
</script>

<style>
.repo {
  display: flex;
  justify-content: center;
}
</style>
