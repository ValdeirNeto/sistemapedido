<template>
    <div class="container">
        <div class="col " style="">
            <router-link :to="{name: 'addProduto'}" class="btn btn-primary">
                Adicionar
            </router-link>
        </div>
        <br>
        <b-card :header="caption">
            <div class="form-group">
                <input type="text" class="form-control" v-model="search" placeholder="Search" style="width: 50%; margin-left: 50%">
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead width="400px">
                        <tr class="mb-0 table-outline">
                            <th>Descrição</th>
                            <th>Email</th>
                            <th>Repetição</th>
                            <th width="200">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(back, key) in (Produto, sortedActivity, filteredList)" :key="key">
                            <td>{{back.descricao}}</td>
                            <td>{{back.email}}</td>
                            <td>{{back.function_task}}</td>
                            <td style="width: 20%">
                                <router-link :to="{name: 'loadLog', params: {id: back.id}}" class="btn btn-outline-primary btn-sm">Visualizar</router-link>
                                <router-link :to="{name: 'loadProdEdit', params: {id: back.id}}" class="btn btn-outline-primary btn-sm">Editar</router-link>
                                <a href="#" @click=" confirmDelete (back)" class="btn btn-outline-danger btn-sm">Excluir</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button @click="nextPage" class="float-right btn btn-outline-info btn-sm" style="margin-left: 5px">Proximo <i class="fa fa-arrow-right"></i></button>
            <button @click="prevPage" class="float-right btn btn-outline-info btn-sm"><i class="fa fa-arrow-left"></i> Anterior</button>
        </b-card>

        <b-modal title="Excluir Produto" class="modal-danger" v-model="dangerModal" @ok="destroy()" ok-variant="danger">
            Deseja realmente deletar este Produto?
        </b-modal>
        <br>
    </div>
</template>

<script>
    import PaginationComponent from '../../../layouts/PaginationComponent';

    export default {
        name: "ProdutoComponent",
        props: {
            caption: {
                type: String,
                default: 'Lista de Produtos'
            },
        },
        created () {
            this.loadProduto()
        },
        data: () => ({
            currentSort:'descricao',
            currentSortDir:'asc',
            search: '',
            searchSelection: '',
            pageSize: 10,
            currentPage: 1,
            update: false,
            dangerModal: false,
        }),
        methods: {
            sort:function(s) {
                if(s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
                this.currentSort = s;
            },
            nextPage:function() {
                if((this.currentPage*this.pageSize) < this.Produto.length) this.currentPage++;
            },
            prevPage:function() {
                if(this.currentPage > 1) this.currentPage--;
            },
            async loadProduto(currentPage) {
                await this.$store.dispatch('loadProduto', {...this.params, currentPage})
            },
            getBadge (status) {
                return status === 't' ? 'success'
                    : status === 'f' ? 'danger' : 'primary'
            },
            confirmDelete (back) {
                this.ProdutoId = back.id
                this.dangerModal = true
            },
            destroy () {
                this.$store.dispatch('destroyProduto', this.ProdutoId)
                    .then(() => {
                        this.ProdutoId = null
                        this.loadProduto()
                    })
            },
        },
        computed: {
            Produto() {
                return this.$store.state.Produto.items.filtro
            },
            filteredList() {
                let rows = (this.Produto !== undefined) ? this.Produto : []
                return rows.filter((data) => {
                    let descricao = data.descricao.toLowerCase().match(this.search.toLowerCase());
                    let email = data.email.toLowerCase().match(this.search.toLowerCase());
                    let function_task = data.function_task.match(this.search);
                    return descricao || email || function_task;
                }).filter((row, index) => {
                    let start = (this.currentPage-1)*this.pageSize;
                    let end = this.currentPage*this.pageSize;
                    if(index >= start && index < end) return true;
                });
            },
            sortedActivity:function() {
                let rows = (this.Produto !== undefined) ? this.Produto : []
                return rows.sort((a,b) => {
                    let modifier = 1;
                    if(this.currentSortDir === 'desc') modifier = -1;
                    if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                    return 0;
                }).filter((row, index) => {
                    let start = (this.currentPage-1)*this.pageSize;
                    let end = this.currentPage*this.pageSize;
                    if(index >= start && index < end) return true;
                });
            },
        },

        components: {
            paginate: PaginationComponent,
        }
    }


</script>

<style scoped>

</style>