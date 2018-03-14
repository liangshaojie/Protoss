
import { Home } from './home-model.js'
var home = new Home();
Page({
  data: {

  },
  onLoad() {
    console.log(5555);
    this._loadData();
  },
  _loadData() {
    var id = 1;
    var data = home.getBannerData(id);
    console.log(data);
  }
})