<template>
  <div>
    <div class="catalog-view">
      <router-link to="/catalog/cart">
        <button class="cart-view-button">Cart: {{ cart.length }}</button>
      </router-link>
    </div>
    <div class="catalog-view">
      <CatalogMain />
    </div>
  </div>
</template>

<script setup>
import CatalogMain from '@/components/views/catalog/CatalogMain.vue';

import { cartStore } from '@/store/cartStore';
import { computed } from '@vue/reactivity';

const store = cartStore()
const cart = computed(() => {
  return store.cart
})

</script>

<style>
.catalog-view {
  background-color: #333336;
  border-radius: 5px;
  margin-bottom: 15px;
}

.cart-view-button {
  margin: 15px 25px;
  background-color: rgb(122, 122, 122);
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  color: #ffffff;
  padding: 15px;
  font-size: 16px;
}

.cart-view-button:hover {
  background-color: #5E5E5E;
}
</style>