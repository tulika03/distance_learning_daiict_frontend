<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h3>{{items. subtopic_name}}</h3>
        <p>{{items.subtopic_description}}</p>
        <v-carousel hide-controls hide-delimiters>
          <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">{{item.subtopic_video}}</v-carousel-item>
        </v-carousel>
        <v-container>
          <v-flex xs6>
            <div style="font-family: Calibri;font-size: 30px;flex-direction: row"><b><i> Faculty Notes</i></b>

              <router-link to="/student/feedback" ><v-btn>Feedback</v-btn></router-link>
              <router-link to="/student" ><v-btn>Discussion</v-btn></router-link>

            </div> </v-flex>
        </v-container>
        <div class="container">
          <div class="dropbox">
            <label>Upload Assignment</label>
            <input
              type="file"
              @change="onFileSelected"
              required
              name="upload_assignment"
            ><br><br>
            <v-btn @click="PostAssignment" type="submit">Upload</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <br>

  </v-container>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  export default {
    data () {
      return {
        items: {
          _id: '',
          subtopic_name: '',
          subtopic_assignment: '',
          subtopic_video: '',
          upload_assignment: ''
        },
        methods: {
          onFileSelected (event) {
            this.upload_assignment = event.target.files[0]
            console.log(this.upload_assignment)
          },
          async getDetail () {
            console.log('view id called')
            var jwt = Vue.localStorage.get('token')
            console.log('view id called')
            if (jwt) {
              Axios.get('http://192.168.137.1:3000/' + this.$route.params._id,
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
          },
          PostAssignment () {
            const fd = new FormData()
            fd.append('upload_assignment', this.upload_assignment)
            var jwt = Vue.localStorage.get('token')
            console.log('view id called')
            if (jwt) {
              Axios.post('http://192.168.137.1:3000/' + this.$route.params.id, fd,
                {
                  headers: {
                    'Content-type': 'multipart/form-data',
                    'Authorization': 'bearer ' + Vue.localStorage.get('token')
                  }
                })
                .then(r => console.log('r: ', JSON.stringify(r, null, 2)))
                .catch(error => {
                  console.log(error.response)
                })
            } else {
              this.$router.push('/admin/login')
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
