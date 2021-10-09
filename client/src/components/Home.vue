<template>
    <div class="container">
        <h1>Welcome to Hawmps!</h1>
        <h2>The internet's premier site for information on the moderately successful motion picture!</h2>
        <button type="button" @click='login()' class="btn btn-danger">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            login() {
                this.$router.push('crew')
            }
        }
    }
</script>