import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Portfolio from '../pages/Portfolio.vue'
import Article from '../pages/Article.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/portfolio',
        name:'Portfolio',
        component:Portfolio
    },
    {
        path:'/article',
        name:'Article',
        component:Article
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router