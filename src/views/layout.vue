<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="coupon" name="home" to="/home"
        >领红包</van-tabbar-item
      >
      <van-tabbar-item icon="manager" name="mine" to="/mine"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       active: 'home'
//     }
//   }
// }
</script>
