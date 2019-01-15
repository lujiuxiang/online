// pages/login/login.js
var requestData = require("../../utils/util.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title_img: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            title_img: getApp().globalData.userInfo.avatarUrl
        })
    },

    // 登录
    formSubmit: function (e) {
        let that = this
        requestData.postData({
            url: "user/login",
            params: {
                phone: e.detail.value.user,
                pass: e.detail.value.password,
            },
            do_success: function(res){
                if(res.data.code != -1){
                    getApp().globalData.isLogin = res.data.code;
                    wx.setStorageSync("isLogin", res.data.code)
                    wx.showToast({
                        title: res.data.msg,
                    })
                    setTimeout(function(){
                        wx.switchTab({
                            url: '../mine/mine',
                            success: function(){
                                var page = getCurrentPages().pop();
                                if(!page)return;
                                page.onLoad()
                            }
                        })
                    },500)
                }else{
                    wx.showToast({
                        title: res.data.msg,
                        icon: "none"
                    })
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