<template>
  <v-app>      <v-navigation-drawer fixed temporary v-model="sideNav" fixed temporary>
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
</v-app>
</template>

<script>
  export default {
    data () {
      return {
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
          {title: 'Student', icon: 'dashboard', link: '/admin/student/view'},
          {title: 'Course',
            icon: 'dashboard',
            active: true,
            menuItems: [
              {title: 'View Course', icon: 'view_array', link: '/admin/course/remove'},
              {title: 'Create Course', icon: 'note_add', link: '/admin/course/create'}
            ]
          }

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
