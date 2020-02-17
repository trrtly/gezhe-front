<template>
  <div id="app">
    <router-view v-if="showView" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showView: false
    }
  },

  beforeMount() {
    this.initial()
  },

  methods: {
    initial() {
      if (
        localStorage.getItem('token') === 'undefined' ||
        localStorage.getItem('expiresAt') === 'undefined' ||
        !localStorage.getItem('token')
      ) {
        this.noTokenProcess()
        return
      }

      this.defaultProcess()

      if (new Date().getTime() / 1000 > localStorage.getItem('expiresAt')) {
        this.noTokenProcess()
      } else {
        this.defaultProcess()
      }
    },

    async noTokenProcess() {
      if (this.$route.query.code) {
        localStorage.removeItem('token')
        const res = await this.$api.getToken({
          code: this.$route.query.code
        })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('expiresAt', res.data.expiresAt)
        this.defaultProcess()
      } else { // 微信验证，测试环境先关闭
        let platform = JSON.parse(localStorage.getItem('platform'))
        let redirectUri = encodeURIComponent(window.location.href)
        let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${platform.appid}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
        location.href = url
      }
    },

    defaultProcess() {
      this.getUserInfo()
      this.showView = true
    },

    async getUserInfo() {
      const res = await this.$api.getUserInfo()

      this.$store.commit('setUserInfo', res.data)
    }
  }
}
</script>
