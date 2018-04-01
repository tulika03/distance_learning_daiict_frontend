import Vue from 'vue'
import Router from 'vue-router'
import viewFaculty from '@/components/admin/Faculty/viewFaculty'
import add from '@/components/admin/Faculty/add'
import update from '@/components/admin/Faculty/update'
import view from '@/components/admin/Faculty/view'
import studentview from '@/components/admin/student/sview/'
import create from '@/components/admin/course/create'
import removeCourse from '@/components/admin/course/remove'
import ViewInquiry from '@/components/admin/inquiry/viewInquiry'
import showInquiries from '@/components/admin/inquiry/showInquiries'
import ListComplains from '@/components/admin/complain/listcomplains'
import ViewComplain from '@/components/admin/complain/viewComplain'
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
      path: '/admin/inquiry/viewInquiry',
      name: 'ViewInquiry',
      component: ViewInquiry
    },
    {
      path: '/admin/inquiry/showInquiries',
      name: 'showInquiries',
      component: showInquiries
    },
    {
      path: '/admin/complain/listcomplains',
      name: 'ListComplains',
      component: ListComplains
    },
    {
      path: '/admin/complain/viewComplain',
      name: 'ViewComplain',
      component: ViewComplain
    }
  ],
  mode: 'history'
})
