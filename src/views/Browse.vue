<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Alabama')" href="#" class="pure-menu-link">Alabama</a></li>
      <li class="pure-menu-item"><a @click="select('Alaska')" href="#" class="pure-menu-link">Alaska</a></li>
      <li class="pure-menu-item"><a @click="select('Arizona')" href="#" class="pure-menu-link">Arizona</a></li>
      <li class="pure-menu-item"><a @click="select('Arkansas')" href="#" class="pure-menu-link">Arkansas</a></li>
      <li class="pure-menu-item"><a @click="select('California')" href="#" class="pure-menu-link">California</a></li>
      <li class="pure-menu-item"><a @click="select('Minnesota')" href="#" class="pure-menu-link">Minnesota</a></li>
      <li class="pure-menu-item"><a @click="select('Utah')" href="#" class="pure-menu-link">Utah</a></li>
      <li class="pure-menu-item"><a @click="select('Nevada')" href="#" class="pure-menu-link">Nevada</a></li>
      <li class="pure-menu-item"><a @click="select('Colorado')" href="#" class="pure-menu-link">Colorado</a></li>
      <li class="pure-menu-item"><a @click="select('Idaho')" href="#" class="pure-menu-link">Idaho</a></li>
      <li class="pure-menu-item"><a @click="select('Minnesota')" href="#" class="pure-menu-link">Minnesota</a></li>
      <!-- <li class="pure-menu-item" v-for="state in USstate" :key="product.state"><a @click="select(product.state)" href="#" class="pure-menu-link">{{ product.state }}</a></li> -->
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'BrowsePart',
  components: {
    ProductList
  },
  // USstate = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut',
  // 'Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho',
  // 'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts',
  // 'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  // 'New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
  // 'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
  // 'Washington','West Virginia','Wisconsin','Wyoming']
  data() {
    return {
      state: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.state === this.state);
    }
  },
  methods: {
    select(state) {
      this.state = state;
    }
  }
}
</script>