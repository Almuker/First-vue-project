<template>
  <div>
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
        @incrementItem="incrementItem(index)"
        @decrementItem="decrementItem(index)"
      />
    </div>
  </div>
</template>

<script setup>
import CartItem from "./CartItem"
import { cartStore } from '@/store/cartStore'

const store = cartStore()
const deleteFromCart = (index) => {
  store.deleteFromCart(index)
}

const incrementItem = (index) => {
  store.incrementItem(index)
}

const decrementItem = (index) => {
  store.decrementItem(index)
}


</script>

<style scoped>
.cart-info {
  background-color: #333336;
  padding-top: 5px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 15px;
}
.cart-list {
    background-color: #333336;
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  justify-content: center;
  padding-bottom: 15px;
  border-radius: 5px;
}
</style>