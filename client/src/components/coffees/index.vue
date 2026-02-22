<template>
  <div>
    <h1>Get All Coffees</h1>

    <div>จำนวนเมนู {{ coffees.length }}</div>

    <div v-if="coffees.length > 0">
      <div
        v-for="coffee in coffees"
        :key="coffee.id"
        style="margin-bottom: 15px;"
        class="coffee-item"
      >
        <div>id: {{ coffee.id }}</div>

        <!-- ✅ แสดงรูปวงกลมหน้าชื่อ -->
        <div>
          <img
            v-if="coffee.image"
            :src="`http://localhost:8081/assets/uploads/${coffee.image}`"
            class="coffee-thumb"
          />
          ชื่อเมนู: {{ coffee.name }}
        </div>

        <div>ราคา: {{ coffee.price }}</div>
        <div>ประเภท: {{ coffee.type }}</div>
        <div>สถานะ: {{ coffee.status }}</div>

        <p>
          <button @click="navigateTo('/coffee/' + coffee.id)">
            ดูรายละเอียด
          </button>

          <template v-if="isLoggedIn">
            <button @click="navigateTo('/coffee/edit/' + coffee.id)">
              แก้ไข
            </button>

            <button @click="deleteCoffee(coffee.id)">
              ลบเมนู
            </button>
          </template>
        </p>

        <hr />
      </div>
    </div>

    <div v-else>
      ยังไม่มีเมนูกาแฟ
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data () {
    return {
      coffees: []
    }
  },

  async created () {
    this.refreshData()
  },

  computed: {
    isLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    async deleteCoffee (coffeeId) {
      const result = confirm('Want to delete?')
      if (result) {
        try {
          await CoffeesService.delete(coffeeId)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },

    async refreshData () {
      this.coffees = (await CoffeesService.index()).data
    }
  }
}
</script>

<style scoped>
.coffee-thumb {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

.coffee-item {
  display: flex;
  flex-direction: column;
}
</style>
