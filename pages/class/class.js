//index.js
//获取应用实例
Page({
    data: {
        // 首页顶部导航
        top_nav: [
            {
                title: "初级课程"
            },
            {
                title: "中级课程"
            },
            {
                title: "高级课程"
            }
        ],
        isSelect: 0,
        // 课程列表
        list: [
            [
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程初级课程初级课程初级课程初级课程初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    mark: "70",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    mark: "70",
                    money: "99",
                    mark: "80",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    mark: "70",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    mark: "70",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    mark: "70",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    mark: "70",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    mark: "70",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "初级课程",
                    watched: "666",
                    money: "99",
                    mark: "80",
                    isMember: false,
                },
            ],
            [
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "中级课程",
                    watched: "666",
                    money: "299",
                    mark: "90",
                    isMember: false,
                },
            ],
            [
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: false,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
                {
                    src: "http://imyu.top/xcx/teacher3.png",
                    title: "高级课程",
                    watched: "666",
                    money: "399",
                    isMember: true,
                },
            ],
        ]
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
    // 跳转课程详情页
    goClassDetails(e){
        wx.navigateTo({
            url: '../classDetails/classDetails',
        })
    }
})
