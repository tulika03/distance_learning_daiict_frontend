<template>
  <v-container>
    <nav-Menu></nav-Menu>
    <h2 style="display: flex;justify-content: center">
      {{quiz.title}}
    </h2>
<v-card>
  <br>
  <v-flex offset-sm2>

    <div v-for="(question,index) in quiz.questions">
      <div v-show="index===questionIndex">
        <h2>{{questionIndex+1}}   {{question.FcQuestion_text}}</h2>
        <br><ol>
          <li v-for="response in question.FCTestQuestion_answers">
            <label>
              <input type="radio"
                     v-bind:value="response.correct"
                     v-bind:name="index"
                     v-model="userResponses[index]">{{response.text}}
<br><br>
            </label>

          </li>
        </ol>
        <br>
        <br>

        <v-btn v-if="questionIndex > 0" @click="prev">
          prev
        </v-btn>
        <v-btn @click="next">
          next
        </v-btn>
      </div>
    </div>
    <div v-show="questionIndex===quiz.questions.length">
      <h2>
        Finished
      </h2>
      <p>
        Total score:{{Score()}}/{{quiz.questions.length}}
      </p>

      <v-btn @click="submit">
        submit
      </v-btn>
    </div>
  </v-flex>
</v-card>
  </v-container>
</template>
<script>
  import menuuu from '@/components/student/menuu'
  import Axios from 'axios'
  import Vue from 'vue'

  import VueLocalStorage from 'vue-localstorage'
  Vue.use(VueLocalStorage)
  export default {
    name: 'app',
    components: {'nav-Menu': menuuu},

    data: function () {
      return {
        questionIndex: 0,
        userResponses: [],
        _id: '',
        marks: '',
        quiz: {
          title: 'Myquiz',
          questions: [
            {
              FcQuestion_text: '',
              FCTestQuestion_answers: [
                {text: '', correct: ''}
              ]
            }
          ]
        }
      }
    },
    methods: {
      next: function () {
        this.questionIndex++
      },
      prev: function () {
        this.questionIndex--
      },
      Score: function () {
        return this.userResponses.filter(function (val) {
          return val
        }).length
      }
    },
    async getDetail () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      console.log('view id called')
      console.log(this.userResponses.length)
      if (jwt) {
        Axios.get('http://192.168.137.1:3000/admin/course/view/' + this.$route.params.id,
          {
            headers: {
              'Authorization': 'bearer ' + Vue.localStorage.get('token')
            }
          })
          .then((response) => {
            console.log(response.data)
            this.questions = response.data
            console.log(this.quiz)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$router.push('')
      }
    },
    submit () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      console.log('view id called')
      if (jwt) {
        Axios.post('http://192.168.137.1:3000/student/', {
          'marks': this.userResponses.length},
          {
            headers: {
              //  'Content-type': 'multipart/form-data',
              'Authorization': 'bearer ' + Vue.localStorage.get('token')
            }
          })
          .then(r => console.log('r: ', JSON.stringify(r, null, 2))
          )
          .catch(error => {
            console.log(error.response)
            console.log(this.userResponses.length)
          })
      } else {
        this.$router.push('/student/login')
      }
    }
  }
</script>
