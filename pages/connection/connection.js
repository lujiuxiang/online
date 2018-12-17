// pages/membership/membership.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myMark: "666",
        cj_mark: "20",
        zj_mark: "40",
        gj_mark: "60",
        isBlock: false,

        list: [
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                time: "2018-12-20 22:22"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                time: "2018-12-20 22:22"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                time: "2018-12-20 22:22"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                time: "2018-12-20 22:22"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                time: "2018-12-20 22:22"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                time: "2018-12-20 22:22"
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 显示 / 隐藏弹窗
    showPop(){
        this.setData({
            isBlock: !this.data.isBlock
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