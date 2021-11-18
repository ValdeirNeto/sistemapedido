import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/users/users'
import ConfigA from './modules/configA/configA'
import configbase from './modules/configbase/configbase'
import Produto from './modules/Produto/Produto'
import log from './modules/log/log'
import preloader from './modules/preloader/preloader'
import auth from './modules/auth/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users: User,
        configA: ConfigA,
        configbase: configbase,
        Produto: Produto,
        log: log,
        preloader,
        auth,
    }
})