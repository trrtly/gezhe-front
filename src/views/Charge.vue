<template>
  <div id="page-top-up">
    <header id="page-top-up-header">
      <div class="balance">
        <span class="name">当前积分</span>
        <p class="coin coin-ani-finish">
          ><b class="num din">{{ userInfo.score }}</b>
        </p>
      </div>
      <div class="user_info" @click="$router.push({ path: '/' })">
        <van-icon name="arrow-left" />返回首页
      </div>
    </header>
    <div class="page-topUp-container">
      <div class="com-page-section">
        <h3 class="section-title">请选择优惠套餐</h3>
        <div class="section-container">
          <ul id="page-top-up-package">
            <li class="item" v-for="(item, index) in typeList" :key="index">
              <div class="content">
                <b class="din price">{{ item.score }}<span class="unit">积分</span></b>
                <ol class="info">
                  <li class="info-item"><b class="b">￥{{ item.amount }}</b></li>
                  <li class="info-item"><b class="b">0.12</b>/积分</li>
                </ol>
                <span class="desc">
                  {{ item.description }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="page-tipUp-line-split"></div>
      <div class="com-page-section page-topUp-rule-section">
        <h3 class="section-title">充值说明</h3>
        <div class="section-container">
          <div class="page-topUp-rule">
            <ul>
              <li class="item">
                1、请关注公众号：<button class="btn" @click="show = true">
                  {{ platform.name }}</button
                >，以便更好的找到使用入口
              </li>
              <li class="item">
                2、积分可用于本公众号提供的各种活动，一经充值概不退款
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="page-top-up-footer">
        <ul class="link-list">
          <li class="item" @click="$router.push('/record')">积分记录</li>
        </ul>
      </div>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <img :src="kfImg" />
        </div>
      </div>
    </van-overlay>

    <van-overlay :show="showSuccess" :z-index="2" @click="showSuccess = false">
      <section class="page-top-up-success-pop-box">
        <i class="icon"></i>
        <p class="score">
          <b class="b din">1400</b><span class="unit">积分</span>
        </p>
        <span class="desc">已成功充值到账户中</span>
        <div class="btn-wrapper">
          <button class="com-btn-main btn-ok">知道了</button>
        </div>
      </section>
    </van-overlay>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showSuccess: false,
      show: false,
      platform: {},
      typeList: [],
      kfImg: ''
    }
  },

  computed: {
    ...mapGetters(['userInfo'])
  },

  mounted() {
    this.getScores()
    this.platform = JSON.parse(localStorage.getItem('platform'))
    this.kfImg = this.platform.kfImg
  },

  methods: {
    async getScores() {
      const res = await this.$api.scores()
      this.typeList = res.data
    }
  }
}
</script>

<style lang="less" scoped>
#page-top-up {
  background: #fff;
  min-height: 100vh;

  &:before {
    content: ':)';
    position: fixed;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 30%;
    min-height: 4rem;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.4);
    font-weight: 400;
    line-height: 2.666667rem;
    text-align: center;
    background: #2052e2;
  }

  &:after {
    content: '';
    position: fixed;
    z-index: -2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f5f8f9;
  }
}

#page-top-up-header {
  display: flex;
  justify-content: space-between;
  background: url('../assets/images/charge-head-bg.svg') no-repeat 50%,
    linear-gradient(10deg, rgba(32, 82, 226, 0.8), #2052e2 60%), #fff;
  background-size: cover;
  padding: 0.666667rem 0 1.066667rem;
  margin: 0 0 0.2rem;

  .balance {
    padding: 0 0.533333rem;

    .name {
      display: block;
      font-size: 0.32rem;
      color: hsla(0, 0%, 100%, 0.6);
      line-height: 0.48rem;
    }

    .coin {
      display: flex;
      align-items: center;
      opacity: 0.8;
      transform: scale(0.98);
      transform-origin: 50%;
      animation: page-top-up-header-coin 0.6s ease-in-out infinite;

      .coin-ani-finish {
        animation: none;
        opacity: 1;
        transform: scale(1);
      }
    }

    .icon {
      width: 0.933333rem;
      height: 0.666667rem;
    }

    .num {
      margin: 0.066667rem 0 0 0.133333rem;
      display: block;
      height: 1rem;
      font-size: 0.693333rem;
      color: #fff;
      font-weight: 400;
      line-height: 1rem;
      text-shadow: 0 0.026667rem 0.04rem #1941c6;
    }
  }

  .user_info {
    display: flex;
    align-items: center;
    height: 0.666667rem;
    padding: 0.133333rem 0.333333rem 0.133333rem 0.133333rem;
    border-radius: 1.333333rem 0 0 1.333333rem;
    background: linear-gradient(45deg, #1941c6, #2052e2);
    font-size: 0.373333rem;
    color: hsla(0, 0%, 100%, 0.7);
    font-weight: 400;
    line-height: 0.666667rem;

    .van-icon {
      text-align: center;
      opacity: 0.6;
    }
  }
}

.page-topUp-container {
  position: relative;
  z-index: 1;
  margin: -0.666667rem 0 0;
  padding: 0.333333rem 0 0.533333rem;
  background: #fff;
  border-radius: 0.466667rem 0.466667rem 0 0;
  min-height: calc(100vh - 3.73333rem);
}

#page-top-up-package {
  display: flex;
  flex-flow: row wrap;
  padding: 0.266667rem 0;
  font-size: 0;

  .item {
    width: 50%;
    padding: 0 0.133333rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.133333rem;
    margin: 0 0 0.266667rem;

    .content {
      position: relative;
      z-index: 1;
      padding: 0.4rem 0 0.266667rem;
      border-radius: 0.133333rem;
      border: 0.04rem solid #faecdc;
      user-select: none;
      box-shadow: 0 0.093333rem 0.2rem rgba(243, 209, 170, 0.2);
    }

    .price {
      position: relative;
      z-index: 1;
      display: block;
      font-size: 0.853333rem;
      color: #272121;
      font-weight: 700;
      line-height: 0.8rem;
      text-shadow: 0.053333rem 0.053333rem 0 hsla(0, 0%, 60%, 0.2);

      &:before {
        content: '';
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          hsla(0, 0%, 100%, 0) 20%,
          hsla(0, 0%, 100%, 0.2)
        );
      }

      .unit {
        font-size: 0.373333rem;
        text-shadow: none;
        margin: 0 0 0 0.066667rem;
      }
    }

    .info {
      text-align: center;
      margin: 0.2rem 0 0;

      .info-item {
        display: inline-block;
        padding: 0.053333rem 0.266667rem;
        font-size: 0.32rem;
        color: #c49558;
        line-height: 0.48rem;
        background: rgba(250, 236, 220, 0.4);

        &:first-of-type {
          border-radius: 0 0 0 0.333333rem;
          margin-right: 0.026667rem;
        }

        &:nth-of-type(2) {
          border-radius: 0 0.333333rem 0 0;
        }
      }
    }

    .tip {
      position: absolute;
      z-index: 1;
      right: -0.026667rem;
      top: -0.026667rem;
      padding: 0.066667rem 0.266667rem;
      font-size: 0.32rem;
      color: #fff;
      line-height: 0.48rem;
      background: #2864fa;
      border-radius: 0 0.133333rem 0 0.4rem;
      transform: scale(0.75);
      transform-origin: 100% 0;
    }

    .desc {
      display: block;
      margin: 0.106667rem 0 0;
      font-size: 0.32rem;
      color: #958d8c;
      font-weight: 400;
      line-height: 1.5;
      transform: scale(0.9);
      transform-origin: 50%;
      opacity: 0.95;
    }
  }
}

