<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info" v-bind:style="{ 'background-color': product.color }">
        <h1>{{product.make}}  {{product.model}}</h1>
        <h2>{{product.model_year}}</h2>
        <h2>{{product.state}}</h2>
      </div>
      <!--<div class="image">
        <img :src="'/images/products/'+product.image">
      </div>-->
      <div class="price">
        <h2>${{((product.price * 301).toFixed(2))}}</h2>
        <button class="auto" @click="add(product)">Add Car</button> <!--push to cart -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    add(product) {
        this.$root.$data.cart.push(product);
    }
  },
  // computed: {
  //   priceMake() {
  //     let n = ((this.product.price * 1005).toFixed(2));
  //     return n.toLocaleString("en-US");
  //   }
  // },
}

</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: white;
  display: flex;
  padding-left: 10px;
}

button {
  height: 65px;
  background: black;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
