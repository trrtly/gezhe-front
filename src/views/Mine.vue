<template>
  <div id="page-mine">
    <div class="page-mine-header">
      <div class="container">
        <div class="page-mine-user-info">
          <img :src="userInfo.headimgurl" class="avatar" />
          <div class="right">
            <div class="info">
              <div class="nickname">
                {{ userInfo.nickname }}
              </div>
            </div>
            <div class="right-bottom" v-show="userInfo.mobile">
              <button class="right-bottom-item">
                {{ userInfo.mobile }}
                <van-icon name="play" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="page-mine-assets">
      <ul class="list">
        <li
          data-index="1"
          class="item item-balance"
          @click="$router.push({ path: '/record' })"
        >
          <p class="balance">
            <b class="num udc-bold">{{ userInfo.score }}</b>
          </p>
          <p class="top">
            <van-icon name="coupon" />
            <b class="title">我的积分</b>
            <van-icon name="arrow" />
          </p>
        </li>
        <li
          data-index="0"
          class="item item-balance"
          @click="$router.push({ path: '/bounty' })"
        >
          <p class="balance">
            <b class="num udc-bold">{{ userInfo.cms }}</b>
            <span class="unit">元</span>
          </p>
          <p class="top">
            <van-icon name="gold-coin" />
            <b class="title">可提现余额</b>
            <van-icon name="arrow" />
          </p>
        </li>
      </ul>
    </section>
    <div class="page-mine-section">
      <div class="section-title">
        <div class="title">
          常见功能
        </div>
      </div>
      <div class="section-container">
        <div>
          <div
            class="page-mine-nav-list page-min-nav-list page-mine-nav-list-normal"
          >
            <!-- <button @click="$router.push('/charge')" class="item">
              <img
                src="../assets/images/icon/icon-top-up_small.png"
                class="icon"
              />
              <div class="text">
                积分充值
              </div>
            </button> -->
            <button @click="$router.push('/faq')" class="item">
              <img src="../assets/images/icon/icon-qa_small.png" class="icon" />
              <div class="text">
                常见问题
              </div>
            </button>
            <!-- <button data-index="2" class="item">
              <img
                src="../assets/images/icon/icon-meituan_small.png?ver=2"
                class="icon"
              />
              <div class="text">
                美团外卖红包
              </div>
              <span class="tip">
                免费
              </span>
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <section class="page-mine-invite">
      <div class="icon-noLimit"></div>
      <article class="invite-container">
        <div class="left">
          <div class="guide-text">每邀请一位好友</div>
          <div class="desc">即可获得10积分奖励</div>
          <div class="awards-text udc-bold">
            +10
          </div>
        </div>
        <div class="right">
          <div class="invite-info">
            <div class="invite-list"><!----></div>
            <div class="text" @click="$router.push({ path: '/inviteRecord' })">
              好友列表
              <van-icon name="arrow" />
            </div>
          </div>
          <button class="btn-go-invite" @click="showShare = true">
            分享给好友
          </button>
        </div>
      </article>
    </section>

    <share-overlay v-if="showShare" @close-overlay="showShare = false" />
    <msg-overlay
      v-if="showMessage"
      :msg="messageText"
      @close-overlay="showMessage = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shareOverlay from '@/components/shareOverlay.vue'
import msgOverlay from '@/components/message.vue'

export default {
  components: { shareOverlay, msgOverlay },
  data() {
    return {
      showShare: false,
      showMessage: false,
      messageText: '复制成功'
    }
  },

  computed: {
    ...mapGetters(['userInfo'])
  },

  methods: {
    onCopy() {
      this.showMessage = true
    }
  }
}
</script>

<style lang="less" scoped>
#page-mine {
  min-height: 100vh;
  padding: 0 0 2.4rem;
  box-sizing: border-box;
  background: #f4f5f6;

  .page-min-nav-list {
    margin: -0.333333rem 0 0;
    padding-bottom: 0.133333rem;
  }
}

.page-mine-header {
  position: relative;
  z-index: 0;
  padding: 0.8rem 0 0.666667rem;
  background: #2864fa;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -0.666667rem;
    width: 100%;
    height: 5.333333rem;
    background: url(../assets/images/mine-head-bg.png) no-repeat bottom;
    background-size: 100% auto;
  }
}

