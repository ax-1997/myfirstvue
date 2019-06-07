<template>
  <transition>
    <slot></slot>
    <!--在这个项目里slot相当于<common-gallery/>  -->
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity: 0
.v-enter-active, .v-leave-active
  transition: opacity .8s
</style>
