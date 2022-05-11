<script setup>
import { useRouter } from 'vue-router'
import { useRoutesStore } from '@/stores/noteRoutes'
const router = useRouter()
const store = useRoutesStore()

function getRouteList(prefixName) {
  return router.options.routes
    .map((route) => {
      if (route.name.startsWith(prefixName)) route.title = route.name.substring(prefixName.length)
      return route
    })
    .filter((route) => route.name.startsWith(prefixName))
}

store.$patch((state) => {
  // 直接賦值
  state.vanillaNoteRoutes = getRouteList('vanilla-')
  // Actions賦值
  store.setVueNoteRoutes(getRouteList('vue-'))
})

</script>

<template>
  <div class="relative w-full min-h-screen bg-slate-600 text-slate-200">
    <nav>
      <ul class="flex bg-slate-800">
        <li class="py-4"><router-link class="p-8" to="/">index</router-link></li>
        <li class="py-4"><router-link class="p-8" to="/about">about</router-link></li>
      </ul>
    </nav>
    <main class="">
      <router-view />
    </main>
    <footer class="fixed py-4 lg:py-8 bottom-0">
      <div class="text-center text-sm">
        Copyright &copy; {{ new Date().getFullYear() }} Carl. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style></style>
