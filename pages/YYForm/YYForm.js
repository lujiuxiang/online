// pages/YYForm/YYForm.js
import WxValidate from '../../utils/WxValidate.js'
let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        title_logo: "http://imyu.top/xcx/yy_form_logo.png",

        user: "",
        sex: "",
        age: "",
        phone: "",
        school: "",
        moreinfo: ""
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
            user: {
                required: true,
                minlength: 2
            },
            age: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                tel: true
            },
            school: {
                required: true
            },
        }
        const messages = {
            user: {
                required: '请填写姓名',
                minlength: '请输入正确的名称'
            },
            age: {
                required: '请填写年龄',
                minlength: '请输入正确的年龄'
            },
            phone: {
                required: '请填写手机号',
                tel: '请填写正确的手机号'
            },
            school: {
                required: '请填写毕业院校'
            },
        }
        this.WxValidate = new WxValidate(rules, messages)
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let {
            user,
            sex,
            age,
            phone,
            school,
            moreinfo
        } = e.detail.value;


        // 校验表单
        const params = e.detail.value
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
            user: user,
            sex: sex,
            age: age,
            phone: phone,
            school: school,
            moreinfo: moreinfo
        })
    },
    formReset: function () {
        console.log('form发生了reset事件')
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