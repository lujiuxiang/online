// pages/myInfo/myInfo.js
let requestData = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: "",
        realname: "",
        idCard: "",
        phone: "",
        ID: "",
        tj: "",
        actionSheetHidden: true,
        actionSheetItems: [
            { bindtap: 'chooseImage', txt: '更换头像' },
            { bindtap: 'viewImage', txt: '查看图片' }
        ],
    },

    // 弹出底部选择图片框
    actionSheetTap: function () {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },
    // 弹出底部选择图片框
    actionSheetbindchange: function () {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },

    // 更改头像
    chooseImage(e) {
        let that = this;
        let images = that.data.images;
        // 隐藏底部弹出框
        that.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                
                console.log(tempFilePaths[0])
                that.setData({
                    images: tempFilePaths[0]
                })

                // util.uploadFile('https://...', tempFilePaths, 'imgFile', {}, function (res) {
                //     console.log(res);
                //     if (null != res) {
                //         that.setData({
                                // images: res
                            // })
                //     } else {
                //         // 显示消息提示框
                //         wx.showToast({
                //             title: '上传失败',
                //             icon: 'error',
                //             duration: 2000
                //         })
                //     }
                // });


                // wx.uploadFile({
                //     url: 'https://...',      //此处换上你的接口地址
                //     filePath: tempFilePaths[0],
                //     name: 'img',
                //     header: {
                //         "Content-Type": "multipart/form-data",
                //         'accept': 'application/json',
                //         'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略
                //     },
                //     formData: {
                //         'user': 'test'  //其他额外的formdata，可不写
                //     },
                //     success: function (res) {
                //         var data = res.data;
                //         console.log('data');
                //     },
                //     fail: function (res) {
                //         console.log('fail');

                //     },
                // })
            }
        })

    },
    // 查看头像
    viewImage: function () {
        var that = this;
        // 隐藏底部弹出框
        that.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
        wx.previewImage({
            current: '', // 当前显示图片的http链接
            urls: [that.data.images] // 需要预览的图片http链接列表
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        requestData.postData({
            url: "user/info",
            params:{
                openid: getApp().globalData.openid
            },
            do_success: function(res){
                that.setData({
                    images: res.data.xximage,
                    realname: res.data.nickname,
                    idCard: res.data.idcard,
                    phone: res.data.phone,
                    ID: res.data.id,
                    tj: res.data.parent,
                })
            }
        })
    },
    // 更改姓名
    changeRealName(e){
        this.setData({
            realname: e.detail.value
        })
    },
    // 更改身份证号
    changeIdCard(e){
        this.setData({
            idCard: e.detail.value
        })
    },
    // 更改手机号码
    changePhone(e){
        this.setData({
            phone: e.detail.value
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