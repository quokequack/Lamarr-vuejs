import {createRouter, createWebHistory} from "vue-router";
import Rotas from "./Rotas";
import PaginaNaoEcontrada from "../views/PaginaNaoEcontrada.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: PaginaNaoEcontrada,

        },
        Rotas
    ],
})

export default router;
