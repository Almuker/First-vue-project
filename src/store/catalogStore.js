import { defineStore } from 'pinia'
import axios from 'axios';

export const catalogStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  actions: {
    async fetchProduct() {
      try {
        const data = await axios.get('http://localhost:3000/products')
        this.products = data.data
      } catch (error) {
        alert(error)
      }
    }
  }
})