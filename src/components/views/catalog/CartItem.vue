<template>
  <div class="cart-item">
    <img 
      :src=" require('../../../assets/images/' + cartProps.cart.image)"
      alt="alt"
      class="cart-images"
    />
    <div>
      <p>{{ cartProps.cart.name }}</p>
      <p>{{ cartProps.cart.price }}$</p>
      <p>{{ cartProps.cart.article }}</p>
    </div>
    <div>
      <p>Qty:</p>
      <p>{{ cartProps.cart.quantity }}</p>
    </div>
    <button 
      @click="deleteFromCart" 
      class="cart-item-button">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const cartProps = defineProps({cart: Object})

const emits = defineEmits(["deleteFromCart"])
const deleteFromCart = () => {
  emits("deleteFromCart");
}

</script> 

<style scoped>
.cart-item {
  width: 485px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 10px 5px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 10px;
}

.cart-images {
  width: 134px;
  border-radius: 5px;
}

p {
  margin-top: 5px;
  padding: 0 5px;
  font-size: 25px;
}

.cart-item-button {
  border: none;
  border-radius: 5px;
  background-color: rgb(122, 122, 122);
  color: #ffffff;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.cart-item-button:hover {
  background-color: #5E5E5E;
}
</style>