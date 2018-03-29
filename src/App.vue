<template>
  <v-app>

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

    <v-toolbar class="primary">
      <v-toolbar-side-icon @click.stop="sideNav=!sideNav" />
      <v-toolbar-title class="white--text">
        <router-link to="/" tag="span" style="cursor: pointer">Distance learning </router-link></v-toolbar-title>
      <v-spacer> </v-spacer>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>

  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { title: 'Faculty', icon: 'dashboard', link: '/admin/faculty/viewFaculty' },
          {title: 'Student', icon: 'dashboard', link: '/admin/student/view'},
          {title: 'Course', icon: 'dashboard', link: '/admin/course/create'}

        ],
        right: null
      }
    }
  }
</script>

<style scoped>

  .title {
    position: absolute;
    bottom: 50px;
    color: black;
    font-size:2em;

  }
</style>
