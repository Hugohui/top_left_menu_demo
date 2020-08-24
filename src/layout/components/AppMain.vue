<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class AppMain extends Vue {

}
</script>

<style lang="scss" scoped>
.main-container {
  padding: 10px;
  box-sizing: border-box;
}
</style>
