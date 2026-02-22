<template>
  <div v-if="blog">
    <h1>Show Blog</h1>

    <p>id: {{ blog.id }}</p>
    <p>title: {{ blog.title }}</p>

    <!-- ✅ แสดง content แบบ render HTML -->
    <p>content:</p>
    <div v-html="blog.content"></div>

    <!-- ✅ แสดงรูป thumbnail -->
    <p v-if="blog.thumbnail && blog.thumbnail !== 'null'">
      <img
        :src="`http://localhost:8081/assets/uploads/${blog.thumbnail}`"
        width="300"
      />
    </p>

    <p>category: {{ blog.category }}</p>
    <p>status: {{ blog.status }}</p>

    <p>
      <button @click="navigateTo('/blog/edit/' + blog.id)">
        แก้ไข blog
      </button>
      <button @click="navigateTo('/blogs')">
        กลับ
      </button>
    </p>
  </div>
</template>

<script>
import BlogsService from '@/services/BlogsService'

export default {
  data () {
    return {
      blog: null
    }
  },

  async created () {
    try {
      const blogId = this.$route.params.blogId
      this.blog = (await BlogsService.show(blogId)).data
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
