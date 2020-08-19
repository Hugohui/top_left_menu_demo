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
  }
  .main-container{
    display: flex;
    min-height: calc(100vh - #{$navBarHeight});
    .side-bar{
      width: $sideBarWidth;
    }
    .app-main{
      flex: 1;
    }
  }
}
</style>
