<template>
  <div
    class="relative w-10rem h-10rem bg-purple-200 rounded-1/2"
    :style="{ left: `${x}px`, top: `${y}px`, cursor: dragging ? 'grabbing' : 'grab' }"
    @mousedown="dragging = true"
  ></div>
</template>
<script setup>
import { ref } from 'vue'
const dragging = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const x = ref(100)
const y = ref(100)

window.addEventListener('mousemove', (e) => {
  if (dragging.value) {
    // 計算滑鼠與上次紀錄的移動距離
    const diffX = e.clientX - mouseX.value
    const diffY = e.clientY - mouseY.value
    x.value += diffX
    y.value += diffY
  }
  // 滑鼠現在位置
  mouseX.value = e.clientX
  mouseY.value = e.clientY
})

window.addEventListener('mouseup', () => {
  dragging.value = false
})
</script>
