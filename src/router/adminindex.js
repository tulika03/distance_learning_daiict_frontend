import Vue from 'vue'
import Router from 'vue-router'
import adminHome from '@/components/admin/AdminHome'
import adminviewFaculty from '@/components/admin/Faculty/viewFaculty'
import adminadd from '@/components/admin/Faculty/add'
import adminupdate from '@/components/admin/Faculty/update'
import adminview from '@/components/admin/Faculty/view'
import adminstudentview from '@/components/admin/student/sview/'
import admincreate from '@/components/admin/course/create'
import adminremoveCourse from '@/components/admin/course/remove'
import AdminListComplains from '@/components/admin/complain/listcomplains'
import AdminviewComplain from '@/components/admin/complain/viewComplain'
import AdminListInquiries from '@/components/admin/inquiry/showInquiries'
import AdminviewInquiry from '@/components/admin/inquiry/viewInquiry'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/',
      name: 'adminHome',
      component: adminHome
    },
    {
      path: '/admin/Faculty/viewFaculty',
      name: 'adminviewFaculty',
      component: adminviewFaculty
    },
    {
      path: '/admin/faculty/add',
      name: 'adminadd',
      component: adminadd
    },
    {
      path: '/admin/faculty/update',
      name: 'adminupdate',
      component: adminupdate
    },
    {
      path: '/admin/faculty/view/:faculty_id',
      name: 'adminview',
      component: adminview
    },
    {
      path: '/admin/student/sview',
      name: 'adminstudentview',
      component: adminstudentview
    },
    {
      path: '/admin/course/create',
      name: 'admincreate',
      component: admincreate
    },
    {
      path: '/admin/course/remove',
      name: 'adminremoveCourse',
      component: adminremoveCourse
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
