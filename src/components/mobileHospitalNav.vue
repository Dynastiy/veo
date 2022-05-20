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
                        <img src="@/assets/img/logo.svg" width="130" alt="" />
                      </div>
                        <!-- <div class="top-logo-section text-center pb-3 pt-2">
                            <span class="logo-lg">
                                <img src="@/assets/img/icon.png" alt="" width="80%">
                            </span>
                            <span class="logo-sm">
                                <img src="@/assets/img/logo.png" alt="" width="70%">
                            </span>
                        </div> -->
                        <ul class="list-unstyled " id="side-menu">
                            <li>
                                <router-link to="/dashboard" class="" >
                                    <IconComponent icon="clarity:home-solid"  />
                                    <span class="item">Dashboard</span>
                                </router-link>
                            </li>
                             <li>
                                <a href="javascript:void(0)" class="dropdown-btn d-flex align-items-center justify-content-between" id="dropdown">
                                    <div>
                                      <IconComponent icon="ri:chat-follow-up-fill" />
                                      <span class="">Manage Visits</span>
                                    </div>
                                    <IconComponent icon="ant-design:caret-down-filled" />
                                </a>
                                <div  class="sub-menu" aria-expanded="true">
                                    <router-link to="/new-visit" class="sub ml-3">New  Visit</router-link>
                                    <router-link to="/" class="sub ml-3">Follow Up Visits</router-link>
                                    <router-link to="/" class="sub ml-3">Request Code</router-link>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dropdown-btn d-flex align-items-center justify-content-between" id="dropdown">
                                    <div>
                                      <IconComponent icon="fluent:people-audience-20-filled" />
                                      <span class="">Manage Enrolees</span>
                                    </div>
                                    <IconComponent icon="ant-design:caret-down-filled" />
                                    
                                </a>
                                <div class="sub-menu" aria-expanded="true">
                                    <router-link to="/all-enrollees" class="sub ml-3">All Enrolees</router-link>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dropdown-btn d-flex align-items-center justify-content-between" id="dropdown">
                                    <div>
                                      <IconComponent icon="fa-solid:file-invoice" />
                                      <span class="">Manage Invoices</span>
                                    </div>
                                    <IconComponent icon="ant-design:caret-down-filled" />
                                    
                                </a>
                                <div class="sub-menu" aria-expanded="true">
                                    <router-link to="/" class="sub ml-3">Add Invoice</router-link>
                                    <router-link to="/due-invoices" class="sub ml-3">Due Invoices</router-link>
                                    <router-link to="/submitted-invoices" class="sub ml-3">Submitted Invoices</router-link>
                                </div>
                            </li>
                            <li>
                                <router-link to="/" class="">
                                    <IconComponent icon="clarity:list-solid-badged" />
                                    <span class="item">Capitation List</span>
                                </router-link>
                            </li>
                            
                            <li>
                                <router-link to="/" class="">
                                    <IconComponent  icon="ic:baseline-medical-information"  />
                                    <span class="item">HMO Information</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/verify-enrollee" class="">
                                    <IconComponent icon="uil:comment-alt-verify" />
                                    <span class="item">Verify Employee</span>
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
export default {
    components:{
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


        // For Dropdown Menu
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
        });
        }
    },
}
</script>