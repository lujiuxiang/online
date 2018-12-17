// pages/teachersList/teachersList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                id: "1",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "2",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "3",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "4",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "5",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "6",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "7",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "8",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "9",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "10",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
            {
                id: "11",
                src: "http://imyu.top/xcx/teacher2.png",
                name: "韩博艺"
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 跳转老师详情页
    goTeachersDetails(e){
        wx.navigateTo({
            url: '../teachersDetails/teachersDetails?id='+e.currentTarget.dataset.id,
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