.page-mine-user-info {
  display: flex;
  align-items: center;
  padding: 0 0.4rem;

  .right {
    margin: 0 0 0 0.333333rem;
  }

  .avatar {
    flex-shrink: 0;
    width: 1.28rem;
    height: 1.28rem;
    border-radius: 2.666667rem;
    overflow: hidden;
    border: 0.04rem solid #ffe7d5;
    box-shadow: 0 0.173333rem 0.2rem rgba(32, 82, 226, 0.6);
    background: #ffe7d5;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .nickname {
    font-size: 0.48rem;
    color: hsla(0, 0%, 100%, 0.95);
    font-weight: 700;
    line-height: 1.5;
  }

  .right-bottom {
    margin: 0.106667rem 0 0;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.6);
    font-weight: 400;
    line-height: 1.5;
  }

  .right-bottom-item {
    display: flex;
    align-items: center;
    padding: 0.026667rem 0.066667rem 0.026667rem 0.266667rem;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.9);
    font-weight: 400;
    line-height: 1.5;
    border: 0.026667rem solid rgba(0, 0, 0, 0.15);
    border-radius: 1.333333rem;

    .btn-text {
      display: inline-block;
      margin: 0 0 0 0.04rem;
      transform: scale(0.8);
      color: hsla(0, 0%, 100%, 0.5);
      transform-origin: 0 50%;
    }

    .van-icon {
      display: inline-block;
      margin: 0 0 0 -0.16rem;
      color: hsla(0, 0%, 100%, 0.4);
    }
  }
}

.page-mine-assets {
  position: relative;
  z-index: 2;
  margin: -0.266667rem 0 0.266667rem;

  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.266667rem 0 0.4rem;
  }

  .item {
    position: relative;
    z-index: 1;
    width: 50%;
    margin: 0 0.133333rem 0 0;
    padding: 0.2rem 0.266667rem 0.333333rem;
    box-sizing: border-box;
    background: #fff;
    border-radius: 0.2rem;
    box-shadow: 0 0.066667rem 0.466667rem 0 rgba(34, 34, 34, 0.03);
  }

  .balance {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 0.2rem 0 0.133333rem;
    padding: 0 0 0 0.133333rem;
    font-size: 0.72rem;
    color: #272121;
    font-weight: 400;
    line-height: 0.866667rem;
    height: 0.866667rem;
  }

  .unit {
    margin: 0 0 0 0.066667rem;
    font-size: 0.373333rem;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .title {
    margin: 0 0 0 0.133333rem;
    font-size: 0.346667rem;
    color: #5c4f4e;
    font-weight: 400;
    line-height: 1.5;
  }

  .van-icon-gold-coin,
  .van-icon-coupon {
    width: 0.666667rem;
    height: 0.666667rem;
    border-radius: 1.333333rem;
    font-size: 0.506667rem;
    color: #2864fa;
    font-weight: 400;
    line-height: 0.666667rem;
    background: rgba(40, 100, 250, 0.07);
    text-align: center;
  }

  .van-icon-arrow {
    font-size: 0.32rem;
    color: #beb4b2;
    font-weight: 400;
    line-height: 1.5;
  }
}

