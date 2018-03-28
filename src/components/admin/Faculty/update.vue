<template>
 <v-container>
   <v-layout>
     <v-flex>

        <v-card>
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
                    name="fname"
                    v-model="fname"
                  ></v-text-field>
                </v-card-text>

                <v-card-text>
                  <v-text-field
                    label="Image Url"
                    name="imageUrl"
                    v-model="imageUrl"
                  ></v-text-field>
                </v-card-text>

              <v-card-text>
                <v-text-field
                  label="E-mail"
                  name="email"
                  v-model="email"
                ></v-text-field>
              </v-card-text>

                <v-card-text>
                  <v-text-field
                    label="Password"
                    name="password"
                    v-model="password"
                  ></v-text-field>
                </v-card-text>

                <v-card-text>
                  <v-text-field name="contact"
                                label="Contact"
                                id="contact"
                                v-model="contact"
                                >

                  </v-text-field>
                </v-card-text>
                <v-card-text>
                  <v-text-field name="eduDetail"
                                label="Educational Details"
                                id="educational-detail"
                                  v-model="eduDetail">

                  </v-text-field>
                </v-card-text>
                <v-card-text>
                  <v-text-field name="interest"
                                label="Interest Area"
                                id="interest-area"
                                v-model="interest"
                                >

                  </v-text-field>
                </v-card-text>
                <v-card-actions >
                  <v-btn @click="" color="indigo" class="text--white"> SUBMIT </v-btn>
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
  export default {
    data () {
      return {
        fname: '',
        imageUrl: '',
        email: '',
        password: '',
        contact: '',
        eduDetail: '',
        interest: ''

      }
    }
  }
</script>
