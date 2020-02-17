<template>
  <div id="page-coinRecord">
    <div class="page-coinRecord-header">
      <div class="page-coinRecord-assets">
        <div class="title">当前剩余粮票</div>
        <div class="content">
          <p class="coin">
            <b class="num udc-bold">{{ userInfo.score }}</b>
            <span class="unit">张</span>
          </p>
        </div>
        <button
          class="btn com-btn-small btn-go-exchange"
          @click="$router.push({ path: '/charge' })"
        >
          点击充值粮票
        </button>
      </div>
    </div>

    <section id="page-coinRecord-list" class="com-record-list">
      <ul class="list">
        <li v-for="(item, index) in recordList" :key="index" class="item">
          <div class="left">
            <p class="info">
              <b class="name">{{ item.title }}</b>
              <time class="time">{{
                timestampToTime(item.createdAt * 1000)
              }}</time>
            </p>
          </div>
          <div class="right">
            <b class="num udc-bold">{{ item.score }}</b>
          </div>
        </li>
      </ul>

      <button class="get_more" v-if="showGetmore" @click="getList">
        点击加载更多
      </button>
      <p class="not-record" v-else>暂无更多记录</p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { timestampToTime } from '@/utils/index.js'

export default {
  data() {
    return {
      page: 1,
      limit: 20,
      recordList: [],
      showGetmore: true
    }
  },

  computed: {
    ...mapGetters(['userInfo'])
  },

  mounted() {
    this.getList()
  },

  methods: {
    timestampToTime,
    async getList() {
      const res = await this.$api.scoreRecords({
        page: this.page,
        limit: this.limit
      })

      if (res.data && res.data.length) {
        this.recordList = [...this.recordList, ...res.data]
        this.page = this.page + 1
      } else {
        this.showGetmore = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page-coinRecord-header {
  background: #ecedee;
  padding: 0 0 1.333333rem;
}

.page-coinRecord-assets {
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

#page-coinRecord-list {
  margin: -0.533333rem 0 0;
  padding: 0.266667rem 0 0.8rem;
  border-radius: 0.466667rem;
  background: #f7f8fa;
  min-height: calc(100vh - 5.33333rem);
}

.com-record-list {
  .not-record {
    font-size: 0.32rem;
    color: #8c8f95;
    font-weight: 400;
    line-height: 1.333333rem;
    text-align: center;
  }

  .item {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    margin: 0 0.533333rem;
    padding: 0.333333rem 0;
    border-bottom: 1px solid #eaeaea;

    &:before {
      transform: scaleY(0.5);
    }

    .left {
      width: 100%;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
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

    .right {
      flex-shrink: 0;
      text-align: right;
    }

    .num {
      height: 0.56rem;
      font-size: 0.4rem;
      color: #2052e2;
      font-weight: 500;
      line-height: 0.56rem;
    }
  }
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
