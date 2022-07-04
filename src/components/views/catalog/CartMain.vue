<template>
  <div class="cart-view">
    <div class="cart-info">
      <h1 v-if="!store.getCart.length">No products in cart</h1>
      <h1 v-else>Products in cart</h1>
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
const deleteFromCart = (index) => {
  store.deleteFromCart(index)
}

</script>

<style scoped>
.cart-view {
  background-color: #333336;
  border-radius: 5px;
  margin-bottom: 15px;
}

.cart-info {
  padding-top: 5px;
  color: #ffffff;
  display: flex;
  justify-content: center;
}
.cart-list {
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  justify-content: center;
  padding-bottom: 15px;
}
</style>