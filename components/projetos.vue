<script setup lang="ts">

</script>

<template>
    <!-- 
    <div class="p-2 hover:scale-90 hover:duration-300 hover:ease-in-out ">
      
        <a href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-800 dark:text-white">NuxtBike</h5>
            <p class="text-neutral-700 dark:text-gray-400">Um pequeno projeto CRUD desenvolvido utilizando o framework Nuxt3.js.</p>
        </a>
    </div>

    <div class="p-2 hover:scale-90 hover:duration-300 hover:ease-in-out ">
        <a href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-800 dark:text-white">Lista de Produtos</h5>
            <p class="text-neutral-700 ">Aqui um sistema que consome uma Api de produtos.</p>
        </a>
    </div>

    <div class="p-2 hover:scale-90 hover:duration-300 hover:ease-in-out ">
        <a href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-800 dark:text-white">X-men</h5>
            <p class="text-neutral-700 dark:text-gray-400">Lista com alguns dos personagens do universo de X-men.</p>
        </a>
    </div> -->

    <div class=" grid grid-cols-2 gap-8 p-16">



        <div class="mb-16">
           
            <div class=" border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                
                <div class=" rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    
                    <img src="../public/img/nuxtCrud.png">
                    
                    <!-- <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                        class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                        class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""> -->
                </div>
            </div>
            <div class="-ml-5 bg-gray-900 rounded-b-xl  h-[17px] w-[550px] ">
            </div>
        </div>

        <div>
          
           <h2 class="font-bold text-3xl mb-8 mt-6 ">NuxtBike</h2>
           <p class="text-justify text-neutral-800">Um sistema desenvolvido para gerenciar a venda de bicicletas ao qual o usuário pode vender, cadastrar, atualizar
             e deletar registros do sistema, além de ter acesso ao relatório de vendas. Neste projeto foram utilizados além do framework Nuxt.js, a biblioteca PINIA para o gerenciamento de estado.</p>
             <button type="button" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confira aqui</button>
            
        </div>
        

        <!----->

        <div class="mb-16">
           
           <div class=" border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
               
               <div class=" rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                   <img src="../public/img/nuxtProd.png">
                <!-- <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                       class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="">
                   <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                       class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""> -->
               </div>
           </div>
           <div class="-ml-5 bg-gray-900 rounded-b-xl  h-[17px] w-[550px] ">
           </div>
       </div>

       <div>
         
          <h2 class="font-bold text-3xl mb-8 mt-6 ">Produtos</h2>
          <p class="text-justify text-neutral-800">Neste projeto apresento uma lista de produtos a partir de uma API. O usuário pode escolher e ver detalhes sobre cada produto. </p>
          <button type="button" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confira aqui</button>
            
        </div>


        <!---->

        <div>
           
           <div class=" border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
               
               <div class=" rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                <img src="../public/img/nuxtXme.png" class="h-72">   
                <!-- <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                       class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="">
                   <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                       class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""> -->
               </div>
           </div>
           <div class="-ml-5 bg-gray-900 rounded-b-xl  h-[17px] w-[550px] ">
           </div>
       </div>

       <div>
         
          <h2 class="font-bold text-3xl mb-8 mt-6 ">Xmen</h2>
          <p class="text-justify text-neutral-800">Um pequeno projeto desenvolvido utilizando Vue.js/Nuxt.js, JSON e tailwind css em que permite selecionar um personagem e ver detalhes sobre ele.</p>
          <button type="button" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confira aqui</button>
            
        </div>

</div>
</template>

<style lang="scss" scoped></style>