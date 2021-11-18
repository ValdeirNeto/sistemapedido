<template>
    <div class="container">
        <div class="col " style="">
            <router-link :to="{name: 'addUsers'}" class="btn btn-primary">
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
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th width="200">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, key) in (users, filteredList)" :key="key">
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td><b-badge :variant="getBadge(user.status)">{{(user.status === 'f') ? 'Inativo' : 'Ativo' }}</b-badge></td>
                            <td>
                                <router-link :to="{name: 'loadUser', params: {id: user.id}}" class="btn btn-outline-primary btn-sm">Editar</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button @click="nextPage" class="float-right btn btn-outline-info btn-sm" style="margin-left: 5px">Proximo <i class="fa fa-arrow-right"></i></button>
            <button @click="prevPage" class="float-right btn btn-outline-info btn-sm"><i class="fa fa-arrow-left"></i> Anterior</button>

        </b-card>
    </div>
</template>

<script>
    import PaginationComponent from '../../../layouts/PaginationComponent';

    export default {
        props: {
            caption: {
                type: String,
                default: 'Lista de Usuarios'
            },
        },
        created () {
            this.loadUsers()
        },
        data: () => ({
            rows: [],
            currentSort:'name',
            currentSortDir:'asc',
            search: '',
            searchSelection: '',
            pageSize: 1,
            currentPage: 1,
        }),
        methods: {
            sort:function(s) {
                if(s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
                this.currentSort = s;
            },
            nextPage:function() {
                if((this.currentPage*this.pageSize) < this.rows.length) this.currentPage++;
            },
            prevPage:function() {
                if(this.currentPage > 1) this.currentPage--;
            },
            async loadUsers(currentPage) {
                 await this.$store.dispatch('loadUsers', {...this.params, currentPage})
            },
            getBadge (status) {
                return status === 't' ? 'success'
                    : status === 'f' ? 'danger' : 'primary'
            },
        },
        computed: {
            users() {
                this.rows = this.$store.state.users.items.data;
                return this.rows
            },
            filteredList() {
                let rows = (this.rows !== undefined) ? this.rows : [];
                return  rows.filter((data) => {
                    let name = data.name.match(this.search);
                    let email = data.email.match(this.search);
                    let status = data.status.match(this.search);
                    return name || email || status;
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
