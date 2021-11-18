<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6" lg="3">
            <b-card no-body class="bg-primary">
                <b-card-body class="pb-0">
                    <h4 class="mb-0">{{loadBase}}</h4>
                    <p>Hosts cadastrados</p>
                </b-card-body>
            </b-card>
        </b-col>
            <b-col sm="6" lg="3">
                <b-card no-body class="bg-info">
                    <b-card-body class="pb-0">
                        <h4 class="mb-0">{{configA}}</h4>
                        <p>Formas de Armazenamento</p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col sm="6" lg="3">
                <b-card no-body class="bg-warning">
                    <b-card-body class="pb-0">
                        <h4 class="mb-0">{{Produto}}</h4>
                        <p>Produtos Cadastrados</p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col sm="6" lg="3">
                <b-card no-body class="bg-danger">
                    <b-card-body class="pb-0">
                        <h4 class="mb-0">{{logTotal}}</h4>
                        <p>Produtos Realizados</p>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="12">
                <b-card header="Logs">
                    <br/>
                    <table class="table">
                        <tr class="mb-0 table-outline">
                            <th>Descrição</th>
                            <th>Bancos</th>
                            <th>Data</th>
                            <th>Status</th>
                        </tr>
                        <tr v-for="(back, key) in log.filtro" :key="key">
                            <td>{{back.descricao}}</td>
                            <td>{{back.bancos}}</td>
                            <td>{{back.data_Produto}}</td>
                            <td>
                                <div v-if="back.status_Produto === '1'">
                                    <i class="fa fa-check-circle" style="font: normal normal normal 30px/1 FontAwesome; color: green;"></i>
                                </div>
                                <div v-else-if="back.status_Produto === '0'">
                                    <i class="fa fa-times-circle" style="font: normal normal normal 30px/1 FontAwesome; color: red;"></i>
                                </div>
                            </td>
                        </tr>
                    </table>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import CardLine1ChartExample from './pages/dashboard/CardLine1ChartExample'
    import CardLine2ChartExample from './pages/dashboard/CardLine2ChartExample'
    import CardLine3ChartExample from './pages/dashboard/CardLine3ChartExample'
    import CardBarChartExample from './pages/dashboard/CardBarChartExample'
    import MainChartExample from './pages/dashboard/MainChartExample'
    import SocialBoxChartExample from './pages/dashboard/SocialBoxChartExample'
    import CalloutChartExample from './pages/dashboard/CalloutChartExample'
    import { Callout } from './DashboardComponent'

    export default {
        name: 'dashboard',
        components: {
            Callout,
            CardLine1ChartExample,
            CardLine2ChartExample,
            CardLine3ChartExample,
            CardBarChartExample,
            MainChartExample,
            SocialBoxChartExample,
            CalloutChartExample
        },
        data: function () {
            return {
            }
        },
        created (){
            this.loadConfigsB();
            this.loadConfigs();
            this.loadProduto();
            this.loadLog();
        },
        computed:{
            loadBase () {
                return this.$store.state.configbase.items.total
            },
            configA () {
                return this.$store.state.configA.items.total
            },
            log(){
                return this.$store.state.log.items
            },
            logTotal(){
                return this.$store.state.log.items.total
            },
            Produto() {
                return this.$store.state.Produto.items.total
            },
        },
        methods: {
            async loadConfigsB() {
                await  this.$store.dispatch('loadConfigsB', {...this.params})
            },
            async loadConfigs() {
                await this.$store.dispatch('loadConfigs', {...this.params})
            },
            async loadLog(){
                await this.$store.dispatch('loadLog', {...this.params})
            },
            async loadProduto(page) {
                await this.$store.dispatch('loadProduto', {...this.params, page})
            },
        }
    }
</script>
