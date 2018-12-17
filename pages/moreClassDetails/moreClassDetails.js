// pages/moreClassDetails/moreClassDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isBlock: false,
        animation: {},
        class_list: [
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999",
                iszan: true
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "papi酱",
                content: "课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999",
                iszan: false,
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_1.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
            {
                src: "http://imyu.top/xcx/pl_2.png",
                username: "大胃王密子君",
                content: "课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞课程很棒！！赞赞赞",
                time: "2018-12-10  22:25",
                dz: "999"
            },
        ],
        // 筛选
        teachersArr: [
            {
                id: "1",
                teacher: "老师1"
            },
            {
                id: "2",
                teacher: "老师2"
            },
            {
                id: "3",
                teacher: "老师3"
            },
            {
                id: "4",
                teacher: "老师4"
            },
            {
                id: "5",
                teacher: "老师5"
            },
            {
                id: "6",
                teacher: "老师6"
            },
            {
                id: "7",
                teacher: "老师7"
            },
        ],
        typeArr: [
            {
                id: "1",
                text: "网红营销1"
            },
            {
                id: "2",
                text: "网红营销2"
            },
            {
                id: "3",
                text: "网红营销3"
            },
            {
                id: "4",
                text: "网红营销4"
            },
            {
                id: "5",
                text: "网红营销5"
            },
            {
                id: "6",
                text: "网红营销6"
            },
            {
                id: "7",
                text: "网红营销7"
            },
            {
                id: "8",
                text: "网红营销8"
            },
            {
                id: "9",
                text: "网红营销9"
            },
        ],
        teacherText: "老师名称",
        typeText: "选择类型",
        filter_index_1: "",
        filter_index_2: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 显示评论框
    more_pl(){
        // 用that取代this，防止不必要的情况发生
        var that = this;
        // 创建一个动画实例
        var animation = wx.createAnimation({
            // 动画持续时间
            duration: 300,
            // 定义动画效果，当前是匀速
            timingFunction: 'linear'
        })
        // 将该变量赋值给当前动画
        that.animation = animation
        // 先在y轴偏移，然后用step()完成一个动画
        animation.translateY(500).step()
        // 用setData改变当前动画
        that.setData({
            // 通过export()方法导出数据
            animationData: animation.export(),
            // 改变view里面的Wx：if
            isBlock: true
        })
        // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
        setTimeout(function () {
            animation.translateY(0).step()
            that.setData({
                animationData: animation.export()
            })
        }, 200)
    },
    // 隐藏评论框
    hideModal(){
        var that = this;
        var animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'linear'
        })
        that.animation = animation
        animation.translateY(500).step()
        that.setData({
            animationData: animation.export()

        })
        setTimeout(function () {
            animation.translateY(0).step()
            that.setData({
                animationData: animation.export(),
                isBlock: false
            })
        }, 200)
    },
    preventTouchMove() { },
    // 发表评论
    bindFormSubmit(e){
        console.log(e.detail.value.textarea)
        if(e.detail.value.textarea == ""){
            wx.showToast({
                title: '请输入评论！',
                icon: "none"
            })
            return
        }
        wx.showToast({
            title: '发表评论成功',
        })
        this.hideModal()
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