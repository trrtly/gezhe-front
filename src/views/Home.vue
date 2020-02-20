<template>
  <div id="page-home">
    <div id="page-home-body">
      <div class="page-home-header">
        <div class="top">
          <div class="project-name">{{ platform.name }}</div>
          <div class="project-desc">一键领取大红包</div>
        </div>
      </div>
      <div id="page-home-card">
        <div class="top">
          <div class="left">
            <div class="user_info">
              <div class="desc">
                <figure class="avatar com-img-wrapper">
                  <img
                    :src="userInfo.headimgurl"
                    class="img"
                  />
                </figure>
                <b class="text">{{ userInfo.nickname }}</b>
              </div>
            </div>
            <p class="coin-balance coin-ani-finish">
              <b class="num din">{{ userInfo.score }}</b>
            </p>
            <button
              class="btn-go-coin-record"
              @click="$router.push({ path: '/record' })"
            >
              积分明细
              <van-icon name="arrow" />
            </button>
          </div>
          <div class="btn-go-charge-wrapper">
            <button
              class="com-btn-main btn-go-charge"
              @click="showScoreDialog('您可通过个人中心邀请好友功能获取积分')"
            >
              获得积分
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="com-page-section page-home-section page-home-packages-section">
      <h5
        class="section-title"
        style="width: max-content;"
      >
        请选择您要领取的红包类型
      </h5>
      <div class="section-container">
        <div class="page-home-packages">
          <section class="page-home-package-list">
            <article
              v-for="(item, index) in ReceiveType"
              :key="index"
              @click="changeRedbag(index)"
              :class="[
                'page-home-package-item',
                index === activeBag && 'page-home-package-item-on'
              ]"
            >
              <header class="header">
                <h3 class="title">
                  {{ item.title }}
                  <span
                    v-if="item.isNew"
                    class="tip"
                  >NEW</span>
                </h3>
                <div class="score">
                  <span class="udc-medium">{{ item.score }}</span>积分<span class="times">/次</span>
                </div>
              </header>
              <p class="desc">
                {{ item.description }}
              </p>
              <i class="icon-done"></i>
            </article>
          </section>
          <section class="page-home-package-form">
            <div class="container">
              <div class="container-box">
                <b class="container-title">
                  请输入饿了么手机号
                </b>
                <div class="container-form">
                  <div class="input-box">
                    <input
                      id="container-phone-input"
                      maxlength="11"
                      placeholder="请输入手机号"
                      type="text"
                      v-model="phone"
                      class="input"
                      @input="mobileInput"
                    />
                    <button
                      class="btn-clear"
                      @click="phone = ''"
                    >
                      <van-icon name="cross" />
                    </button>
                  </div>
                </div>

                <div
                  class="container-form"
                  v-if="showSmsBox"
                >
                  <div class="input-box">
                    <input
                      max="6"
                      placeholder="请输入验证码"
                      type="number"
                      class="input"
                      v-model="smsCode"
                    />
                    <button
                      class="btn-clear"
                      @click="smsCode = ''"
                    >
                      <van-icon name="cross" />
                    </button>
                    <button
                      class="btn btn-send-code"
                      @click="getSmsCode"
                    >
                      {{ smsBtnText }}
                    </button>
                  </div>
                  <!-- <div class="input-box">

                  </div> -->
                </div>
              </div>
              <div class="page-home-packages-footer">
                <button
                  @click="onSubmit"
                  class="com-btn-main"
                  v-if="canSubmit"
                >
                  立即领取
                </button>
                <button
                  v-else
                  class="com-btn-main disable"
                  disable
                >
                  立即领取
                </button>

                <!-- 换手机号 -->
                <!-- <button class="com-btn-main disable" disable>
                  点击登录并领取
                </button> -->
                <p style="color: darkgray;margin-top: 5px;text-align:center;">
                  点击领取即代表您已同意我们的《<router-link to="/privacy" style="color: cornflowerblue;">软件许可及服务协议》</router-link>
                </p>
              </div>
            </div>
            <!---->
          </section>
          <section class="page-home-package-rule">
            <h3 class="page-home-package-rule-title">
              领取规则
            </h3>
            <div class="page-home-package-rule-content">
              {{getRule}}
            </div>
          </section>
        </div>
      </div>
    </section>

    <div
      class="img_code_layer"
      v-show="showImgCodeBox"
    >
      <div
        class="bg"
        @click="showImgCodeBox = false"
      ></div>
      <div
        class="block"
        @click="imgCodeBoxClick"
      >
        <div class="input-box">
          <input
            type="text"
            maxlength="4"
            v-model="captchaCode"
            placeholder="请输入图形验证码"
          />
          <img
            :src="codeImg"
            alt="图形验证码"
            @click="getImgCode"
          />
        </div>

        <button
          type="button"
          class="btn"
          @click="sendSms"
        >确定</button>
      </div>
    </div>

    <van-overlay
      :show="showSuccess"
      :z-index="3"
    >
      <div class="page-home-red-success-pop-box-wrapper">
        <button
          class="page-home-red-success-pop-close"
          @click="closeSuccessLayer"
        >
          <van-icon name="cross" />
        </button>
        <div class="page-home-red-success-pop-box">
          <h3 class="title">
            {{ redPacksRes.title }}
          </h3>
          <p class="desc">
            {{ redPacksRes.subTitle }}
          </p>
          <div class="list">
            <article
              class="item"
              v-for="(item, index) in redPacksRes.list"
              :key="index"
            >
              <div class="coupon-num">
                <span class="unit">￥</span> <b class="num">{{ item.amount }}</b>
              </div>
              <i class="split"></i>
              <div class="info">
                <h5 class="coupon-name">{{ item.title }}</h5>
                <span class="coupon-desc">满{{ item.threshold }}可用</span>
              </div>
            </article>
          </div>
          <div class="footer">
            <p class="footer-desc">
              请打开饿了么App"我的-红包-店铺红包"查看
            </p>
            <div>
              <button class="footer-btn">
                <a :href="href">再领取一个免费红包（{{ count }}S后跳转）</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>

    <receive-fail
      v-if="showFail"
      :msg="failMsg"
      @close-overlay="showFail = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import receiveFail from '@/components/receiveFail.vue'

