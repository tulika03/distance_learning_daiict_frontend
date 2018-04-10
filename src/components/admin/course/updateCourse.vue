<template>
  <v-container>

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
    <v-layout>
      <v-flex>

        <v-card  @submit.prevent="updateCourse" enctype="multipart/form-data">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="red--text darken-2"><h3>EDIT COURSE DETAILS</h3> </v-card-title>
              </v-flex>

            </v-layout>
            <v-divider></v-divider>
            <v-spacer></v-spacer>

            <v-layout row wrap class="">
              <v-flex xs12>

                <v-card-text>
                  <v-text-field
                    label="Course ID"
                    name="items.course_id"
                    v-model="items.course_id"
                    required
                  >{{ items.course_id }}</v-text-field>
                </v-card-text>



                <v-card-text>
                  <v-text-field
                    label="Course Subject"
                    name="items.course_subject"
                    v-model="items.course_subject"
                    required
                  >
                    {{ items.course_subject }}
                  </v-text-field>
                </v-card-text>
                <v-card-actions >
                  <v-btn @click="updateCourse" color="indigo" class="text--white"> SUBMIT </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  export default {
    data () {
      return {
        items: {
          _id: '',
          course_id: '',
          course_subject: ''
        },
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
    methods: {
      async getDetail () {
        console.log('view id called')
        Axios.get('https://sheltered-spire-10162.herokuapp.com/admin/courses/update' + this.$route.params.id)
          .then((response) => {
            console.log(response.data[0])
            this.items = response.data[0]
            console.log(this.items)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      updateCourse () {
        const fd = new FormData()
        fd.append('course_id', this.course_id)
        fd.append('course_subject', this.items.course_subject)
        Axios.patch('https://sheltered-spire-10162.herokuapp.com/admin/courses/update/' + this.$route.params.id, fd,
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
