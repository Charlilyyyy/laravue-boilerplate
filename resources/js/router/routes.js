import { createRouter, createWebHistory } from 'vue-router'

import Home from '../home/App.vue'

export default createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
    ]
})