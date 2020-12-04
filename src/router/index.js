import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFoundComponent from '../views/404.vue'
import { getToken } from 'common/user.js'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/index.html', // * 表示上面路径匹配不到的都显示这个页面
    name: 'NotFoundComponent',
    component: NotFoundComponent
  },
  // 404页面
  {
    path: '*', // * 表示上面路径匹配不到的都显示这个页面
    name: 'NotFoundComponent',
    component: NotFoundComponent
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页 - 华建工' // 页面标题
    },
    component: Home,
    children: [
      {
        path: '/home',
        name: 'main_home',
        meta: {
          title: '首页 - 华建工'
        },
        component: () => import(/* webpackChunkName: "main_home" */ 'views/main_home')
      }, {
        path: '/product_center',
        name: 'product_center',
        meta: {
          title: '产品中心 - 华建工'
        },
        component: () => import(/* webpackChunkName: "product_center" */ 'views/product_center')
      }, {
        path: '/news_information',
        name: 'news_information',
        meta: {
          title: '新闻资讯 - 华建工'
        },
        component: () => import(/* webpackChunkName: "news_information" */ 'views/news_information')
      }, {
        path: '/news_information_imte',
        name: 'news_information_imte',
        meta: {
          title: '新闻详情 - 华建工'
        },
        component: () => import(/* webpackChunkName: "news_information" */ 'views/news_information_imte')
      }, {
        path: '/about_us',
        name: 'about_us',
        meta: {
          title: '关于我们 - 华建工'
        },
        component: () => import(/* webpackChunkName: "about_us" */ 'views/about_us')
      }, {
        path: '/join_us',
        name: 'join_us',
        meta: {
          title: '加入我们 - 华建工'
        },
        component: () => import(/* webpackChunkName: "join_us" */ 'views/join_us')
      }, {
        path: '/contact_us',
        name: 'contact_us',
        meta: {
          title: '联系我们 - 华建工'
        },
        component: () => import(/* webpackChunkName: "contact_us" */ 'views/contact_us')
      }, {
        path: '/sign',
        name: 'sign',
        meta: {
          title: '登录注册 - 华建工'
        },
        component: () => import(/* webpackChunkName: "sign" */ 'views/sign')
      }, {
        path: '/forget_password',
        name: 'forget_password',
        meta: {
          title: '忘记密码 - 华建工'
        },
        component: () => import(/* webpackChunkName: "forget_password" */ 'views/forget_password')
      }, {
        path: '/user_information',
        name: 'user_information',
        meta: {
          title: '用户信息 - 华建工'
        },
        component: () => import(/* webpackChunkName: "user_information" */ 'views/user_information')
      }, {
        path: '/modify_password',
        name: 'modify_password',
        meta: {
          title: '修改密码 - 华建工',
          isLogin: true
        },
        component: () => import(/* webpackChunkName: "modify_password" */ 'views/modify_password')
      }, {
        path: '/bim_manage',
        name: 'bim_manage',
        meta: {
          title: '产品中心-BIMPOP一体化协同管理 - 华建工'
        },
        component: () => import(/* webpackChunkName: "bim_manage" */ 'views/bim_manage')
      }, {
        path: '/smart_site',
        name: 'smart_site',
        meta: {
          title: '产品中心-智慧工地解决方案 - 华建工'
        },
        component: () => import(/* webpackChunkName: "smart_site" */ 'views/smart_site')
      }, {
        path: '/cloud_library',
        name: 'cloud_library',
        meta: {
          title: '产品中心-云族库 - 华建工'
        },
        component: () => import(/* webpackChunkName: "cloud_library" */ 'views/cloud_library')
      }, {
        path: '/worker_manage',
        name: 'worker_manage',
        meta: {
          title: '产品中心-工人实名制管理 - 华建工'
        },
        component: () => import(/* webpackChunkName: "worker_manage" */ 'views/worker_manage')
      }
    ]
  }, {
    path: '/agreement',
    name: 'agreement',
    meta: {
      title: '注册协议 - 华建工'
    },
    component: () => import(/* webpackChunkName: "agreement" */ 'views/agreement')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.matched.some(res => to.meta.isLogin)) { // 判断是否需要登录
    if (getToken()) {
      next()
    } else {
      next({
        path: '/sign',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
