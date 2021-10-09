<template>
    <div class="crew">
        <Navbar />
        <h1>Crew Search</h1>
        <!-- <button type="button" @click='search()' class="btn btn-danger">Search</button>
        <router-view /> -->
        <DisplayCrew />
    </div>
</template>

<script>
    import DisplayCrew from './DisplayCrew.vue'
    import Navbar from './Navbar.vue'

    export default {
        name: 'Crew',
        components: {
            Navbar,
            DisplayCrew
        }
        // methods: {
        //     search() {
        //         this.$router.push('DisplayCrew')
        //     }
        // }
    }
</script>