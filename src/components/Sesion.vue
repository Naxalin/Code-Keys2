<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const API_AUTH = import.meta.env.VITE_AUTH_API_KEY;


const email = ref('');
const password = ref('');
console.log(API_AUTH);
// Método para manejar el envío del formulario
const submitForm = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Hacer la solicitud fetch
  fetch(`http://${API_AUTH}/auth/login`, requestOptions)
    .then((response) => response.json()) // Suponiendo que la respuesta sea JSON
    .then((result) => {
      console.log(result);  // Mostrar el resultado en la consola
      // Aquí puedes manejar el resultado, por ejemplo, redirigir o mostrar un mensaje de éxito
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>




<template>
    <section class="pt-30 pb-30 md:pt-10" id="app">
        <form class="max-w-96 mx-auto" @submit.prevent="submitForm">
            <h1>Sesion</h1>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                    Electronico</label>
                <input type="email" id="email" v-model="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ejemplo@gmail.com" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                    Contraseña</label>
                <input type="password" v-model="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar
                Sesion</button>
            <br>
            <RouterLink to="/registro">Registrarse</RouterLink>
        </form>

    </section>
</template>
