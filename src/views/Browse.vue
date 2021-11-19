<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item" v-for="USstate in USstates" :key="USstate">
        <a @click="select(USstate)" href="#" class="pure-menu-link">{{USstate}}</a>
      </li>
      <!-- <li class="pure-menu-item" v-for="state in USstate" :key="product.state"><a @click="select(product.state)" href="#" class="pure-menu-link">{{ product.state }}</a></li> -->
    </ul>
  </div>
  <ProductList :products="products" />
  <div class="repo">
    <h2>
      <a href="https://github.com/maxaham/Car-Saver">Repository</a>
    </h2>
  </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'BrowsePart',
  components: {
    ProductList
  },
  data() {
    return {
      state: '',
      USstates: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut',
      'Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho',
      'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts',
      'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
      'New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
      'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
      'Washington','West Virginia','Wisconsin','Wyoming']
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

<style>
.pure-menu\ pure-menu-horizontal {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.pure-menu-list {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-around !important;
}
.pure-menu-item {
  /* margin: 5px !important; */
}
.repo {
  display: flex;
  justify-content: center;
}
</style>