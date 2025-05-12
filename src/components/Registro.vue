<script>
const registro = import.meta.env.VITE_AUTH_API_KEY;

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async registerUser(event) {
      event.preventDefault(); // Prevenir el envío del formulario

      // Validar si las contraseñas coinciden
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(`http://${registro}/auth/register`, requestOptions);
        const result = await response.text();
        console.log(result);
        // Puedes hacer algo con la respuesta, como redirigir o mostrar un mensaje
      } catch (error) {
        console.error("Error al registrar usuario:", error);
      }
    },
  },
};
</script>

<template>
  <section class="pt-30 pb-30 md:pt-10">
    <form class="max-w-90 mx-auto" @submit="registerUser">
      <h1 class="text-center size-20">REGISTO</h1>

      <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Usuario"
          required
        />
      </div>

      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ejemplo@gmail.com"
          required
        />
      </div>

      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div class="mb-5">
        <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repetir Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registro
      </button>

      <br />

      <RouterLink to="/sesion">Ya tengo una cuenta</RouterLink>
    </form>
  </section>
</template>
