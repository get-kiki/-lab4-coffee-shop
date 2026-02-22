<template>
  <div>
    <h1>User Login</h1>
    <form v-on:submit.prevent="onLogin">
      <p>Username: <input type="text" v-model="email" /></p>
      <p>Password: <input type="password" v-model="password" /></p>
      <p><button type="submit">Login</button></p>
      <div class="error" v-if="error">{{error}}</div>
    </form>
  </div>
</template>

<script>
import AuthenService from '@/services/AuthenService'
import { useAuthenStore } from '@/stores/authen' // เรียกใช้ Store

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onLogin () {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })
        
        // เรียกใช้ Store
        const authenStore = useAuthenStore()
        
        // เก็บ Token และ User เข้า Store
        authenStore.setToken(response.data.token)
        authenStore.setUser(response.data.user)
        
        this.$router.push({
          name: 'users'
        })
        
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>