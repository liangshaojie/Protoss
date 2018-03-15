import { Base } from '../../utils/base.js';
class Home extends Base {
  constructor() {
    super();
  }
  getBannerData(id,cb) {
    var params = {
      url:'banner/'+id,
      sCallBack(res) {
        cb && cb(res.items)
      }
    };
    this.request(params);
  }
  getThemeData(cb) {
    var params = {
      url: 'theme?ids=1,2,3',
      sCallBack(res) {
        cb && cb(res)
      }
    };
    this.request(params);
  }
  /*首页部分商品*/
  getProductorData(cb) {
    var param = {
      url: 'product/recent',
      sCallBack: function (data) {
        cb && cb(data);
      }
    };
    this.request(param);
  }
}

export { Home};