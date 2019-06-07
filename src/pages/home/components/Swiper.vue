<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <!--这里有问题：白点不动了 数目也不对 但是如果把v-if去掉轮播图又会从第四张开始-->
      <!--v-if="swiperList.length" 当swipwerList不是空数组时再创建轮播图，防止轮播图显示的图片不是从第一张开始 由于组件里最好不要出现逻辑性语句，所以具体操作判断写在函数里-->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 用于显示分页内容
        loop: true /* 添加循环 */
      }
    }
  },
  computed: {
    // showSwiper () {
    //   return this.swiperList.length
    // }
  }
}
</script>

<style lang="stylus" scoped>
  /* 750*200  15/4*/
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff !important /* >>>样式穿透 让他不受scoped的限制 */
  .wrapper
    /* 解决fast3G下图片加载太慢导致页面抖动的问题 */
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 31%  /* w 100% h 4/15*100% 宽高成比例 */
    /* height: (4/15)vw;  也可以这么写，但是有兼容性问题。跟上面的写法意思一样 高是宽的比例 vw-viewport */
    background-color: #eee /* 图片没显示出来时的背景 */
  .swiper-img
    width: 100%

</style>
