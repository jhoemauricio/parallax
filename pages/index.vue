<script setup>



</script>

<template >
  <div class="fixed w-screen shadow-md ">
    <Header></Header>
  </div>

  <div class="min-h-screen flex justify-center items-center bg-[url('/img/paralax.jpg')] bg-cover bg-fixed" id="home">
    <div class="grid grid-cols-2 gap-8">
      <div class="col-span-2">
        <h1 class="max-w-lg text-6xl font-extrabold leading-normal text-cyan-700 text-center">OLÁ! MEU NOME É JHOSEPH</h1>
      </div>
      <div class="col-span-2">
        <p class="text-center text-gray-800 text-2xl ">Desenvolvedor web Frontend</p>
      </div>

    </div>


  </div>

  <div class="p-16 mt-2" id="projeto">
   
    <h2 class="font-bold text-3xl mt-2 text-neutral-700 " >Projetos</h2>
    <p class="mt-4 text-neutral-800 ">Alguns do projetos os quais desenvolvi usando o Framework Front-End Vue.js/Nuxt.js
    </p>
  
  </div>

  <div class="min-h-screen flex items-center justify-between  bg-zinc-100 bg-cover bg-fixed">
    <Projetos></Projetos>
  </div>

  <div class="p-16 mt-2" id="sobre">
    <h2 class="font-bold text-3xl mt-2 text-neutral-700">Sobre</h2>
    <p class="mt-4 text-neutral-800"></p>
  </div>

  <div class=" flex justify-center items-center bg-zinc-100 bg-cover bg-fixed">

    <div class="grid grid-cols-2 gap-12 ">
      <!--Hard Skills-->
      <div class="flex justify-center p-16 ">
        <div class="grid grid-cols-2">
          <div class="col-span-2">
            <img class="border-4 p-2 border-cyan-600 w-36 h-36 rounded-full object-fill" src="/img/perfil.jpg" alt="Rounded avatar">
          </div>

          <div class="w-96 p-2 mb-96 -mt-40">
            <h3 class="text-lg font-semibold text-gray-900">Olá!</h3>
            <p class="font-semibold text-gray-900">Um pouco sobre mim</p>
            <p class="text-neutral-800 mb-4 text-justify">Sou formado em análise e desenvolimento de sistemas com
              especialização em desenvolvimento de sistemas para ambiente web. Atualmente tenho me dedicado
              ao Frontend.</p>
            <h2 class="mb-4 text-lg font-semibold">Hard skills</h2>

            <div class=" p-4 grid grid-cols-3 space-y-1.5 flex justify-center items-center">
              <div
                class="flex items-center justify-center w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                HTML5
              </div>
              <div
                class="flex items-center justify-center w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Css3
              </div>
              <div
                class="flex items-center justify-center w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Javascript
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                jQuery
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Bootstrap
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Tailwind Css
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Vue.js
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Nuxt.js
              </div>
              <div
                class="flex items-center justify-center w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Git
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                GitHub
              </div>
              <div
                class="flex items-center justify-center  w-24 h-10 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                Supabase
              </div>

            </div>









          </div>

        </div>





      </div>

      <!--Parte Acadêmica-->
      <div class="p-20">
        <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Formação Acadêmica</h2>

        <ul class="mb-4">
         
          <li class=" flex items-baseline gap-6">
       
            <div class=" bg-gray-400 h-20 w-[1px]">
              <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

              </div>
              <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
                <p><b>IFAM - 2011</b></p>
                <p class="mt-2">Técnico em Informática</p>
            </div>
            </div>

          </li>
          <li class=" flex items-baseline gap-6">
       
       <div class=" bg-gray-400 h-20 w-[1px]">
         <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

         </div>
         <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
           <p><b>UNIP - 2017</b></p>
           <p class="mt-2">Graduado em Tecnologia de análise e desenvolvimento de sistemas</p>
       </div>
       </div>

     </li>

     <li class=" flex items-baseline gap-6 pb-5">
       
       <div class=" bg-gray-400 h-20 w-[1px]">
         <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

         </div>
         <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
           <p><b>FAMETRO - 2020</b></p>
           <p class="mt-2">Especialização em desenvolvimento de sistemas para ambiente web</p>
       </div>
       </div>

     </li>

        </ul>

        <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Certificações</h2>
        <ul class="mb-4">
         
         <li class=" flex items-baseline gap-6">
      
           <div class=" bg-gray-400 h-20 w-[1px]">
             <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

             </div>
             <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
               <p><b>Digital innovation - 2022</b></p>
               <p class="mt-2">Lógica de Programação essencial</p>
           </div>
           </div>

         </li>
         <li class=" flex items-baseline gap-6">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Digital innovation - 2022</b></p>
          <p class="mt-2">Curso de introdução ao git e gitHub</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Digital innovation - 2022</b></p>
          <p class="mt-2">Criação de web sites com HTML5 e Css3</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Digital innovation - 2022</b></p>
          <p class="mt-2">Programação para internet com javascript</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Digital innovation - 2022</b></p>
          <p class="mt-2">Construindo pagina para internet com bootstrap</p>
      </div>
      </div>

    </li>
    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Instituto TIMTEC - 2022</b></p>
          <p class="mt-2">Designer de interfaces com Css3</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Especializa TI - 2023</b></p>
          <p class="mt-2">Introdução ao Vuejs3</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Udemy - 2023</b></p>
          <p class="mt-2">Vue JS3: Desenvolvimento Web Moderno com VueX e VueRouter</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Udemy - 2023</b></p>
          <p class="mt-2">Kanbam aplicado ao desenvolvimento de software</p>
      </div>
      </div>

    </li>

    <li class=" flex items-baseline gap-6 ">
      
      <div class=" bg-gray-400 h-20 w-[1px]">
        <div class="z-1 ml-[-3px] flex items-center justify-center rounded-full bg-gray-400 w-2 h-2">

        </div>
        <div class="text-sm text-gray-600 w-72 p-4 -mt-7">
          <p><b>Udemy - 2023</b></p>
          <p class="mt-2">Elicitação de requisitos e histórias para aplicações</p>
      </div>
      </div>

    </li>

       </ul>
       
      
       
        <!-- <ul>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Digital innovation - 2022</b></p>
              <p class="mt-2 ">Lógica de Programação essencial</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Digital innovation - 2022</b></p>
              <p class="mt-2 ">Curso de introdução ao git e gitHub</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Digital innovation - 2022</b></p>
              <p class="mt-2 ">Criação de web sites com HTML5 e Css3</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Digital innovation - 2022</b></p>
              <p class="mt-2 ">Programação para internet com javascript</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Digital innovation - 2022</b></p>
              <p class="mt-2 ">Construindo pagina para internet com bootstrap</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Instituto TIMTEC - 2022</b></p>
              <p class="mt-2 ">Designer de interfaces com Css3</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Udemy - 2023</b></p>
              <p class="mt-2 ">Introdução ao Vuejs3</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Udemy - 2023</b></p>
              <p class="mt-2 ">Vue JS3: Desenvolvimento Web Moderno com VueX e VueRouter</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Udemy - 2023</b></p>
              <p class="mt-2 ">Kanbam aplicado ao desenvolvimento de software</p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[3.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <div class="rounded-full bg-gray-400 w-2 h-2">

              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p><b>Udemy - 2023</b></p>
              <p class="mt-2 ">Elicitação de requisitos e histórias para aplicações</p>
            </div>
          </li>
        </ul> -->

      


      </div>

    </div>
  </div>

  <div class="p-16 mt-2" id="contato">
    <h2 class="font-bold text-3xl mt-2 text-neutral-700">Contato</h2>
    <p class="mt-4 text-neutral-800">
      Envie sua mensagem para mim!
    </p>
  </div>

  <div class="min-h-screen flex justify-center items-center bg-[url('/img/paralax.jpg')] bg-cover bg-fixed">
    <Formulario></Formulario>
  </div>

<Rodape></Rodape></template>

<style scoped>#sobre {
  scroll-behavior: smooth;
  scroll-padding: var(--scroll-padding, 5rem);
}</style>