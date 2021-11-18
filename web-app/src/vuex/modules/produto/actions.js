import axios from 'axios'
import { URL_BASE } from '../../../configs/configs'

const RESOURCE = 'produto'

const CONFIG = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

export default {
    loadProduto (context, params) {
        // Inicia Preloader
        context.commit('LOADING', true)

        axios.get(`${URL_BASE}${RESOURCE}`,{params})
            .then(response => context.commit('produto_LOAD', response.data))
            .catch(error => console.log(error))
            .finally(() => context.commit('LOADING', false))
    },



    loadProdEdit (context, id) {
        context.commit('LOADING', true)

        return new Promise((resolve, reject) => {
            axios.get(`${URL_BASE}${RESOURCE}/${id.id}`)
                    .then(response => context.commit('produto_LOAD', response.data))
                    .catch(error => reject(error))
                    .finally(() => context.commit('LOADING', false))
        })
    },

    addProd (context, formData) {
        context.commit('LOADING', true)

        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIG)
                    .then(response => resolve())
                    .catch(error => reject(error.response.data))
                    .finally(() => context.commit('LOADING', false))
        })
    },


    editProd (context, formData) {
        context.commit('LOADING', true)

        formData.append('_method', 'POST')
        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIG)
                    .then(response => resolve())
                    .catch(error => reject(error.response.data.errors))
                    .finally(() => context.commit('LOADING', false))
        })
    },


    destroyProduto (context, id) {
        context.commit('LOADING', true)

        return new Promise((resolve, reject) => {
            axios.delete(`${URL_BASE}${RESOURCE}/${id}`)
                    .then(response => resolve())
                    .catch(error => reject(error.response.data))
                    .finally(() => context.commit('LOADING', false))
        })
    },
}