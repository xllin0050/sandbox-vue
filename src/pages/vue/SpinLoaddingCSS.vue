<template>
  <div>
    <div class="w-60px h-60px">
      <div
        class="box-border w-full h-full border-10px border-solid border-gray-800 border-t-blue-300 border-b-pink-200 rounded-1/2 spin-loadding"
      >
        <div
          class="box-border w-full h-full border-10px border-solid border-gray-800 border-t-green-400 border-b-red-400 rounded-1/2 spin-loadding-slow"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scope>
@keyframes spinCircle {
  0% {
    -webkit-transform: scale(1) rotate(360deg);
    transform: scale(1) rotate(360deg);
  }
  50% {
    -webkit-transform: scale(0.8) rotate(-360deg);
    transform: scale(0.8) rotate(-360deg);
  }
}
@-webkit-keyframes spinCircle {
  0% {
    -webkit-transform: scale(1) rotate(360deg);
    transform: scale(1) rotate(360deg);
  }
  50% {
    -webkit-transform: scale(0.8) rotate(-360deg);
    transform: scale(0.8) rotate(-360deg);
  }
}
.spin-loadding {
  -webkit-animation: spinCircle 2.5s linear infinite;
  animation: spinCircle 2.5s linear infinite;
}
.spin-loadding-slow {
  -webkit-animation: spinCircle 3s linear infinite;
  animation: spinCircle 3s linear infinite;
}
</style>
