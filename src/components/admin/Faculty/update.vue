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

        <v-card  @submit.prevent="updateFaculty" enctype="multipart/form-data">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="red--text darken-2"><h3>EDIT DETAILS</h3> </v-card-title>
              </v-flex>

            </v-layout>
            <v-divider></v-divider>
            <v-spacer></v-spacer>

            <v-layout row wrap class="">
              <v-flex xs12>

                <v-card-text>
                  <v-text-field
                    label="Faculty name"
                    name="items.faculty_name"
                    v-model="items.faculty_name"
                    required
                  >{{ items.faculty_name }}</v-text-field>
                </v-card-text>

                <label>Upload Image*</label>    <br><br>
                <div>
                  <input type=file
                         @change="onFileSelected"
                         class="text--primary" required
                         accept="image/*">
                </div >
                <br>

              <v-card-text>
                <v-text-field
                  label="E-mail"
                  name="items.faculty_email"
                  v-model="items.faculty_email"
                  required
                >
                  {{ items.faculty_email }}
                </v-text-field>
              </v-card-text>

                <v-card-text>
                  <v-text-field
                    label="Password"
                    type="password"
                    name="items.faculty_password"
                    v-model="items.faculty_password"
                    required
                  ></v-text-field>
                </v-card-text>

                <v-card-text>
                  <v-text-field name=" items.faculty_contact_number"
                                label="Contact"
                                v-model="items.faculty_contact_number"
                                required
                                >
                          {{ items.faculty_contact_number }}
                  </v-text-field>
                </v-card-text>
                <v-card-text>
                  <v-text-field name="items.faculty_educational_details"
                                label="Educational Details"
                               v-model="items.faculty_educational_details"
                                required>

                  </v-text-field>
                </v-card-text>
                <v-card-text>
                  <v-text-field name="items.faculty_area_interest"
                                label="Interest Area"
                                v-model="items.faculty_area_interest"
                                required
                                >
                            {{ items.faculty_area_interest }}
                  </v-text-field>
                </v-card-text>
                <v-card-actions >
                  <v-btn @click="updateFaculty" color="indigo" class="text--white"> SUBMIT </v-btn>
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
  import Vue from 'vue'
  export default {
    data () {
      return {
        items: {
          _id: '',
          faculty_name: '',
          faculty_photo: '',
          faculty_email: '',
          faculty_password: '',
          faculty_contact_number: '',
          faculty_educational_details: '',
          faculty_area_interest: ''
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
      onFileSelected (event) {
        this.faculty_photo = event.target.files[0]
        console.log(this.faculty_photo)
      },
      async getDetail () {
        console.log(Vue.localStorage.get('token'))
        var jwt = Vue.localStorage.get('token')
        console.log('view id called')
        if (jwt) {
          Axios.get('http://192.168.137.1:3000/admin/faculty/view/' + this.$route.params.id,
            {
              headers: {
                'Authorization': 'bearer ' + Vue.localStorage.get('token')
              }
            })
            .then((response) => {
              console.log(response.data[0])
              this.items = response.data[0]
              console.log(this.items)
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          this.$router.push('/admin/login')
        }
      },
      updateFaculty () {
        const fd = new FormData()
        fd.append('faculty_photo', this.faculty_photo)
        fd.append('faculty_name', this.items.faculty_name)
        fd.append('faculty_email', this.items.faculty_email)
        fd.append('faculty_password', this.items.faculty_password)
        fd.append('faculty_contact_number', this.items.faculty_contact_number)
        fd.append('faculty_educational_details', this.items.faculty_educational_details)
        fd.append('faculty_area_interest', this.items.faculty_area_interest)
        var jwt = Vue.localStorage.get('token')
        console.log('view id called')
        if (jwt) {
          Axios.patch('http://192.168.137.1:3000/admin/faculty/update/' + this.$route.params.id, fd,
            {
              headers: {
                'Content-type': 'multipart/form-data',
                'Authorization': 'bearer ' + Vue.localStorage.get('token')
              }
            })
            .then(r => console.log('r: ', JSON.stringify(r, null, 2)))
            .catch(error => {
              console.log(error.response)
            })
        } else {
          this.$router.push('/admin/login')
        }
      }
    },
    mounted () {
      this.getDetail()
    }
  }
</script>
