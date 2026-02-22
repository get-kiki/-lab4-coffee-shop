<template>
  <div>
    <h1>Edit Blog</h1>

    <form @submit.prevent="editBlog">

      <p>
        title:
        <input type="text" v-model="blog.title" />
      </p>

      <!-- แสดงรูปเดิม -->
      <p v-if="blog.thumbnail && blog.thumbnail !== 'null'">
        <img
          :src="`http://localhost:8081/assets/uploads/${blog.thumbnail}`"
          width="250"
        />
      </p>

      <!-- ✅ เพิ่ม Upload component -->
      <upload-image @uploaded="onUploaded"></upload-image>

      <p>content:</p>

      <ckeditor
        :editor="editor"
        v-model="blog.content"
      />

      <p>
        category:
        <input type="text" v-model="blog.category" />
      </p>

      <p>
        status:
        <input type="text" v-model="blog.status" />
      </p>

      <p>
        <button type="submit">update blog</button>
        <button type="button" @click="$router.push('/blogs')">
          กลับ
        </button>
      </p>

    </form>
  </div>
</template>

<script>
import BlogsService from '@/services/BlogsService'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadImage from '../Utils/Upload.vue'   // ✅ เพิ่ม

export default {
  components: {
    UploadImage   // ✅ เพิ่ม
  },

  data () {
    return {
      editor: ClassicEditor,
      blog: {
        title: '',
        thumbnail: 'null',
        pictures: 'null',
        content: '',
        category: '',
        status: ''
      }
    }
  },

  async created () {
    try {
      const blogId = this.$route.params.blogId
      const response = await BlogsService.show(blogId)

      this.blog = response.data
      this.blog.content = this.blog.content || ''

    } catch (error) {
      console.log(error)
    }
  },

  methods: {

    // ✅ รับ filename ใหม่
    onUploaded (filename) {
      this.blog.thumbnail = filename
    },

    async editBlog () {
      try {
        await BlogsService.put(this.blog)
        this.$router.push({ name: 'blogs' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.ck-editor__editable {
  min-height: 300px;
}
</style>
