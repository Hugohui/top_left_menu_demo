<template>
  <div class="side-bar-container">
    <el-menu
      :default-active="activLeftMenu"
      class="el-menu-vertical-demo"
      router
    >
      <sidebar-item
        v-for="route in leftRoutes"
        :key="route.name"
        :item="route"
        :base-path="route.meta.topPath"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { routes } from '../../../router'

import { Component, Vue, Watch } from 'vue-property-decorator'
import SidebarItem from '@/layout/components/SideBar/SidebarItem.vue'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem
  }
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
    const route = this.$route
    const { path } = route
    return path
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
