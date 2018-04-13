<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-4 mb-3" v-for="item in items" :key="item.facultyId" >
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="item.facultyCourse_image"
                  height="150px" width="150px">
                </v-card-media>
              </v-flex>
              <v-flex>
                <v-card-title primary-title>
                  <div class="text--black">
                    <div ><h2>{{item.facultyCourse_name}}</h2></div><br><hr><v-spacer></v-spacer>
                    <div> <label class="text--black"> <b>Name:</b>  </label> {{ item.faculty_name }}</div><br>
                    <div> {{ item.faculty_educational_details }}</div><br>
                    <div>  <label class="text--black"> <b>Area of Interest:</b>  </label> {{ item.faculty_area_interest }}</div><br>

                    <div>   <label class="text--black"><b>Duration:</b></label>{{item.facultyCourse_duration}}</div><br>

                    <div> <label class="text--black"> <b>Prerequiste:</b></label>{{item.facultyCourse_prerequisites}}</div>

                  </div>
                </v-card-title>

                <v-btn flat class="purple lighten-5 purple--text"  v-bind:to= "{name: 'Studentsubtopic', params: {id: item._id } }" >View</v-btn>

              </v-flex>
            </v-layout>
          </v-container>

        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <br>

  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  export default {

    data: function () {
      return {

        items: {
          id: '',
          course_id: '',
          faculty_id: '',
          faculty_educational_details: '',
          faculty_area_interest: '',
          facultyCourse_duration: '',
          facultyCourse_name: '',
          facultyCourse_description: '',
          facultyCourse_image: '',
          facultyCourse_ta_list: [''],
          facultyCourse_prerequisites: '',
          facultyCourse_subtopics: ['']
        },
        created: function () {
          console.log(Vue.localStorage.get('token'))
          var jwt = Vue.localStorage.get('token')
          if (jwt) {
            Axios.get('https://sheltered-spire-10162.herokuapp.com/student/faculty', {
              headers: {
                'Authorization': 'bearer ' + Vue.localStorage.get('token')
              }
            })
              .then((response) => {
                this.items = response.data
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            this.$router.push('')
          }
        }
      }
    }
  }
</script>
