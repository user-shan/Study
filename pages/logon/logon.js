// pages/logon/logon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  doLogin: function (e) {
    console.log(e)
    wx.login({
      success: function (res) {
        console.log(res)
        //获取登录临时凭证
        var code = res.code;
        //调用后端接口 获取微信的session_key 和 openID
        wx.request({
          url: 'http://localhost:8080/wxLogin?code=' + code,
          method: "post",
          success: function (resule) {
            console.log(resule);
          }
        })
      }
    })
  }
})