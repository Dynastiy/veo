<template>
    <div>
        <app-drawer/>
        <AppHeader/>
        <MobileHeader/>
        <div id="main--dashboard">
            <router-view />
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/corporateAppDrawer.vue'
import MobileHeader from '@/components/mobileCorporateNav.vue'
import AppHeader from '@/components/appHeader.vue'
export default {
    components:{
        AppDrawer, AppHeader, MobileHeader
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