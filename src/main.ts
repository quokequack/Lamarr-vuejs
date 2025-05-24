import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'bootstrap/dist/css/bootstrap.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

app.use(router).use(vuetify).mount("#app");
