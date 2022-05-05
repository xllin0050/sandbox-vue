<script setup>
import { useStore } from '@/stores/noteRoutes'
const declareYear = new Date().getFullYear()
const store = useStore()
console.log(store)
</script>

<template>
  <div class="relative w-full min-h-screen bg-slate-600 text-slate-200">
    <nav>
      <ul class="flex bg-slate-800">
        <li class="py-4"><router-link class="p-8" to="/">index</router-link></li>
        <li class="py-4"><router-link class="p-8" to="/about">about</router-link></li>
      </ul>
    </nav>
    <main class="py-4">
      <router-view />
    </main>
    <footer class="fixed py-4 lg:py-8 bottom-0">
      <div class="text-center text-sm">
        Copyright &copy; {{ declareYear }} Carl. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style></style>
