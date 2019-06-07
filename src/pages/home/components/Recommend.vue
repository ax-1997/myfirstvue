<template>
  <div>
    <div class="title">热销推荐 </div>
      <ul>
        <router-link
          tag="li"
          class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情>>></button>
            </div>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .6rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.88rem
    margin-bottom: .2rem
    .item-img
      width: 1.68rem
      height: 1.68rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0 /* 让里面的内容无法超过它本身的大小 */
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #616161
        ellipsis()
      .item-button
        line-height: .44rem
        background-color: #ff9300
        padding: 0 .16rem
        margin-top: .2rem
        border-radius: .1rem
        color: #fff
</style>
