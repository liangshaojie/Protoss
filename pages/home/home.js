
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
    home.getBannerData(id,(data) => {
      this.setData({
        'bannerArr':data
      })
    });

    home.getThemeData((data)=>{
      this.setData({
        themeArr: data,
        loadingHidden: true
      });
    });
  }

})