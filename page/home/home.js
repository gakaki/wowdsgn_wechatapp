var app     = getApp()
var Api     = require('../../utils/api.js');
var util    = require('../../utils/util.js');

Page({

  data: {
    data:[]

  },
  myFun(){
    console.log('vue react')
  },
  onLoad: function () {

    console.log(this.myFun())

    Api.home( res => {
      console.log(res)
      //更新数据
      this.setData({
          data:res.modules
      });
    });


  },


  bindchange(e){


  }


})
