<script setup>
import MineBlock from '@/notes/MineBlock.md'
import { reactive } from 'vue'
const WIDTH = 10
const HEIGHT = 10
const data = reactive(
  Array.from({ length: HEIGHT }, (_, y) => Array.from({ length: WIDTH }, (_, x) => y * 10 + x + 1))
)
</script>
<template>
  <div>
    <div v-for="nums in data" :key="nums">
      <span
        v-for="num in nums"
        :key="num"
        class="border-dark-300 border w-10 text-center inline-block -mt-1px -ml-1px"
        >{{ num }}</span
      >
    </div>
    <MineBlock class="pt-4" />
  </div>
</template>
