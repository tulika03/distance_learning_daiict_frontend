<template>
  <v-container>
    <v-spacer></v-spacer>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-4 red--text">
          Add New Course
        </h2>
      </v-flex>

    </v-layout>
    <div
      style="min-width: 560px; margin: auto;"
      class="orange lighten-4" >
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-container>
            <v-form @submit.prevent="addCourse">
              <v-text-field
                label="Course Id"
                v-model="Course_Id"
                name="Course_Id"
                required
              ></v-text-field>
                            <v-text-field
                label="Course Name"
                name="Course_Subject"
                v-model="Course_Subject"
                required></v-text-field>
              <v-layout row>
                <v-flex xs12 sm6>
                  <v-btn flat class="indigo"
                         :disabled="!formIsValid"
                         type="submit"
                         @click="addCourse"
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
        Course_Id: '',
        Course_Subject: ''

      }
    },

    computed: {
      formIsValid () {
        return this.Course_Id !== '' &&
          this.Course_Subject !== ''
      }
    },
    methods: {
      addCourse () {
        if (!this.formIsValid) {
          return
        }
        const CourseData = {
          Course_Id: this.Course_Id,
          Course_Subject: this.Course_Subject
        }
        console.log(CourseData)
        axios.post('https://sheltered-spire-10162.herokuapp.com/admin/course/create/')
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>
