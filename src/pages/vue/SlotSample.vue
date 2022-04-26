<script setup>
const testData = [
  {
    id: '1',
    name: 'onMounted()',
    usage: `This hook is typically used for performing side effects that need access to the component's rendered DOM, or for limiting DOM-related code to the client in a server-rendered application.`,
  },
  {
    id: '2',
    name: 'onUpdated()',
    usage: `This hook is called after any DOM update of the component, which can be caused by different state changes.`,
  },
  {
    id: '3',
    name: 'onUnmounted()',
    usage: `Use this hook to clean up manually created side effects such as timers, DOM event listeners or server connections.`,
  },
  {
    id: '4',
    name: 'onBeforeMount()',
    usage: `No DOM nodes have been created yet. It is about to execute its DOM render effect for the first time.`,
  },
  {
    id: '6',
    name: 'onBeforeUnmount()',
    usage: `Component instance is still fully functional.`,
  },
  {
    id: '9',
    name: 'nextTick()',
    usage: `Used immediately after a state change to wait for the DOM updates to complete. You can either pass a callback as an argument, or await the returned Promise.`,
  },
]
</script>
<template>
  <div>
    <h1 class="text-purple-300 pb-4">Scoped Slot</h1>
    <ScopedSlots :items="testData">
      <template #item="{ item, show, showUsage }">
        <div class="flex py-1">
          <div class="w-48">
            {{ item.name }}
          </div>
          <button
            type="button"
            class="w-20 bg-purple-500 rounded-sm py-1 px-2"
            @click="show(item.id)"
          >
            Usage
          </button>
        </div>
        <Transition>
          <div v-if="showUsage === item.id" class="w-1/2 pt-1 pb-4">
            {{ item.usage }}
          </div>
        </Transition>
      </template>
    </ScopedSlots>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 350ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
