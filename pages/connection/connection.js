// pages/membership/membership.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myMark: "0",
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
        ],
        animation: {},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 显示 / 隐藏弹窗
    showPop(){
        // 用that取代this，防止不必要的情况发生
        var that = this;
        if(this.data.isBlock !== true){
            // 创建一个动画实例
            var animation = wx.createAnimation({
                // 动画持续时间
                duration: 300,
                // 定义动画效果，当前是匀速
                timingFunction: 'linear'
            })
            // 将该变量赋值给当前动画
            that.animation = animation
            // 先在X轴偏移，然后用step()完成一个动画 负数从左往右滑动 正数从右往左滑动
            animation.translateX(-500).step()
            // 用setData改变当前动画
            that.setData({
                // 通过export()方法导出数据
                animationData: animation.export(),
                // 改变view里面的Wx：if
                isBlock: true
            })
            // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
            setTimeout(function () {
                animation.translateX(0).step()
                that.setData({
                    animationData: animation.export()
                })
            }, 100)
        }else{
            var animation = wx.createAnimation({
                duration: 300,
                timingFunction: 'linear'
            })
            that.animation = animation
            animation.translateX(500).step()
            that.setData({
                animationData: animation.export()
            })
            setTimeout(function () {
                animation.translateX(0).step()
                that.setData({
                    animationData: animation.export(),
                    isBlock: false
                })
            }, 200)
        }
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