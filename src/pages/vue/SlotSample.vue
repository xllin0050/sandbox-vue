<script setup>
const testScopedSlots = [
  {
    id: '1',
    name: 'Trys',
  },
]
</script>
<template>
  <div>
    <ScopedSlots :items="testScopedSlots">
      <template #item="{ item, remove }">
        {{ item.name }}
        <button type="button" @click="remove(item.id)">Delete</button>
      </template>
    </ScopedSlots>
  </div>
</template>
