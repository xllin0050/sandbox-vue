import { defineStore } from 'pinia'

export const useStore = defineStore('noteRoutes', {
  state: () => {
    return {
      vueNoteRoutes: [],
    }
  },
})
