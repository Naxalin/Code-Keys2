<template>
    <section>
        <br>
        <div class="max-w-lg mx-auto bg-gray-200 p-6 rounded-xl shadow-lg text-black">
            <h2 class="text-2xl font-bold text-center mb-4">Contacto</h2>
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium">Nombre</label>
                    <input type="text"
                        class="w-full p-2 mt-1 rounded bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                </div>
                <div>
                    <label class="block text-sm font-medium">Correo</label>
                    <input type="email"
                        class="w-full p-2 mt-1 rounded bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                </div>
                <div>
                    <label class="block text-sm font-medium">Asunto</label>
                    <input type="text"
                        class="w-full p-2 mt-1 rounded bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                </div>
                <div>
                    <label class="block text-sm font-medium">Mensaje</label>
                    <textarea rows="4"
                        class="w-full p-2 mt-1 rounded bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                </div>
                <button type="submit"
                    class="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition">Enviar</button>
            </form>
        </div>
    </section>
</template>