// pages/classDetails/classDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        video_src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        videoimage: "block", //默认显示封面
        tab_image: "block",//默认显示封面播放按钮
        block: false,
        is_show: false, //是否显示底部预约按钮
        margin_bottom: 0,
        starttime: "2018-12-12",
        endtime: "2018-12-30",
        addr: "待定",
        sponsor: "大圣咖汇",
        phone: "13333333333",
        bm_time: "2018-12-12"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (options.is_show) {
            this.setData({
                block: true,
                margin_bottom: "110rpx",
            })
        } else {
            this.setData({
                block: false
            })
        }
    },
    //点击播放按钮，封面图片隐藏,播放视频
    bindplay: function (e) {
        this.setData({
            tab_image: "none"
        });
        this.videoCtx.play()
    },
    // 跳转查看更多评论 页面
    go_moreClassDetails(e){
        console.log(e.currentTarget.dataset.index)
        wx.navigateTo({
            url: '../moreClassDetails/moreClassDetails',
        })
    },
    // 跳转预约申请页面
    go_YYForm() {
        wx.navigateTo({
            url: '../YYForm/YYForm',
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
        return {
            title: '大圣课堂',
            desc: '我在大圣课堂学到了很多有用的知识，快来和我一起学习把~',
            imageUrl: "http://imyu.top/xcx/video_bg.png",
            path: '/pages/index/index',
            success: function(){
                wx.showToast({
                    title: '转发成功',
                })
            },
            fail: function(){
                wx.showToast({
                    title: '转发失败',
                    icon: "none"
                })
            }
        }
    }
})