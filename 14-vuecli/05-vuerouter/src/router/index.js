// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 懒加载
const Home = () => import( '../components/Home')
const HomeNews = () => import( '../components/HomeNews')
const HomeMessage = () => import( '../components/HomeMessage')
const About = () => import( '../components/About')
const User = () => import( '../components/User')
const Profile = () => import('../components/Profile')

// 通过Vue.use(插件)安装插件
Vue.use(Router)

// 创建router对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About,
    // 局部守卫
    beforeEnter: (to, from, next) => {
      console.log('About');
      next();
    }
  },
  {
    path: '/user/:userId',
    meta: {
      title: '帮助'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

// 全局守卫
const router = new Router({
  // 配置路由和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置钩子（guard）
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    // console.log(to);
    next();
  }
)

// 后置钩子（hook）
router.afterEach((to, from) => {

})

// 将router对象传入的Vue实例中
export default router
