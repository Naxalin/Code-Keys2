<script setup>
import Main from '@/components/Main.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';




// const app = new Vue({
//   el: '#app',
//   data: {
//     name: ''
//   },
//   onMounted() {
//     console.log('Component mounted.');
//     name.value = localStorage.getItem('name');
//   },
//   watch: {
//     name: function (val) {
//       console.log(val)
//     }
//   }
// })
</script>

<template>

  <DefaultLayout>
    <Main />
  </DefaultLayout>


</template>
