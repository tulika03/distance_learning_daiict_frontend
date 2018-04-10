<template>
  <v-container fluid="true">
    <v-layout class="ml-0 mr-0" >
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
        <h2 class="text-md-center mb-5 red--text">
          Complains
        </h2>
      </v-flex>
    </v-layout>
    <v-data-table
      :headers="complainheaders"
      :items="complainitems"
      v-for="item in complainitems"
      :key="item.student_id"
      class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.complain_date }}</td>
        <td>{{ props.item.student_id }}</td>
        <td>{{ props.item.student_name }}</td>
        <td>{{ props.item.FC_id }}</td>
        <td class="text-xs-left" ><b>{{ props.item.complaint_title }}</b></td>
        <td> <v-btn :key="item._id"  v-bind:to= "{name: 'AdminViewComplain', params: {id: item.student_id } }" class="green lighten-2 white--text"> View</v-btn></td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  export default {
    data () {
      return {
        complainheaders: [
          {
            text: 'Student ID',
            align: 'left',
            sortable: false,
            value: 'student_id'
          },
          { text: 'Student Name', value: 'student_name' },
          { text: 'Date', value: 'complain_date' },
          { text: 'Faculty Course ID', value: 'FC_id' },
          { text: 'Subject', value: 'complaint_title' }
        ],
        complainitems: [
          {
            value: false,
            _id: '',
            student_id: '',
            complain_date: '',
            complaint_title: '',
            FC_id: '',
            student_name: ''
          }
        ],
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
        Axios.get('https://sheltered-spire-10162.herokuapp.com/admin/complaints/view',  {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
         }
      })
        .then((response) => {
          this.items = response.data
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
