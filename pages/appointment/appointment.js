import initCalendar, {
    getSelectedDay,
    setTodoLabels,
    disableDay,
    switchView
    // enableArea
} from '../../template/calendar/index';
const conf = {
    onShow: function () {
        initCalendar({
            // multi: true, // 是否开启多选,
            // disablePastDay: true, // 是否禁选过去日期
            // defaultDay: '2018-8-8', // 初始化日历时指定默认选中日期，如：'2018-3-6' 或 '2018-03-06'
            /**
             * 选择日期后执行的事件
             * @param { object } currentSelect 当前点击的日期
             * @param { array } allSelectedDays 选择的所有日期（当mulit为true时，才有allSelectedDays参数）
             */
            afterTapDay: (currentSelect, allSelectedDays) => {
                console.log('===============================');
                console.log('当前点击的日期', currentSelect);
                console.log(
                    '当前点击的日期是否有事件标记: ',
                    currentSelect.hasTodo || false
                );
                allSelectedDays && console.log('选择的所有日期', allSelectedDays);
                console.log('getSelectedDay方法', getSelectedDay());
            },
            whenChangeMonth(current, next) {
                // console.log(current);
                // console.log(next);
            },
            /**
             * 日期点击事件（此事件会完全接管点击事件）
             * @param { object } currentSelect 当前点击的日期
             * @param { object } event 日期点击事件对象
             */
            // onTapDay(currentSelect, event) {
            //   console.log(currentSelect);
            //   console.log(event);
            // },
            /**
             * 日历初次渲染完成后触发事件，如设置事件标记
             */

            //设置日期当天有几节课
            afterCalendarRender() {
                const data = [
                    {
                        year: '2018',
                        month: '12',
                        day: '3',
                        todoText: '10'
                    },
                    {
                        year: '2018',
                        month: '12',
                        day: '5',
                        todoText: '5'
                    },
                    {
                        year: '2018',
                        month: '12',
                        day: '8',
                        todoText: '2'
                    },
                    {
                        year: '2018',
                        month: '12',
                        day: '12',
                        todoText: '3'
                    },
                    {
                        year: '2018',
                        month: '12',
                        day: '16',
                        todoText: '10'
                    },
                    {
                        year: '2018',
                        month: '12',
                        day: '17',
                        todoText: '5'
                    },
                    {
                        year: "2018",
                        month: "12",
                        day: "20",
                        todoText: '4'
                    }
                ];
                // 异步请求
                setTimeout(() => {
                    setTodoLabels({
                        pos: 'bottom',
                        dotColor: '#fff',
                        days: data
                    });
                    disableDay(1);
                }, 1000);
                // enableArea(['2018-10-7', '2018-10-28']);
            }
        });
    },
    data: {
        // 筛选 弹出层
        isBlock: false,
        animation: {},
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
        area: "选择地区",

        // 课程列表信息
        mouth_count: "10",
        list: [
            {
                "addr": "北京市",
                "class": "策略课",
                "teacher": "北京事业部（吴刚）"
            },
            {
                "addr": "北京市",
                "class": "策略课",
                "teacher": "北京事业部（吴刚）"
            },
            {
                "addr": "北京市",
                "class": "策略课",
                "teacher": "北京事业部（吴刚）"
            },
        ]
    },
    onload: {

    },
    switchView() {
        if (!this.weekMode) {
            switchView('week');
        } else {
            switchView();
        }
    },
    // 跳转课程详情页
    go_yy_classDetails(e){
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: '../classDetails/classDetails?is_show=show,id='+id,
        })
    },
    // 弹出筛选框
    filter_model() {
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
        // 先在y轴偏移，然后用step()完成一个动画 负数从上往下滑动 正数从下往上滑动
        animation.translateY(-500).step()
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
    // 隐藏筛选框
    hideModal() {
        var that = this;
        var animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'linear'
        })
        that.animation = animation
        animation.translateY(-500).step()
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
    // 筛选 老师
    bindPickerChange(e) {
        this.setData({
            filter_index_1: this.data.teachersArr[e.detail.value].id,
            teacherText: this.data.teachersArr[e.detail.value].teacher
        })
    },
    // 筛选 类型
    bindPickerChange2(e) {
        this.setData({
            filter_index_2: this.data.typeArr[e.detail.value].id,
            typeText: this.data.typeArr[e.detail.value].text
        })
    },
    // 选择省市区函数
    changeArea(e) {
        let value = e.detail.value.toString().split(",").join("-")
        console.log(value)
        this.setData({ 
            area: value
        });
    },
    // 跳转到 选择老师的课程列表页
    goFiflterTeacher() {
        let teacher_id = this.data.filter_index_1;
        let type_id = this.data.filter_index_2
        // 如果没选择老师或类型 不请求数据
        if (teacher_id === "") {
            wx.showToast({
                title: '请选择老师',
                icon: 'none',
                duration: 2000
            })
            return
        } else if (type_id === ""){
            wx.showToast({
                title: '请选择类型',
                icon: 'none',
                duration: 2000
            })
            return
        } else if (this.data.area === "选择地区") {
            wx.showToast({
                title: '请选择地区',
                icon: 'none',
                duration: 2000
            })
            return
        }
        this.hideModal()
        // 跳转到老师详情页
        wx.navigateTo({
            url: '../fiflterTeacher/fiflterTeacher',
        })
        // 请求 底部课程信息

    }
};
Page(conf);


