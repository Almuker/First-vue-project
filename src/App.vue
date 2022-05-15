<template>
  <div>
    <NavigationBar />

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
export default {
  components: { NavigationBar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,200;1,8..144,200&family=Roboto:wght@100;300;400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
}
</style>
