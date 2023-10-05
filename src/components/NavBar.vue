<script setup>
    import routes from '../storage/Routes';
    import {ref} from 'vue'

    const name = ref('menu');

    function Hamburger() {
        let menu_list = document.querySelector('[name="menulist"]')
        let hamburger = document.querySelector('[name="hamburg"]');
        let close = document.querySelector('[name="hamburgx"]');;

        if(name.value === 'menu'){
            name.value = 'close'
            menu_list.classList.remove('top-[-600px]')
            menu_list.classList.remove('opacity-0')
            hamburger.classList.add('hidden')
            close.classList.remove('hidden')
        }else{
            name.value = 'menu'
            menu_list.classList.add('top-[-600px]')
            menu_list.classList.add('opacity-0')
            hamburger.classList.remove('hidden')
            close.classList.add('hidden')
        }

    }

    function ConnectWithMe() {
        window.open('https://linktr.ee/dennistandelon');
    }
</script>

<template>
    <nav class="main-text-color p-3 z-50 bg-blue-900 bg-opacity-80 shadow md:flex md:items-center md:justify-around fixed w-full">
        <div class="flex justify-between items-center">
            <span class=" font-mono text-2xl">Dennis Tandelon</span>
            <button @click="Hamburger()">
                <svg name="hamburg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-6 h-6 mr-2 md:hidden cursor-pointer">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                <svg name="hamburgx" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20" stroke-width="1.5" stroke="white" class="w-6 h-6 mr-2 md:hidden cursor-pointer hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <ul name="menulist" class="navbar-menu-list top-[-600px] opacity-0 mt-3 md:mt-0">
            <li v-for="route in routes" class="navbar-menu">
                <router-link :to="route.path" class="navbar-menu-text">{{ route.name }}</router-link>
            </li>
            <button @click="ConnectWithMe()" class="navbar-btn">
                CONNECT
            </button>
        </ul>
    </nav>
</template>
