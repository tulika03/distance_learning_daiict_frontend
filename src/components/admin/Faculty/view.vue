<template>
  <v-container>

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
        <h2 class="text-md-center mb-5 red--text">
          Faculty Detail
        </h2>
      </v-flex>

    </v-layout>
    <div
      style="max-width: 660px; margin: auto;"
      class="orange lighten-4" >
      <v-card>
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 >
              <v-card-title style="align-items: right"> <h4>{{ items.faculty_name }}</h4></v-card-title>
                       </v-flex>
            <v-flex>
              <v-card-media
                :src="items.faculty_photo"
                height="165px" width="150px" contain  >
              </v-card-media>
            </v-flex>
            </v-layout>



<v-layout xs12 md9 class="blue--text darken-1">
  <v-flex>
    <v-card-text>Email Id: {{ items.faculty_email }} </v-card-text>
    <v-card-text>Contact Number: {{ items.faculty_contact_number }}</v-card-text>
    <v-card-text> Educational Qualification:{{ items.faculty_educational_details }} </v-card-text>
    <v-card-text>Interest Area: {{ items.faculty_area_interest  }} </v-card-text>

  </v-flex>
</v-layout>


        </v-container>

        </v-card>
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
            faculty_name: '',
            faculty_photo: '',
            faculty_email: '',
            faculty_password: '',
            faculty_contact_number: '',
            faculty_educational_details: '',
            faculty_area_interest: ''
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
                  Axios.get('http://192.168.137.1:3000/admin/faculty/view/' + this.$route.params.id)
                  .then((response) => {
                  console.log(response.data[0])
                  this.items = response.data[0]
                    })
                  .catch((error) => {
                  console.log("Hello " + error)
                  })
              }
             },
              mounted () {
                this.getDetail()
              }
  }
</script>
