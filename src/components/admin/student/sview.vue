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
                <v-list-tile-title>Students Profile</v-list-tile-title>
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
        <h2 class="text-md-center mb-5 red--text">
          Students Details
        </h2>
      </v-flex>
    </v-layout>
  <v-layout>
    <v-flex>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        v-for="item in items"
        :key="item._id"

      >
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>

          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item._id }}</td>
          <td class="text-xs-right">{{ props.item.student_name }}</td>
          <td class="text-xs-right">{{ props.item.student_email }}</td>
          <td class="text-xs-right">{{ props.item.student_contact_number }}</td>
          <td class="text-xs-right">{{ props.item.student_education_level }}</td>
          <td class="text-xs-right">{{ props.item.student_experience }}</td>
          <td class="text-xs-right">{{ props.item.student_address }}</td>
        </template>
      </v-data-table>
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
        headers: [
          { text: 'Student Name', value: 'student_name' },
          { text: 'Work Experience', value: 'student_experience' },
          { text: 'Email Id', value: 'student_email' },
          { text: 'Contact Number', value: 'student_contact_number' },
          {text: 'Educational Qualification', value: 'student_education_level'},
          { text: 'Address', value: 'student_address' }
        ],
        items: [
          {
            value: false,
            _id: '',
            student_name: '',
            student_experience: '',
            student_education_level: '',
            student_email: '',
            student_contact_number: '',
            student_address: ''
          }],
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
    created: function () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('http://192.168.137.1:3000/admin/student/view', {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
        .then((response) => {
          this.items = response.data
          console.log('It works')
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        this.$router.push('/admin/login')
      }
    }
  }
</script>
