<template>
  <div>
    <div class="select-block">
      <p>Selected option here: {{ selected }}</p>
      <CustomSelect 
        :options="options"
        @select="optionSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomSelect from './CustomSelect';

const selected = ref()
const options = [
  {name: 'Option 1', value: 1},
  {name: 'Option 2', value: 2},
  {name: 'Option 3', value: 3},
  {name: 'Option 4', value: 4},
  {name: 'Option 5', value: 5},
  {name: 'Option 6', value: 6},
]


const optionSelect = (option) => {
  selected.value = option.name
}
</script>

<style scoped>
.select-block {
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: space-between;
  background-color: #333336;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
}

.select-block p {
  margin-bottom: 8px;
}
</style>
