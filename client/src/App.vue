<template>
  <div id="app">
    <!-- ⭐ Navbar ร้านกาแฟ -->
    <coffee-header />

    <!-- แสดงหน้าต่าง ๆ ตาม route -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
