<script setup lang="ts">

</script>

<template>

    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-neutral-700 dark:text-white">Entre em contato</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-neutral-700 dark:text-white">Email</label>
                <input type="email" name="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-neutral-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com" required>
            </div>
            <div>

                <label for="message" class="block mb-2 text-sm font-medium text-neutral-700 dark:text-white">
                    Mensagem</label>
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-neutral-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Um pequeno comentário..."></textarea>

            </div>

            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar mensagem</button>

        </form>
    </div>

</template>

<style lang="scss" scoped></style>