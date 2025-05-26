const Rotas = {
    path: "/",
    component: () => import('../components/Layout.vue'),
    children: [
        {
            path: "",
            component: () => import('../views/PaginaPrincipal.vue'),
        }
    ]
}

export default Rotas;