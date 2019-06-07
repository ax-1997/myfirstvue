<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('./api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailInfoSucceed)
    },
    getDetailInfoSucceed (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>
