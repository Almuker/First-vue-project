import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    getCart(state) {
      return state.cart
    }
  },
  actions: {
    addToCart(product) {
      if (this.cart.length) {
        let isProductExist = false
        this.cart.map((item) => {
          if (item.article === product.article) {
            isProductExist = true
            item.quantity++
          }
        })

        if (!isProductExist) {
          product.quantity = 1
          this.cart.push(product)
        }
      } else {
        product.quantity = 1
        this.cart.push(product)
      }
    },
    deleteFromCart(index) {
      this.cart.splice(index, 1)
    },
    incrementItem(index) {
      this.cart[index].quantity++
    },
    decrementItem(index) {
      if (this.cart[index].quantity > 0) this.cart[index].quantity--
    }
  }
})