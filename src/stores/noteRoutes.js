import { defineStore } from 'pinia'

export const useRoutesStore = defineStore('noteRoutes', {
  state: () => {
    return {
      vueNoteRoutes: [],
      vanillaNoteRoutes: [],
    }
  },
  actions: {
    setVueNoteRoutes(data) {
      // 直接修改
      this.vueNoteRoutes = data

      // 透過 patch 修改
      // this.$patch((state) => {
      //   state.vueNoteRoutes = data
      // })
    },
  },
})
