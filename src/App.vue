<template>
  <div>
    <NavigationBar />
    <div class="container">
      <SideBar />
      <ContentBar />
    </div>
  </div>
</template>

<script lang="js">
import NavigationBar from '@/components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'
import ContentBar from '@/components/ContentBar.vue'

export default {
  components: { NavigationBar, SideBar, ContentBar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,200;1,8..144,200&family=Roboto:wght@100;300;400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
}

.container {
  background-color: #222226;
  padding: 0 362px;
  display: flex;
}
</style>
