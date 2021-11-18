<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center align-content-center>
      <v-flex md6 xs12>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="nome"
                  label="Nome"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="senha"
                  label="Senha"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              @click="salvar"
              color="primary"
            >
              Salvar
            </v-btn>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Import do objeto Nota do modulo Notas do nosso /api/services
import Nota from '../domain/services/Notas'

export default {
  name: 'Home',
    data: () => ({
      valid: false,
      nome: '',
      senha: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ]
  }),
  methods: {
    salvar () {
      console.log( {"nome": '"'+this.nome+'"', "senha": '"'+this.senha+'"', "email": '"'+this.email+'"'});
      Nota.salvar(this.nota).then(resposta => {
        console.log(resposta.message)
        this.nota = resposta.message
      })
    }
  },
}
</script>

<style>
.texto {
  font-size: 15px;
}
.espaco {
  padding: 15px;
}
</style>
