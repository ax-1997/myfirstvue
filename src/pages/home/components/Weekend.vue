<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div>
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
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
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    margin-bottom: .2rem
    height: 0
    padding-bottom: 50%
    .item-img
      width: 100%
    .item-info
      padding: .1rem
      min-width: 0 /* 让里面的内容无法超过它本身的大小 */
      text-indent: .2rem
      .item-title
        line-height: .5rem
        font-size: .3rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #616161
        ellipsis()
</style>
