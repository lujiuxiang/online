// pages/membership/membership.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        my_img: "http://imyu.top/xcx/username.png",
        realname: "冯提莫",
        memberType: "初级会员",
        why_list: [
            {
                id: "1",
                text: "如何成为会员?",
                result: "12312312321"
            },
            {
                id: "2",
                text: "会员如何升级?",
                result: "1231231232112312312321123123123211231231232112312312321"
            },
            {
                id: "3",
                text: "会员政策",
                result: "12312312321"
            },
        ],
        list: [
            {
                id: "1",
                level: "初级VIP会员",
                money: "99"
            },
            {
                id: "2",
                level: "中级VIP会员",
                money: "999"
            },
            {
                id: "3",
                level: "高级VIP会员",
                money: "9999"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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