<template>
    <div class="header">
        <h1>Hawmps!</h1>
        <button type="button" @click='login()' class="btn btn-danger">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            login() {
                console.log(this.firstName)
                const payload = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                }
                this.$emit('createUser', payload)
                this.clearForm();
            }
        }
    }
    
</script>