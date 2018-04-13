<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 offset-sm1><div>
        <v-card v-for="courses in course" :key="courses._id">
          <v-container fluid>
            <v-layout row>

              <v-flex><v-card color="grey lighten-4">
                <v-card-title primary-title>
                  <div>
                    <div ><h2>{{courses.subtopic_name}}</h2></div><br><hr><v-spacer></v-spacer>

                    <div> <label class="text--black"> <b>Description:</b></label>{{courses.subtopic_description}}</div><br>

                  </div>

                </v-card-title>
                <v-btn flat class="purple lighten-5 purple--text"  v-bind:to= "{name: 'Studentstudy', params: {_id: courses._id } }" >View</v-btn>


              </v-card>
              </v-flex>

              <br><br>
            </v-layout>
          </v-container>

        </v-card>
        <br>
      </div>
        <br><br><hr>

      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  export default {
    data () {
      return {
        // eslint-disable-next-line
        course:{
          _id: '',
          subtopic_name: '',
          subtopic_description: ''
        },
        methods: {
          async getDetail () {
            console.log('view id called')
            var jwt = Vue.localStorage.get('token')
            console.log('view id called')
            if (jwt) {
              Axios.get('http://192.168.137.1:3000/admin/facultycourse/view/' + this.$route.params.id,
                {
                  headers: {
                    'Authorization': 'bearer ' + Vue.localStorage.get('token')
                  }
                })
                .then((response) => {
                  console.log(response.data[0])
                  this.items = response.data[0]
                })
                .catch((error) => {
                  console.log(error)
                })
            } else {
              this.$router.push('/student/login')
            }
          }
        },
        mounted () {
          this.getDetail()
        }

      }
    }
  }
</script>
