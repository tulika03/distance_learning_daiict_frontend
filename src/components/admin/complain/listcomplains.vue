<template>
  <v-container fluid="true">
    <navMenu></navMenu>
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
      v-for="item in complainitems"
      :key="item.student_id"
      class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.complain_date }}</td>
        <td>{{ props.item.student_id }}</td>
        <td>{{ props.item.student_name }}</td>
        <td>{{ props.item.FC_id }}</td>
        <td class="text-xs-left" ><b>{{ props.item.complaint_title }}</b></td>
        <td> <v-btn :key="item._id"  v-bind:to= "{name: 'AdminViewComplain', params: {id: item.student_id } }" class="green lighten-2 white--text"> View</v-btn></td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'
  import Menu from '@/components/admin/menu'
  export default {
    name: 'app',
    components: {'navMenu': Menu},
    data () {
      return {
        complainheaders: [
          {
            text: 'Student ID',
            align: 'left',
            sortable: false,
            value: 'student_id'
          },
          { text: 'Student Name', value: 'student_name' },
          { text: 'Date', value: 'complain_date' },
          { text: 'Faculty Course ID', value: 'FC_id' },
          { text: 'Subject', value: 'complaint_title' }
        ],
        complainitems: [
          {
            value: false,
            _id: '',
            student_id: '',
            complain_date: '',
            complaint_title: '',
            FC_id: '',
            student_name: ''
          }
        ],
        sideNav: false,
        right: null
      }
    },
    created: function () {
      console.log(Vue.localStorage.get('token'))
      var jwt = Vue.localStorage.get('token')
      if (jwt) {
        Axios.get('https://sheltered-spire-10162.herokuapp.com/admin/complaints/view', {
          headers: {
            'Authorization': 'bearer ' + Vue.localStorage.get('token')
          }
        })
        .then((response) => {
          this.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        this.$router.push('/admin/login')
      }
    }
  }
</script>
