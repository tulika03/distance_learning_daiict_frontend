<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn :to="'/admin/faculty/add/'" class="green white--text right"> ADD FACULTY </v-btn>
      </v-flex>
    </v-layout>

  <div>

      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card class="grey lighten-4 mb-3" v-for="item in items" :key="item.facultyId"  :to="'/admin/faculty/view/:faculty_id/'" >
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media
                    :src="item.faculty_photo"
                    height="150px" width="150px">
                  </v-card-media>
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div class="text--black">
                      <div><h3 class="red--text" mp-0> {{ item.faculty_name }} </h3></div>
                      <div> {{ item.faculty_educational_details }}</div><br>
                      <div>  <label class="text--black"> <b>Area of Interest:</b>  </label> {{ item.faculty_area_interest }}</div><br>
                      <div>  <label class="text--black"><b>Email: </b> </label> {{ item.faculty_email }}</div>
                      <div> <label class="text--black"><b>Office:  </b></label>(+91) {{ item.faculty_contact_number }}</div>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat class="orange darken-3 white--text" :to="'/admin/faculty/update/'">Edit</v-btn>
                    <v-btn flat class="orange darken-3 white--text">Delete</v-btn>
                  </v-card-actions>

                </v-flex>
              </v-layout>
            </v-container>

          </v-card>
        </v-flex>
      </v-layout>
  </div>
    </v-container>

</template>



<script>
  import Axios from 'axios'
  export default {
    data () {
      return {
        sideNav: false,
        items: {
          faculty_id: '',
          faculty_name: '',
          faculty_photo: '',
          faculty_email: '',
          faculty_contact_number: '',
          faculty_educational_details: '',
          faculty_area_interest: ''
        }
      }
    },
    created: function () {
      Axios.get('https://sheltered-spire-10162.herokuapp.com/admin/faculty/view/', {
        params: {
        }
      })
        .then((response) => {
          this.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
</script>
