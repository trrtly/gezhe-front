<template>
  <van-overlay :show="show" :z-index="2" @click="$emit('close-overlay')">
    <div class="com-dialog-box">
      <div class="com-dialog-title">{{ msg }}</div>
      <div class="com-dialog-footer">
        <div class="com-dialog-button submit">知道啦</div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: 'messageOverlay',
  props: ['msg'],
  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.show = true
  }
}
</script>
