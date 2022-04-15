<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const nameText = ref(null)
const nameText2 = ref(null)
const nameText3 = ref(null)

onMounted(() => {
  const nameCircle = (nameText, position) => {
    nameText.value.innerHTML = nameText.value.innerText
      .split('')
      .map((char, i) => `<span style="transform:rotate(${(i + position) * 8}deg)">${char}</span>`)
      .join('')
  }
  nameCircle(nameText, 13)
  nameCircle(nameText2, 0)
  nameCircle(nameText3, 28)
})

const membersName = ['shih', 'yau', 'weiting']
let nameIndex = 0
let backgroundName = ref('yau')

const changeNameTimer = setInterval(() => {
  nameIndex++
  if (nameIndex === 3) nameIndex = 0
  backgroundName.value = membersName[nameIndex]
}, 1000 * 2)
onBeforeUnmount(() => {
  clearInterval(changeNameTimer)
})
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="relative bg-gray-400 w-300px h-300px rounded-full">
      <p ref="nameText" class="nameText absolute w-full h-full uppercase">shih(drum)</p>
      <p ref="nameText2" class="nameText absolute w-full h-full uppercase">yau(gtr/vox)</p>
      <p ref="nameText3" class="nameText absolute w-full h-full uppercase">weiting(bass)</p>
    </div>
  </div>
</template>
<style>
.nameText {
  animation: rotateText 10s linear infinite;
}
.nameText span {
  position: absolute;
  left: 50%;
  font-size: 1em;
  transform-origin: 0 150px;
}

@keyframes rotateText {
  0% {
    transform: rotate(360deg);
  }
}
</style>
