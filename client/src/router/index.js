import { createRouter, createWebHistory } from 'vue-router'

// ===== Users =====
import UserIndex from '../components/Users/Index.vue'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'

// ===== Menus =====
import MenuIndex from '../components/Menus/Index.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ---------- User Routes ----------
{
  path: '/users',
  name: 'users',
  component: UserIndex
},
{
  path: '/user/create',
  name: 'user-create',
  component: UserCreate
},
{
  path: '/user/edit/:id',
  name: 'user-edit',
  component: UserEdit
},
{
  path: '/user/:id',
  name: 'user-show',
  component: UserShow
},


     // --- Menu Routes ---
    {
      path: '/menus',
      name: 'menus',
      component: MenuIndex  // หน้ารายการเมนู
    },
    {
      path: '/menu/create',
      name: 'menu-create',
      component: MenuCreate // หน้าสร้างเมนูใหม่
    },
    {
      path: '/menu/edit/:menuId', // กำหนดให้รับ Parameter :menuId สำหรับแก้ไข
      name: 'menu-edit',
      component: MenuEdit
    },

    {
      path: '/menu/:menuId', // กำหนดให้รับ Parameter :menuId สำหรับดูรายละเอียด
      name: 'menu-show',
      component: MenuShow
    }
  ]
})

export default router