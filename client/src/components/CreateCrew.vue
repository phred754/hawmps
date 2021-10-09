<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Crew</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" name="firstname" id="firstname" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" name="lastname" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="inputGender">Gender</label>
                        <input type="text" class="form-control" v-model="email" name="gender" id="gender" placeholder="Gender" />
                    </div>
                </div>
                <button type="button" @click='createCrew()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateCrew',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  methods: {
      createCrew() {
          console.log(this.firstName)
          const payload = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email
          }
          this.$emit('createCrew', payload)
          this.clearForm();
      },
      clearForm() {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
      }
  }
}
</script>