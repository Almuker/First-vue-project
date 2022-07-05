<template>
  <div class="cart-item">
    <img 
      :src=" require('../../../assets/images/' + cartProps.cart.image)"
      alt="alt"
      class="cart-images"
    />
    <div>
      <p>{{ cartProps.cart.name }}</p>
      <p>Price: {{ cartProps.cart.price }}$</p>
    </div>
    <div>
      <p>Qty:</p>
      <span>
        <span @click="incrementItem">+</span>
          {{ cartProps.cart.quantity }}
        <span @click="decrementItem">-</span>
      </span>
    </div>
    <button 
      @click="deleteFromCart" 
      class="cart-item-button">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const cartProps = defineProps({cart: Object})
const emits = defineEmits(["deleteFromCart", "incrementItem", "decrementItem"])
const deleteFromCart = () => {
  emits("deleteFromCart")
}

const incrementItem = () => {
  emits("incrementItem")
}

const decrementItem = () => {
  emits("decrementItem")
}


</script> 

<style scoped>
.cart-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin: 15px;
}

.cart-images {
  width: 134px;
  border-radius: 5px;
}

p {
  margin-top: 5px;
  font-size: 20px;
  padding-bottom: 5px;
}

span {
  cursor: pointer;
}

.cart-item-button {
  border: none;
  border-radius: 5px;
  background-color: rgb(122, 122, 122);
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
  color: #ffffff;
  padding: 8px 15px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 15px;
}

.cart-item-button:hover {
  background-color: #5E5E5E;
}
</style>