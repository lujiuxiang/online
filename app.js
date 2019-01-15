//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var that = this
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    getLogin() {
        var that = this;
        return new Promise(function (resolve, reject) {
            // 登录
            wx.login({
                success: res => {
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    // 获取oppenid
                    wx.request({
                        // 这里的 url 是微信官方提供的可以在小程序中直接通过 code 来获取 openid 的
                        // 根据解释，补上自己的 APPID 和 SECRET
                        url: 'http://wh.imyu.top/wxapi/user/openid',
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            code: res.code
                        },
                        method: 'POST',
                        success: function (res) {
                            if (res.data != '') {
                                that.globalData.openid = res.data.openid;
                            }
                            resolve(res);
                        }
                    });

                }
            })
        });
    },
    globalData: {
        userInfo: null,
        openid: "",
        isLogin: false
    }
})