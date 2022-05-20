<template>
    <div>
        <div id="app-top">
            <div class="app--header d-flex align-items-center justify-content-between">
                <h5> {{ currentRouteName }} </h5>
                <div class="d-flex align-items-center" style="gap:30px">
                    <IconComponent icon="clarity:settings-solid" class="icon"/>
                    <IconComponent icon="ion:notifications" class="icon" />
                    <h5>New Age Hospitals Ltd.</h5>
                    <img src="https://pluspng.com/img-png/png-logo-design-sample-logo-design-09-388.png" width="30" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        currentRouteName(){
            return this.$route.name
        }
    },
}
</script>