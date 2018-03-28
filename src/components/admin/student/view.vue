<template>


  <v-layout>
    <v-flex>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>

          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.Student_Id }}</td>
          <td class="text-xs-right">{{ props.item.Student_Name }}</td>
          <td class="text-xs-right">{{ props.item.Student_Gender }}</td>
          <td class="text-xs-right">{{ props.item.Student_EmailId }}</td>
          <td class="text-xs-right">{{ props.item.Student_MobNo }}</td>
          <td class="text-xs-right">{{ props.item.Student_Address }}</td>
          <td class="text-xs-right">{{ props.item.Student_Photo }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Student ID',
            align: 'left',
            sortable: true,
            value: 'Student_Id'
          },
          { text: 'Student Name', value: 'Student_Name' },
          { text: 'Gender', value: 'Student_Gender' },
          { text: 'Email Id', value: 'Student_EmailId' },
          { text: 'Contact Number', value: 'Student_MobNo' },
          { text: 'Address', value: 'Student_Address' },
          { text: 'Photo', value: 'Student_Photo' }
        ],
        items: [
          {
            value: false,
            Student_Id: '12345',
            Student_Name: 'sdfgh',
            Student_Gender: 'Female',
            Student_EmailId: 'sdfgh@gmail.com',
            Student_MobNo: '1234567890',
            Student_Address: 'kdsadh sidjsi fdci ijdisa isdhias',
            Student_Photo: ''
          },
          {
            value: false,
            Student_Id: '12355',
            Student_Name: 'saweed',
            Student_Gender: 'Male',
            Student_EmailId: 'saweed@gmail.com',
            Student_MobNo: '9934567890',
            Student_Address: 'lsdadksak kdsjfods ofdso fd',
            Student_Photo: ''
          }
        ]
      }
    }
  }
</script>
