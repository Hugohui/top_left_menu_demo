<template>
  <div class="side-bar-item">
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item :index="resolvePath(item.path)">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span slot="title">
          {{ item.meta.title }}
        </span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span>
          {{ item.meta.title }}
        </span>
      </template>
      <sidebar-item 
        v-for="child in item.children"
        :key="child.name"
        :item="child"
        :base-path="resolvePath(item.path)"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
const path = require('path')
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SidebarItem'
})
export default class SidebarItem extends Vue {
  @Prop({type: Object, default: () => {}, required: true})
  private item !: {};

  @Prop({type: String, default: '', required: true})
  private basePath !: ''

  /**
   * @method hasOneShowingChild 是否有可显示子路由
   */
  private hasOneShowingChild(children: any[] = [], item: object): boolean {
    const showingChildren = children.filter((child) => !child.meta.hidden)
    return showingChildren.length === 0
  }

  /**
   * @method resolvePath 处理遍历路由
   */
  private resolvePath(routePath: string): string {
    return path.resolve(this.basePath, routePath)
  }
}
</script>

<style lang="scss" scoped>
</style>
