// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        login: null,
        title_img: "http://imyu.top/xcx/username.png",
        username: "冯提莫",
        list: [
            {
                icon: "iconfont icon-renwu-tuandui",
                text: "我的会员",
                color: "#ff6600",
                url: "../myMember/myMember"
            },
            {
                icon: "iconfont icon-yuyuezhongxin",
                text: "我的预约",
                color: "#4e8cee",
                url: "../myYY/myYY"
            },
            {
                icon: "iconfont icon-ai-connection",
                text: "我的人脉",
                color: "#f60",
                url: "../connection/connection"
            },
            {
                icon: "iconfont icon-jiaoyichenggong",
                text: "交易记录",
                color: "#59b549",
                url: "../myTransaction/myTransaction"
            },
            {
                icon: "iconfont icon-kefu",
                text: "联系我们",
                color: "#f66060",
                url: ""
            },
        ]
    },

    // 联系我们
    goSecondLevel(e){
        let url = e.currentTarget.dataset.url;
        let id = e.currentTarget.dataset.id;
        let that = this;
        if(!url){
            wx.makePhoneCall({
                phoneNumber: '17519404549', //此号码并非真实电话号码，仅用于测试
                success: function () {
                    console.log("拨打电话成功！")
                },
                fail: function () {
                    console.log("拨打电话失败！")
                }
            })
            return
        }
        wx.navigateTo({
            url: url,
        })
    },
    // 退出登录
    loginout(){
        let that = this;
        // 退出登录状态
        wx.showModal({
            title: '提示',
            content: '确定要退出吗？',
            success: function (res) {
                if (res.confirm) {
                    return new Promise((resolve, rej) => {
                        wx.clearStorageSync("logincode")
                        resolve(res)
                    }).then(res => {
                        that.setData({
                            login: wx.getStorageSync("logincode")
                        })
                    }).catch(rej => {
                        console.log(rej)
                    })
                }
            }
        })
    },
    // 跳转我的信息
    goMyInfo(){
        wx.navigateTo({
            url: '../myInfo/myInfo',
        })
    },
    // 跳转 登录页
    go_login(){
        wx.navigateTo({
            url: '../login/login',
        })
    },
    // 跳转 注册页
    go_register(){
        wx.navigateTo({
            url: '../register/register',
        })
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
        // 检测进入页面时 是否是登陆状态
        let logincode = wx.getStorageSync("logincode")
        this.setData({
            login: logincode
        })
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
        return {
            title: '大圣课堂',
            desc: '我在大圣课堂学到了很多有用的知识，快来和我一起学习把~',
            imageUrl: "http://imyu.top/xcx/video_bg.png",
            path: '/pages/index/index',
            success: function () {
                wx.showToast({
                    title: '转发成功',
                })
            },
            fail: function () {
                wx.showToast({
                    title: '转发失败',
                    icon: "none"
                })
            }
        }
    }
})