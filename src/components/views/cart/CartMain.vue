<template>
  <div>
     <div class="cart-total-price">
      <p>Total price in cart: {{ cartTotal }}$</p>
    </div>
    <div class="cart-list">
      <p v-if="!store.getCart.length" class="cart-info">No product in cart</p>
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
import CartItem from './CartItem'
import { cartStore } from '@/store/cartStore'
import { computed } from '@vue/reactivity'

const store = cartStore()
const cartTotal = computed(() => {
  let result = []
  for (let item of store.getCart) {
    result.push(item.price * item.quantity)
  }
  return result = result.reduce((sum, el) => sum + el, 0)
})

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
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
  padding-top: 10px;
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

.cart-total-price {
  background-color: #333336;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px 25px;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
}
</style>