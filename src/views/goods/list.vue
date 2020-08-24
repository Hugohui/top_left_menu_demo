<template>
  <div class="goods-container">
    This is GoodsList page.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GoodsList'
})
export default class Goods extends Vue {

}
</script>

<style lang="scss" scoped>
.goods-container {}
</style>
