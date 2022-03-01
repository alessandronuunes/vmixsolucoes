<template>
  <div class="bg-white">
    <header>
      <div class="relative bg-white">
        
        <div class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" class="flex items-center">
              <img class="h-8 w-auto sm:h-10" src="@/assets/img/pack-logo/color/color_vertical_compact.png" alt="">
              <span class=""></span>
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <nuxt-link :to="{ path: '/',hash:'#contact'}" class=" overscroll-automl-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Contact</nuxt-link>
          </div>
        </div>

        <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <a href="#" class="flex items-center">
                    <img class="h-8 w-auto sm:h-10" src="@/assets/img/logo.png" alt="vmix-solucoes">
                    <span class="">VMIX</span>
                  </a>
                  <a href="#" class=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Fale Conosco </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
                <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">  Gerencie o seu atendimento </span>
                  <span class="block text-indigo-200"> sem limites de atendentes </span>
                </h1>
                <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Com as soluções da VMIX você oferece uma comunicação automatizada e eficiente sem perder o lado humano.
                </p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a target="_BLANK" href="https://wa.me/554331421104?&text=Olá,%20Gostaria%20de%20conhecer%20o%20chatmix" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Conheça o chatmix </a>
                    <a target="_BLANK" href="https://wa.me/554331421104?&text=Ola%20gostaria%20de%20testar%20gratis%20o%20chatmix%20por%207%20dias" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Teste Gratis por 7 Dias </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-gray-100">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              Confiado por mais de 300 empresas em todo o país
            </p>
            <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale-0">
                <img class="h-12 " src="@/assets/img/clients/alien-logo.png" alt="Alien Network">
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale-0">
                <img class="h-12  grayscale-0" src="@/assets/img/clients/conexao-net-color.png" alt="Mirage">
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor">
              </div>
              <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation">
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- More main page content here... -->
    </main>
  </div>
</template>

<script>
export default  {
  name: 'HeaderSite',
  components: {
  },
}
</script>
