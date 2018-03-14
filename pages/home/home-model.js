import { Base } from '../utils/base.js';
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
}

export { Home};