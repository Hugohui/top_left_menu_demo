import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  name: string
}

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
  
  public name = ''

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Action
  public GetUserInfo() {
    const name = 'HUA'
    this.SET_NAME(name)
  }
}

export const UserModule = getModule(User)