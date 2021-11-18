<template>
    <div class="container">
        <form-user
                :user="users"
                :update="true" >
        </form-user>
    </div>
</template>

<script>
    import FormUser from './partias/FormUsersComponent';
    export default {
        created () {
            this.loadUser();
        },
        data () {
            return {
            }
        },
        computed: {
            users () {
                return this.$route.params.id
            },
            params () {
                return {
                    id: this.users,
                }
            }
        },
        methods: {
            async loadUser(users){
                await this.$store.dispatch('loadUser', {...this.params, users})
            }
        },
        components: {
            FormUser
        }
    }
</script>