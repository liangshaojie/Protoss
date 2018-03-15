
import { Home } from './home-model.js'
var home = new Home();
Page({
  data: {

  },
  onLoad() {
    this._loadData();
  },
  _loadData() {
    var id = 1;
    home.getBannerData(id, (data) => {
      this.setData({
        'bannerArr': data
      })
    });

    home.getThemeData((data) => {
      this.setData({
        themeArr: data,
        loadingHidden: true
      });
    });

    /*获取单品信息*/
    home.getProductorData((data) => {
      this.setData({
        productsArr: data
      });
    });
  },
  onProductsItemTap(event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  },
  onThemesItemTap(event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + "&name=" + name,
    })
  }
})