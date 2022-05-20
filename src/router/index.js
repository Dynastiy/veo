import Vue from 'vue'
import VueRouter from 'vue-router'
import HospitalView from '../layouts/hospitalLayout.vue'
import CorporateView from '../layouts/corporateLayout.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //       path: '/',
    //       name: 'home',
    //       component: HomeView
    //   },
    {
        path: '/',
        // name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/signInOptions.vue')
    },
    {
        path: '/sign-in',
        name: 'hospital',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/hospitalSignIn.vue')
    },
    {
        path: '/sign-in',
        name: 'corporate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/corporateSignIn.vue')
    },

    // Hospital Module Routes
    {
        path: '/dashboard',
        name: 'Hospital Dashboard',
        // name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HospitalView,
            children:[
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/hospital_module/indexPage.vue')
                },
                {
                    path: '/verify-enrollee',
                    name: 'Verify Enrollee',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/hospital_module/verifyEnrollee.vue')
                },
                {
                    path: '/new-visit',
                    name: 'Add Visit',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/hospital_module/newVisit.vue')
                },
                {
                    path: '/due-invoices',
                    name: 'Due Invoices',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/hospital_module/dueInvoices.vue')
                },
                {
                    path: '/submitted-invoices',
                    name: 'Submitted Invoices',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/hospital_module/submittedInvoices.vue')
                },
                {
                    path: '/all-enrollees',
                    name: 'Enrollees',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/hospital_module/allEnrolees.vue')
                },
            ]
    }, 

    // Corporate Module Routes
    {
        path: '/corporate-dashboard',
        name: 'Dashboard',
        // name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: CorporateView,
            children:[
                {
                    path: '/corporate-dashboard',
                    name: 'Corporate Dashboard',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/cooporate_module/indexPage.vue')
                },
                {
                    path: '/manage-employees',
                    name: 'Manage Employee',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/cooporate_module/manageEmployees.vue')
                },
                {
                    path: '/manage-payments',
                    name: 'Manage Payments',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/cooporate_module/managePayments.vue')
                },
                
            ]
    }, 
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router