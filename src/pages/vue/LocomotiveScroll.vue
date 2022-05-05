<script setup>
import { ref, onMounted } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

const scrollContainer = ref(null)
onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: scrollContainer.value,
    smooth: true,
    getDirection: true,
    getSpeed: true,
  })
})
</script>
<template>
  <div class="w-full">
    <div ref="scrollContainer">
      <div data-scroll-section class="h-80 bg-blue-300/40 py-5">
        <h1 data-scroll class="text-2xl text-center">Locomotive Scroll 👋</h1>
      </div>
      <div data-scroll-section class="flex h-280 bg-blue-600/40 py-5">
        <h2 data-scroll data-scroll-speed="2">What's up?</h2>
        <p data-scroll data-scroll-speed="10">😬</p>
      </div>
      <div id="dir" data-scroll-section class="h-280 bg-blue-300/40 py-5">
        <div class="flex h-full items-center justify-center">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="0.8"
            data-scroll-traget="#dir"
            class="w-350px text-xl text-center"
          >
            🚂🚓🚒🚚 -5
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.5"
            data-scroll-traget="#dir"
            class="w-350px text-xl text-center"
          >
            🚂🚓🚒🚚 5
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.4"
            data-scroll-traget="#dir"
            class="w-350px text-xl text-center"
          >
            🚂🚓🚒🚚 -4
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.3"
            data-scroll-traget="#dir"
            class="w-350px text-xl text-center"
          >
            🚂🚓🚒🚚 2
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1.2"
            data-scroll-traget="#dir"
            class="w-350px text-xl text-center"
          >
            🚂🚓🚒🚚 -1.2
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
            data-scroll-traget="#dir"
            class="w-350px text-xl text-center"
          >
            🚂🚓🚒🚚 1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
