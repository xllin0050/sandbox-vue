<script setup>
import { ref, onMounted } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

const scrollContainer = ref(null)
onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: scrollContainer.value,
    smooth: true,
  })
})
</script>
<template>
  <div class="w-full min-h-screen">
    <h1>L-S</h1>
    <div ref="scrollContainer">
      <div data-scroll-section class="h-80 bg-blue-300/50 py-5">
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
      <div data-scroll-section class="h-80 bg-blue-600/50 py-5">
        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
      </div>
      <div data-scroll-section class="h-80 bg-blue-300/50 py-5">
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
      <div data-scroll-section class="h-80 bg-blue-600/50 py-5">
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
      <div data-scroll-section class="h-80 bg-blue-300/50 py-5">
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
      <div data-scroll-section class="h-80 bg-blue-600/50 py-5">
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
    </div>
  </div>
</template>