.com-page-section {
  position: relative;
  z-index: 1;
  background: #fff;

  .section-title {
    position: relative;
    z-index: 1;
    font-size: 0.346667rem;
    color: #4e515c;
    font-weight: 400;
    line-height: 0.52rem;
    margin: 0 0 0 0.533333rem;
    padding: 0.333333rem 0 0;
  }

  .section-container {
    margin: 0 0.533333rem;
    padding: 0.133333rem 0 0.266667rem;
  }
}

.page-tipUp-line-split {
  position: relative;
  z-index: 1;
  height: 0.013333rem;
  border-bottom: 1px solid #e7e8ea;
  margin: 0 0.4rem;
}

.page-topUp-rule-section {
  margin: 0.266667rem 0 0;
}

#page-top-up-footer {
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0.266667rem;
  width: 100%;

  .link-list {
    text-align: center;

    .item {
      padding: 0.133333rem 0;
      display: inline-block;
      font-size: 0.32rem;
      color: #beb4b2;
      line-height: 0.48rem;
    }
  }
}

.page-topUp-rule {
  padding: 0.133333rem 0;

  .item {
    margin: 0 0 0.2rem;
    font-size: 0.32rem;
    font-weight: 400;
    color: #7e7271;
    line-height: 1.5;
  }

  .btn {
    color: #2864fa;
    border-bottom: 0.013333rem solid rgba(40, 100, 250, 0.5);
  }
}

.page-top-up-success-pop-box {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 7.333333rem;
  height: 6.933333rem;
  background: url('../assets/images/charge-success-bg.svg') no-repeat top;
  background-size: 100% auto;
  padding: 0.853333rem 0 0;
  box-sizing: border-box;
  opacity: 0;
  animation: page-top-up-success-pop-box 0.5s ease-out 0.1s forwards;

  .score {
    margin: 0.533333rem 0 0;
    text-align: center;
    font-size: 0.96rem;
    color: #e34a24;
    font-weight: 400;
    line-height: 1.066667rem;

    .unit {
      font-size: 0.32rem;
    }
  }

  .icon {
    display: block;
    width: 1.466667rem;
    height: 1.466667rem;
    margin: 0 auto;
    transform: translate3d(0.066667rem, 0, 0);
    background: url(../assets/images/charge-success.svg) no-repeat 50%;
    background-size: 100% auto;
  }

  .desc {
    margin: -0.066667rem 0 0;
    display: block;
    text-align: center;
    font-size: 0.32rem;
    color: #8c8f95;
    line-height: 0.48rem;
  }

  .btn-wrapper {
    margin: 0.333333rem 0.733333rem;
  }
}

@keyframes page-top-up-header-coin {
  to {
    opacity: 1;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
}

@keyframes page-top-up-success-pop-box {
  50% {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -60%, 0) scale(0.9);
    transform: translate3d(-50%, -60%, 0) scale(0.9);
  }

  75% {
    opacity: 1;
    -webkit-transform: translate3d(-50%, -60%, 0) scale(1.05);
    transform: translate3d(-50%, -60%, 0) scale(1.05);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-50%, -60%, 0) scale(1);
    transform: translate3d(-50%, -60%, 0) scale(1);
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 80vw;
  background-size: 100%;
  position: relative;

  img {
    width: 100%;
  }
}
</style>
