<template>
  <v-container fluid="true">
    <v-spacer></v-spacer>

    <v-layout>
      <v-flex>
        <v-navigation-drawer fixed temporary v-model="sideNav" fixed temporary>
          <v-toolbar flat class="transparent">
            <v-list class="pa-0 ">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src=" " >
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Profile</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-layout>
            <v-flex>
              <v-card>
                <v-list class="pt-0" dense>
                  <v-list-group
                    v-model="item.active"
                    v-for="item in menuItems"
                    :key="item.title"

                    :prepend-icon="item.icon"
                    no-action>
                    <v-list-tile slot="activator" :key="item.title" @click=""
                                 router :to="item.link">
                      <v-list-tile-content>
                        <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in item.menuItems" :key="subItem.title" @click="" router :to="subItem.link">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-icon>{{ subItem.icon }}</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list-group>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>

        </v-navigation-drawer>

        <v-toolbar class="primary">
          <v-toolbar-side-icon @click.stop="sideNav=!sideNav" />
          <v-toolbar-title class="white--text">
            <router-link to="/" tag="span" style="cursor: pointer">Distance learning </router-link></v-toolbar-title>
          <v-spacer> </v-spacer>
        </v-toolbar>
        <main>
          <router-view></router-view>
        </main>
      </v-flex>
    </v-layout>


    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-4 red--text">
        Complain
        </h2>
      </v-flex>
    </v-layout>
    <div>

      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card class="grey lighten-5 mb-3" >
            <v-container fluid>
              <v-layout row>
                <v-flex>
                  <v-card-title primary-title>
                    <div class="text--black">
                      <div><h3 mp-0> From: {{ items.student_id }} </h3></div><br>
                      <div> Name: <br>
                        {{ items.student_name }}</div><br>
                      <div> Email Id: <br>
                        {{ items.student_email }}</div><br>
                      <div>Date: <br>
                        {{ items.complaint_date }}</div><br>
                      <div> Course ID: <br>
                        {{ items.FC_id }}</div><br>
                      <div> Subject: <br>
                        {{ items.complaint_title }}</div><br>
                      <div> Description: <br>
                        {{ items.complaint_description }}</div><br>

                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>

          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <div>
            <v-card color="grey lighten-4" flat @submit.prevent="giveResponse" enctype="multipart/form-data">
              <v-card-text class="white">
                <v-subheader>Reply</v-subheader>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="items.complaint_response"
                        placeholder="reply"
                        textarea
                        v-model="items.complaint_response"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </div>
          <br>
          <v-btn class="blue lighten-1 white--text"> Send</v-btn>
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
          _id: '',
          student_id: '',
          complaint_date: '',
          complaint_title: '',
          FC_id: '',
          student_name: '',
          complaint_description: '',
          student_email: '',
          complaint_response: ''
        },
        menuItems: [
          {
            title: 'Faculty',
            icon: 'perm_identity',
            active: true,
            menuItems: [
              {title: 'Add Faculty', icon: 'note_add', link: '/admin/faculty/add'},
              {title: 'View Faculty', icon: 'view_array', link: '/admin/faculty/viewFaculty'}
            ]
          },
          {title: 'Student', icon: 'dashboard', link: '/admin/student/sview'},
          {title: 'Course',
            icon: 'dashboard',
            active: true,
            menuItems: [
              {title: 'View Course', icon: 'view_array', link: '/admin/course/remove'},
              {title: 'Create Course', icon: 'note_add', link: '/admin/course/create'}
            ]
          },
          {title: 'Enquiries', icon: 'dashboard', link: '/admin/inquiry/showInquiries'},
          {title: 'Complains', icon: 'dashboard', link: '/admin/complain/listcomplains'}

        ],
        right: null
      }
    },
    methods: {
      async getDetail () {
        console.log('view id called')
        Axios.get('https://sheltered-spire-10162.herokuapp.com/admin/inquiries/view/' + this.$route.params.id)
          .then((response) => {
            console.log(response.data[0])
            this.items = response.data[0]
            console.log(this.items)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      giveResponse () {
        const fd = new FormData()
        fd.append('complaint_response', this.items.complaint_response)
        Axios.post('https://sheltered-spire-10162.herokuapp.com/admin/inquiries/respond/' + this.$route.params.id, fd,
          {headers: { 'Content-type': 'multipart/form-data' }})
          .then(r => console.log('r: ', JSON.stringify(r, null, 2)))
          .catch(error => {
            console.log(error.response)
          })
      }
    },
    mounted () {
      this.getDetail()
    }
  }
</script>
