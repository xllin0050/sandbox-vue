<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function getRouteList(prefixName) {
  return router.options.routes
    .map((route) => {
      if (route.name.startsWith(prefixName)) route.title = route.name.substring(prefixName.length)
      return route
    })
    .filter((route) => route.name.startsWith(prefixName))
}

const vueRouteList = getRouteList('vue-')
const vanillaRouteList = getRouteList('vanilla-')
</script>

<template>
  <nav>
    <ul class="bg-slate-700">
      <li v-for="link in vueRouteList" :key="link.path" class="py-2">
        <router-link class="p-6" :to="link.path">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
    <ul class="bg-slate-700/70">
      <li v-for="link in vanillaRouteList" :key="link.path" class="py-2">
        <router-link class="p-6" :to="link.path">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
