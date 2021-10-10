<template>
    <div class="displaycrew">
        <router-view />
        <h2>Crew</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Crew Id</th>
                <th>Fullname</th>
                <th>Gender</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in crew" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.fullName }}</td>
                  <td>{{ item.gender }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { getAllCrew } from '../services/CrewService'

    export default {
        name: 'DisplayCrew',
        props: ['searchCriteria'],
        data() {
            return {
                crew: [],
                crewID: 0
            }
        },
        methods: {
            getAllCrew() {
            getAllCrew(this.searchCriteria).then(response => {
                console.log(response)
                this.crew = response
            })
            },
            storeID(id){
                this.crewID = id
                console.log(this.crewID)
            }
        },
        mounted () {
            this.getAllCrew();
        }
     }
</script>