export default {
  name: 'home',
  components: { receiveFail },
  data() {
    return {
      platform: null,
      showSuccess: false,
      showFail: false,
      ReceiveType: [],
      phone: '',
      activeBag: 0,
      id: '',
      canSubmit: false,
      redPacksRes: {},
      showSmsBox: false,
      smsCode: '',
      showImgCodeBox: false,
      isLogin: false,
      codeImg: '',
      captchaCode: '', // 字段名是后端定义的
      captchaHash: '',
      validateToken: '',
      count: 8,
      smsCount: 60,
      smsBtnText: '获取验证码',
      timer: null,
      failMsg: '很抱歉，领取失败!',
      href: ''
    }
  },

  computed: {
    ...mapGetters(['userInfo']),
    getRule() {
      let item = this.ReceiveType[this.activeBag]
      if (item) {
        return item.rule
      }
      return ''
    }
  },

  watch: {
    userInfo: function() {
      this.checkUserMobile()
    }
  },

  beforeMount() {
    this.Redpacks()
    this.platform = JSON.parse(localStorage.getItem('platform'))
    this.checkUserMobile()
  },

  methods: {
    changeRedbag(index) {
      this.activeBag = index
    },
    showScoreDialog(msg) {
      this.$dialog
        .alert({
          confirmButtonText: '前往个人中心',
          showCancelButton: true,
          message: msg
        })
        .then(() => {
          this.$router.push({ path: '/mine' })
        })
        .catch(() => {})
    },

    async getUserInfo() {
      const res = await this.$api.getUserInfo()

      this.$store.commit('setUserInfo', res.data)
    },

    closeSuccessLayer() {
      window.clearInterval(this.timer)
      this.showSuccess = false
      this.count = 8
    },

    async Redpacks() {
      const res = await this.$api.redPacks()
      this.id = res.data[0].id
      this.ReceiveType = res.data
    },

    async onSubmit() {
      if (!this.phone) {
        this.$toast('请输入手机号码!')
        return false
      }

      const loginEle = await this.loginEle()
      if (!loginEle) {
        return false
      }

      this.$toast.loading({
        message: '领取中，请稍等...',
        forbidClick: true,
        duration: 0
      })

      const { code, data, msg } = await this.$api.getredPacks({
        id: this.ReceiveType[this.activeBag].id,
        mobile: this.phone
      })

      this.$toast.clear()

      if (code !== 200) {
        // 积分不足
        if (code === 1006) {
          this.showScoreDialog('您的积分余额不足，您可通过个人中心邀请好友功能获取积分')
          return
        }
        // 登录已过期
        if (code === 1009) {
          this.isLogin = false
          this.showSmsBox = true
        }
        if (msg !== '') {
          this.failMsg = msg
        }
        this.showFail = true
        return
      }
      this.getUserInfo()
      this.redPacksRes = data

      // url 类型的红包直接跳转
      if (data.type === 2) {
        location.href = data.url
        return
      }
      this.href = this.getCpsUrl()
      this.showSuccess = true

      this.timer = setInterval(() => {
        this.count--
        if (this.count === 0) {
          window.clearInterval(this.timer)
          location.href = this.href
        }
      }, 1000)
    },

    getCpsUrl() {
      let index = Math.floor(Math.random() * this.platform.cps.length)
      return this.platform.cps[index]
    },

    loginEle() {
      return new Promise(async resolve => {
        const that = this
        if (this.isLogin) {
          resolve(true)
          return
        }
        if (this.validateToken === '') {
          this.$toast('请先点击获取验证码按钮,获取短信验证码')
          return
        }
        if (!this.smsCode) {
          this.$toast('请输入短信验证码!')
          resolve(false)
          return
        }

        let currentScore = this.ReceiveType[this.activeBag].score
        if (this.userInfo.score < currentScore) {
          this.$dialog
            .alert({
              confirmButtonText: '获取积分',
              showCancelButton: true,
              message: '您的积分余额不足，快去获取积分吧!'
            })
            .then(() => {
              that.$router.push({ path: '/charge' })
            })
            .catch(() => {})
          resolve(false)
          return
        }

        const { phone, smsCode, validateToken } = this

        this.$toast.loading({
          message: '领取中，请稍等...',
          forbidClick: true,
          duration: 0
        })

        const loginRes = await this.$api.loginBySms({
          mobile: phone,
          smsCode,
          validateToken
        })

        this.$toast.clear()

        if (loginRes.code !== 200) {
          this.$toast(loginRes.msg)
          this.canSubmit = false
          this.isLogin = false
          this.showSmsBox = true
          resolve(false)
          return
        }
        this.canSubmit = true
        this.isLogin = true
        this.showSmsBox = false
        resolve(true)
      })
    },

    async checkUserMobile() {
      const mobile = this.userInfo.mobile
      if (mobile) {
        this.phone = mobile
        const res = await this.$api.getUserCurrent({ mobile })
        if (res.code === 200 && res.data.isLogin) {
          this.canSubmit = true
          this.isLogin = true
          this.showSmsBox = false
          return
        }
        this.showSmsBox = true
        return
      }
      this.showSmsBox = true
    },

    async mobileInput() {
      let reg = /^1[3|4|5|7|8|9][0-9]{9}$/
      const mobile = this.phone
      if (reg.test(mobile)) {
        const res = await this.$api.getUserCurrent({ mobile })
        if (res.code === 200 && res.data.isLogin) {
          this.canSubmit = true
          this.showSmsBox = false
          this.isLogin = true
        } else {
          this.showSmsBox = true
          this.isLogin = false
        }
      }

      let reg2 = new RegExp('^[0-9]*$')
      if (!reg2.test(mobile[mobile.length - 1])) {
        this.phone = mobile.substring(0, mobile.length - 1)
      }
    },

    getSmsCode() {
      let reg = /^1[3|4|5|7|8|9][0-9]{9}$/
      if (!reg.test(this.phone)) {
        this.$toast('请输入正确的手机号码!')
        return
      }
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      this.getImgCode(() => {
        this.$nextTick(() => {
          this.$toast.clear()
          this.showImgCodeBox = true
        })
      })
    },

    async getImgCode(cb) {
      const res = await this.$api.getCaptcha({
        mobile: this.phone
      })
      if (res.code !== 200) {
        this.$toast(res.msg)
        return
      }
      this.captchaHash = res.data.captchaHash
      this.codeImg = 'data:image/jpg;base64,' + res.data.captchaImage

      typeof cb === 'function' && cb()
    },

    async sendSms() {
      const { phone, captchaHash, captchaCode } = this
      if (captchaCode === '') {
        this.$toast('请输入图形验证码')
        return
      }
      const res = await this.$api.sendSms({
        mobile: phone,
        captchaHash,
        captchaCode
      })
      if (res.code !== 200) {
        this.captchaCode = ''
        this.getImgCode()
        this.$toast(res.msg)
        return
      }

      this.$toast('短信验证码发送成功！请注意查收')
      this.canSubmit = true
      this.validateToken = res.data.validateToken
      this.showImgCodeBox = false
      this.smsCount = 60
      var i = setInterval(() => {
        this.smsCount--
        this.smsBtnText = this.smsCount + 'S'
        if (this.smsCount === 0) {
          this.smsBtnText = '重新获取'
          window.clearInterval(i)
        }
      }, 1000)
    },

    imgCodeBoxClick(e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="less">
#page-home {
  background: #f3f8f9;
  min-height: 100vh;
  padding: 0 0 1.866667rem;

  &:after,
  &:before {
    position: fixed;
    z-index: -1;
    left: 0;
    width: 100%;
  }

  &:before {
    position: fixed;
    z-index: -1;
    left: 0;
    width: 100%;
  }

  &:after {
    content: ":)";
    top: 0;
    height: 5.333333rem;
    background: #5587fc;
    text-align: center;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.3);
    font-weight: 400;
    line-height: 2.666667rem;
  }
}

.page-home-header {
  position: relative;
  z-index: 0;
  width: 100%;
  padding: 0 0 1.066667rem;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -1.066667rem;
    width: 100%;
    height: 2.133333rem;
    background: #2967fe;
    border-radius: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/header_bg.svg) no-repeat top,
      linear-gradient(-175deg, #5787ff 6%, #2462fe 99%);
    background-size: 100% auto;
  }

  .top {
    margin: 0 0.533333rem;
    padding: 0.533333rem 0;

    .project-name {
      font-size: 0.746667rem;
      color: #fff;
      font-weight: 700;
      line-height: 1.5;
    }

    .project-desc {
      font-size: 0.373333rem;
      color: hsla(0, 0%, 100%, 0.5);
      font-weight: 400;
      line-height: 1.5;
    }
  }
}

