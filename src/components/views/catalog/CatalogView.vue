<template>
  <div>
    <div class="catalog-view">
      <router-link to="/catalog/cart">
        <button class="cart-view-button">Cart: {{ cart.length }}</button>
      </router-link>
      <div class="catalog-total-view">
        <p>Total Price: {{ cartTotal }}</p>
      </div>
    </div>
    <div class="catalog-view">
      <CatalogMain />
    </div>
  </div>
</template>

<script setup>
import CatalogMain from '@/components/views/catalog/CatalogMain.vue'

import { cartStore } from '@/store/cartStore'
import { computed } from '@vue/reactivity'

const store = cartStore()
const cart = computed(() => {
  return store.cart
})

const cartTotal = computed(() => {
  let result = []
  for (let item of store.getCart) {
    result.push(item.price * item.quantity)
  }
  return result = result.reduce((sum, el) => sum + el, 0)
})

</script>

<style scoped>
.catalog-view {
  display: flex;
  align-items: center;
  background-color: #333336;
  border-radius: 5px;
  margin-bottom: 15px;
}

.catalog-total-view {
  border: none;
  border-radius: 5px;
  background-color: rgb(122, 122, 122);
  padding: 15px;
  font-size: 16px;
  font-family: 'Roboto Serif', serif;
  color: #ffffff;
  font-weight: 600;
}

.cart-view-button {
  margin: 15px 15px 15px 25px;
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