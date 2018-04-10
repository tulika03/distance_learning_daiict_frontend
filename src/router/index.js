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
import adminUpdateCourse from '@/components/admin/course/updateCourse'
import AdminListComplains from '@/components/admin/complain/listcomplains'
import AdminViewComplain from '@/components/admin/complain/viewComplain'
import AdminListInquiries from '@/components/admin/inquiry/showInquiries'
import AdminviewInquiry from '@/components/admin/inquiry/viewInquiry'
import AdminLogin from '@/components/admin/login'
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
      path: '/admin/faculty/update/:id',
      name: 'adminupdate',
      component: adminupdate
    },
    {
      path: '/admin/faculty/view/:id',
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
      path: '/admin/course/remove/',
      name: 'adminremoveCourse',
      component: adminremoveCourse
    },
    {
      path: '/admin/course/updateCourse/:id',
      name: 'adminUpdateCourse',
      component: adminUpdateCourse
    },
    {
      path: '/admin/complain/listcomplains',
      name: 'AdminListComplains',
      component: AdminListComplains
    },
    {
      path: '/admin/complain/viewComplain/:id',
      name: 'AdminViewComplain',
      component: AdminViewComplain
    },
    {
      path: '/admin/inquiry/showInquiries',
      name: 'AdminListInquiries',
      component: AdminListInquiries
    },
    {
      path: '/admin/inquiry/viewInquiry/:id',
      name: 'AdminviewInquiry',
      component: AdminviewInquiry
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ],
  mode: 'history'
})