#page-home-card {
  position: relative;
  z-index: 3;
  margin: -1.066667rem 0.533333rem 0;
  padding: 0 0 0.4rem;
  border-radius: 0.2rem;
  background: #fff;
  background-image: linear-gradient(
    135deg,
    #fff,
    #f5fbfd 15%,
    #fff 0,
    #fff 63%,
    #f5fbfd 0,
    #fff
  );
  box-shadow: 0 0.133333rem 0.266667rem 0 rgba(140, 141, 142, 0.1);

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.666667rem;
    padding: 0.533333rem 0 0.266667rem;

    .btn-go-charge-wrapper {
      flex-shrink: 0;
      margin: 0.4rem 0 0;
    }

    .btn-go-charge {
      width: 2.666667rem;
    }

    .coin-balance {
      display: flex;
      align-items: center;
      margin: 0.066667rem 0 0;
      opacity: 0.8;
      transform: scale(0.98);
      transform-origin: 50%;
      animation: page-top-up-header-coin 0.3s ease-in-out infinite;

      &.coin-ani-finish {
        animation: none;
        opacity: 1;
        transform: scale(1);
      }

      .icon {
        width: 1.066667rem;
        height: 0.826667rem;
      }

      .num {
        font-size: 0.96rem;
        color: #272121;
        line-height: 1.44rem;
        margin: 0 0 0 0.2rem;
      }
    }

    .btn-go-coin-record {
      display: flex;
      align-items: center;
      font-size: 0.32rem;
      color: #8c8f95;
      line-height: 0.48rem;
    }
  }

  .user_info {
    .desc {
      display: flex;
      align-items: center;

      .avatar {
        width: 0.426667rem;
        height: 0.426667rem;
        border-radius: 0.426667rem;
        margin: 0 0.2rem 0 0;
      }

      .text {
        font-size: 0.346667rem;
        color: #4e515c;
        line-height: 0.52rem;
      }
    }
  }
}

