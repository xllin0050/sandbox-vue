<script setup>
import { computed } from 'vue'
import { useRoutesStore } from '@/stores/noteRoutes'

const store = useRoutesStore()

// 直接取值
// const { vueNoteRoutes, vanillaNoteRoutes } = store

// computed取值
const vueRouteList = computed(() => store.vueNoteRoutes)
const vanillaRouteList = computed(() => store.vanillaNoteRoutes)

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
