

App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    baseUrl:'https://mobile-api.wowdsgn.com/'
  },
  url:function(url_last){
    var res = this.globalData.baseUrl + url_last
    console.log("url is ",res)
    return res
  }
})
