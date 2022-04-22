<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const routeList = router.options.routes
const routeListVUE = router.options.routes.filter((route) => route.name.startsWith('vue'))
</script>

<template>
  <nav>
    <ul class="bg-slate-700">
      <li v-for="link in routeListVUE" :key="link.path" class="py-2">
        <router-link class="p-6" :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
