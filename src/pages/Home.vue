<template>
    <div class="flex flex-wrap items-center justify-around py-20 px-2.5">
        <span class="font-mono">
            <div class="text-xl">Hello, I'm</div>
            <b class=" text-4xl">DENNIS TANDELON</b>
            <div class="text-xl">University Student & Programmer</div>
        </span>
        <span class="relative">
            <img class="z-10 w-72 h-96 rounded-full relative bottom-0" src="../assets/dennis-tandelon.png" alt="Dennis Tandelon">
            <span class="-z-1 w-72 h-72 rounded-full absolute bottom-0 bg-white"></span>
        </span>
    </div>
    <div class="section my-5">
        <b>INTRODUCTION</b>
        <p class="text-justify w-8/12 my-5">
            Computer science student at Bina Nusantara University. Currently, working at BINUS IT Division (Software Solution for Customer Relation Management Team) as a Junior Programmer. Have developed excellent time management skills, which able to balance academic with personal interests and work life.
        </p>
    </div>
    <div class="section secondary-color secondary-text-color">
        <b>WHAT I DO</b>
        <div class="card-container">
            <span class="card">
                <span class="py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                </span>
                <div>Software Engineering</div>
                <p class="py-5 text-justify">
                    Design, Develop, Maintain Softwares Systems. Implement Devops and SDLC into Projects. 
                </p>
            </span>
            <span class="card">
                <span class="py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </span>
                <div>System Development</div>
                <p class="py-5 text-justify">
                    Develop and Code using specific Languages, Framework, Libraries and Design Pattern.
                </p>
            </span>
            <span class="card">
                <span class="py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                </span>
                <div>Data Analytic</div>
                <p class="py-5 text-justify">
                    Analyze, Visualize, and monitor data from Data Sources. Integrate data from data source to systems.
                </p>
            </span>
        </div>
    </div>
</template>

<style>
    .section{
        @apply flex flex-col items-center py-10;
    }
    .section b{
        @apply text-2xl
    }
    .card{
        @apply md:w-1/3 md:mx-5 my-5 p-5 flex-col items-center flex;
        border: 1px solid black;
    }
    .card div{
        @apply text-xl font-bold;
    }
    .card-container{
        @apply flex flex-wrap w-8/12 items-center justify-around;
    }
</style>