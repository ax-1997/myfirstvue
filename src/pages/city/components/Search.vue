<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入城市名或拼音" v-model="keyword">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有搜索到匹配城市，请检查您的输入</li>
        <!-- 如果v-show="!list.length"没有内容--长度为0，再显示提示信息 -->
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      /* 改变城市之后跳转到首页 */
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-bottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc

.search
  height: .72rem
  padding: 0 .1rem
  background-color: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    line-height: .62rem
    padding: 0 .1rem
    color: #666
    background-color: #fff
    border-radius: .06rem
    text-align: center
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  bottom: 0
  right: 0
  background-color: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    background-color: #fff
    color: #666
</style>
