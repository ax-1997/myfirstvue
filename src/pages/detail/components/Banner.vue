<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="banner-icon iconfont sear-icon">&#xe60d;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
      :imgs="gallaryImgs"
      v-show="showGallery"
      @close="handleGalleryClose"
      >
    </common-gallery>
   </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 54%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    right: 0
    left: 0
    bottom: 0
    height: .6rem
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,.6))
    .banner-title
      position: absolute
      left: .2rem
      bottom: .2rem
      font-size: .36rem
      text-shadow: 1px 1px 2px #000
      flex: 1
    .banner-number
      line-height: .4rem
      height: .4rem
      position: absolute
      bottom: .8rem
      left: .2rem
      padding: 0 .3rem
      border-radius: .2rem
      background-color: rgba(0,0,0,0.5)
      font-size: .24rem
      .banner-icon
        font-size: .25rem
</style>
