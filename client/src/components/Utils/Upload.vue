<template>
  <div class="upload-box">
    <div class="mb-3">
        <label class="form-label">Upload Thumbnail:</label>
        <input type="file" class="form-control" @change="onFileChange" accept="image/*" />
    </div>
    
    <div v-if="previewImage" class="preview-container">
       <img :src="previewImage" class="img-thumbnail" />
       <p class="mt-2 text-success" v-if="uploadStatus">{{ uploadStatus }}</p>
    </div>
  </div>
</template>

<script>
import UploadService from '../../services/UploadService'

export default {
  data () {
    return {
      previewImage: null,
      uploadStatus: ''
    }
  },
  methods: {
    async onFileChange (e) {
      const file = e.target.files[0]
      if (!file) return

      // 1. สร้าง Preview ทันที (UX improvement)
      this.previewImage = URL.createObjectURL(file) 
      this.uploadStatus = 'Uploading...'

      // 2. เตรียมข้อมูลส่ง Server
      const formData = new FormData()
      formData.append('image', file)

      try {
        // 3. ยิง Request
        const response = await UploadService.upload(formData)
        
        this.uploadStatus = 'Uploaded Successfully!'
        // 4. ส่งชื่อไฟล์กลับไปให้แม่ (Parent Component)
        // ใช้ $emit เพื่อส่ง Event แจ้ง Component แม่ [7]
        this.$emit('uploaded', response.data.filename)
      } catch (err) {
        console.log(err)
        this.uploadStatus = 'Upload Failed'
      }
    }
  }
}
</script>

<style scoped>
.preview-container img {
  max-width: 300px;
  max-height: 200px;
}
</style>
