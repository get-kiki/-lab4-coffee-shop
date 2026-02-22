<template>
  <div>
    <div class="nv-navbar">
      <ul class="nav">
        <!-- ทุกคนเห็น -->
        <li>
          <router-link :to="{ name: 'blogs' }">
            Blogs
          </router-link>
        </li>

        <!-- เห็นเฉพาะ Login แล้ว -->
        <li v-if="isLoggedIn">
          <router-link :to="{ name: 'users' }">
            Users
          </router-link>
        </li>

        <!-- ยังไม่ Login -->
        <li v-if="!isLoggedIn">
          <router-link :to="{ name: 'login' }">
            Login
          </router-link>
        </li>

        <!-- Login แล้ว -->
        <li v-if="isLoggedIn">
          <a href="#" @click.prevent="logout">
            Logout
          </a>
        </li>
      </ul>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { useAuthenStore } from '@/stores/authen'

export default {
  name: 'BackHeader',
  computed: {
    isLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },
  methods: {
    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.nv-navbar {
  background-color: palegoldenrod;
  width: 100%;
  padding: 10px 0px 10px 0px;
}

.nv-navbar .nav {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
}

.nv-navbar .nav li {
  float: left;
}

.nv-navbar .nav li a {
  padding: 10px;
  text-decoration: none;
  color: gray;
  font-weight: bold;
}

.nv-navbar .nav li a:hover {
  text-decoration: none;
  color: darkslategrey;
}

.nv-navbar .nav li a.router-link-active {
  background-color: gold;
  color: darkslategrey;
}

.clearfix {
  clear: left;
}
</style>
