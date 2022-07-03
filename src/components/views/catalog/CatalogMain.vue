<template>
  <div class="catalog">
    <div class="catalog-info">
      <h1>Catalog</h1>
    </div>
    <div class="catalog-list">
      <CatalogItem 
        v-for="product in store.products"
        :key="product.article"
        :product="product"
        @sendDataToParent="sendDataToParent"
      />
    </div>
  </div>
</template>

<script setup>
import CatalogItem from '@/components/views/catalog/CatalogItem.vue'
import { catalogStore } from '../../../store/catalogStore'
import { onMounted } from 'vue';
// import { computed } from '@vue/reactivity';

const sendDataToParent = (data) => {
  console.log(data);
}

const store = catalogStore();

// const getProducts = computed(() => {
//   return store.products
// })

onMounted(() => {
  store.fetchProduct();
})
</script>

<style scoped>
.catalog {
  display: flex;
  flex-direction: column;
}

.catalog-info {
  color: #ffffff;
  display: flex;
  justify-content: center;
}

.catalog-list {
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
}
</style>