<template>
  <div>
    <h1>Edit Coffee</h1>

    <!-- แสดงฟอร์มเมื่อโหลดข้อมูลมาแล้ว -->
    <div v-if="coffee">
      <p>
        Name:
        <input v-model="coffee.name" type="text" />
      </p>

      <p>
        Price:
        <input v-model="coffee.price" type="number" />
      </p>

      <p>
        Type:
        <select v-model="coffee.type">
          <option value="hot">hot</option>
          <option value="iced">iced</option>
          <option value="frappe">frappe</option>
        </select>
      </p>

      <p>
        Description:
        <textarea v-model="coffee.description"></textarea>
      </p>

      <p>
        <button @click="updateCoffee">บันทึกการแก้ไข</button>
      </p>
    </div>

    <!-- ระหว่างโหลดข้อมูล -->
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
  data () {
    return {
      coffee: null
    }
  },

  async created () {
    // 1️⃣ ดึง coffeeId จาก URL
    const coffeeId = this.$route.params.coffeeId

    // 2️⃣ ดึงข้อมูลเดิมจาก backend
    this.coffee = (await CoffeesService.show(coffeeId)).data
  },

  methods: {
    async updateCoffee () {
      try {
        // 3️⃣ ส่งข้อมูลไปอัปเดต
        await CoffeesService.put(this.coffee)

        // 4️⃣ กลับไปหน้ารายการกาแฟ
        this.$router.push('/coffees')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
