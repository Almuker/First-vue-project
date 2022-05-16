<template>
  <div class="sidebar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
  width: 135px;
  margin-top: 15px;
  background-color: #333336;
  margin-right: 9px;
  height: 250px;
  border-radius: 5px;
}
</style>