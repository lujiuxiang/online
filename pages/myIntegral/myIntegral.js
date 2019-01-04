// pages/myIntegral/myIntegral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myMark: "10",
    cj_mark: "20",
    zj_mark: "40",
    gj_mark: "60",

    answer: [
      {
        ask: "怎么获取积分？",
        answer: "分享好友，好友进小程序观看视频时可获得积分奖励"
      },
      {
        ask: "怎么样兑换课程？",
        answer: "在有积分的情况下点击公开课就可以浏览观看"
      },
      {
        ask: "兑换的课程是否可以重复观看？",
        answer: "可以的"
      },
      {
        ask: "兑换的课程是不是跟付费的一样？",
        answer: "是一样的"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 跳转到课程页面
  goClass(){
    wx.switchTab({
      url: '../class/class',
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