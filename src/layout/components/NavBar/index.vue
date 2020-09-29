<template>
  <div class="nav-bar-container">
    <div class="nav-left">
      <img class="logo" src="../../../assets/images/logo.png" alt="">
    </div>
    <div class="nav-right">
      <el-menu :default-active="activeTopMenu" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item v-for="route in routes" :key="route.name" :index="route.path">
          {{ route.meta.title }}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { routes } from '../../../router'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'NavBar'
})
export default class NavBar extends Vue {
  @Watch('$route', {immediate: true})
  private watchRouter(value: any) {
    sessionStorage.setItem('current_top_menu', `/${value.meta.topPath}`)
  }

  get routes(): any {
    return routes.filter( (route) => {
      return !route.meta.hidden
    })
  }

  get activeTopMenu(): string {
    let current_top_menu = sessionStorage.getItem('current_top_menu')
    return current_top_menu || this.routes[0].path
  }

}
</script>

<style lang="scss" scoped>
.nav-bar-container {
  display: flex;
  .nav-left {
    width: $sideBarWidth;
    text-align: center;
    .logo {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }
  .nav-right {
    flex: 1;
  }
}
</style>
