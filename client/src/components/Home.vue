<template>
    <div class="home">
        <Navbar v-if="!hideLogin"/>
        <h1 style="padding:20px">Welcome to Hawmps!</h1>
        <div class="row d-flex justify-content-center flex-nowrap" style="padding:20px">
            <h2>The internet's premier site for information on the moderately successful motion picture!</h2>
        </div>
        <div v-if="hideLogin">
            <div class="row d-flex justify-content-center flex-nowrap" style="padding:10px">
                <label style="margin-right: 5px">Username</label>
                <input type="text" style="margin-right: 20px" v-model="username">
                <label style="margin-right: 5px">Password</label>
                <input type="password" v-model="pass">
            </div>
        <div class="row d-flex justify-content-center flex-nowrap">
            <button type="button" @click='authenticateUser()' class="btn btn-danger">Login</button>
            </div>
        </div>
       <div class="row d-flex justify-content-center flex-nowrap" v-if="hideLogin"> 
           <router-link :to="{ name: 'CreateUser'}" class="nav-link">Create New User <span class="sr-only">(current)</span></router-link>
        </div>
        <Footer />
    </div>
</template>

<script>
    import { authenticateUser } from '../services/UserService'
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'
    import Vue from 'vue'

    export default {
        name: 'Home',
        components: {
            Footer,
            Navbar
        },
        data() {
                return {
                    username: '',
                    pass: '',
                    authResponse: '',
                    jwt: '',
                    hideLogin: (this.$jwt == null)
                }
            },
        methods: {
            authenticateUser() {
                const payload = {
                    username: this.username,
                    pass: this.pass,
                }
                authenticateUser(payload).then(response => {
                    this.jwt = response;
                    Vue.prototype.$jwt = this.jwt;
                    if(this.jwt){
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