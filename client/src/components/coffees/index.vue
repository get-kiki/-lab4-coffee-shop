<template>
  <div>
    <h1>Get All Coffees</h1>

    <div>จำนวนเมนู {{ coffees.length }}</div>

    <div v-if="coffees.length > 0">
      <div
        v-for="coffee in coffees"
        :key="coffee.id"
        style="margin-bottom: 15px;"
      >
        <div>id: {{ coffee.id }}</div>
        <div>ชื่อเมนู: {{ coffee.name }}</div>
        <div>ราคา: {{ coffee.price }}</div>
        <div>ประเภท: {{ coffee.type }}</div>

        <!-- ⭐ ปุ่มตามแนวอาจารย์ -->
        <p>
          <button @click="navigateTo('/coffee/' + coffee.id)">
            ดูรายละเอียด
          </button>

          <button @click="navigateTo('/coffee/edit/' + coffee.id)">
            แก้ไข
          </button>

          <button @click="deleteCoffee(coffee)">
            ลบเมนู
          </button>
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

export default {
  data () {
    return {
      coffees: []
    }
  },

  async created () {
    this.refreshData()
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    async deleteCoffee (coffee) {
      let result = confirm('Want to delete?')
      if (result) {
        try {
          await CoffeesService.delete(coffee)
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
