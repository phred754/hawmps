<template>
    <div class="container">
        <div class="row">
            <div class="col-md-7 mrgnbtm">
            <h2>Create User</h2>
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Username</label>
                            <input type="text" class="form-control" v-model="username" name="username" id="username" placeholder="Username" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label>Password</label>
                            <input type="password" v-on:blur="matchPasswords" v-on:click="resetPasswordMatchError" :key="componentKey" class="form-control" v-model="pass" name="pass" id="pass" placeholder="Password" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label>Confirm Password</label>
                            <input type="password" v-on:blur="matchPasswords" v-on:click="resetPasswordMatchError" :key="componentKey" class="form-control" v-model="confirmPass" name="confirmPass" id="confirmPass" placeholder="Password" />
                            <label class="alert alert-danger" v-if="!match">Passwords do not match!</label>
                        </div>
                    </div>
                    <button type="button" @click='createUser()' class="btn btn-danger">Create</button>
                </form>
            </div>
            <div class="form-group col-md-6" style="margin-top:10px">
                <input v-model="addUserResponse" hidden="true">
                <p>{{ addUserResponse }}</p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import { createUser } from '../services/UserService'
    import Footer from './Footer.vue'

    export default {
    name: 'CreateUser',
    components: {
            Footer
        },
    data() {
        return {
            username: '',
            pass: '',
            confirmPass: '',
            match: true,
            componentKey: 0,
            addUserResponse : ''
        }
    },
    methods: {
        matchPasswords() {
            if (this.pass != this.confirmPass) {
                this.match = false;
            }
        },
        resetPasswordMatchError(){
            this.match = true;
        },
        forceRerender(){
            this.componentKey += 1;
        },
        createUser() {
            this.addUserResponse = '';
            if(this.match)
            {
                const payload = {
                    username: this.username,
                    pass: this.pass,
                }
                createUser(payload).then(response => {
                    this.addUserResponse = response;
                    if(response.startsWith("User ")){
                        alert(response);
                        this.$router.push('home');
                    }
                })
                this.clearForm();
            }
        },
        clearForm() {
            this.username = "";
            this.pass = "";
            this.confirmPass = "";
        }
    }
}
</script>