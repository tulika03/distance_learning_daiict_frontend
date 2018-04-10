<template>
  <v-container fluid="true">
    <navMenu></navMenu>
    <main>
      <router-view></router-view>
    </main>
      <br>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-5 red--text">
          Enquiries
        </h2>
      </v-flex>
    </v-layout>
    <v-data-table
      :headers="inquiryheaders"
      :items="inquiryitems"
      class="elevation-1">
      <template slot="inquiryitems" slot-scope="props">
        <td>{{ props.item.email_id }}</td>
        <td class="text-xs-left"><b>{{ props.item.inquiry_subject }}</b></td>
        <td> <v-btn :to="'/admin/inquiry/viewInquiry/'" class="green lighten-2 white--text"> View</v-btn></td>
      </template>
    </v-data-table>
    <br>
    <v-layout>
      <v-flex>
        <h2 class="text-md-center mb-5 red--text">
          Complains
        </h2>
      </v-flex>
    </v-layout>
    <v-data-table
      :headers="complainheaders"
      :items="complainitems"
      class="elevation-1">
      <template slot="complainitems" slot-scope="props">
        <td>{{ props.item.Student_EmailId }}</td>
        <td class="text-xs-left" ><b>{{ props.item.complain_subject }}</b></td>
        <td><v-btn :to="'/admin/complain/viewComplain/'" class="green lighten-2 white--text"> View</v-btn></td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
 import Menu from '@/components/admin/menu'
 export default {
   name: 'app',
   components: {'navMenu': Menu},
   data () {
     return {
       right: null,
       inquiryheaders: [
         {
           text: 'Email ID',
           align: 'left',
           sortable: false,
           value: 'inquiry_email'
         },
          {text: 'Subject', value: 'inquiry_title'}
       ],
       inquiryitems: [
         {
           value: false,
           _id: '',
           inquiry_title: '',
           inquiry_email: ''
         }
       ],
       complainheaders: [
         {
           text: 'Email ID',
           align: 'left',
           sortable: false,
           value: 'Student_EmailId'
         },
          {text: 'Subject', value: 'complain_subject'}
       ],
       complainitems: [
         {
           value: false,
           Student_EmailId: 'test1@test.com',
           complain_subject: 'subject 1'
         }
       ]
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
