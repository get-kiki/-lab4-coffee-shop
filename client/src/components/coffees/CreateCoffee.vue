<template>
  <div>
    <h1>Create Coffee</h1>

    <form @submit.prevent="createCoffee">
      <div>
        <label>ชื่อเมนู</label><br />
        <input v-model="coffee.name" type="text" required />
      </div>

      <div>
        <label>ราคา</label><br />
        <input v-model.number="coffee.price" type="number" required />
      </div>

      <div>
        <label>ประเภท</label><br />
        <select v-model="coffee.type" required>
          <option value="">-- เลือกประเภท --</option>
          <option value="hot">Hot</option>
          <option value="iced">Iced</option>
          <option value="frappe">Frappe</option>
        </select>
      </div>

      <div>
        <label>รายละเอียด</label><br />
        <textarea v-model="coffee.description"></textarea>
      </div>

      <br />

      <button type="submit">บันทึกเมนู</button>
      <button type="button" @click="navigateTo('/coffees')">
        ยกเลิก
      </button>
    </form>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
  data () {
    return {
      coffee: {
        name: '',
        price: null,
        type: '',
        description: ''
      }
    }
  },
  methods: {
    async createCoffee () {
      try {
        await CoffeesService.post(this.coffee)
        alert('เพิ่มเมนูกาแฟเรียบร้อย')
        this.$router.push('/coffees')
      } catch (err) {
        console.log(err)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
