<template>
    <div id="mobile">
        <div class="app--header" >
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div class="logo">
                    <router-link to="/"><img src="@/assets/img/logo.svg" width="80" alt="" srcset=""></router-link>
                </div>
                <div @click="drawer = true" type="primary">
                    <IconComponent icon="codicon:menu" style="font-size:1.6rem" />
                </div>


                 <el-drawer
                        title="I am the title"
                        :visible.sync="drawer"
                        :with-header="false"
                        >
                        <div @click="handleClose" class="text-right mt-3 mr-4">
                            <IconComponent icon="codicon:close" style="font-size:1.6rem" />
                        </div>
                         <div class="p-4">
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
            <router-link to="/verify-enrollee" >
              <el-menu-item index="6">
              <IconComponent icon="uil:comment-alt-verify" class="icon" />
              <span>Verify Enrolee</span>
            </el-menu-item>
            </router-link>
          </el-menu>
                       </div>


                    </el-drawer>


                <div class="menu--item mobile" id="side-bar">
                    <div class="text-right my-2" id="close">
                        <IconComponent icon="ep:close" style="font-size:2.3rem"  />
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


                       
                       <div>
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
    data(){
        return {
        drawer: false,
      };
    },
    methods:{
        handleClose() {
            this.drawer = false
      }
    },
     mounted(){

        // For Dropdown Menu
        var dropdown = document.getElementsByTagName("a");
        var i;

        for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.drawer = false
        })
        }
     }
}
</script>