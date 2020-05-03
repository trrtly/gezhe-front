<template>
  <div id="page-inviteRecord">
    <div class="page-inviteRecord-header">
      <div class="page-inviteRecord-assets">
        <div class="title">好友数</div>
        <div class="content">
          <p class="coin">
            <b class="num udc-bold">{{ recordList.length }}</b>
            <span class="unit">人</span>
          </p>
        </div>
        <button
          class="btn com-btn-small btn-go-exchange"
          @click="showShare = true"
        >
          邀请好友
        </button>
      </div>
    </div>
    <section id="page-inviteRecord-list" class="com-record-list">
      <ul class="list">
        <li class="item" v-for="(item, index) in recordList" :key="index">
          <div class="left">
            <figure class="avatar com-img-wrapper">
              <img :src="item.headimgurl" class="img" />
            </figure>
            <p class="info">
              <b class="name"
                ><b class="bold">{{ item.nickname }}</b
                >接受了您的邀请</b
              >
              <time class="time">{{ item.createdAt }}</time>
            </p>
          </div>
          <div class="right"><b class="num din">5</b></div>
        </li>
      </ul>

      <button class="get_more" v-if="page <= total" @click="getList">点击加载更多</button>
      <p class="not-record" v-else>暂无更多记录</p>
      <div class="com-record-list-btn-wrapper"><!----></div>
    </section>

    <share-overlay v-if="showShare" @close-overlay="showShare = false" />
  </div>
</template>

<script>
import shareOverlay from '@/components/shareOverlay.vue'

export default {
  components: { shareOverlay },
  data() {
    return {
      showShare: false,
      page: 1,
      limit: 20,
      total: 0,
      recordList: []
    }
  },

  beforeMount() {
    this.getList()
  },

  methods: {
    async getList() {
      let { code, data, msg } = await this.$api.getInviteRecords({
        page: this.page,
        limit: this.limit
      })

      this.recordList = data.list || []
      this.page = this.page + 1
      this.total = Math.ceil(data.totalInviteNum / this.limit)
    }
  }
}
</script>

<style lang="less" scoped>
#page-inviteRecord {
  &:before {
    content: '';
    position: fixed;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      -180deg,
      #ecedee,
      #ecedee 50%,
      #f7f8fa 0,
      #f7f8fa
    );
  }
}

.page-inviteRecord-header {
  background: #ecedee;
  padding: 0 0 1.333333rem;
}

.page-inviteRecord-assets {
  padding: 0.666667rem 0 0;
  text-align: center;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.426667rem;
    color: #5c4f4e;
    font-weight: 400;
    line-height: 1.5;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .coin {
    margin: -0.133333rem 0 0;
    display: flex;
    justify-content: center;
    align-items: baseline;

    .unit {
      margin: 0 0 0 0.133333rem;
      transform: translate3d(0, -0.053333rem, 0);
      font-size: 0.64rem;
      font-weight: 700;
      line-height: 1.5;
    }
  }

  .num {
    margin: 0 0 0 0.2rem;
    font-size: 1.36rem;
    color: #272121;
    font-weight: 400;
    line-height: 1.5;
  }

  .btn {
    margin: 0.333333rem auto 0;
    padding: 0.24rem 0.533333rem;
    font-size: 0.346667rem;
  }
}

#page-inviteRecord-list {
  margin: -0.533333rem 0 0;
  padding: 0.266667rem 0 0.8rem;
  border-radius: 0.466667rem;
  background: #f7f8fa;
  min-height: calc(100vh - 5.33333rem);
}

.com-record-list {
  .item {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 0.533333rem;
    padding: 0.333333rem 0;
    border-bottom: 1px solid #eaeaea;

    .left {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .avatar {
      flex-shrink: 0;
      width: 0.96rem;
      height: 0.96rem;
      border-radius: 0.96rem;
      margin: 0 0.266667rem 0 0;
    }

    .name {
      display: block;
      height: 0.56rem;
      font-size: 0.4rem;
      color: #272121;
      font-weight: 700;
      line-height: 1.5;
      overflow: hidden;
      word-wrap: break-word;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .time {
      margin: 0.066667rem 0 0;
      height: 0.48rem;
      font-size: 0.32rem;
      color: #beb4b2;
      font-weight: 400;
      line-height: 0.48rem;
    }

    .num {
      height: 0.56rem;
      font-size: 0.4rem;
      color: #2052e2;
      font-weight: 400;
      line-height: 0.56rem;
    }

    .right {
      flex-shrink: 0;
      text-align: right;
    }

    .num {
      height: 0.56rem;
      font-size: 0.4rem;
      color: #2052e2;
      font-weight: 600;
      line-height: 0.56rem;
    }
  }

  .not-record {
    font-size: 0.32rem;
    color: #8c8f95;
    font-weight: 400;
    line-height: 1.333333rem;
    text-align: center;
  }
}

.com-img-wrapper .img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}

.get_more {
  display: block;
  padding: 1vw 2vw;
  margin: 2vw auto;
  font-size: 3.5vw;
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(
    267deg,
    rgba(41, 85, 255, 1) 0%,
    rgba(39, 134, 255, 1) 100%
  );
  border-radius: 0.9vw;
}
</style>
