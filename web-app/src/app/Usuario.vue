<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center align-content-center>
      <v-flex md6 xs12>
      <v-data-table
          :headers="headers"
          :items="this.notas"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Import do objeto Nota do modulo Notas do nosso /api/services
import Nota from '../domain/services/Notas'

export default {
  name: 'Home',
  data () {
    return {
      headers: [
          { text: 'Nome', value: 'nome' },
          { text: 'Email', value: 'email' },
          { text: 'Data Cadastro', value: 'data_cadastro' }
        ],
      notas: []
    }
  },
  methods: {
    listar () {
      Nota.listar().then(resposta => {
        this.notas = resposta.data.rows
        console.log(this.notas)
      })
    }
  },
  mounted () {
    this.listar()
  }
}
</script>