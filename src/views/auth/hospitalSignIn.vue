<template>
  <div>
    <div class="user-login-container">
      <div class="user--login">
        <div class="login--box">
          <div class="mb-4 text-center">
               <div class="text-center mb-3">
            <img src="@/assets/img/logo.svg" width="120" alt="">
        </div>
            <h4 class="font-weight-bold">Hospital Login</h4>
            <p class="small">Enter details to login</p>
          </div>
         <form action="" @submit.prevent="login">
            <div class="mb-3">
              <label class="" for="">Hospital Email</label>
              <input type="email" v-model="credentials.email"/>
              <small
                class="text-danger"
                v-for="error in errorMsg.email"
                :key="error.id"
                >* {{ error }}
              </small>
            </div>
            <div class="mb-3">
              <label class="" for="">Password</label>
              <input type="password" v-model="credentials.password"/>
              <small
                class="text-danger"
                v-for="error in errorMsg.password"
                :key="error.id"
                >* {{ error }}
              </small>
            </div>
            <div>
              <div class="d-flex justify-content-center" v-if="loading">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <button type="submit" class="main--btn login w-100" v-else>Login</button>
            </div>
          </form>
          
           <div class="text-right mt-2">
            <span class=""> <router-link to="/register" class="text-main font-weight-bold">Forgot Password?</router-link></span>
          </div>  
          <!-- <div class="text-center">
            <span class=""> Go back to <router-link to="/" class="text-info font-weight-bold">Homepage</router-link> </span>
          </div>   -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import axios from 'axios'
export default {
  data() {
    return {
      errorMsg: {},
      credentials:{
        email: '',
        password: ''
      },
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.$router.push({name: 'Dashboard'})
    //   try {
    //     let res = await axios.post("https://api.buybnb.io/api/auth/signin", this.credentials);
    //     const token = res.data.token
    //     const user = res.data.user
    //     this.$store.dispatch("login", { token, user });
    //     console.log(res);
    //     this.$toastify({
    //       text: `Welcome ${res.data.user.name}`,
    //       className: "info",
    //       style: {
    //         background: "green",
    //       },
    //     }).showToast();
    //       this.$router.replace('/')
    //   } catch (error) {
    //     console.log(error);
    //   }
      this.loading = false;
      this.credentials = {}
    },
  },
};
</script>