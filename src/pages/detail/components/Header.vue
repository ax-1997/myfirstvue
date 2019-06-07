<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity // 让opacity最大值不超过1
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 因为用了keep alive 所以页面只要一被展示，activated就会执行一次
    console.log('scroll')
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 因为window绑定的是全局事件 所以要进行全局事件的解绑 不然在每个页面都会进行scroll事件的监听
    // 页面即将被隐藏或者替换成新的页面时触发
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  background: rgba(0, 0, 0, .5)
  z-index: 2
  text-align: center
  .header-abs-back
    font-size: .36rem
    color: #fff
.header-fixed
  position: fixed
  z-index: 2
  /*overflow: hidden*/
  top: 0
  left: 0
  right: 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background-color: $bgColor
  font-size: .36rem
  .back-icon
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .36rem
    color: #fff
</style>
