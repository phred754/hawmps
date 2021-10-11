<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link :to="{ name: 'Home'}" class="nav-link">Hawmps!<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'Crew'}" class="nav-link">Crew<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'Trailer'}" class="nav-link">Trailer<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'About'}" class="nav-link">About<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item ">
                <button type="button" @click='logout()' class="btn btn-light">Logout</button>
            </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
    import { logout } from '../services/UserService'

    export default {
        name: 'Navbar',
        methods: {
            logout() {
                this.$router.push('home');
                console.log("Logged out")
                logout().then(response => {
                    console.log(response)
                    this.crew = response
                })
            }
        }
    }    
    
</script>