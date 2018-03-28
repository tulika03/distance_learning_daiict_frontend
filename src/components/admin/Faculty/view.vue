<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-5 red--text">
          Faculty Detail
        </h2>
      </v-flex>

    </v-layout>
    <div
      style="max-width: 660px; margin: auto;"
      class="orange lighten-4" >
      <v-card  v-for="item in items" :key="item.faculty_id">
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 >
              <v-card-title style="align-items: right"> <h4>{{ item.faculty_name }}</h4></v-card-title>
                       </v-flex>
            <v-flex>
              <v-card-media
                :src="item.faculty_photo"
                height="165px" width="150px" contain  >
              </v-card-media>
            </v-flex>
            </v-layout>



<v-layout xs12 md9 class="blue--text darken-1">
  <v-flex>
    <v-card-text > Faculty ID:
      {{ item.facultyId }}
    </v-card-text>
    <v-card-text>Email Id: {{ item.faculty_email }} </v-card-text>
    <v-card-text> Password: {{ item.faculty_password }} </v-card-text>
    <v-card-text>Contact Number: {{ item.faculty_contact_number }}</v-card-text>
    <v-card-text> Educational Qualification:{{ item.faculty_educational_details }} </v-card-text>
    <v-card-text>Interest Area: {{ item.faculty_area_interest  }} </v-card-text>

  </v-flex>
</v-layout>


        </v-container>

        </v-card>
    </div>

  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        sideNav: false,
        items: [
          {
            faculty_id: '',
            faculty_name: '',
            faculty_photo: '',
            faculty_email: '',
            faculty_password: '',
            faculty_contact_number: '',
            faculty_educational_details: '',
            faculty_area_interest: ''
          }

        ],
        mounted () {
          axios.get('https://sheltered-spire-10162.herokuapp.com/admin/faculty/view/')
            .then((response) => {
              console.log(response.data)
              this.items = response.data
            })
          .catch((error) => {
            console.log(error)
          })
        }

      }
    }
  }
</script>
