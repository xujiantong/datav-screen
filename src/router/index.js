import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import TestEcharts from '../views/TestEcharts.vue'
import TestEchartsTimeLine from '../views/TestEchartsTimeLine.vue'
import Test2 from '../views/Test2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test-echarts',
    name: 'TestEcharts',
    component: TestEcharts
  },
  {
    path: '/test-echarts2',
    name: 'TestEchartsTimeLine',
    component: TestEchartsTimeLine
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
