<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info" v-bind:style="{ 'background-color': product.color }">
        <h1>{{product.make}} {{product.model}}</h1>
        <h2>{{product.model_year}}</h2>
        <h2>{{product.state}}</h2>
      </div>
      <div class="price">
        <h2>{{makePrice(product.price)}}</h2>
        <button class="auto" @click="remove(product)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods: {
    remove(product) {
      for (var i = this.$root.$data.cart.length - 1; i >= 0; i--) {
        if (this.$root.$data.cart[i] == product) {
          this.$root.$data.cart.splice(i, 1);
        }
      }
    },
    makePrice(price) {
      let n = ((price * 501))
      let str = "$" + n.toLocaleString("en-US");
      return str;
    }
  },
}

</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: left;
  justify-content: left;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 250px;
}

.info {
  color: black;
  padding: 10px 30px;
  height: 120px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
  background: black;
  color: white;
  padding-left: 10px;
}

button {
  height: 65px;
  background: gray;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
