<template>
    <div class="crew">
        <Navbar />
        <h1>Crew Search</h1>
        <form>
            <input type="text" v-model="searchCriteria" v-if="!showCrew">
            <button type="button" @click='search()' class="btn btn-danger" v-if="!showCrew">Search</button>
            <button type="button" @click='resetSearch()' class="btn btn-danger" v-if="showCrew">Search Again</button>
        </form>
        <DisplayCrew v-bind:searchCriteria="searchCriteria" v-if="showCrew"/>
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
        },
        data(){
            return {
                searchCriteria: '',
                showCrew: false
            }
        },
        methods: {
            search() {
                this.showCrew = true
            },
            resetSearch() {
                this.showCrew = false
            }
        }
    }
</script>