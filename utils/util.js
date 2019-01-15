const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 封装接口
const poblic_url = "http://wh.imyu.top/wxapi/";

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


//上传文件
function uploadFile(url, filePath, name, formData, cb) {
    console.log('a=' + filePath)
    wx.uploadFile({
        url: rootDocment + url,
        filePath: filePath,
        name: name,
        header: {
            'content-type': 'multipart/form-data'
        }, // 设置请求的 header
        formData: formData, // HTTP 请求中其他额外的 form data
        success: function (res) {
            if (res.statusCode == 200 && !res.data.result_code) {
                return typeof cb == "function" && cb(res.data)
            } else {
                return typeof cb == "function" && cb(false)
            }
        },
        fail: function () {
            return typeof cb == "function" && cb(false)
        }
    })
}

// 封装request接口
//post===============
//url==网址 ,param===参数,success===请求成功后执行的函数
function postData(data) {
    var url = data.url;
    var params = data.params;
    wx.request({
        url: poblic_url + url,
        data: params,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
            if (typeof data.do_success == "function") {
                data.do_success(res);
            }
        },
        fail: function (res) {
            wx.showToast({
                title: '请求错误',
                icon: 'error',
                mask: true,
            });
        },
        complete: function (res) {

        },
    })
}
//get===============
//url==网址 ,param===参数，success===请求成功后执行的函数
function getData(data) {
    var url = data.url;
    var param = data.param;
    wx.request({
        url: poblic_url + url,
        data: param,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function (res) {
            if (typeof data.do_success == "function") {
                data.do_success(res);
            }
        },
        fail: function (res) {
            wx.showToast({
                title: '请求错误',
                icon: 'error',
                mask: true,
            });
        },
        complete: function (res) {

        },
    })
}

module.exports = {
    formatTime: formatTime,
    uploadFile: uploadFile,
    postData: postData,
    getData: getData,
}
