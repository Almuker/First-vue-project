<template>
  <div class="catalog-view">
    <CatalogMain />
  </div>
</template>

<script setup>
import CatalogMain from '@/components/views/catalog/CatalogMain.vue'
</script>

<style scoped>
.catalog-view {
  display: flex;
  align-items: center;
  background-color: #333336;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>