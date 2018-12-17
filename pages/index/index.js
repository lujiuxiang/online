//index.js
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
        bot_nav: [
            {
                title:"我的课程",
                src: "http://imyu.top/xcx/nav_kc.png",
                url: "../myClass/myClass"
            },
            {
                title:"讲师介绍",
                src: "http://imyu.top/xcx/nav_teacher.png",
                url: "../teachersList/teachersList"
            },
            {
                title:"人脉圈",
                src: "http://imyu.top/xcx/nav_rm.png",
                url: "../connection/connection"
            },
            {
                title:"地图导航",
                src: "http://imyu.top/xcx/nav_map.png",
                url: ""
            },
        ],
        // 精品推荐
        recommendArr: [
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            {
                src: "http://imyu.top/xcx/kc_teacher.png",
                title: "经济型网红训练师"
            },
            
        ],
        // 首页内容 课程列表
        class_list: [
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶 25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
            {
                src: "http://imyu.top/xcx/teacher.png",
                title: "25年商业  资本实战结晶",
                details: "你还在为因为有才艺没有粉丝苦恼吗？想成为万人瞩目网络红人？那你就来！！！",
                rq: "1325"
            },
        ],
        // 首页内容 平台介绍
        aboutUS_img: "http://imyu.top/xcx/aboutUs.png",
        about_del: "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
        // 首页内容 通知公告
        notice: [
            {
                src: "http://imyu.top/xcx/notice1.png",
                details: "网红通知",
                time: "2018-12-12",
                info: "通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情"
            },
            {
                src: "http://imyu.top/xcx/notice2.png",
                details: "网红通知",
                time: "2018-12-12",
                info: "通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情"
            },
            {
                src: "http://imyu.top/xcx/notice1.png",
                details: "网红通知",
                time: "2018-12-12",
                info: "通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情"
            },
            {
                src: "http://imyu.top/xcx/notice2.png",
                details: "网红通知",
                time: "2018-12-12",
                info: "通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情"
            },
            {
                src: "http://imyu.top/xcx/notice1.png",
                details: "网红通知",
                time: "2018-12-12",
                info: "通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情"
            },
        ],
        // 首页内容 筛选
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

        blogLists: [
            {
                src: "http://imyu.top/xcx/index_banner.png"
            },
            {
                src: "http://imyu.top/xcx/index_banner.png"
            },
            {
                src: "http://imyu.top/xcx/index_banner.png"
            },
            {
                src: "http://imyu.top/xcx/index_banner.png"
            },
            {
                src: "http://imyu.top/xcx/index_banner.png"
            },
        ],
        indicatorDotsImg: true,
        autoplayImg: true,
        intervalImg: 5000,
        durationImg: 300,
        isSelect: 0
    },
    onLoad: function () {

    },
    
    // 切换tab导航
    changeTab: function (e) {
        let isSelect = e.currentTarget.dataset.type;
        console.log(isSelect)
        this.setData({
            isSelect: isSelect
        })
    },
    // 下面滑动时切换tab导航
    swiperChange: function (e) {
        console.log(e);
        this.setData({
            isSelect: e.detail.current
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
        let url = e.currentTarget.dataset.url;
        if(!url){
            wx.openLocation({
                longitude: 125.260973,
                latitude: 43.826905,
                name: '大圣咖汇众创空间',
                address: '高新开发区硅谷西街与磐古路交汇南50米'
            })
            return
        }
        wx.navigateTo({
            url: url,
        })
    },
    // 跳转老师页面
    goTeachersDetails(e){
        console.log(e.currentTarget.dataset.index)
        wx.navigateTo({
            url: '../teachersDetails/teachersDetails',
        })
    },
    // 跳转课程详情页面
    goClassDetails(e){
        console.log(e.currentTarget.dataset.index)
        wx.navigateTo({
            url: '../classDetails/classDetails',
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
            filter_index_1: this.data.teachersArr[e.detail.value].id,
            teacherText: this.data.teachersArr[e.detail.value].teacher
        })
    },
    // 筛选 类型
    bindPickerChange2(e){
        this.setData({
            filter_index_2: this.data.typeArr[e.detail.value].id,
            typeText: this.data.typeArr[e.detail.value].text
        })
    },
    // 跳转到 选择老师的课程列表页
    goFiflterTeacher(){
        let teacher_id = this.data.filter_index_1;
        let type_id = this.data.filter_index_2
        // 如果没选择老师或类型 不请求数据
        if (teacher_id === "" || type_id === ""){
            wx.showToast({
                title: '请选择老师或类型',
                icon: 'none',
                duration: 2000
            })
            return
        }
        wx.navigateTo({
            url: '../fiflterTeacher/fiflterTeacher',
        })
    }
})
