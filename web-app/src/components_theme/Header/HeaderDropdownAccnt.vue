<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
            <v-gravatar :email="me.email" class="img-avatar"/>
        </template>
        <b-dropdown-item @click.prevent="perfil(me.id)"><i class="fa fa-user"></i> Perfil</b-dropdown-item>
<!--        <b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>-->
        <b-dropdown-item @click.prevent="logout"><i class="fa fa-lock"></i> Sair</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown-accnt',
    created() {
        this.foto = "https://www.gravatar.com/avatar/331d4cdf9e7a985a4ae0fb2221a307c4"
    },
    data: () => {
      return { itemsCount: 42, foto: "" }
    },
    computed: {
        me () {
            return this.$store.state.auth.me
        },
    },
    methods: {
        perfil(id){
            this.$router.push({name: 'loadUser', params: {id: id}})
        },
      logout () {
        this.$store.dispatch('logout')
          Vue.$toast.open({
              message: 'Sucesso ao deslogar',
              type: 'success',
          });

        this.$router.push({name: 'auth'})
      }
    }
  }
</script>
