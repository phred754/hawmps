<template>
    <div class="home">
        <h1>Welcome to Hawmps!</h1>
        <h2>The internet's premier site for information on the moderately successful motion picture!</h2>
        <input type="text" v-model="username">
        <input type="text" v-model="pass">
        <button type="button" @click='authenticateUser()' class="btn btn-danger">Login</button>
        <router-link :to="{ name: 'CreateUser'}" class="nav-link">Create New User <span class="sr-only">(current)</span></router-link>
    </div>
</template>

<script>
    import { authenticateUser } from '../services/UserService'

    export default {
        name: 'Home',
        data() {
                return {
                    username: '',
                    pass: '',
                    authResponse: '',
                    authorizedUser: false
                }
            },
        methods: {
            authenticateUser() {
                const payload = {
                    username: this.username,
                    pass: this.pass,
                }
                authenticateUser(payload).then(response => {
                    this.authorizedUser = response;
                    if(response){
                        this.$router.push('crew');
                    }
                    else{
                        alert("Invalid login credentials");
                    }
                })
                this.clearForm();
            },
            clearForm() {
            this.username = "";
            this.pass = "";
            }
        }
    }
</script>