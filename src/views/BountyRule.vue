<template>
  <!-- 该页面为从接口获取的富文本内容 -->
  <div id="page-bounty-rule">
    <div class="content">
      <p
        style='text-align:center;font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px;'
        align="center"
      >
        <span style="font-size: 20px;"
          ><strong><br /></strong
        ></span>
      </p>
      <p
        style='text-align:center;font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px;'
        align="center"
      >
        <span style="font-size: 20px;"><strong>赏金规则</strong></span>
      </p>
      <p
        style='font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px;'
      >
        <strong><br /></strong>
      </p>
      <p
        style='font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px;'
      >
        <strong>① 赏金获取</strong>
      </p>
      <p
        style='font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px;'
      >
        <span style="caret-color: red;"
          >通过你的专属二维码关注公众号「{{ platform.name }}」，即属于你邀请的用户，此<span
            style='color: #333333; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; font-size: 14px;              caret-color: #FF0000;    display: inline !important; '
            >邀请关系永久绑定。绑定后</span
          >你邀请的用户每一笔充值你都可以获得赏金收入。</span
        >
      </p>
      <p
        style='font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px;'
      >
        <br />
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; margin-left: 15px; margin-right: 15px;'
      >
        <strong>② 赏金比例</strong>
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; margin-left: 15px; margin-right: 15px;'
      >
        赏金比例为20%。（如你邀请了小明，小明充值了10元，那么你可以获得2元的赏金收入，即10元*20%）
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif;'
      >
        <br />
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; margin-left: 15px; margin-right: 15px;'
      >
        <strong>③ 赏金提现</strong>
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; margin-left: 15px; margin-right: 15px;'
      >
        1.单次提现金额为：2~100元
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; margin-left: 15px; margin-right: 15px;'
      >
        <span style="caret-color: red;">2.每人每天最多可提现次数：3次</span>
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif; margin-left: 15px; margin-right: 15px;'
      >
        <span style="caret-color: red;">3.每笔提现审核周期：1~3个工作日</span>
      </p>
      <p
        style='padding: initial; line-height: 32px; color: rgb(51, 51, 51); font-size: 14px; margin-left: 15px; margin-right: 15px; font-family: "PingFang SC", "Microsoft YaHei", "\\5FAE软雅黑", Heiti, "\\9ED1体", sans-serif;'
      >
        <br />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      platform: {}
    }
  },

  mounted() {
    this.platform = JSON.parse(localStorage.getItem('platform'))
  }
}
</script>
