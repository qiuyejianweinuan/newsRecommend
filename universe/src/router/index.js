import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Example from '../views/Example.vue'
import Test from '../views/test1.vue'
import MarkDownInfo from '../views/MarkDownInfo.vue'
import CKEditor from "@/views/CKEditor.vue";
import NotFound from "@/views/common/404.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {title: '新闻推荐系统'},
        },
        {
            path: '/404',
            component: NotFound,
            name: '404',
            meta: {title: '404未找到'}
        },
        {
            path: '/Example',
            name: 'example',
            component: Example
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/MarkDownInfo',
            name: 'markDown',
            component: MarkDownInfo
        },
        {
            path: '/CKEditor',
            name: 'CKEditor',
            component: CKEditor
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
