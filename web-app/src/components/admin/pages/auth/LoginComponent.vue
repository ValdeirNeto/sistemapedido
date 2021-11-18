<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <b-row class="justify-content-center">
                <b-col md="8">
                    <b-card-group>
                        <b-card no-body class="p-4">
                            <b-card-body>
                                <h1>Login</h1>
                                <p class="text-muted">Faça login em sua conta</p>

                                <div class="alert alert-warning" v-if="error" v-text="error"></div>

                                <form @submit.prevent="login"  class="form">
                                    <b-input-group class="mb-3">
                                        <div class="input-group-prepend"><span class="input-group-text"><i class="icon-user"></i></span></div>
                                        <input type="text" v-model="formData.email" class="form-control" placeholder="Usuario">
                                    </b-input-group>
                                    <b-input-group class="mb-4">
                                        <div class="input-group-prepend"><span class="input-group-text"><i class="icon-lock"></i></span></div>
                                        <input type="password" v-model="formData.password" class="form-control" placeholder="Senha">
                                    </b-input-group>
                                    <b-row>
                                        <b-col cols="6">
                                            <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                                        </b-col>
                                        <b-col cols="6" class="text-right">
                                            <b-button variant="link" class="px-0">Forgot password?</b-button>
                                        </b-col>
                                    </b-row>
                                </form>
                            </b-card-body>
                        </b-card>
                        <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
                            <b-card-body class="text-center">
                                <div>
                                    <h2>Sign up</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
  data () {
      return {
          formData: {
              email: '',
              password: '',
          },
          errors: {},
          error: ''
      }
  },
  methods: {
      login () {
          this.$store.dispatch('login', this.formData)
                .then(() => {
                    Vue.$toast.open({
                        message: 'Sucesso ao logar',
                        type: 'success',
                    });
                    this.$router.push({name: 'dashboard'})
                })
                .catch((response) => {
                    this.error = response.error
                    Vue.$toast.open({
                        message: this.error,
                        type: 'error',
                    });

                })
      }
  }
}
</script>
