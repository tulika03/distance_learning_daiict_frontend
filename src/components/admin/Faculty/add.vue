<template>
  <v-container>
    <v-spacer></v-spacer>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-4 red--text">
          Add New Faculty
        </h2>
      </v-flex>

    </v-layout>
    <div
      style="min-width: 560px; margin: auto;"
      class="orange lighten-4" >
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-container>
            <v-form @submit.prevent="addFaculty">

                  <v-text-field
                    label="Faculty Id"
                    name="faculty_id"
                    v-model.number="faculty_id"
                    required
                    :rules="idRules"
                  ></v-text-field>



                  <v-text-field
                    label="Name"
                    v-model="faculty_name"
                    name="faculty_name"
                    required
                    :rules="nameRules"
                  ></v-text-field>
              <label>Upload Image*</label>    <br><br>
              <div>
                <input type=file
                       @change="onFileSelected"
                       class="text--primary" required>
              </div>



                 <v-text-field
                label="E-mail"
                name="faculty_email"
                v-model="faculty_email"
                type="email"
                :rules="emailRules"
                required
                 ></v-text-field>

              <v-text-field
                label="Password"
                name="faculty_password"
                v-model="faculty_password"
                required
                :rules="passwordRules"
              ></v-text-field>



                  <v-text-field name="faculty_contact_number"
                                label="Contact"
                                id="contact"
                                v-model.number="faculty_contact_number"
                                :rules="contactRules"
                                required>

                  </v-text-field>

                  <v-text-field name="faculty_educational_details"
                                label="Educational Details"
                                id="educational-detail"
                                v-model="faculty_educational_details"
                                :rules="eduRules"
                                required>

                  </v-text-field>

                  <v-text-field name="faculty_area_interest"
                                label="Interest Area"
                                id="interest-area"
                                v-model="faculty_area_interest"
                                :rules="interestRules"
                                required>

                  </v-text-field>

              <v-layout row>
                <v-flex xs12 sm6>
                  <v-btn flat class="orange"
                         :disabled="!formIsValid"
                         type="submit"
                         @click="addFaculty"
                  >Add
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>


<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        faculty_id: null,
        idRules: [
          v => !!v || 'Id is required'
        ],
        faculty_name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 40 || 'Name must be less than 40 characters'
        ],
        faculty_photo: null,
        faculty_email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        faculty_password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ],
        faculty_contact_number: null,
        contactRules: [
          v => !!v || 'Contact number is required'
        ],
        faculty_educational_details: '',
        eduRules: [
          v => !!v || 'Educational Qualification detail is required'
        ],
        faculty_area_interest: '',
        interestRules: [
          v => !!v || 'Area of interest is required'
        ]

      }
    },

    computed: {
      formIsValid () {
        return Number(this.faculty_id) !== null &&
          this.faculty_name !== '' &&
          this.faculty_photo !== '' &&
          this.faculty_email !== '' &&
          this.faculty_password !== '' &&
         Number(this.faculty_contact_number) !== null &&
          this.faculty_educational_details !== '' &&
          this.faculty_area_interest !== ''
      }
    },
    methods: {
      addFaculty () {
        if (!this.formIsValid) {
          return
        }
        const facultyData = {
          faculty_id: this.faculty_id,
          faculty_name: this.faculty_name,
          faculty_photo: this.faculty_photo,
          faculty_email: this.faculty_email,
          faculty_password: this.faculty_password,
          faculty_contact_number: this.faculty_contact_number,
          faculty_educational_details: this.faculty_educational_details,
          faculty_area_interest: this.faculty_area_interest
        }
        console.log(facultyData)
        axios.post('https://sheltered-spire-10162.herokuapp.com/admin/faculty/add/')
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      onFileSelected (event) {
        this.faculty_photo = event.target.files[0]
      }
    }
  }
</script>
