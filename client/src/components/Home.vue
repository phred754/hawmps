<template>
    <div class="home">
        <h1 style="padding:20px">Welcome to Hawmps!</h1>
        <div class="row d-flex justify-content-center flex-nowrap" style="padding:20px">
            <h2>The internet's premier site for information on the moderately successful motion picture!</h2>
        </div>
        <div class="row d-flex justify-content-center flex-nowrap" style="padding:10px">
            <input type="text" v-model="username">
            <input type="text" v-model="pass">
        </div>
       <div class="row d-flex justify-content-center flex-nowrap">
           <button type="button" @click='authenticateUser()' class="btn btn-danger">Login</button>
        </div>
       <div class="row d-flex justify-content-center flex-nowrap"> 
           <router-link :to="{ name: 'CreateUser'}" class="nav-link">Create New User <span class="sr-only">(current)</span></router-link>
        </div>
        <Footer />
    </div>
</template>

<script>
    import { authenticateUser } from '../services/UserService'
    import Footer from './Footer.vue'

    export default {
        name: 'Home',
        components: {
            Footer
        },
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
                    //response returns as true for authorized user
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