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



    <v-spacer></v-spacer>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-5 red--text">
         Enquiries
        </h2>
      </v-flex>
    </v-layout>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.email_id }}</td>
      <td class="text-xs-left"><b>{{ props.item.inquiry_subject }}</b></td>
      <td> <v-btn :to="'/admin/inquiry/viewInquiry/'" class="green lighten-2 white--text"> View</v-btn></td>
    </template>
  </v-data-table>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Email ID',
            align: 'left',
            sortable: false,
            value: 'email_id'
          },
          { text: 'Subject', value: 'inquiry_subject' }
        ],
        items: [
          {
            value: false,
            email_id: 'test1@test.com',
            inquiry_subject: 'subject 1'
          },
          {
            value: false,
            email_id: 'test2@test.com',
            inquiry_subject: 'subject 2'
          },
          {
            value: false,
            email_id: 'test3@test.com',
            inquiry_subject: 'subject 3'
          },
          {
            value: false,
            email_id: 'test4@test.com',
            inquiry_subject: 'subject 4'
          },
          {
            value: false,
            email_id: 'test5@test.com',
            inquiry_subject: 'subject 5'
          },
          {
            value: false,
            email_id: 'test6@test.com',
            inquiry_subject: 'subject 6'
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
    }
  }
</script>
