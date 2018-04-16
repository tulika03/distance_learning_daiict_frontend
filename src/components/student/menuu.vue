<template>
  <v-layout>
    <v-navigation-drawer fixed temporary v-model="sideNav" fixed temporary>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0 ">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src=" " >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title router :to="'/student/EditProfile'">Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div >

      <v-toolbar color="primary"class="toolbar--fixed">
        <v-toolbar-side-icon
          @click.stop="sideNav = !sideNav"/>
        <v-toolbar-title class="white--text"> DAIICT Distance Learning</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat :to="'/student/login'" class="white--text">

            Login
          </v-btn>
          <v-btn flat :to="'/student/add'" class="white--text">

            Signup
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-spacer></v-spacer></div>
    <br>
    <br>
    <br>
  </v-layout>

</template>

<script>
  export default {
    data () {
      return {

        sideNav: false,
        menuItems: [
          {title: 'Home', icon: 'home', link: '/'},
          {title: 'My Course', icon: 'assignment', link: '/student/MyCourse'},
          {title: 'Complains', icon: 'help', link: '/student/complains/:FC_id'}
        ],
        right: null
      }
    }}
</script>
