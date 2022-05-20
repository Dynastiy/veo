
      <template>
    <div>
        <div class="">
                <aside class="side-bar main--app--drawer shadow-lg">
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
                                    <IconComponent icon="clarity:home-solid" class="icon" />
                                    <span class="item">Dashboard</span>
                                </router-link>
                            </li>
                             <li>
                                <a href="javascript:void(0)" class="dropdown-btn d-flex align-items-center justify-content-between" id="dropdown">
                                    <div>
                                      <IconComponent icon="ri:chat-follow-up-fill" class="icon"/>
                                      <span class="">Manage Visits</span>
                                    </div>
                                    <IconComponent icon="ant-design:caret-down-filled" />
                                </a>
                                <div id="myDropdown" class="sub-menu" aria-expanded="true">
                                    <router-link to="/new-visit" class="sub ml-3">New  Visit</router-link>
                                    <router-link to="/ebooks" class="sub ml-3">Follow Up Visits</router-link>
                                    <router-link to="/robots" class="sub ml-3">Request Code</router-link>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dropdown-btn d-flex align-items-center justify-content-between" id="dropdown">
                                    <div>
                                      <IconComponent icon="fluent:people-audience-20-filled" class="icon"/>
                                      <span class="">Manage Enrolees</span>
                                    </div>
                                    <IconComponent icon="ant-design:caret-down-filled" />
                                    
                                </a>
                                <div id="myDropdown" class="sub-menu" aria-expanded="true">
                                    <router-link to="/all-enrollees" class="sub ml-3">All Enrolees</router-link>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="dropdown-btn d-flex align-items-center justify-content-between" id="dropdown">
                                    <div>
                                      <IconComponent icon="fa-solid:file-invoice" class="icon"/>
                                      <span class="">Manage Invoices</span>
                                    </div>
                                    <IconComponent icon="ant-design:caret-down-filled" />
                                    
                                </a>
                                <div id="myDropdown" class="sub-menu" aria-expanded="true">
                                    <router-link to="/videos" class="sub ml-3">Add Invoice</router-link>
                                    <router-link to="/due-invoices" class="sub ml-3">Due Invoices</router-link>
                                    <router-link to="/submitted-invoices" class="sub ml-3">Submitted Invoices</router-link>
                                </div>
                            </li>
                            <li>
                                <router-link to="/transactions" class="">
                                    <IconComponent icon="clarity:list-solid-badged" class="icon"/>
                                    <span class="item">Capitation List</span>
                                </router-link>
                            </li>
                            
                            <li>
                                <router-link to="/signals" class="">
                                    <IconComponent  icon="ic:baseline-medical-information"  class="icon"/>
                                    <span class="item">HMO Information</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/verify-enrollee" class="">
                                    <IconComponent icon="uil:comment-alt-verify" class="icon"/>
                                    <span class="item">Verify Employee</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
    </div>
</template>

<script>

// import AuthService from '@/services/AuthService.js'

export default {
    data(){
        return {
            
        };
    },
    
    mounted(){
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
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@media only screen and (max-width: 768px) {
    .side-bar {
        display: none;
    }
}
</style>