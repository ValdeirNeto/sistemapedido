import axios from 'axios'
import { URL_BASE } from '../../../configs/configs'

const RESOURCE = 'pedidoItem'

const CONFIG = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

export default {
    loadPedidoItem (context, params) {
        // Inicia Preloader
        context.commit('LOADING', true)

        axios.get(`${URL_BASE}${RESOURCE}`,{params})
            .then(response => context.commit('pedido_item_LOAD', response.data))
            .catch(error => console.log(error))
            .finally(() => context.commit('LOADING', false))
    },



    loadPedidoItemEdit (context, id) {
        context.commit('LOADING', true)

        return new Promise((resolve, reject) => {
            axios.get(`${URL_BASE}${RESOURCE}/${id.id}`)
                    .then(response => context.commit('pedido_item_LOAD', response.data))
                    .catch(error => reject(error))
                    .finally(() => context.commit('LOADING', false))
        })
    },

    addPedidoItem (context, formData) {
        context.commit('LOADING', true)

        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIG)
                    .then(response => resolve())
                    .catch(error => reject(error.response.data))
                    .finally(() => context.commit('LOADING', false))
        })
    },


    editPedidoItem (context, formData) {
        context.commit('LOADING', true)

        formData.append('_method', 'POST')
        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIG)
                    .then(response => resolve())
                    .catch(error => reject(error.response.data.errors))
                    .finally(() => context.commit('LOADING', false))
        })
    },


    destroyPedidoItem (context, id) {
        context.commit('LOADING', true)

        return new Promise((resolve, reject) => {
            axios.delete(`${URL_BASE}${RESOURCE}/${id}`)
                    .then(response => resolve())
                    .catch(error => reject(error.response.data))
                    .finally(() => context.commit('LOADING', false))
        })
    },
}