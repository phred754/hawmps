<template>
    <div class="displaycrewmember">
        <Navbar />
            <h3>{{crewMember[0].fullName}}</h3>
            <h5>{{crewMember[0].gender}}</h5>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Role</th>
                <th>Role Info</th>
                <th>Character Name</th>
                <th>Credited as</th>
                <th>Credited for Role</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in crewMember" :key="item.id">
                  <td>{{ item.role }}</td>
                  <td>{{ item.roleInfo }}</td>
                  <td>{{ item.characterName }}</td>
                  <td>{{ item.aka }}</td>
                  <td>{{ item.credited }}</td>
              </tr>
            </tbody>
        </table>
        <p>Disclaimer: All information data and formatting taken from IMDB.</p>
        <Footer />
    </div>
</template>

<script>
    import { getCrewData } from '../services/CrewService'
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'DisplayCrewMember',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                crewMember: [{
                    fullName: '',
                    gender: ''
                }]
            }
        },
        created() {
            if(this.$jwt==null){
                this.$router.push('home');
            }
        },
        props: ["id"], 
        methods: {
            getCrewData() {
                getCrewData(this.id, this.$jwt).then(response => {
                    this.crewMember = response
                })
            }
        },
        mounted () {
            this.getCrewData();
        },
        forceRerender(){
            this.componentKey += 1;
        }
     }
</script>