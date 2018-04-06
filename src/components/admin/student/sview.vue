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
      >
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>

          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.Student_Id }}</td>
          <td class="text-xs-right">{{ props.item.Student_Name }}</td>
          <td class="text-xs-right">{{ props.item.Student_Gender }}</td>
          <td class="text-xs-right">{{ props.item.Student_EmailId }}</td>
          <td class="text-xs-right">{{ props.item.Student_MobNo }}</td>
          <td class="text-xs-right">{{ props.item.Student_Address }}</td>
          <td class="text-xs-right">{{ props.item.Student_Photo }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Student ID', align: 'left', sortable: true, value: 'Student_Id'},
          { text: 'Student Name', value: 'Student_Name' },
          { text: 'Gender', value: 'Student_Gender' },
          { text: 'Email Id', value: 'Student_EmailId' },
          { text: 'Contact Number', value: 'Student_MobNo' },
          { text: 'Address', value: 'Student_Address' },
          { text: 'Photo', value: 'Student_Photo' }
        ],
        items: [
          {
            value: false,
            Student_Id: '12345',
            Student_Name: 'sdfgh',
            Student_Gender: 'Female',
            Student_EmailId: 'sdfgh@gmail.com',
            Student_MobNo: '1234567890',
            Student_Address: 'kdsadh sidjsi fdci ijdisa isdhias',
            Student_Photo: ''
          },
          {
            value: false,
            Student_Id: '12355',
            Student_Name: 'saweed',
            Student_Gender: 'Male',
            Student_EmailId: 'saweed@gmail.com',
            Student_MobNo: '9934567890',
            Student_Address: 'lsdadksak kdsjfods ofdso fd',
            Student_Photo: ''
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
