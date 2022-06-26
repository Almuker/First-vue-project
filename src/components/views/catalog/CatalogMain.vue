<template>
  <div class="catalog">
    <div class="catalog-info">
      <h1>Catalog</h1>
    </div>
    <div class="catalog-list">
      <CatalogItem 
        v-for="product in products"
        :key="product.article"
        :product="product"
        @sendDataToParent="sendDataToParent"
      />
    </div>
  </div>
</template>

<script setup>
import CatalogItem from '@/components/views/catalog/CatalogItem.vue'
const sendDataToParent = (data) => {
  console.log(data);
}
const products = [
    {
      image: "1.jpg",
      name: "T-shirt 1",
      price: 2100,
      article: "T1",
      available: true,
      category: "Male"
    },
    {
      image: "2.jpg",
      name: "T-shirt 2",
      price: 3150,
      article: "T2",
      available: true,
      category: "Female"
    },
    {
      image: "3.jpg",
      name: "T-shirt 3",
      price: 4200,
      article: "T3",
      available: false,
      category: "Female"
    },
    {
      image: "4.jpg",
      name: "T-shirt 4",
      price: 5300,
      article: "T4",
      available: true,
      category: "Male"
    },
    {
      image: "5.jpg",
      name: "T-shirt 5",
      price: 6500,
      article: "T5",
      available: false,
      category: "Female"
    },
    {
      image: "6.jpeg",
      name: "T-shirt 6",
      price: 8700,
      article: "T6",
      available: true,
      category: "Female"
    }
  ]
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