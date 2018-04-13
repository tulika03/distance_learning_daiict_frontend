<template>
  <v-app>

    <v-spacer></v-spacer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title > Login form</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="student_email" label="email ID" type="text" v-model="student_email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="student_password" label="Password" id="student_password" type="password" v-model="student_password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
            <v-label><a href="/student/forgotpassword  " >forgot password</a></v-label>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'

  import VueLocalStorage from 'vue-localstorage'
  Vue.use(VueLocalStorage)
  export default {
    data () {
      return {
        student_email: '',
        student_password: ''
      }
    },
    methods: {
      login: function () {
        console.log(this.student_email)
        Axios.post('http://192.168.137.1:3000/student/login', {
          student_password: this.student_password,
          student_email: this.student_email
        }).then(response => {
          Vue.localStorage.set('token', response.data.token)
          console.log(response.data.token)
          localStorage.getItem('token')
        }).catch(error => {
          console.log('Error login')
          console.log(error)
        })
      }
    }
  }
</script>
<style scoped>

  .center{
    border-radius: 50px;
  }
</style>
