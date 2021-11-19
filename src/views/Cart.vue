<template>
<div>
  <h1> Your Cars </h1>
  <CartList :products="cart" />
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
