<template>
  <van-overlay :show="show" :z-index="2" @click="$emit('close-overlay')">
    <button class="btn-close"><van-icon name="cross" /></button>
    <div class="card">
      <div class="img-wrapper show">
        <i class="img-fake"></i>
        <img
          :src="poster"
          class="img"
        />
      </div>
    </div>
    <div class="footer">可长按或截图保存图片</div>
  </van-overlay>
</template>

<script>
export default {
  name: 'shareOverlay',
  data() {
    return {
      show: false,
      poster: ''
    }
  },

  created() {
    this.getPoster()
  },

  beforeMount() {
    this.show = true
  },

  methods: {
    async getPoster() {
      const {
        data: { url }
      } = await this.$api.getPoster()
      this.poster = url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.van-overlay {
  .btn-close {
    font-family: candy3;
    position: absolute;
    z-index: 3;
    right: 0;
    top: 0;
    font-size: 0.56rem;
    padding: 0.266667rem 0.533333rem;
    color: #beb4b2;
  }

  .card {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .img-wrapper {
      width: 90%;
      margin: 10vw auto 0;
      transform: translate3d(0, 1.6rem, 0);

      &.show {
        animation: inviteCardPop 0.5s cubic-bezier(0.59, -0.08, 0.48, 0.74)
          forwards;

        .img-fake {
          opacity: 0;
          transform: scale(1.05);
          transform-origin: 50%;
        }

        .img {
          position: relative;
          z-index: 2;
          display: block;
          margin: 0 auto;
          border-radius: 0.066667rem;
          opacity: 1;
        }

        @media screen and (max-height: 720px) {
          .img {
            height: 92%;
            height: calc(100vh - 2.66667rem);
            width: auto;
          }
        }

        @media screen and (min-height: 721px) {
          .img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .footer {
    position: absolute;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.333333rem;
    background: rgba(51, 51, 51, 0.95);
    text-align: center;
    line-height: 1.333333rem;
    color: hsla(0, 0%, 100%, 0.95);
    font-weight: 700;
    font-size: 0.426667rem;
    letter-spacing: 0.04rem;
  }
}

@keyframes inviteCardPop {
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
