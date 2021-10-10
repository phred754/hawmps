<template>
    <div class="crew">
        <Navbar />
        <h1>Crew</h1>
        <form>
            <input type="text" v-model="searchCriteria">
            <button type="button" @click='search()' class="btn btn-danger">Search</button>
        </form>
        <DisplayCrew v-bind:searchCriteria="searchCriteria" v-if="showCrew" :key="componentKey"/>
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
                showCrew: false,
                componentKey: 0
            }
        },
        methods: {
            search() {
                this.showCrew = true
                this.forceRerender()
            },
            forceRerender(){
                this.componentKey += 1;
            }
        }
    }
</script>