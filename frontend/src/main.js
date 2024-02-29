import './assets/main.css'
import PrimeVue from "primevue/config";
import Lara from "./lara";
import Calendar from "primevue/calendar";
import Password from "primevue/password";
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'



const app = createApp(App)
app.component("Calendar", Calendar);
app.component("Password", Password);
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {unstyled: true, pt: Lara});
app.mount("#app");