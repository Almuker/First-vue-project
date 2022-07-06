<template>
  <div class="custom-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">Select</p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in optionProps.options"
        :key="option.value"
        @click="selectOption(option)"
      > {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'

const optionProps = defineProps({options: Array})
const emits = defineEmits(["select"])
const areOptionsVisible = ref(false)

const selectOption = (option) => {
  emits("select", option)
  areOptionsVisible.value = false
}
</script>

<style scoped>
.options {
  color: #ffffff;
}

.title {
  border: solid 1px #ffffff;
}
.custom-select {
  position: relative;
  width: 280px;
  cursor: pointer;
}
.custom-select p{ 
  text-align: center;
  border-radius: 5px;
}

.options {
  border: 1px solid #ffffff;
  background-color: #222226;
  border-radius: 5px;
}

.options p:hover {
  background-color: #444446;
  cursor: pointer;
}
</style>