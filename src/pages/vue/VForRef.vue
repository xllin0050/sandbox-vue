<template>
  <div v-for="n in 10" :key="n" :ref="setItemRef">
    {{ n }}
  </div>
</template>
<script setup>
import { onBeforeUpdate, onUpdated } from 'vue'
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
onUpdated(() => {
  console.log(itemRefs)
})
</script>
