<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.make}}</h1>
        <h2>{{product.model}}</h2>
        <p>{{product.state}}</p>
      </div>
      <!--<div class="image">
        <img :src="'/images/products/'+product.image">
      </div>-->
      <div class="price">
        <h3>{{product.price}}</h3>
        <button class="auto" @click="remove(product)">Remove from Cart</button>
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
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #dd5608;
  color: #000;
  padding: 10px 30px;
  height: 80px;
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
}

button {
  height: 60px;
  background: rgb(236, 164, 9);
  color: black;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
