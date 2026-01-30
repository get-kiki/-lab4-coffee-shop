<template>
  <div>
    <h1>Get All Users</h1>

    <div>จำนวนผู้ใช้งาน {{ users.length }}</div>

    <div v-if="users.length > 0">
      <div
        v-for="user in users"
        :key="user.id"
        style="margin-bottom: 15px;"
      >
        <div>id: {{ user.id }}</div>
        <div>ชื่อ-นามสกุล: {{ user.name }} {{ user.lastname }}</div>
        <div>email: {{ user.email }}</div>
        <div>status: {{ user.status }}</div>
        <div>type: {{ user.type }}</div>

        <!-- ⭐ ปุ่มตามสไลด์อาจารย์ -->
        <p>
          <button v-on:click="navigateTo('/user/' + user.id)">
            ดูข้อมูลผู้ใช้
          </button>

          <button v-on:click="navigateTo('/user/edit/' + user.id)">
            แก้ไขข้อมูล
          </button>

          <!-- ⭐ ปุ่มลบ -->
          <button v-on:click="deleteUser(user)">
            ลบข้อมูล
          </button>
        </p>

        <hr />
      </div>
    </div>

    <div v-else>
      ยังไม่มีข้อมูลผู้ใช้งาน
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'

export default {
  data () {
    return {
      users: []
    }
  },

  async created () {
    this.users = (await UsersService.index()).data
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    // ⭐  ลบผู้ใช้ (ตามสไลด์)
    async deleteUser (user) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await UsersService.delete(user)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },

    // ⭐ โหลดข้อมูลใหม่หลังลบ
    async refreshData () {
      this.users = (await UsersService.index()).data
    }
  }
}
</script>
