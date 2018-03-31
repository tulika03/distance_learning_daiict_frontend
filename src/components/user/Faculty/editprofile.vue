<template>
  <v-container>
    <v-layout>
      <v-flex>

        <v-card>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="red--text darken-2"><h3>EDIT PROFILE</h3> </v-card-title>
              </v-flex>

            </v-layout>
            <v-divider></v-divider>
            <v-spacer></v-spacer>

            <v-layout row wrap class="">
              <v-flex xs12>

                <v-card-text hidden>
                  <v-text-field
                    label="Faculty Id"
                    name="fid"
                    v-model="fid"
                  ></v-text-field>
                </v-card-text>

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
                    disabled="true"
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
                  <v-text-field name="address"
                                label="Address"
                                id="address"
                                v-model="address"
                  >
                  </v-text-field>
                </v-card-text>
                <v-card-text>
                  <v-text-field name="subject"
                                label="Subject"
                                id="subject"
                                v-model="subject"
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
                  <v-text-field name="explevel"
                                label="Experience Level"
                                id="explevel"
                                v-model="explevel"
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
        fid: '',
        fname: '',
        imageUrl: '',
        email: 'kkjj',
        contact: '',
        address: '',
        subject: '',
        eduDetail: '',
        explevel: ''

      }
    }
  }
</script>
