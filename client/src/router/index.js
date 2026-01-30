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

// ===== Coffees =====
import CoffeeIndex from '../components/coffees/index.vue'
import CoffeeCreate from '../components/coffees/CreateCoffee.vue'
import CoffeeEdit from '../components/coffees/EditCoffee.vue'
import CoffeeShow from '../components/coffees/ShowCoffee.vue'   // ⭐ เพิ่มบรรทัดนี้

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

    // ---------- Menu Routes ----------
    {
      path: '/menus',
      name: 'menus',
      component: MenuIndex
    },
    {
      path: '/menu/create',
      name: 'menu-create',
      component: MenuCreate
    },
    {
      path: '/menu/edit/:menuId',
      name: 'menu-edit',
      component: MenuEdit
    },
    {
      path: '/menu/:menuId',
      name: 'menu-show',
      component: MenuShow
    },

    // ---------- Coffee Routes ----------
    {
      path: '/coffees',
      name: 'coffees',
      component: CoffeeIndex
    },
    {
      path: '/coffee/create',
      name: 'coffee-create',
      component: CoffeeCreate
    },
    {
      path: '/coffee/edit/:coffeeId',
      name: 'coffee-edit',
      component: CoffeeEdit
    },
    {
      path: '/coffee/:coffeeId',          // ⭐ เพิ่ม route ดูรายละเอียด
      name: 'coffee-show',
      component: CoffeeShow
    }
  ]
})

export default router
