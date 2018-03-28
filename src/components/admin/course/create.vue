<template>
  <v-container>

    <div>

      <v-layout row wrap>
        <v-flex xs12 sm5 offset-sm3>
          <v-card class="light-blue lighten-4 mb-2" v-for="item in items" :key="item.courseId">
            <v-container fluid style="min-height: 0;"
                         grid-list-lg>
                  <v-card-title primary-title>
                    <div>
                      <div><h3 class="Grey--text darken-1" mp-0>{{ item.Course_Id }} </h3></div>
                      <div> Course Subject: {{ item.Course_Subject }}</div>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat class="green white--text">Delete</v-btn>
                  </v-card-actions>



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
          { Course_Id: '629',
            Course_Subject: 'Data Structure'
          },
          {
            Course_Id: '234',
            Course_Subject: 'Programmig in C'
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

