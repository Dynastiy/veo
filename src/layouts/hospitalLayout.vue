<template>
    <div>
        <app-drawer/>
        <AppHeader/>
        <MobileNav/>
        <div id="main--dashboard">
            <router-view />
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/hospitalAppDrawer.vue'
import MobileNav from '@/components/mobileHospitalNav.vue'
import AppHeader from '@/components/appHeader.vue'
export default {
    components:{
        AppDrawer, AppHeader, MobileNav
    },
//    async created(){
//         if (!this.$store.getters.isLoggedIn) {
//             this.$toastify({
//           text: `Please Login`,
//           className: "alert",
//           style: {
//             background: "red",
//           },
//         }).showToast();
//       this.$router.push("/sign-in");
//     }
//    }
}
</script>