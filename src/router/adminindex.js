import Vue from 'vue'
import Router from 'vue-router'
import viewFaculty from '@/components/admin/Faculty/viewFaculty'
import add from '@/components/admin/Faculty/add'
import update from '@/components/admin/Faculty/update'
import view from '@/components/admin/Faculty/view'
import studentview from '@/components/admin/student/view/'
import create from '@/components/admin/course/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/Faculty/viewFaculty',
      name: 'viewFaculty',
      component: viewFaculty
    },
    {
      path: '/admin/faculty/add',
      name: 'add',
      component: add
    },
    {
      path: '/admin/faculty/update',
      name: 'update',
      component: update
    },
    {
      path: '/admin/faculty/view/:faculty_id',
      name: 'view',
      component: view
    },
    {
      path: '/admin/student/view',
      name: 'studentview',
      component: studentview
    },
    {
      path: '/admin/course/create',
      name: 'create',
      component: create
    }
  ],
  mode: 'history'
})
