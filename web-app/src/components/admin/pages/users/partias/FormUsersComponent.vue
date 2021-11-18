<template>
    <b-card>
        <div slot="header">
            <strong>{{ this.usuarios }} </strong>
        </div>
        <form @submit.prevent="onSubmit">
            <b-row>
                <b-col md="9">
                    <b-form-group
                            label="Nome Completo"
                            label-for="basicName"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicName" v-model="users.name" type="text"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            description="Por Favor digite seu email"
                            label="Email"
                            label-for="basicEmail"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicEmail" v-model="users.email"  type="email" ></b-form-input>
                    </b-form-group>
                    <b-form-group
                            description="Por favor, digite uma senha complexa"
                            label="Senha"
                            label-for="basicPassword"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicPassword" v-model="users.password" type="password"></b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="Status"
                            label-for="basicStatus"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-select :plain="true" size="sm" name="basicStatus" v-model="users.status">
                            <option value="t">Ativo</option>
                            <option value="f">Inativo</option>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="1"></b-col>
                <b-col md="2">
                    <div v-if="(this.update === true)">
                        <b-form-group >
                            <v-gravatar  :email="users.email" class="img-avatar"/>
                        </b-form-group>
                        <b-button @click="alterar" type="reset" size="sm" variant="primary"> Alterar Foto</b-button>
                    </div>
                </b-col>
            </b-row>
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Salvar</b-button>
            <b-button @click="onCancel" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Cancelar</b-button>
        </form>
    </b-card>
</template>

<script>
    export default {
        props: {
            update: {
                require: false,
                type: Boolean,
                default: false
            },
            params:{
                require: false,
                type: Array|Object,
            },
            user: {
                require: false,
                type: Array|Object,
                default: () => {
                    return {
                        id: '',
                        name: '',
                        email: '',
                        password: '',
                        status: ''
                    }
                }
            },
        },
        created(){
            this.usuarios = (this.update) ? 'Editar Usuario ': 'Adicionar Usuario'
        },
        computed: {
            users() {
                return this.$store.state.users.items
            },
        },
        data () {
            return {
                errors: {},
                usuarios: ''
            }
        },
        methods: {
            alterar(){
                window.open('https://pt.gravatar.com/', '_blank')
            },
            onSubmit () {
                const action = this.update ? 'editUsers' : 'addUsers'
                const formData = new FormData();

                formData.append('id', this.users.id)
                formData.append('name', this.users.name)
                formData.append('email', this.users.email)
                formData.append('password', this.users.password)
                formData.append('status', this.users.status)

                return this.$store.dispatch(action, formData)
                    .then(() => {
                        Vue.$toast.open({
                            message: 'Registro incluido com sucesso',
                            type: 'success',
                        });
                        this.$router.push({name: 'users'})
                    })
                    .catch(errors => {
                        if(errors.data.response.email){
                            Vue.$toast.open({
                                message: 'O valor informado para o campo email já está em uso.',
                                type: 'error',
                            });
                        }else if(errors.data.response.password){
                            Vue.$toast.open({
                                message: 'O campo senha deve conter no mínimo 8 caracteres.',
                                type: 'error',
                            });
                        }

                    })
            },
            onCancel(){
                this.$router.push({name: 'users'})
            },
            onThemeChange (e) {
                this.editorOption.theme = e.target.value
            },
        },
    }
</script>

<style>
    form{
        margin: 10px 0;
    }
</style>