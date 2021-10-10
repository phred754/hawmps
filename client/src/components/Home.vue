<template>
    <div class="home">
        <h1>Welcome to Hawmps!</h1>
        <h2>The internet's premier site for information on the moderately successful motion picture!</h2>
        <input type="text" v-model="user.email">
        <input type="text" v-model="user.pass">
        <button type="button" @click='login()' class="btn btn-danger">Login</button>
        <router-link :to="{ name: 'CreateUser'}" class="nav-link">Create New User <span class="sr-only">(current)</span></router-link>
    </div>
</template>

<script>
    import { authenticateUser } from '../services/UserService'

    export default {
        name: 'Home',
        data() {
                return {
                    user: {
                        email: '',
                        pass: ''
                    }
                }
            },
        methods: {
            login() {
                authenticateUser()
                this.$router.push('crew')
            },
            authenticateUser() {
                authenticateUser(this.user).then(response => {
                    console.log(response)
                    this.crew = response
                })
            }
        }
    }
</script>