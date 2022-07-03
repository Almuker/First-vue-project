<template>
  <div class="catalog">
    <div class="catalog-info">
      <h1>Cart</h1>
    </div>
    <div class="cart-list">
      <CartItem 
        v-for="(item, index) in store.getCart"
        :key="item.article"
        :cart="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script setup>
import CartItem from "./CartItem"
import { cartStore } from '@/store/cartStore';

const store = cartStore()
const deleteFromCart= (index) => {
  store.deleteFromCart(index)
}

</script>

<style scoped>
.cart-list {
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
}
</style>