.page-home-section {
  position: inherit;
  margin: 0.4rem 0 0;
  background: transparent;
}

.com-page-section {
  position: relative;
  z-index: 1;
  background: transparent;

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
    margin-top: 0.133333rem;
  }
}

.page-home-packages {
  border-radius: 0.333333rem;
  background: #edeff2;
  box-shadow: inset 0 0.133333rem 0.466667rem rgba(3, 79, 111, 0.1);
}

.page-home-package-item {
  padding: 0.266667rem 0.333333rem;
  margin: 0 0 0.2rem;
  border-radius: 0.266667rem;
  border: 0.026667rem solid transparent;
  background: #f9fafc;

  .bg-light {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(40, 100, 250, 0.05);
    border-radius: 0.333333rem;
    opacity: 1;
    transform: scale(1);
    animation: page-home-package-item-bg-list 0.5s ease-out forwards;
  }

  .header,
  .title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .header {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .title {
    font-size: 0.373333rem;
    color: #5c4f4e;
    font-weight: 700;
    line-height: 0.746667rem;
  }

  .score {
    font-size: 0.373333rem;
    color: #2864fa;
    font-weight: 400;
    line-height: 1.5;
    opacity: 0.8;

    .times {
      font-size: 0.346667rem;
      font-weight: 400;
    }
  }

  .tip {
    display: block;
    width: max-content;
    margin: 0 0 0 0.066667rem;
    padding: 0.026667rem 0.2rem;
    background: linear-gradient(90deg, rgba(227, 74, 36, 0.8), #e34a24);
    font-size: 0.32rem;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 1.333333rem 1.333333rem 1.333333rem 0;
    transform: scale(0.7);
    transform-origin: 0 0;
  }

  .desc {
    display: none;
    margin: 0.066667rem 0 0;
    padding: 0.133333rem 0;
    font-size: 0.32rem;
    color: #7e7271;
    font-weight: 400;
    line-height: 1.5;
  }
}

.page-home-package-item-on {
  border-color: #2864fa;
  box-shadow: 0 0.093333rem 0.2rem rgba(40, 100, 250, 0.1);
  background: #fff;
  animation: page-home-package-item-on 0.5s ease-out forwards;

  .title {
    color: #2052e2;
    font-size: 0.426667rem;
  }

  .score {
    font-weight: 700;
    opacity: 1;
  }

  .desc {
    display: block;
  }
}

.page-home-package-list {
  padding: 0.533333rem 0.4rem;
}

.page-home-package-form {
  margin: -0.266667rem 0 0;
  padding: 0.4rem;
  background: #fff;
  border-radius: 0.333333rem 0.333333rem 0 0;

  .container-title {
    display: block;
    font-size: 0.373333rem;
    color: #5c4f4e;
    font-weight: 700;
    line-height: 1.5;
  }

  .container-form {
    margin: 0.266667rem 0 0;
  }

  .input-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.133333rem 0.333333rem;
    margin: 0.2rem 0;
    min-height: 0.986667rem;
    background: #f7f8fa;
    border-radius: 0.2rem;
  }

  .input {
    display: block;
    padding: 0.133333rem 0;
    width: 100%;
    font-size: 0.48rem;
    color: #13100f;
    font-weight: 400;
    line-height: 0.72rem;
  }

  .btn-clear {
    flex-shrink: 0;
    margin: 0 0.266667rem;
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 1.333333rem;
    background: #c7c8ca;

    .van-icon {
      display: block;
      font-size: 0.32rem;
      color: #fff;
      font-weight: 700;
      line-height: 0.493333rem;
      -webkit-transform: scale(0.85);
      transform: scale(0.85);
      -webkit-transform-origin: 50%;
      transform-origin: 50%;
    }
  }

  .page-home-packages-footer {
    margin: 0.466667rem 0 0;
  }

  .btn {
    flex-shrink: 0;
    width: max-content;
    padding: 0.066667rem 0.266667rem;
    font-size: 0.373333rem;
    color: #13100f;
    font-weight: 700;
    line-height: 1.5;
    border: 0.04rem solid #e7e8ea;
    border-radius: 1.333333rem;
    background: #fff;
  }
}

.page-home-package-rule {
  padding: 0.266667rem 0 0;
  background: #fff;
  border-radius: 0 0 0.333333rem 0.333333rem;
}

.page-home-package-rule-title {
  margin: 0 0.4rem;
  padding: 0.4rem 0 0;
  border-top: 0.013333rem dashed #dadcdf;
  font-size: 0.373333rem;
  color: #7e7271;
  font-weight: 700;
  line-height: 1.5;
}

.page-home-package-rule-content {
  margin: 0.266667rem 0.4rem 0;
  padding: 0 0 0.533333rem;
  font-size: 0.346667rem;
  color: #5c4f4e;
  font-weight: 400;
  line-height: 1.5;

  p {
    margin: 0 0 0.066667rem;
  }
}

@keyframes page-home-package-item-on {
  0% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }

  90% {
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
  }

  to {
    -webkit-transform: scale(1.04);
    transform: scale(1.04);
  }
}

