<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ol>
        <li :class="{'router-link-exact-active': $route.name === 'home'}">
          <router-link to="/">Home page</router-link>
        </li>
        <li :class="{'router-link-exact-active': $route.name === 'about'}">
          <router-link to="/about">About me</router-link>
        </li>
        <li :class="{'router-link-exact-active': $route.name === 'catalog'}">
          <router-link to="/catalog">Catalog</router-link>
        </li>
        <li :class="{'router-link-exact-active': $route.name === 'cart'}">
          <router-link to="/cart">Cart: {{ cart.length }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import { cartStore } from '@/store/cartStore'
import { computed } from '@vue/reactivity'

const store = cartStore()
const cart = computed(() => {
  return store.cart
})
</script>

<style scoped>
.sidebar {
  width: 135px;
  margin-top: 5px;
  margin-right: 13px;
}

.sidebar-nav {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  margin: 0 5px;
}

.sidebar-nav a{
  color: #a5a5a5;
  text-decoration: none;
}

ol {
  list-style-type: none;
}

li {
  margin: 5px 0;
  padding: 5px;
  transition: 0.5s;
}

li:hover, .router-link-exact-active {
  background-color: #444446;
  border-radius: 5px;
}

</style>