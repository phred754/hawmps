<template>
    <div class="crew">
        <Navbar />
        <h1>Crew</h1>
        <div class="row d-flex justify-content-center flex-nowrap">
            <form>
                <input type="text"  v-model="searchCriteria" style="margin-right: 10px">
                <button type="button" @click='search()' class="btn btn-danger">Search</button>
            </form>
        </div>
        <DisplayCrew v-bind:searchCriteria="searchCriteria" v-if="showCrew" :key="componentKey"/>
        <Footer />
    </div>
</template>

<script>
    import DisplayCrew from './DisplayCrew.vue'
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'Crew',
        components: {
            Navbar,
            DisplayCrew,
            Footer
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