<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot name="item" :item="item" :show="showUsageNote" :show-usage="showUsageID" />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ items: Array })
const showUsageID = ref(0)
const showUsageNote = (id) => {
  if (showUsageID.value === id) {
    showUsageID.value = 0
    return
  }
  showUsageID.value = id
}
</script>
