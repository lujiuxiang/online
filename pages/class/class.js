//index.js
var requestData = require("../../utils/util.js")
//获取应用实例
Page({
    data: {
        // 首页顶部导航
        top_nav: [
            {
                title: "初级课程"
            },
            {
                title: "中级课程"
            },
            {
                title: "高级课程"
            }
        ],
        isSelect: 0,
        // 课程列表
        list: []
    },
    onLoad: function () {
        var that = this
        // 请求首页banner
        requestData.postData({
            url: "show/wxclass",
            do_success: function (res) {
                console.log(res)
                var arr = []
                arr.push(res.data.cj)
                arr.push(res.data.zj)
                arr.push(res.data.gj)
                that.setData({
                    list: arr
                })
            }
        })
    },

    // 切换tab导航
    changeTab: function (e) {
        let isSelect = e.currentTarget.dataset.type;
        this.setData({
            isSelect: isSelect
        })
    },
    // 下面滑动时切换tab导航
    swiperChange: function (e) {
        let isSelect = e.detail.current
        console.log(e);
        this.setData({
            isSelect: isSelect
        })
    },
    // 跳转课程详情页
    goClassDetails(e){
        wx.navigateTo({
            url: '../publicClassDel/publicClassDel?id='+e.currentTarget.dataset.id,
        })
    }
})
