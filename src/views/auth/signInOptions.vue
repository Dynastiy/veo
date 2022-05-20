<template>
    <div>
        <div class="sign-in-options">
            <div class="container">
                
                <div class="text-center mb-4">
                    <img src="@/assets/img/logo.svg" alt="" srcset="">
                    <p class="">Select Option to Sign In</p>
                </div>
            <div class="options">
                <button class="choose--option" @click="goToHospital">
                Sign in as Hospital
                </button>
                <button class="choose--option" @click="goToCorporate">
                    Sign in as Corporate Body
                </button>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        goToHospital(){
            this.$router.push({name: 'hospital'})
        },
        goToCorporate(){
            this.$router.push({name: 'corporate'})
        }
    }
}
</script>