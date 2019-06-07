<template>
    <div class="icons">
      <swiper :options="swiperOption" v-if="iconList.length">
        <swiper-slide v-for="(page, index) of pages" :key="index"><!--page是页码-->
          <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img" >
            <img class="icon-imgcontent" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true /* 添加循环 */
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    /* 为了确保图标很少时，拖动下面空白处但仍属于icons的位置也能够进行轮播滑动 */
    /*overflow: hidden .swiper-container 自带这个特性*/
    width: 100%
    height: 0
    padding-bottom: 50% /* 宽度是高度的两倍 */
  .icon
    overflow: hidden
    float: left;
    width: 25%
    height: 0
    padding-bottom: 25% /* 父容器的50% 因为父容器是50% */
    /* 25%都是相对于父容器的对应属性来说的  */
    position: relative
    .icon-desc
      position: absolute
      bottom: 0
      left: 0
      right: 0
      width: 100%
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      padding: .16rem
      box-sizing: border-box
      .icon-imgcontent
        display: block
        height: 100%
        margin: 0 auto
</style>