@keyframes page-home-package-item-bg-lists {
  99% {
    opacity: 0;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.img_code_layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 4;

  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .block {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    padding: 4vw;
    background-color: #fff;
    border-radius: 6px;
    transform: translate(-50%, -50%);

    .input-box {
      display: flex;
      align-items: center;
    }

    input,
    img {
      display: inline-block;
    }

    input {
      width: 52vw;
      padding: 2vw 0 2vw 4vw;
      font-size: 4vw;
      background: rgba(242, 242, 242, 1);
    }

    img {
      width: 20vw;
      height: 9vw;
    }

    button {
      width: 100%;
      padding: 2.5vw;
      margin-top: 3vw;
      margin-bottom: 2vw;
      font-size: 4vw;
      color: #fff;
      background: #2864fa;
      border-radius: 0.1rem;
    }
  }
}
</style>

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
    content: "";
    position: absolute;
    left: 0;
    top: -1.253333rem;
    width: 100%;
    height: 1.266667rem;
    background: url("../assets/images/redbag-head.svg") no-repeat top;
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
        content: "";
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
      content: "";
      position: absolute;
      left: 0;
      top: -0.56rem;
      width: 100%;
      height: 0.6rem;
      background: url("../assets/images/redbag-foot-befero.svg") no-repeat top;
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
