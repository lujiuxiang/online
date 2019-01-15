// pages/membership/membership.js
var requestData = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        my_img: "",
        realname: "",
        vip: "",
        why_list: [],
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        requestData.postData({
            url: "user/info",
            params: {
                openid: getApp().globalData.openid
            },
            do_success: function(res){
                console.log(res)
                that.setData({
                    why_list: res.data.help,
                    vip: res.data.vipstatus,
                    my_img: res.data.xximage,
                    realname: res.data.nickname,
                    list: [
                        {
                            id: "1",
                            level: "初级VIP会员",
                            money: res.data.vip1
                        },
                        {
                            id: "2",
                            level: "中级VIP会员",
                            money: res.data.vip2
                        },
                        {
                            id: "3",
                            level: "高级VIP会员",
                            money: res.data.vip3
                        }
                    ]
                })
            }
        })
    },
    go_pay(e){
        let money = e.currentTarget.dataset.money
        console.log(money)
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