<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"

        >
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () { // 如果没有传递图片，默认用自己的三张图
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 将observe应用于Swiper的父元素
        observer: true // 启动动态检查器
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  bottom: 0
  top: 0
  background-color: #000
  .wrapper
    /* overflow: hidden 不去掉分页无法显示*/
    width: 100%
    height: 0
    padding-bottom: 100%
    .gallery-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem

</style>
