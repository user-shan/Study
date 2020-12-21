//index.js
/**
 * 1.var：声明全局变量，换句话理解就是，声明在for循环中的变量，跳出for循环同样可以使用;
 * 2.let：声明块级变量，即局部变量。 在上面的例子中，跳出for循环，再使用sum变量就会报错,
 *   注意：必须声明'use strict'后才能使用let声明变量否则浏览并不能显示结果;
 * 3.const：用于声明常量，也具有块级作用域 const PI=3.14;
 */
//获取应用实例
const app = getApp();
/**
 * Page() 函数用来注册一个页面
 */
Page({
  /**
   * data用来设置初始数据
   */
  data: {
    // 初始化变量：账号
    username: '',
    // 初始化变量：密码
    password: ''
  },
  /**
   * 页面显示或从后台跳回小程序时显示此页面时触发，从跳转页面返回时触发，不能传递参数
   */
  onShow: function () {},
  /**
   * 页面第一次加载时触发，从跳转页面返回时不能触发，可以传递参数
   */
  onLoad: function () {},


  // bindblur判断输入账号方法
  usernameBlur: function (e) {
    console.log("账号=", e.detail.value);
    /**
     * 修改data变量
     */
    this.setData({
      /**
       * 修改data变量username的值
       */
      username: e.detail.value,
    });
  },

  // bindblur判断输入输入密码 
  passwordBlur: function (e) {
    console.log("密码=", e.detail.value);
    /**
     * 修改data变量
     */
    this.setData({
      /**
       * 修改data变量password的值
       */
      password: e.detail.value,
    });
  },

  /**
   * 登录点击事件
   */
  login: function () {
    // 获取data变量
    var Username = this.data.username;
    var Password = this.data.password;
    if (Username == '') {
      /**
       * 微信内置弹出框
       */
      wx.showToast({
        // 弹出框标题
        title: '账号不能为空',
        // 弹出框样式
        icon: 'success',
        // 弹出框滞留时间
        duration: 1000
      });
    } else if (Password == '') {
      /**
       * 微信内置弹出框
       */
      wx.showToast({
        // 弹出框标题
        title: '请输入密码',
        // 弹出框样式
        icon: 'success',
        // 弹出框滞留时间
        duration: 1000
      });
    } else if (Password != "" && Username != "") {
      wx.showToast({
        // 弹出框标题
        title: '登陆成功',
        // 弹出框样式
        icon: 'success',
        // 弹出框滞留时间
        duration: 2000
      });
      wx.redirectTo({
        url: '../logs/logs',
      })
    }
  }
})