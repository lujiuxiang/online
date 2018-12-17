import WxValidate from '../../utils/WxValidate.js'
let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        password: "",
        password_2: "",
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
            password: {
                required: true,
                minlength: 6,
                maxlength: 12,
            },
            password_2: {
                required: true,
                minlength: 6,
                maxlength: 12,
            },
        }
        const messages = {
            password: {
                required: '请填写新密码',
            },
            password_2: {
                required: '请填写确认密码',
            },
        }
        this.WxValidate = new WxValidate(rules, messages)
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let {
            password,
            password_2,
        } = e.detail.value;


        // 校验表单
        const params = e.detail.value
        //校验表单
        if (!this.WxValidate.checkForm(params)) {
            const error = this.WxValidate.errorList[0]
            this.showModal(error)
            return false
        }

        if(password !== password_2){
            wx.showModal({
                title: '提示',
                content: '两次输入不一致，请重新输入',
            })
            return
        }

        this.showModal({
            msg: '提交成功'
        })

        this.setData({
            password: password,
            password_2: password_2,
        })

        wx.navigateTo({
            url: '../login/login',
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