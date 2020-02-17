<template>
  <van-overlay :show="show" :z-index="3" @click="$emit('close-overlay')">
    <div class="page-home-red-success-pop-box-wrapper">
      <button class="page-home-red-success-pop-close">
        <van-icon name="cross" />
      </button>
      <div class="page-home-red-success-pop-box">
        <h3 class="title">
          成功领取【全场通用35-5】
        </h3>
        <p class="desc">
          本次消耗5粮票
        </p>
        <div class="list">
          <article class="item">
            <div class="coupon-num">
              <span class="unit">￥</span> <b class="num">5</b>
            </div>
            <i class="split"></i>
            <div class="info">
              <h5 class="coupon-name">饿了么通用红包</h5>
              <span class="coupon-desc">满35元可用</span>
            </div>
          </article>
          <article class="item">
            <div class="coupon-num">
              <span class="unit">￥</span> <b class="num">5</b>
            </div>
            <i class="split"></i>
            <div class="info">
              <h5 class="coupon-name">夜宵红包</h5>
              <span class="coupon-desc">满45元可用</span>
            </div>
          </article>
        </div>
        <div class="footer">
          <p class="footer-desc">
            请打开饿了么App"我的-红包-店铺红包"查看
          </p>
          <div>
            <button class="footer-btn">
              换个手机号继续领
            </button>
          </div>
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
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

<style lang="less" scoped>
.page-home-red-success-pop-box-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.page-home-red-success-pop-close {
  position: absolute;
  right: 0;
  top: -1.466667rem;
  width: 0.693333rem;
  height: 0.693333rem;
  font-size: 0.346667rem;
  color: hsla(0, 0%, 100%, 0.5);
  font-weight: 700;
  line-height: 0.666667rem;
  border: 0.04rem solid hsla(0, 0%, 100%, 0.4);
  border-radius: 1.333333rem;
}

.page-home-red-success-pop-box {
  position: relative;
  width: 8.533333rem;
  border-radius: 0 0 0.466667rem 0.466667rem;
  background: #d8452b;
  min-height: 5.333333rem;
  transform: scale(0.5);
  opacity: 0;
  animation: page-home-red-success-pop-box 0.4s
    cubic-bezier(0, 0.47, 0.45, 1.05) 0.4s forwards;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: -1.253333rem;
    width: 100%;
    height: 1.266667rem;
    background: url('../assets/images/redbag-head.svg') no-repeat top;
    background-size: 100% auto;
  }

  .title {
    font-size: 0.426667rem;
    color: #ffdeaa;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    transform: translate3d(0, -0.333333rem, 0);
  }

  .desc {
    width: max-content;
    padding: 0.066667rem 0.333333rem;
    margin: -0.266667rem auto 0;
    font-size: 0.32rem;
    color: rgba(255, 222, 170, 0.9);
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 0.026667rem solid rgba(255, 222, 170, 0.5);
    border-radius: 1.333333rem;
    transform: scale(0.82);
    transform-origin: 50%;
  }

  .list {
    margin: 0.533333rem 0.266667rem 0;
    padding: 0 0 0.666667rem;
    min-height: 1.066667rem;
    max-height: 5.333333rem;
    overflow: scroll;
  }

  .item {
    display: flex;
    align-items: center;
    margin: 0 auto 0.2rem;
    width: 6.933333rem;
    background: #fff;
    border-radius: 0.066667rem;
    box-shadow: 0 0.026667rem 0.066667rem 0.04rem rgba(0, 0, 0, 0.1);
    height: 1.653333rem;

    .coupon-num {
      flex-shrink: 0;
      display: flex;
      align-items: baseline;
      justify-content: center;
      width: 1.866667rem;
      color: #f34a4a;
      font-weight: 400;
      line-height: 1.5;

      .num {
        font-size: 0.693333rem;
      }

      .unit {
        font-size: 0.32rem;
      }
    }

    .coupon-name {
      display: block;
      font-size: 0.346667rem;
      color: #222;
      font-weight: 700;
      line-height: 1.5;
    }

    .coupon-desc {
      display: block;
      font-size: 0.32rem;
      color: #999;
      font-weight: 400;
      line-height: 1.5;
      transform: scale(0.85);
      transform-origin: 0 50%;
    }

    .info {
      margin: 0 0 0 0.533333rem;
    }

    .split {
      position: relative;
      flex-shrink: 0;
      height: 0.933333rem;
      border-left: 0.04rem dotted #eaeaea;

      &:after,
      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        left: 50%;
        margin: 0 0 0 -0.186667rem;
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 1.333333rem;
        background: #d8452b;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
      }

      &:before {
        top: -0.533333rem;
      }

      &:after {
        bottom: -0.533333rem;
      }
    }
  }

  .footer {
    position: relative;
    width: 100%;
    padding: 0.266667rem 0 0.533333rem;
    border-radius: 0 0 0.466667rem 0.466667rem;
    background: #ea5644;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: -0.56rem;
      width: 100%;
      height: 0.6rem;
      background: url('../assets/images/redbag-foot-befero.svg') no-repeat top;
      background-size: 100% auto;
    }
  }

  .footer-desc {
    width: max-content;
    padding: 0.066667rem 0.333333rem;
    margin: -0.2rem auto 0;
    font-size: 0.32rem;
    color: rgba(255, 222, 170, 0.9);
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    transform: scale(0.95);
    transform-origin: 50%;
  }

  .footer-btn {
    display: block;
    margin: 0.2rem auto 0;
    padding: 0.2rem 1.066667rem;
    font-size: 0.373333rem;
    color: #724f07;
    font-weight: 400;
    line-height: 1.5;
    background-image: linear-gradient(90deg, #fdf8db, #ffd089);
    border-radius: 1.333333rem;
    box-shadow: 0 0.16rem 0.266667rem rgba(182, 15, 15, 0.3);
  }

  .footer-btn-small {
    display: block;
    padding: 0.266667rem 0.4rem;
    margin: 0.066667rem auto -0.4rem;
    font-size: 0.32rem;
    color: #ffd089;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }
}

.page-home-red-success-pop-close {
  position: absolute;
  right: 0;
  top: -1.466667rem;
  width: 0.693333rem;
  height: 0.693333rem;
  font-size: 0.346667rem;
  color: hsla(0, 0%, 100%, 0.5);
  font-weight: 700;
  line-height: 0.666667rem;
  border: 0.04rem solid hsla(0, 0%, 100%, 0.4);
  border-radius: 1.333333rem;
}

@keyframes page-home-red-success-pop-box {
  45% {
    opacity: 1;
  }

  90% {
    -webkit-transform: scale(1.04);
    transform: scale(1.04);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
