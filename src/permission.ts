import router from './router'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'

router.beforeEach((to: Route, from: Route, next: any) => {
  console.log(UserModule.name)
  if (!UserModule.name) {
    UserModule.GetUserInfo()
    next()
  }
  next()
})