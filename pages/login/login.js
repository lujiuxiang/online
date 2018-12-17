// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title_img: "http://imyu.top/xcx/username.png",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 登录
    formSubmit: function (e) {
        let that = this
        console.log('form发生了submit事件，携带数据为：', e.detail.value);

        // this.setData({
        //     login: 1
        // })
        wx.login({
            success(res) {
                if (res.code) {
                    // 发起网络请求
                    // wx.request({
                    //     url: 'https://test.com/onLogin',
                    //     data: {
                    //         code: res.code
                    //     }
                    // })
                    wx.setStorageSync("logincode", res.code)

                    wx.switchTab({
                        url: "../mine/mine"
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
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