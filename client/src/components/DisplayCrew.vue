<template>
    <div class="container">
        <h2>Crew</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Id</th>
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
        methods: {
            getAllCrew() {
            getAllCrew().then(response => {
                console.log(response)
                this.crew = response
                this.numberOfcrew= this.crew.length
            })
            }
        },
        mounted () {
            this.getAllCrew();
        },
        data() {
            return {
                crew: [],
                numberOfCrew: 0
            }
        }
     }
</script>