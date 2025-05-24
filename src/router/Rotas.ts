
const Rotas = {
    path: "/",
    children: [
        {
            path: "",
            component: () => import('../views/PaginaPrincipal.vue'),
        }
    ]
}

export default Rotas;