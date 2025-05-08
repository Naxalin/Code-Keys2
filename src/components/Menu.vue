<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <nav class="fixed top-0 z-50 w-full  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <a href="#" class="flex ms-2 md:me-24">
                        <img src="https://media.istockphoto.com/id/1642381175/es/vector/de-cine.jpg?s=612x612&w=0&k=20&c=I7WJnZROJxKx9T3V2H3aPdnubn2sK4ICJxaIYb_fCBk="
                            class="h-8 me-3" alt="FlowBite Logo" />
                        <span
                            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Peliculonas</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <div>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full"
                                    src="data:image/jpeg;base64,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"
                                    alt="user photo">
                            </button>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown-user">
                            <div class="px-4 py-3 hidden" role="none">
                                <p class="text-sm text-gray-900 dark:text-white" role="none">
                                    Neil Sims
                                </p>
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    CodeKeys@gmail.com
                                </p>
                            </div>
                            <ul class="py-1" role="none">
                                <li class="hidden">
                                    <a href="#"
                                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                        <path
                                            d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />

                                        <span class="flex-1 ms-3 whitespace-nowrap">Usuario</span>
                                    </a>
                                </li>
                                <li class="hidden">
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Favoritos</a>
                                </li>
                                <li class="hidden">
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Ajustes</a>
                                </li>
                                <li>
                                    <RouterLink to="/sesion"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Iniciar Sesion</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <RouterLink to="/"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                            viewBox="0 0 48 48">
                            <path
                                d="M 23.980469 0.984375 C 13.643469 0.984375 11.291453 8.1771563 8.3144531 17.285156 C 8.0764531 18.014156 7.832125 18.763344 7.578125 19.527344 C 6.947125 21.418344 6.3665156 22.900031 5.8535156 24.207031 C 4.7535156 27.012031 3.9609375 29.039109 3.9609375 32.037109 C 3.9609375 38.768109 11.839078 44.033438 12.205078 44.273438 C 12.383078 44.385438 16.625859 47.003906 21.005859 47.003906 L 27.005859 47.003906 C 31.385859 47.003906 35.618938 44.383094 35.835938 44.246094 C 36.167938 44.024094 43.964844 38.723 43.964844 32 C 43.963844 28.961 43.172125 26.910312 42.078125 24.070312 C 41.587125 22.798313 41.033828 21.354391 40.423828 19.525391 C 40.179828 18.792391 39.943844 18.076 39.714844 17.375 C 36.715844 8.218 34.347469 0.984375 23.980469 0.984375 z M 19 10 C 21 10 22 13 24 13 C 26 13 27 10 29 10 C 30.291 10 31.392422 10.746156 32.232422 11.910156 C 32.451422 13.316156 32.616328 14.920547 32.736328 16.435547 C 32.192328 15.628547 31.434 15 30.375 15 C 28.375 15 26 19 26 20 C 26 20 26 21 27 21 C 28 21 29 17 30.75 17 C 31.603 17 32.318375 17.545875 32.859375 18.171875 C 32.956375 19.754875 33 21.072641 33 21.681641 C 33 22.890641 33.291875 23.808141 33.546875 24.619141 C 33.790875 25.389141 34 26.054078 34 26.955078 C 34 28.447078 33.476703 29.651453 32.970703 30.814453 C 32.493703 31.911453 32 33.044891 32 34.337891 C 32 36.039891 31.999437 38.158828 31.273438 38.923828 C 30.558438 39.677828 29.860547 40.658375 29.185547 41.609375 C 28.634547 42.384375 27.972563 43.308281 27.351562 43.988281 C 27.235562 43.993281 27.121859 44.001953 27.005859 44.001953 L 21.005859 44.001953 C 20.886859 44.001953 20.766484 43.993281 20.646484 43.988281 C 20.025484 43.307281 19.365453 42.384375 18.814453 41.609375 C 18.138453 40.659375 17.439609 39.678828 16.724609 38.923828 C 15.999609 38.158828 16 36.039891 16 34.337891 C 16 33.044891 15.506297 31.9095 15.029297 30.8125 C 14.523297 29.6495 14 28.447078 14 26.955078 C 14 26.055078 14.209125 25.391094 14.453125 24.621094 C 14.708125 23.810094 15 22.890641 15 21.681641 C 15 21.085641 15.129641 19.646281 15.306641 17.988281 C 15.825641 17.443281 16.482 17 17.25 17 C 19 17 20 21 21 21 C 22 21 22 20 22 20 C 22 19 19.625 15 17.625 15 C 16.724 15 16.041484 15.454938 15.521484 16.085938 C 15.747484 14.149938 15.996156 12.224109 16.160156 11.162109 C 16.940156 10.406109 17.902 10 19 10 z M 19.496094 22.001953 A 1.497 1.499 0 1 0 19.496094 25 A 1.497 1.499 0 1 0 19.496094 22.001953 z M 28.494141 22.001953 C 27.666141 22.001953 26.996094 22.673953 26.996094 23.501953 C 26.996094 24.329953 27.667141 25 28.494141 25 C 29.321141 25 29.992188 24.329953 29.992188 23.501953 C 29.992188 22.673953 29.321141 22.001953 28.494141 22.001953 z M 17.515625 26.017578 C 17.243625 26.009578 17.015812 26.223141 17.007812 26.494141 L 17.007812 26.5 C 17.007812 28.125 18 28.125 18 29 C 18 29.75 17 30.375 17 31.625 C 17 34.75 19.75 35 20.75 35 L 27.25 35 C 28.25 35 31 34.75 31 31.625 C 31 30.375 30 29.75 30 29 C 30 28.125 30.992188 28.125 30.992188 26.5 L 30.992188 26.494141 C 30.983187 26.222141 30.755375 26.008578 30.484375 26.017578 C 30.221375 26.025578 30.007813 26.241953 30.007812 26.501953 C 30.007812 27.501953 29 27.876953 29 29.001953 C 29 30.251953 29.625 30.501953 29.625 31.501953 C 29.625 31.960953 29.406 33.001953 28 33.001953 L 20 33.001953 C 18.594 33.001953 18.375 31.960953 18.375 31.501953 C 18.375 30.501953 19 30.251953 19 29.001953 C 19 27.876953 17.992188 27.501953 17.992188 26.501953 C 17.992188 26.241953 17.778625 26.025578 17.515625 26.017578 z M 24.125 36.025391 C 22.408 36.025391 21.030672 36.887656 20.263672 37.472656 C 19.875672 37.768656 19.756422 38.298469 19.982422 38.730469 L 20.044922 38.847656 C 20.259922 39.258656 20.730688 39.467562 21.179688 39.351562 C 21.832687 39.183563 22.842609 38.974609 23.974609 38.974609 C 25.228609 38.974609 26.218844 39.189047 26.839844 39.373047 C 27.279844 39.504047 27.750375 39.320781 27.984375 38.925781 L 28.121094 38.695312 C 28.380094 38.259313 28.270187 37.697625 27.867188 37.390625 C 27.111188 36.814625 25.776 36.025391 24.125 36.025391 z">
                            </path>
                        </svg>
                        <span class="ms-3">Inicio</span>
                    </RouterLink>
                </li>
                <li>
                    <a href="/ultimas"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 18 18">
                            <path
                                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Juegos mas Recientes</span>
                    </a>
                </li>
                <li>
                    <RouterLink to="/estrenos"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Estrenos de Juegos</span>

                    </RouterLink>
                </li>
                <li>
                    <a href="./catalogo" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100
                        dark:hover:bg-gray-700 group">
                        <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 18 20">
                            <path
                                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Juegos</span>
                    </a>
                </li>
                <li>
                    <RouterLink to="/sesion" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100
                        dark:hover:bg-gray-700 group">
                        <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                            <path
                                d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                            <path
                                d="M.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Iniciar Sesion</span>
                    </RouterLink>

                </li>
            </ul>
        </div>
    </aside>
</template>
