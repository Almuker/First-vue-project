<template>
  <div class="catalog-view">
    <CatalogMain />
    <CartMain v-if="cart.length"/>
  </div>
</template>

<script setup>
import CatalogMain from '@/components/views/catalog/CatalogMain.vue';
import CartMain from '@/components/views/catalog/CartMain.vue';
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
}
</style>