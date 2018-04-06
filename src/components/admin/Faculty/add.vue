<template>
  <v-container fluid="true">

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
    <v-spacer></v-spacer>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-4 red--text">
        Add New Faculty
        </h2>
      </v-flex>

    </v-layout>
    <div
      style="min-width: 560px; margin: auto;"
      class="orange lighten-4" >
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-container>
            <v-form @submit.prevent="addFaculty">

                  <v-text-field
                    label="Name"
                    v-model="faculty_name"
                    name="faculty_name"
                    required
                    :rules="nameRules"
                  ></v-text-field>
              <label>Upload Image*</label>    <br><br>
              <div>
                <input type=file
                       @change="onFileSelected"
                       class="text--primary" required>
              </div >
              <br>
               <v-text-field
                label="E-mail"
                name="faculty_email"
                v-model="faculty_email"
                type="email"
                :rules="emailRules"
                required
                 ></v-text-field>

              <v-text-field
                label="Password"
                type="password"
                name="faculty_password"
                v-model="faculty_password"
                required
                :rules="passwordRules"
              ></v-text-field>



                  <v-text-field name="faculty_contact_number"
                                label="Contact"
                                id="contact"
                                v-model.number="faculty_contact_number"
                                :rules="contactRules"
                                required>

                  </v-text-field>

                  <v-text-field name="faculty_educational_details"
                                label="Educational Details"
                                id="educational-detail"
                                v-model="faculty_educational_details"
                                :rules="eduRules"
                                required>

                  </v-text-field>

                  <v-text-field name="faculty_area_interest"
                                label="Interest Area"
                                id="interest-area"
                                v-model="faculty_area_interest"
                                :rules="interestRules"
                                required>

                  </v-text-field>

              <v-layout row>
                <v-flex xs12 sm6>
                  <v-btn flat class="orange"
                         :disabled="!formIsValid"
                         type="submit"
                         @click="addFaculty"
                  >Add
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>


<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        faculty_name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 40 || 'Name must be less than 40 characters'
        ],
        faculty_photo: '',
        faculty_email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        faculty_password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ],
        faculty_contact_number: '',
        contactRules: [
          v => !!v || 'Contact number is required'
        ],
        faculty_educational_details: '',
        eduRules: [
          v => !!v || 'Educational Qualification detail is required'
        ],
        faculty_area_interest: '',
        interestRules: [
          v => !!v || 'Area of interest is required'
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

    computed: {
      formIsValid () {
        return this.faculty_name !== '' &&
          this.faculty_email !== '' &&
          this.faculty_password !== '' &&
          this.faculty_contact_number !== '' &&
          this.faculty_educational_details !== '' &&
          this.faculty_area_interest !== ''
      }
    },
    methods: {
      onFileSelected (event) {
        this.faculty_photo = event.target.files[0]
        console.log(this.faculty_photo)
      },
      addFaculty () {
        if (!this.formIsValid) {
          return
        }
        const facultyData = {
          faculty_name: this.faculty_name,
          faculty_photo: this.faculty_photo,
          faculty_email: this.faculty_email,
          faculty_password: this.faculty_password,
          faculty_contact_number: this.faculty_contact_number,
          faculty_educational_details: this.faculty_educational_details,
          faculty_area_interest: this.faculty_area_interest
        }
        console.log(facultyData)
        axios.post('http://192.168.137.1:3000/admin/faculty/add/', this.facultyData, {headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }}).then(r => console.log('r: ', JSON.stringify(r, null, 2)))
      }
    }
  }
</script>