.page-mine-section {
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 0.2rem;
  margin: 0 0.4rem 0.266667rem;

  .section-title {
    padding: 0.333333rem 0.4rem;

    .title {
      font-size: 0.4rem;
      color: #272121;
      font-weight: 700;
      line-height: 1.5;
    }
  }

  .section-container {
    padding: 0.133333rem 0 0;
  }
}
.page-mine-nav-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0.266667rem 0.4rem 0;

  .item {
    position: relative;
    z-index: 1;
    width: 25%;
    margin: 0 0 0.466667rem;
  }

  .icon {
    display: block;
    width: 1.04rem;
    height: 1.04rem;
    margin: 0 auto;
  }

  .text {
    margin: 0.066667rem 0 0;
    font-size: 0.346667rem;
    color: #332a2a;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }

  .tip {
    position: absolute;
    z-index: 2;
    left: 1.2rem;
    top: -0.266667rem;
    width: max-content;
    padding: 0.026667rem 0.2rem;
    background: linear-gradient(90deg, rgba(227, 74, 36, 0.8), #e34a24);
    font-size: 0.32rem;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 1.333333rem 1.333333rem 1.333333rem 0;
    transform: scale(0.7);
    transform-origin: 0 100%;
  }
}

.page-mine-invite {
  position: relative;
  z-index: 1;
  padding: 0.466667rem 0;
  margin: 0.266667rem 0.4rem;
  background: #fff url(../assets/images/mine/invite_box_bg.svg) no-repeat 0 100%;
  background-size: auto 2.666667rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.133333rem 0.2rem hsla(0, 0%, 53.3%, 0.05);

  .icon-noLimit {
    position: absolute;
    z-index: 1;
    left: -0.133333rem;
    top: -0.133333rem;
    width: 1.6rem;
    height: 1.44rem;
    background: url(../assets/images/mine/invite_no_limit.svg) no-repeat 0 0;
    background-size: 100% auto;
  }

  .invite-container {
    position: relative;
    z-index: 1;
    margin: 0 0 0 0.933333rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .guide-text {
      font-size: 0.32rem;
      color: #1941c6;
      font-weight: 400;
      line-height: 1.5;
      display: block;
      transform-origin: 0 50%;
      color: #958d8c;
    }

    .desc {
      font-size: 0.426667rem;
      color: #272121;
      font-weight: 700;
      line-height: 1.5;
      display: block;
    }
  }

  .awards-text {
    display: flex;
    align-items: center;
    margin: 0.266667rem 0 0;
    width: 4rem;
    height: 0.666667rem;
    border-radius: 0 0.066667rem 0.066667rem 0;
    font-size: 0.56rem;
    color: #d69a31;
    font-weight: bold;
    line-height: 0.666667rem;

    .icon {
      margin: 0 0.133333rem 0 0;
      width: 0.853333rem;
    }
  }

  .right {
    margin: -0.133333rem 0 0;
    padding: 0 0.133333rem 0 0;
  }

  .invite-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .text {
      font-size: 0.346667rem;
      color: #958d8c;
      font-weight: 400;
      line-height: 1.5;
      display: block;
      display: flex;
      align-items: center;
      margin: 0 0.4rem 0 0.2rem;
    }
  }

  .invite-list {
    display: flex;
    align-items: center;
    margin: 0 0 0 0.333333rem;
    min-height: 0.733333rem;
  }

  .btn-go-invite {
    margin: 0.4rem 0.4rem 0 0;
    background: #2864fa;
    background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.3),
      hsla(0, 0%, 100%, 0)
    );
    box-shadow: 0 0.093333rem 0 0 #2052e2, 0 0.133333rem 0 0.066667rem #edf6fd,
      inset 0.013333rem 0.013333rem 0 0.026667rem hsla(0, 0%, 100%, 0.26);
    font-size: 0.346667rem;
    color: #fff;
    font-weight: 700;
    line-height: 0.8rem;
    text-shadow: 0 0.013333rem 0 rgba(82, 2, 2, 0.5);
    width: 2.933333rem;
    height: 0.8rem;
    border-radius: 1.333333rem;
    text-align: center;
    transition: transform 0.25s ease;
  }

  .invite-footer {
    position: relative;
    z-index: 1;
    border-top: 1px solid #eaeaed;
    margin: 0.533333rem 0.533333rem 0 0.933333rem;
    padding: 0.333333rem 0 0;
    border-top: none;

    &:before {
      transform: scaleY(0.5);
    }
  }

  .invite-footer-container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.066667rem 0 0;
    border: 1px solid #dcdcdc;
    border-radius: 1.333333rem;

    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      border: 1px solid #dcdcdc;
      border-radius: 2.666667rem;
      transform-origin: 0;
      transform: scale(0.5);
      box-sizing: border-box;
      pointer-events: none;
      width: 200%;
      height: 200%;
      transform-origin: 0 0;
    }

    .guide-text {
      display: block;
      padding: 0 0.266667rem;
      background: #f5f5f5;
      font-size: 0.32rem;
      color: #958d8c;
      font-weight: 400;
      line-height: 0.733333rem;
      border-radius: 1.333333rem 0 0 1.333333rem;
      flex-shrink: 0;
    }

    .invite-code-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      overflow: hidden;
    }

    .invite-code {
      width: 100%;
      padding: 0 0 0 0.266667rem;
      font-size: 0.32rem;
      color: #5c4f4e;
      font-weight: 700;
      line-height: 0.733333rem;
      word-wrap: break-word;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .btn-copy-invite-code {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      padding: 0 0.266667rem;
      background: #2864fa;
      font-size: 0.32rem;
      color: #fff;
      font-weight: 700;
      line-height: 0.64rem;
      border-radius: 1.333333rem;
      transform: translateZ(0);
    }
  }
}
</style>
