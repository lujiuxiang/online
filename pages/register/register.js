import WxValidate from '../../utils/WxValidate.js'
let app = getApp();
let requestData = require("../../utils/util.js")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        nickname: "",
        user: "",
        sex: "",
        pass: "",
        passAgain: "",
        age: "",
        phone: "",
        idCard: "",
        parent: ""
    },

    //报错 
    showModal(error) {
        wx.showModal({
            content: error.msg,
            showCancel: false,
        })
    },
    //验证函数
    initValidate() {
        const rules = {
            nickname: {
                required: true,
                minlength: 2,
                maxlength: 10
            },
            user: {
                required: true,
                minlength: 2
            },

            pass: {
                required: true,
                minlength: 6,
                maxlength: 12
            },
            passAgain: {
                required: true,
                minlength: 6,
                maxlength: 12,
                equalTo: 'pass',
            },
            age: {
                required: true,
                min: 18,
                max: 60
            },
            phone: {
                required: true,
                tel: true
            },
            idcard: {
                required: true,
                idcard: true
            },
            parent: {
                required: true,
                minlength: 2
            },
        }

        const messages = {
            nickname: {
                required: '请填写昵称',
                minlength: "昵称最少2个字符",
                maxlength: "昵称最多10个字符"
            },
            user: {
                required: '请填写姓名',
                minlength: '请输入正确的名称'
            },
            pass: {
                required: '请填写密码',
                minlength: "密码最少6个字符",
                maxlength: "密码最多12个字符"
            },
            passAgain: {
                required: '请填写确认密码',
                minlength: "确认密码最少6个字符",
                maxlength: "确认密码最多12个字符",
                equalTo: '确认密码和密码保持一致',
            },
            age: {
                required: '请填写年龄',
                min: '最小18岁',
                max:"最大60岁"
            },
            phone: {
                required: '请填写手机号',
                tel: '请填写正确的手机号'
            },
            idcard: {
                required: '请填写身份证号',
                idcard: "请输入正确的身份证号"
            },
            parent: {
                required: '请填写推荐人',
                minlength: '请输入正确的名称'
            },
        }
        this.WxValidate = new WxValidate(rules, messages);
    },
    formSubmit: function(e) {
        let that = this
        // console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let {
            nickname,
            user,
            sex,
            pass,
            passAgain,
            age,
            phone,
            idcard,
            parent
        } = e.detail.value;
        // 校验表单
        const params = e.detail.value

        //校验表单
        if (!this.WxValidate.checkForm(params)) {
            const error = this.WxValidate.errorList[0]
            this.showModal(error)
            return false
        }
        // 注册提交
        requestData.postData({
            url: "user/member_bd",
            params: {
                openid: getApp().globalData.openid,
                nickname: nickname,
                user: user,
                sex: sex,
                pass: pass,
                age: age,
                phone: phone,
                idcard: idcard,
                parent: parent
            },
            do_success: function (res) {
                console.log(res)
                if(res.data.code != -1){
                    wx.showModal({
                        title: '提示',
                        content: res.data.msg,
                        confirmText: "去登录",
                        success: function (res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '../login/login',
                                })
                            } else if (res.cancel) {
                                // console.log('用户点击取消')
                            }
                        }
                    })
                }else{
                    wx.showModal({
                        title: '提示',
                        content: res.data.msg,
                        showCancel: true
                    })
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this
        this.initValidate()

        requestData.postData({
            url: "user/info",
            params: {
                openid: getApp().globalData.openid
            },
            do_success: function(res){
                console.log(res)
                that.setData({
                    nickname: res.data.nickname,
                    sex: res.data.sex
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})