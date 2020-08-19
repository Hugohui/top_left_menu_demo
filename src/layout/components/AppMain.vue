<template>
  <div>
    This is AppMain.
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

<style>

</style>
