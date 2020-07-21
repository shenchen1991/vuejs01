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
    children: [
      {
        path: '',
        redirect: 'news'
      },
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
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
  ,
  {
    path: '/user/:userId',
    component: User
  }
]

const router = new Router({
  // 配置路由和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 将router对象传入的Vue实例中
export default router
