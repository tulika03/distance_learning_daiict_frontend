import Vue from 'vue'
import Router from 'vue-router'
import viewFaculty from '@/components/admin/Faculty/viewFaculty'
import add from '@/components/admin/Faculty/add'
import update from '@/components/admin/Faculty/update'
import view from '@/components/admin/Faculty/view'
import studentview from '@/components/admin/student/view'
import create from '@/components/admin/course/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/viewFaculty',
      name: 'viewFaculty',
      component: viewFaculty
    },dfgdfsgsdgsdgf
    {
      path: '/add',
      name: 'add',
      component: add

    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
      path: '/view',
      name: 'view',
      component: view
    },
    {
      path: '/studentview',
      name: 'studentview',
      component: studentview
    },
    {
      path: '/create',
      name: 'create',
      component: create
    }
  ],
  mode: 'history'
})
