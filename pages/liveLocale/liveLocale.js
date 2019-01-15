// pages/liveLocale/liveLocale.js
var requestData = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        video_src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        videoimage: "block", //默认显示封面
        tab_image: "block",//默认显示封面播放按钮
        // 预约列表
        list: [
            {
                title: "大圣咖汇",
                type: "公开课",
                teacher: "韩博艺",
                time: "2018-12-20 8:00 -- 12:30:23",
                addr: "长春市二道区某某路"
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        requestData.postData({
            url:"",
            do_success: function(){

            }
        })
    },
    //点击播放按钮，封面图片隐藏,播放视频
    bindplay: function (e) {
        this.setData({
            tab_image: "none"
        });
        this.videoCtx.play()
    },

    // 跳转到详情页
    goClassDetails(){
        wx.navigateTo({
            url: '../classDetails/classDetails?is_show=show',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.videoCtx = wx.createVideoContext('myVideo')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})