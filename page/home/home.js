
var app = getApp()

Page({

  data: {
    motto: 'Hello World',
    userInfo: {},



  },
  myFun(){
    console.log('vue react')
  },
  onLoad: function () {

    var url = app.url("v1/page?channel=2&paramJson={\"region\":1,\"pageId\":1}")
    console.log(url)
    console.log(this.myFun())

    wx.request({
        url: url,
        data: {

        },
        header:{
            "Content-Type":"application/json"
        },
        success: function(res) {
            var data = res.data;
            console.log(data)
        }
    });
    
  },


  bindchange(e){


  }


})
