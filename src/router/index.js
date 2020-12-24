import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'imain',
      component: Main,         //маршрут iMain по адресу /
      props: true,
    },
    {
      path: '/form',
      name: 'Form',             //маршрут Form по адресу /form
      component: Form,
      props: true,
    },
    {
      path: '/product/:id',
      name: 'Id',
      component: Product,
      props: true,
      children:[
        {
          path: 'edit',
          name: 'Edit',
          component: EditProduct,
          props:true
        }
      ]
    },
    {
      path: '*',
      redirect:"/"
    }
  ]
})
