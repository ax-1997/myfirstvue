<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><div class="iconfont sear-icon">&#xe632;</div>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon" >&#xe601;</span></div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  /* scoped使得指定样式只在这个组件内有效
    1rem = html font-size = 50px
    86/100*/
  /*@import '../../../assets/styles/varibles.styl' */
  /* 在css中引入其他css用@要加上~ */
  @import '~styles/varibles.styl'
  /*@import '~@/assets/styles/varibles.styl'*/

  .header
    display: flex
    line-height: .86rem /* 43px */
    background-color: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .36rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem /* .86-.12-.12 */
      background-color: #fff
      border-radius: .1rem
      margin-top: .12rem
      padding-left: .2rem
      margin-left: .2rem
      color: #ccc
      .sear-icon
        display: inline-block
        margin-right .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .28rem
</style>
