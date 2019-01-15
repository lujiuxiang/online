//index.js
var requestData = require("../../utils/util.js");
var app = getApp();
//获取应用实例
Page({
    data: {
        // 首页顶部导航
        top_nav: [
            {
                title:"首页"
            },
            {
                title:"公开课堂"
            },
            {
                title:"平台介绍"
            },
            {
                title:"通知公告"
            },
            {
                title:"筛选"
            },
        ],
        // 首页内容 轮播图下 导航
        bot_nav: [],
        // 精品推荐
        recommendArr: [],
        // 首页内容 课程列表
        index_class_list: [],
        // 首页内容 平台介绍
        about_del: "",
        // 首页内容 通知公告
        notice: [],
        // 首页内容 筛选
        teachersArr: [],
        typeArr: [
            {
                id: "1",
                status: 1,
                text: "公开课程"
            },
            {
                id: "2",
                status: 2,
                text: "初级课程"
            },
            {
                id: "3",
                status: 3,
                text: "中级课程"
            },
            {
                id: "4",
                status: 4,
                text: "高级课程"
            }
        ],
        teacherText: "老师名称",
        typeText: "选择类型",
        filter_index_1: "",
        filter_index_2: "",
        // 首页轮播图
        blogLists: [],
        indicatorDotsImg: true,
        autoplayImg: true,
        intervalImg: 5000,
        durationImg: 300,
        isSelect: 0,
        // 公开课程 课程列表
        class_list: []
    },
    onLoad: function () {
        var that = this;
        app.getLogin().then(function (res) {
            wx.getUserInfo({
                success: res => {
                    var openid = getApp().globalData.openid
                    // 可以将 res 发送给后台解码出 unionId
                    getApp().globalData.userInfo = res.userInfo
                    if (openid) {
                        requestData.postData({
                            url: "user/member_add",
                            params: {
                                openid: getApp().globalData.openid,
                                nickname: getApp().globalData.userInfo.nickName,
                                xximage: getApp().globalData.userInfo.avatarUrl,
                                sex: getApp().globalData.userInfo.gender
                            },
                            do_success: function (res) {
                                console.log(res.data)
                            }
                        })
                    }
                },
                fail: function (err) {
                    wx.redirectTo({
                        url: '../tarBar/tarBar',
                    })
                }
            })
        })


        // 请求首页banner
        requestData.postData({
            url: "show",
            do_success: function(res){
                that.setData({
                    blogLists: res.data.banner,
                    bot_nav: res.data.nav
                })
            }
        })
        // 请求首页公开课 公开课堂
        requestData.postData({
            url: "show/wxclass",
            do_success: function(res){
                that.setData({
                    index_class_list: res.data.sygkk,
                    class_list: res.data.gkk,
                    recommendArr: res.data.tuijian,
                })
            }
        })

        
    },
    onShow: function(){

    },

    // 解析富文本nbsp等字符
    escape2Html: function (str) {
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
    },
    
    // 切换tab导航
    changeTab: function (e) {
        let isSelect = e.currentTarget.dataset.type;
        this.setData({
            isSelect: isSelect
        })
    },
    // 下面滑动时切换tab导航
    swiperChange: function (e) {
        let isSelect = e.detail.current;
        let that = this
        // 请求平台介绍数据
        if(isSelect === 2){
            requestData.postData({
                url: "show/pingtai",
                do_success: function (res) {
                    that.setData({
                        about_del: that.escape2Html(res.data)
                    })
                }
            })
        }
        // 请求通知公告数据
        if(isSelect === 3){
            requestData.postData({
                url: "show/notice",
                do_success: function (res) {
                    that.setData({
                        notice: res.data
                    })
                }
            })
        }
        // 请求筛选数据
        if(isSelect === 4){
            requestData.getData({
                url: "show/wxclass_search",
                do_success: function (res) {
                    that.setData({
                        teachersArr: res.data
                    })
                }
            })
        }
        this.setData({
            isSelect: isSelect
        })
    },
    // 首页筛选
    search(e){
        let id = e.target.dataset.id;
        let index = e.target.dataset.index
        this.setData({
            filter_index: index
        })
    },
    // 地图导航
    goSecond(e){
        let id = e.currentTarget.dataset.id;
        switch(id){
            case 3: 
                wx.navigateTo({
                    url: "../myClass/myClass",
                })
                break
            case 4:
                wx.navigateTo({
                    url: "../teachersList/teachersList",
                })
                break
            case 5:
                wx.navigateTo({
                    url: "../connection/connection",
                })
                break
            case 6:
                wx.openLocation({
                    longitude: 125.260973,
                    latitude: 43.826905,
                    name: '大圣咖汇众创空间',
                    address: '高新开发区硅谷西街与磐古路交汇南50米'
                })
                break
            default: 
                console.log("没有id，无法跳转")
                break
        }
    },
    // 跳转老师页面
    goTeachersDetails(e){
        wx.navigateTo({
            url: '../teachersDetails/teachersDetails?id=' + e.currentTarget.dataset.id,
        })
    },
    // 跳转课程详情页面
    goClassDetails(e){
        wx.navigateTo({
            url: '../publicClassDel/publicClassDel?id=' + e.currentTarget.dataset.id,
        })
    },
    // 跳转通知公告页面
    goNoticeDetails(e){
        let item = JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '../noticeDetails/noticeDetails?item='+item,
        })
    },
    // 筛选 老师
    bindPickerChange(e){
        this.setData({
            filter_index_1: this.data.teachersArr[e.detail.value].teacher,
            teacherText: this.data.teachersArr[e.detail.value].teacher
        })
    },
    // 筛选 类型
    bindPickerChange2(e){
        this.setData({
            filter_index_2: this.data.typeArr[e.detail.value].status,
            typeText: this.data.typeArr[e.detail.value].text
        })
    },
    // 跳转到 选择老师的课程列表页
    goFiflterTeacher(){
        let teacher_id = this.data.filter_index_1;
        let type_status = this.data.filter_index_2;
        if(teacher_id === "" && type_status === ""){
            wx.showToast({
                title: '至少选择一种方式查询',
                icon: "none"
            })
            return
        }
        wx.navigateTo({
            url: '../fiflterTeacher/fiflterTeacher?teacher='+ teacher_id + '&status='+ type_status,
        })
    }
})
