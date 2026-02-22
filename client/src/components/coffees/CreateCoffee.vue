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
        <label>สถานะ</label><br />
        <select v-model="coffee.status" required>
          <option value="">-- เลือกสถานะ --</option>
          <option value="มีจำหน่าย">มีจำหน่าย</option>
          <option value="หมด">หมด</option>
        </select>
      </div>

      <div>
        <label>รายละเอียด</label><br />
        <textarea v-model="coffee.description"></textarea>
      </div>

      <!-- ✅ เพิ่ม Upload รูป -->
      <div>
        <label>อัปโหลดรูปกาแฟ</label>
        <upload-image @uploaded="onUploaded"></upload-image>
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
import UploadImage from '../../components/Utils/Upload.vue'  // ✅ import

export default {
  components: {
    UploadImage   // ✅ register component
  },

  data () {
    return {
      coffee: {
        name: '',
        price: null,
        type: '',
        status: '',
        description: '',
        image: 'null'   // ✅ เพิ่ม field image
      }
    }
  },

  methods: {

    // ✅ รับชื่อไฟล์จาก Upload.vue
    onUploaded (filename) {
      this.coffee.image = filename
      console.log('Coffee image:', filename)
    },

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
