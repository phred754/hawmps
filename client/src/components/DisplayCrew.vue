<template>
    <div class="displaycrew">
        <router-view />
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
                  <td><router-link :to="{ name: 'DisplayCrewMember', params:{id: item.id}}">{{ item.id }}</router-link></td>
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
        created() {
            if(this.$jwt==null){
                this.$router.push('home');
            }
        },
        methods: {
            getAllCrew() {
                getAllCrew(this.searchCriteria, this.$jwt).then(response => {
                    console.log(response)
                    this.crew = response
                })
            }
        },
        mounted () {
            this.getAllCrew();
        }
     }
</script>