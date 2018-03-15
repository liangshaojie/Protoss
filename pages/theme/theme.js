// pages/theme/theme.js
import { Theme } from 'theme-model.js';
var theme = new Theme(); //实例化  主题列表对象
Page({
  data: {
  
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.titleName
    });
  },
  onLoad: function (options) {
    this.data.titleName = options.name;
    this.data.id = options.id;
    this._loadData();
  },
  _loadData: function (callback) {
    var that = this;
    theme.getProductorData(this.data.id, (data) => {
      that.setData({
        themeInfo: data,
        loadingHidden: true
      });
      callback && callback();
    });
  }
})