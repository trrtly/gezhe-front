<template>
  <van-overlay :show="show" :z-index="3" @click="$emit('close-overlay')">
    <div class="com-dialog-box">
      <div class="com-dialog-title">{{msg}}</div>
      <div class="com-dialog-content">
        <!-- 内容为富文本，样式直接写在元素上 -->
        <div>
          <p style="text-align: left;">
            <span style=" font-size: 13px; color: #444;"
              >可能由于以下原因导致失败：</span
            >
          </p>
          <ul
            style="text-align: left;margin:5px 0 0 0;list-style-type: none;font-size: 12px; color: #666; border-radius:0 15px 15px 15px; background:#f4f7fa; padding: 7px 10px;"
          >
            <li style="margin: 0 0 5px">
              <p><span>1. 未匹配到有效红包</span></p>
            </li>
            <li style="margin: 0 0 5px">
              <p><span>2. 今日已领过该红包</span></p>
            </li>
            <li style="margin: 0 0 5px">
              <p><span>3. 当前红包活动已下线</span></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="com-dialog-footer">
        <!-- <div class="com-dialog-button cancle first">知道啦</div> -->
        <div class="com-dialog-button submit">换个手机号继续领</div>
        <div class="com-dialog-button cancle second">知道啦</div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
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
