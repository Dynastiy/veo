
      <template>
    <div>
        <div class="">
                <aside class="side-bar main--app--drawer shadow-lg">
                    <div id="mySidebar" class="sidebar sidebar-menu">
                      <div class="top--image text-center">
                        <img src="@/assets/img/logo.svg" width="130" alt="" />
                      </div>
                        <ul class="list-unstyled " id="side-menu">
                            <li>
                                <router-link to="/corporate-dashboard" class="" >
                                    <IconComponent icon="clarity:home-solid" class="icon" />
                                    <span class="item">Dashboard</span>
                                </router-link>
                            </li>
                            
                            <li>
                                <router-link to="/manage-employees" class="" >
                                     <IconComponent icon="fluent:people-audience-20-filled" class="icon"/>
                                    <span class="item">Manage Employee</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/manage-payments" class="" >
                                     <IconComponent icon="fa-solid:file-invoice" class="icon"/>
                                    <span class="item">Manage Payments</span>
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