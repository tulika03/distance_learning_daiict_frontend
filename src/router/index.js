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
import Adminforgotpwd from '@/components/admin/adminforgotpwd'
import Adminpwdreset from '@/components/admin/adminpwdreset'
import AddAdmin from '@/components/admin/addNewAdmin'
import StudentSignUp from '@/components/student/StudentSignup'
import StudentLogin from '@/components/student/StudentLogin'
import EditProfile from '@/components/student/profile'
import StudentFacultyCourse from '@/components/student/facultycourse/'
import Studentsubtopic from '@/components/student/subtopic'
import Studentstudy from '@/components/student/study'
import Studforgot from '@/components/student/studforgot'
import Studreset from '@/components/student/student_reset'
import StudComplain from '@/components/student/complain'
import studentHome from '@/components/student/home'
import StudInquiry from '@/components/student/inquiry'
import Studfeedback from '@/components/student/studentfeedback'
import MyCourses from '@/components/student/MyCourse'
import Exam from '@/components/student/exam'

// import StudHome from '@/components/student/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/',
      name: 'AdminLogin',
      component: AdminLogin
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
      path: '/admin/AdminHome',
      name: 'adminHome',
      component: adminHome
    },
    {
      path: '/admin/adminforgotpwd',
      name: 'Adminforgotpwd',
      component: Adminforgotpwd
    },
    {
      path: '/admin/adminpwdreset',
      name: 'Adminpwdreset',
      component: Adminpwdreset
    },
    {
      path: '/admin/addNewAdmin',
      name: 'AddAdmin',
      component: AddAdmin
    },
    {
      path: '/student/add',
      name: 'StudnetSignUp',
      component: StudentSignUp
    },
    {
      path: '/student/login',
      name: 'StudnetLogin',
      component: StudentLogin
    },
    {
      path: '/student/EditProfile/:id',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/student/faculty/:id',
      name: 'StudentFacultyCourse',
      component: StudentFacultyCourse
    },
    {
      path: '/student/subtopic/:id',
      name: 'Studentsubtopic',
      component: Studentsubtopic
    },
    {
      path: '/student/study/:id',
      name: 'Studentstudy',
      component: Studentstudy
    },
    {
      path: '/student/forgotpassword',
      name: 'Studforgot',
      component: Studforgot
    },
    {
      path: '/student/complains/:id',
      name: 'StudComplain',
      component: StudComplain
    },
    {
      path: '/student/reset',
      name: 'Studreset',
      component: Studreset
    },
    {
      path: '/',
      name: 'studentHome',
      component: studentHome
    },
    {
      path: '/student/inquiry',
      name: 'StudInquiry',
      component: StudInquiry
    },
    {
      path: '/student/feedback/:id',
      name: 'Studfeedback',
      component: Studfeedback
    },
    {
      path: '/student/Mycourse',
      name: 'MyCourses',
      component: MyCourses
    },
    {
      path: '/student/exam',
      name: 'Exam',
      component: Exam
    }
  ],
  mode: 'history'
})
