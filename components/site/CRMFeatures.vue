<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
      <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 class="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            chatmix
          </h2>
          <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Conheça nossa Solução
          </p>
          <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Atendimento em tempo real e personalizado, mesmo fora do horário comercial? É possível usando chatbots com Inteligência Artificial e comunicação humanizada da VMIX.
          </p>
        </div>
        <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="@/assets/img/chatmix.png" alt="">
        </div>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="lg:col-span-1">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Conheça algumas funcionalidades da nossa Solução
            </h2>
          </div>
          <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div>
              <dt>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Atendimento automático com chatbots
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                A VMIX possui uma solução de atendimento a clientes com inteligência artificial que combina chatbots (assistentes virtuais) com atendimento humano em diversos canais.
              </dd>
            </div>
            <div>
              <dt>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/mail -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Auditoria dos atendimentos
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Possua o controle de todos os seus atendimentos na palma da sua mão, atravez da nossa ferramenta de auditoria.
              </dd>
            </div>
            <div>
              <dt>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/scale -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                   Multi Atendimento
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Coloque toda a sua equipe para trabalhar, sem custo adicional, aqui os atendentes são ilimitados
              </dd>
            </div>

            <div>
              <dt>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <!-- Heroicon name: outline/lightning-bolt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Notificação em Massa
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Envie mensagens aos seus clientes de forma rapida e integrada ao seu ERP
              </dd>
            </div>

            
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
