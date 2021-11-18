<template>
    <form-Produto
            :Produto="Produto"
            :update="true">
    </form-Produto>
</template>
<script>
    import FormProduto from './partias/FormEditProdutoComponent'
    export default {
        name: "EditProdutoComponent",
        created () {
            this.loadProdEdit();
        },
        data () {
            return {
            }
        },
        computed: {
            Produto () {
                return this.$route.params.id
            },
            params () {
                return {
                    id: this.Produto,
                }
            }
        },
        methods: {
            async loadProdEdit(Produto){
                await this.$store.dispatch('loadProdEdit', {...this.params, Produto})
            }
        },
        components: {
            FormProduto
        }
    }

</script>

<style scoped>

</style>