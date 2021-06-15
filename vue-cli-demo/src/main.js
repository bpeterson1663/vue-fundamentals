import { createApp } from 'vue'
import App from './App.vue'

const vm = createApp(App)

//vm.component('Greeting', Greeting) Registering a global component
vm.mount('#app')
