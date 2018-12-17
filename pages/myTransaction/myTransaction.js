// pages/myTransaction/myTransaction.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                id: "1",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "2",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "3",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "4",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "5",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "6",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "7",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "8",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            {
                id: "9",
                type:"课程类别",
                time:"2018-12-12 15:00",
                money:"-99",
            },
            
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 跳转交易详情
    goDetails(e){
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: '../myTransactionDel/myTransactionDel',
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