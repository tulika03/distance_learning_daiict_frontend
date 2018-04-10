<template>
  <v-container fluid="true">
    <v-spacer></v-spacer>

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
            <v-form @submit.prevent="addCourses">
              <v-text-field
                label="Course Id"
                v-model="course_id"
                name="course_id"
                required
              ></v-text-field>
                            <v-text-field
                label="Course Name"
                name="course_subject"
                v-model="course_subject"
                required></v-text-field>
              <v-layout row>
                <v-flex xs12 sm6>
                  <v-btn flat class="indigo"
                         :disabled="!formIsValid"
                         type="submit"
                         @click="addCourses"
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
        course_id: '',
        course_subject: '',
        sideNav: false,
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

    computed: {
      formIsValid () {
        return this.Course_Id !== '' &&
          this.Course_Subject !== ''
      }
    },
    methods: {
      addCourses () {
        const fd = new FormData()
        if (!this.formIsValid) {
          return
        }
        fd.append('course_id', this.course_id)
        fd.append('course_subject', this.course_subject)
        axios.post('https://sheltered-spire-10162.herokuapp.com/admin/courses/add', fd,
          {headers: { 'Content-type': 'multipart/form-data' }})
          .then(r => console.log('r: ', JSON.stringify(r, null, 2)))
          .catch(error => {
            console.log(error.response)
          })
      }
    }
  }
</script>
