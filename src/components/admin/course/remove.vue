<template>
  <v-container fluid="true">
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
      </v-flex>
    </v-layout>
  <br>
    <div>
      <v-spacer></v-spacer>
      <v-layout>
        <v-flex>
          <h2 class="text-md-center mb-4 red--text">
            Courses
          </h2>
        </v-flex>

      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm5 offset-sm3>
          <v-card class="light-blue lighten-4 mb-4" v-for="item in items" :key="item._id">
            <v-container fluid style="min-height: 0;"
                         grid-list-lg>
              <v-card-title primary-title>
                <div>
                  <div><h3 class="Grey--text darken-1" mp-0>{{ item.course_id }} </h3></div>
                  <div> Course Subject: {{ item.course_subject }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat class="green white--text" v-bind:to= "{name: 'adminUpdateCourse', params: {id: item._id }}">Edit</v-btn>
                <v-btn flat class="green white--text" @click="deleteData(item._id)"> Delete</v-btn>
              </v-card-actions>



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
          _id: '',
          course_id: '',
          course_subject: ''
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
    created: function () {
      Axios.get('http://192.168.137.1:3000/admin/courses/view', {
        params: {
        }
      })
        .then((response) => {
          this.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      deleteData: function (_id) {
        Axios.delete('http://192.168.137.1:3000/admin/courses/remove/', {params: { id: this.items._id }})
          .then(res => {
            console.log(res)
            console.log('it works')
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

