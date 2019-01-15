// pages/fiflterTeacher/fiflterTeacher.js
var requestData = require("../../utils/util.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 课程列表
        class_list: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        var that = this
        // 请求首页banner
        requestData.postData({
            url: "show/wxclass_search",
            params: {
                teacher: options.teacher,
                status: options.status
            },
            do_success: function (res) {
                that.setData({
                    class_list: res.data
                })
            }
        })
    },
    // 跳转 老师详情页
    goTeacherDetails(e){
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../teachersDetails/teachersDetails?id='+id,
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