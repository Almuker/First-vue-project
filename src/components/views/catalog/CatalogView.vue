<template>
  <div class="catalog-view">
    <CatalogMain />
    <CartMain />
  </div>
</template>

<script setup>
import CatalogMain from '@/components/views/catalog/CatalogMain.vue';
import CartMain from '@/components/views/catalog/CartMain.vue';
</script>

<style>
.catalog-view {
  background-color: #444446;
  border-radius: 5px;
}
</style>