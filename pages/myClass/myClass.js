// pages/myClass/myClass.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 课程列表
        class_list: [
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶 25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 跳转课程详情页面
    goClassDetails(e) {
        console.log(e.currentTarget.dataset.index)
        wx.navigateTo({
            url: '../publicClassDel/publicClassDel',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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