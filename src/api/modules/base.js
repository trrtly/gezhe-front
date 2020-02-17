export default [
  {
    // 获取平台基础信息
    name: 'getPlatformInfo',
    path: '/api/v1/platform',
    method: 'get'
  },
  {
    // 生成token
    name: 'getToken',
    path: '/api/v1/token',
    method: 'post'
  },
  {
    // 获取红包列表
    name: 'redPacks',
    path: '/api/v1/redpacks',
    method: 'get'
  },
  {
    // 获取轮播列表
    name: 'Banners',
    path: '/api/v1/banners',
    method: 'get'
  },
  {
    // 获取公告列表
    name: 'Announcements',
    path: '/api/v1/announcements',
    method: 'get'
  },
  {
    // 获取佣金记录
    name: 'Records',
    path: '/api/v1/cms/records',
    method: 'get'
  },
  {
    // 获取积分记录
    name: 'scoreRecords',
    path: '/api/v1/score/records',
    method: 'get'
  },
  {
    // 获取图形验证码
    name: 'getCaptcha',
    path: '/api/v1/redpacks/captcha',
    method: 'get'
  },
  {
    // 发送短信
    name: 'sendSms',
    path: '/api/v1/redpacks/sendSms',
    method: 'post'
  },
  {
    // 短信验证码登录
    name: 'loginBySms',
    path: '/api/v1/redpacks/loginBySms',
    method: 'post'
  },
  {
    // 领取红包
    name: 'getredPacks',
    path: '/api/v1/redpacks',
    method: 'post'
  },
  {
    // 获取积分列表
    name: 'scores',
    path: '/api/v1/scores',
    method: 'get'
  },
  {
    // 获取红包领取记录列表
    name: 'redpackLogs',
    path: '/api/v1/redpackLogs',
    method: 'get'
  },
  {
    // 获取邀请好友列表
    name: 'getInviteRecords',
    path: '/api/v1/invite/records',
    method: 'get'
  },
  {
    // 获取邀请海报
    name: 'getPoster',
    path: '/api/v1/user/poster',
    method: 'get'
  },
  {
    // 签到
    name: 'signin',
    path: '/api/v1/user/signin',
    method: 'post'
  }
]
