
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
    var data = home.getBannerData(id,(data) => {
      console.log(data);
    });
  }

})