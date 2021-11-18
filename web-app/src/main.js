// Recupera o arquivo com as configurações iniciais do projeto
require('./bootstrap')
window.Vue = require('vue')

import VueSwal from 'vue-swal'
import App from './App'

import BootstrapVue from 'bootstrap-vue'

import router from './routes/routers'
import store from './vuex/store'
import Vue from 'vue';
import Gravatar from 'vue-gravatar';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

Vue.use(VueToast, {
    // One of options
    position: 'top-right'
})
Vue.component('v-gravatar', Gravatar);

Vue.use(VueSwal)
Vue.use(BootstrapVue)

Vue.component('preloader-component', require('./components/layouts/PreloaderComponent'))

// Instância do Vue JS, e seletor
new Vue({
    router,
    store,
    el: '#app',
    template: '<App>',
    components: {
        App
    }
})


store.dispatch('checkLogin')
        .then(() => router.push({name: 'dashboard'}))
        .catch((error) => router.push({name: 'auth'}))
