// pages/theme/theme.js
import { Theme } from 'theme-model.js';
var theme = new Theme(); //实例化  主题列表对象
Page({
  data: {
  
  },
  onLoad: function (options) {
    this.data.titleName = options.name;
    this.data.id = options.id;
    wx.setNavigationBarTitle({
      title: options.name
    });
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