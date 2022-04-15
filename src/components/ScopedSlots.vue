<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot name="item" :item="item" :remove="removeItem" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeItem(id) {
      console.log('item removal')
    },
  },
}
</script>
