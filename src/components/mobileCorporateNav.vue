<template>
    <div id="mobile">
        <div class="app--header" >
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div class="logo">
                    <router-link to="/"><img src="@/assets/img/logo.svg" width="80" alt="" srcset=""></router-link>
                </div>
                <div>
                    <IconComponent icon="codicon:menu" style="font-size:1.6rem"  id="tog"/>
                </div>
                <div class="menu--item mobile p-5" id="side-bar">
                    <div class="text-right mb-5">
                        <IconComponent icon="ep:close" color="white" style="font-size:2.3rem"  />
                    </div>
                   <div id="mySidebar" class="sidebar sidebar-menu">
                      <div class="top--image text-center">
                        <img src="@/assets/img/logo.svg" width="180" alt="" />
                      </div> 
                        <ul class="list-unstyled " id="side-menu">
                            <li>
                                <router-link to="/corporate-dashboard" class="" >
                                    <IconComponent icon="clarity:home-solid"  />
                                    <span class="item ml-2">Dashboard</span>
                                </router-link>
                            </li>
                            
                            <li>
                                <router-link to="/manage-employees" class="" >
                                     <IconComponent icon="fluent:people-audience-20-filled" />
                                    <span class="item ml-2">Manage Employee</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/manage-payments" class="" >
                                     <IconComponent icon="fa-solid:file-invoice" />
                                    <span class="item ml-2">Manage Payments</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import Corporate from '@/components/corporateAppDrawer.vue'
export default {
    components:{
        // Corporate
    },
     mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        // const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
        // closeMenu.onclick = function(){
        // sidee.classList.remove('active');
        // bodyEl.classList.remove("active")
        // }
    },
}
</script>