
      <template>
  <div>
    <div class="">
      <aside class="side-bar main--app--drawer shadow-lg">
        <div id="mySidebar" class="sidebar sidebar-menu">
          <div class="top--image text-center">
            <img src="@/assets/img/logo.svg" width="130" alt="" />
          </div>
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <router-link to="/dashboard">
              <el-menu-item index="1">
                <IconComponent icon="clarity:home-solid" class="icon" />
                <span>Dashboard</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="2">
              <template slot="title">
                <IconComponent icon="ri:chat-follow-up-fill" class="icon" />
                <span>Manage Visits</span>
              </template>
              <router-link to="/new-visit">
                <el-menu-item index="2-1">New Visit</el-menu-item>
              </router-link>
              <el-menu-item index="2-2">Follow Up Visit</el-menu-item>
              <el-menu-item index="2-3">Request Code</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <IconComponent
                  icon="fluent:people-audience-20-filled"
                  class="icon"
                />
                <span>Manage Enrolees</span>
              </template>
              <router-link to="/all-enrollees">
                <el-menu-item index="3-1">All Enrolees</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <IconComponent icon="fa-solid:file-invoice" class="icon" />
                <span>Manage Invoices</span>
              </template>
              <el-menu-item index="4-1">Add Invoice</el-menu-item>
              <router-link to="/due-invoices">
                <el-menu-item index="4-2">Due Invoices</el-menu-item>
              </router-link>
              <router-link to="/submitted-invoices">
                <el-menu-item index="4-3">Submitted Invoices</el-menu-item>
              </router-link>
            </el-submenu>
            <router-link to="/dashboard">
              <el-menu-item index="5">
              <IconComponent
                icon="ic:baseline-medical-information"
                class="icon"
              />
              <span>HMO Information</span>
            </el-menu-item>
            </router-link>
            <router-link to="/dashboard">
              <el-menu-item index="5">
              <IconComponent icon="clarity:list-solid-badged" class="icon"/>
              <span>Capitation List</span>
            </el-menu-item>
            </router-link>
            <router-link to="/verify-enrollee">
              <el-menu-item index="6">
              <IconComponent icon="uil:comment-alt-verify" class="icon" />
              <span>Verify Enrolee</span>
            </el-menu-item>
            </router-link>
          </el-menu>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
// import AuthService from '@/services/AuthService.js'

export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    // var dropdown = document.getElementsByClassName("dropdown-btn");
    // var i;
    // for (i = 0; i < dropdown.length; i++) {
    // dropdown[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    // var dropdownContent = this.nextElementSibling;
    // if (dropdownContent.style.display === "block") {
    // dropdownContent.style.display = "none";
    // } else {
    // dropdownContent.style.display = "block";
    // }
    // });
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media only screen and (max-width: 768px) {
  .side-bar {
    display: none;
  }
}
</style>