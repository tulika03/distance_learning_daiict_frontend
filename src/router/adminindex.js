import Vue from 'vue'
import Router from 'vue-router'
import viewFaculty from '@/components/admin/Faculty/viewFaculty'
import add from '@/components/admin/Faculty/add'
import update from '@/components/admin/Faculty/update'
import view from '@/components/admin/Faculty/view'
import studentview from '@/components/admin/student/sview/'
import create from '@/components/admin/course/create'
import removeCourse from '@/components/admin/course/remove'
import AdminListComplains from '@/components/admin/complain/listcomplains'
import AdminviewComplain from '@/components/admin/complain/viewComplain'
import AdminListInquiries from '@/components/admin/inquiry/showInquiries'
import AdminviewInquiry from '@/components/admin/inquiry/viewInquiry'
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
      path: '/admin/student/sview',
      name: 'studentview',
      component: studentview
    },
    {
      path: '/admin/course/create',
      name: 'create',
      component: create
    },
    {
      path: '/admin/course/remove',
      name: 'removeCourse',
      component: removeCourse
    },
    {
      path: '/admin/complain/listcomplains',
      name: 'AdminListComplains',
      component: AdminListComplains
    },
    {
      path: '/admin/complain/viewComplain',
      name: 'AdminviewComplain',
      component: AdminviewComplain
    },
    {
      path: '/admin/inquiry/showInquiries',
      name: 'AdminListInquiries',
      component: AdminListInquiries
    },
    {
      path: '/admin/inquiry/viewInquiry',
      name: 'AdminviewInquiry',
      component: AdminviewInquiry
    }
  ],
  mode: 'history'
})
