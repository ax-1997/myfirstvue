<template>
  <div>
    <ul class="list" >
      <!-- letters: cities对象的值的数组 A B C D E。。。-->
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{item}}</li><!-- .prevent阻止touchstart的默认行为 -->
    </ul>
  </div>

</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      /* ['A','B','C','D','E'] */
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchstatus = true
    },
    handleTouchMove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          /* 计算出当前手指滑动的位置对应的字母下标是多少 */
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
        /* 实现节流：如果正在移动鼠标，让他延迟16ms之后再去执行，如果在这期间你又一次移动，会上一次的操作清除掉，重新执行这一次的操作 */
      }
    },
    handleTouchEnd () {
      this.touchstatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  color: $bgColor
  .item
    text-align: center
    line-height: .4rem
</style>
