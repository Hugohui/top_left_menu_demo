<template>
  <div class="layout">
    <NavBar class="nav-bar"/>
    <div class="main-container">
      <SideBar class="side-bar"/>
      <AppMain class="app-main"/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { NavBar, SideBar, AppMain } from './components'

@Component({
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain
  }
})
export default class Layout extends Vue {

}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  .nav-bar{
    height: $navBarHeight;
    line-height: $navBarHeight;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
  }
  .main-container{
    display: flex;
    min-height: calc(100vh - #{$navBarHeight});
    .side-bar{
      width: $sideBarWidth;
      background-color: #fff;
      border-top: $layoutSectionGap solid #f4f5f5;
    }
    .app-main{
      flex: 1;
      background-color: #fff;
      border-top: $layoutSectionGap solid #f4f5f5;
      border-left: $layoutSectionGap solid #f4f5f5;
    }
  }
}
</style>
