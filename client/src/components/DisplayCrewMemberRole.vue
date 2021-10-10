<template>
    <div class="displaycrewmember">
        <h2>Crew</h2>
        <table class="table table-bordered">
            <h3>{{crewMember[0].fullName}}</h3>
            <h4>{{crewMember[0].gender}}</h4>
            <thead>
            <tr>
                <th>Role</th>
                <th>Additional Role Info</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in crewMember" :key="item.id">
                  <td>{{ item.role }}</td>
                  <td>{{ item.roleInfo }}</td>
                  <td>{{ item.gender }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { getCrewData } from '../services/CrewService'

    export default {
        name: 'DisplayCrewMember',
        props: ['crewID'],
        methods: {
            getCrewData() {
            getCrewData(this.searchCriteria).then(response => {
                console.log(response)
                this.crewMember = response
            })
            }
        },
        mounted () {
            this.getCrewData();
        },
        data() {
            return {
                crewMember: []
            }
        }
     }
</script>