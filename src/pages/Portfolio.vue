<script setup>
    import { ref } from 'vue'
    import portfolios from '../storage/Portfolios';

    const portfolio = ref(portfolios)
    
</script>
<template>
    <div class="flex flex-col items-center justify-around pt-20 mx-auto ">
        <h1 class="text-5xl">Portofolio<b>'s</b></h1>
        <p>Project & Design</p>
    </div>
    <div class="flex flex-wrap items-center justify-around pt-20 mx-auto">
        <div v-for="project in portfolio" class="flex md:flex-row items-center flex-col bg-white w-11/12 mt-2 p-5 rounded-xl">
            <img class="md:w-3/12 w-7/12 h-max" :src="project.images" :alt="project.name">
            <div class=" flex flex-col md:ml-5 sm:my-5">
                <div class="text-black text-2xl font-bold">{{ project.name }}</div>
                <div class="text-black">{{ project.description }}</div>
                <div class="flex flex-row">
                    <div v-if="project.prototype_link != NULL" class="prototype-btn">
                        <a :href="project.prototype_link">Prototype</a>    
                    </div>
                    <div v-if="project.project_link != NULL" class="project-btn">
                        <a :href="project.project_link">Project</a>    
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-around bg-white text-black md:w-1/3 w-10/12 md:my-10 my-5 p-5 rounded-full hover:opacity-80">
            <a class="flex justify-around w-full text-xl items-center" href="https://github.com/Mioshido30">
                <div class="flex flex-wrap items-center">
                    <div class="pr-3">Find More in My Github </div>
                    <img src="../assets/github-mark.png" alt="github-mark" class="w-8 h-8">
                </div>
            </a>
        </div>
    </div>
</template>

<style>
    .prototype-btn{
        @apply bg-blue-900 w-24 py-3 px-2 text-center rounded-2xl hover:opacity-80 my-3 mr-2;
    }
    .project-btn{
        @apply bg-green-500 w-24 py-3 px-2 text-center rounded-2xl hover:opacity-80 my-3;
    }
</style>