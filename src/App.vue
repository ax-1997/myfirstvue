<template>
  <div id="app">
    <!-- 我的路由加载过一次之后 我就把路由的内容分放入内存之中-->
    <keep-alive exclude="Detail"><!-- 除了Detail页面，其他页面都会被缓存 -->
      <router-view/>    <!--显示的是当前路由地址所对应的内容-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
