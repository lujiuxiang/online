import WxValidate from '../../utils/WxValidate.js'
let app = getApp();

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
        referrer: ""
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
                maxlength: 12
            },
            age: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                tel: true
            },
            idcard: {
                required: true,
                idcard: true
            },
            referrer: {
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
                maxlength: "确认密码最多12个字符"
            },
            age: {
                required: '请填写年龄',
                minlength: '请输入正确的年龄'
            },
            phone: {
                required: '请填写手机号',
                tel: '请填写正确的手机号'
            },
            idcard: {
                required: '请填写身份证号',
                idcard: "请输入正确的身份证号"
            },
            referrer: {
                required: '请填写推荐人',
                minlength: '请输入正确的名称'
            },
        }
        this.WxValidate = new WxValidate(rules, messages);


        // 自定义验证规则 密码
        this.WxValidate.addMethod('pass', (value, param) => {
            console.log(value)
            return this.WxValidate.optional(value) || (value.length >= 6 && value.length <= 12);
        }, '密码长度为6-12个字符')
        // 自定义验证规则  确认密码和密码是否一致
        this.WxValidate.addMethod('passAgain', (value, param) => {
            console.log(value,param)
            return this.WxValidate.optional(value);
        }, '两次输入的密码不一致')
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let {
            nickname,
            user,
            sex,
            pass,
            passAgain,
            age,
            phone,
            idcard,
            referrer
        } = e.detail.value;
        // 校验表单
        const params = e.detail.value

        // console.log(params)
        //校验表单
        if (!this.WxValidate.checkForm(params)) {
            const error = this.WxValidate.errorList[0]
            this.showModal(error)
            return false
        }

        this.showModal({
            msg: '提交成功'
        })

        this.setData({
            nickname: nickname,
            user: user,
            sex: sex,
            pass: pass,
            passAgain: passAgain,
            age: age,
            phone: phone,
            idCard: idcard,
            referrer: referrer
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initValidate()
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