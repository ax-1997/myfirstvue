<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper"
               v-for="hotCity of hotCities"
               :key="hotCity.id"
               @click="handleCityClick(hotCity.name)"
          >
            <div class="button">{{hotCity.name}}</div>
          </div>
        </div>
      </div>
<!---->
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="city of item"
               :key="city.id"
               @click="handleCityClick(city.name)"
          >
            {{city.name}}
          </div>
          <!--<div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element) /* scroll.scrollToElement可以让滚动条滚动到具体元素的位置 */
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .7rem
    background-color: #eee
    padding-left: .2rem
    font-size: .26rem
    color: #666
  .button-list
    padding: .1rem
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
    .button
      padding: .1rem 0
      text-align: center
      margin: .1rem
      border: .02rem solid #ccc
      border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
