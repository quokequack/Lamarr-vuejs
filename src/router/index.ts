import {createRouter, createWebHistory} from "vue-router";
import Rotas from "./Rotas";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/PaginaNaoEcontrada.vue')
        },
        Rotas
    ],
})

export default router;
