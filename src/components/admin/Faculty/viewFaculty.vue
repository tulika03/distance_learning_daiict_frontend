<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn :to="'/add/'" class="green white--text right"> ADD FACULTY </v-btn>
      </v-flex>
    </v-layout>

  <div>

      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card class="grey lighten-4 mb-3" v-for="item in items" :key="item.facultyId"  :to="'/view/'" >
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media
                    :src="item.faculty_photo"
                    height="150px" width="150px">
                  </v-card-media>
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div class="text--black">
                      <div><h3 class="red--text" mp-0> {{ item.faculty_name }} </h3></div>
                      <div> {{ item.faculty_educational_details }}</div><br>
                      <div>  <label class="text--black"> <b>Area of Interest:</b>  </label> {{ item.faculty_area_interest }}</div><br>
                      <div>  <label class="text--black"><b>Email: </b> </label> {{ item.faculty_email }}</div>
                      <div> <label class="text--black"><b>Office:  </b></label>(+91) {{ item.faculty_contact_number }}</div>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat class="orange darken-3 white--text" :to="'/update/'">Edit</v-btn>
                    <v-btn flat class="orange darken-3 white--text">Delete</v-btn>
                  </v-card-actions>

                </v-flex>
              </v-layout>
            </v-container>

          </v-card>
        </v-flex>
      </v-layout>
  </div>
    </v-container>

</template>



<script>
  export default {
    data () {
      return {
        sideNav: false,
        items: [
          {
            faculty_photo: 'http://www.daiict.ac.in/daiict/images/faculty/asim_banerjee.jpg',
            faculty_name: 'Aseem Banerjee',
            faculty_educational_details: '\t\n' +
            'PhD (Electrical Engineering) \n' +
            'IIT Bombay',
            faculty_area_interest: ' Pattern Recognition, Medical Imaging, Image Processing, Digital Signal Processing, Speech Coding, Software Engineering, Software Quality Assurance and Project Management',
            faculty_email: 'asim_banerjee@daiict.ac.in',
            faculty_contact_number: '07930510554'
          },
          {
            faculty_photo: 'http://www.daiict.ac.in/daiict/images/faculty/Yash_Agrawal_Photo.jpg',
            faculty_name: 'Agrawal, Yash',
            faculty_educational_details: 'PhD (Electronics & Communication Engineering)\n' +
            'NIT, Hamirpur, Himachal Pradesh',
            faculty_area_interest: 'Design, modeling and simulation of high performance VLSI interconnects, Nanotechnology',
            faculty_email: 'yash_agarwal@daiict.ac.in',
            faculty_contact_number: '07930510629'
          }

        ],
        created: function () {
        /*  this.loadQuote(); */
        },
        methods: {
          loadQuote () {
            /* axios.get('https://sheltered-spire-10162.herokuapp.com/admin/faculty/view/') */
          }
        }
      }
    }
  }
</script>

