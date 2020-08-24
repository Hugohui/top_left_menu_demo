<template>
  <div class="side-bar-container">
    <el-menu
      :default-active="activLeftMenu"
      class="el-menu-vertical-demo"
      router
    >
      <el-menu-item v-for="route in leftRoutes" :key="route.name" :index="route.path">
        <i class="el-icon-menu"></i>
        <span slot="title">
          {{ route.meta.title }}
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { routes } from '../../../router'

import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'SideBar'
})
export default class SideBar extends Vue {
  private route: any = []

  @Watch('$route', { immediate: true })
  private watchRouter(value: any) {
    this.route = value
  }

  get leftRoutes(): any {
    const filterRoute = routes.find((route) => {
      return route.name === this.route.meta.topPath
    })
    return filterRoute && filterRoute.children
  }

  get activLeftMenu(): string {
    console.log(this.leftRoutes[0].path)
    return this.leftRoutes[0].path
  }
}
</script>

<style lang="scss" scoped>
.side-bar-container{
  .el-menu {
    border-right: none;
  }
}
</style>
