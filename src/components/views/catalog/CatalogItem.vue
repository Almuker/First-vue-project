<template>
  <div class="catalog-item">
    <img 
      :src=" require('../../../assets/images/' + props.product.image)" 
      alt="alt"
      class="catalog-images">
    <p class="catalog-item-info">{{ props.product.name }}</p>
    <p class="catalog-item-info">{{ props.product.category }}</p>
    <p class="catalog-item-info">{{ props.product.price }}$</p>
    <button 
      class="catalog-item-button" 
      @click="addToCart">Add to cart</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { cartStore } from '@/store/cartStore';

const cart = cartStore();

const props = defineProps({product: Object})
const addToCart = () => {
  cart.addToCart(props.product)
}
</script>

<style>
.catalog-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px 25px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 15px;
}

.catalog-images {
  width: 177px;
  border-radius: 5px;
}

.catalog-item-info {
  margin-top: 5px;
  font-size: 20px;
}

.catalog-item-button {
  margin-top: 8px;
  padding: 10px 50px;
  border-radius: 5px;
  background-color: rgb(122, 122, 122);
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  color: #ffffff;
}

.catalog-item-button:hover {
  background-color: #5E5E5E;
}
</style>