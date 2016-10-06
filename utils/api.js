'use strict';

// var HOST_URI            = 'http://api.c.wowdsgn.com:10999/v1/';
var HOST_URI            = 'https://mobile-api.wowdsgn.com/v1/';

function obj2uri (obj) {
    return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    }).join('&');
}

function URLGet( url , obj ){
    let paramJson   = JSON.stringify(obj)

    let obj_tmp     = {
        'channel': 2 ,
        'paramJson' :paramJson
    };

    return HOST_URI + url + '?' + obj2uri(obj_tmp)
}


function request( url , params_obj , success_fun , fail_fun = null , loading_before_fun = null , loading_complete_fun = null ){

    let paramJson   = JSON.stringify(params_obj)
    let url_tmp     = URLGet(url,params_obj)

    if ( loading_complete_fun ) loading_before_fun()

    wx.request({
        url: url_tmp,
        data: {
             'channel': 2 ,
             'paramJson' :paramJson
        },
        method:"GET",
        header:{
            "Content-Type":"application/json"
        },
        success: function(res) {
            if (res['statusCode'] == 200 && res['data']['resCode'] == 0){
                var data = res['data']['data'];

                console.dir(data);

                if ( success_fun ) success_fun(data)
            }else{
                console.log("--->>>数据出错",res)
                if ( fail_fun ) fail_fun(res)
            }
        },
        fail:function(res){
            console.log("--->>>网络出错",res)
            if ( fail_fun ) fail_fun(res)
        },
        complete:function(res){
            if ( loading_complete_fun ) loading_complete_fun(res)
        },

    });

}



module.exports = {
    // 获取首页列表数据
    home: function (callback) {
        let url         = "page"
        let params      = {"pageId": 1 , "region": 1 }
        return request(url,params,callback)
    },
    // 获取内容页数据
    getTopicByID: function (id, obj) {
        return HOST_URI + GET_TOPIC_BY_ID + id + '?' + obj2uri(obj);
    }
};



