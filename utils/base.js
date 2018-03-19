import { Config } from '../utils/config.js'
import { Token } from 'token.js';
class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl

  }
  request(params, noRefetch) {
    var that = this;
    if (!params.method){
      params.method = 'GET'
    }
    wx.request({
      url: this.baseRequestUrl + params.url,
      data: params.data,
      header: {
        'content-type':'application/json',
        'token': wx.getStorageSync('token')
      },
      method: params.method ,
      success: function(res) {

        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.sCallBack && params.sCallBack(res.data)
        } else {
          if (code == '401') {
            if (!noRefetch) {
              that._refetch(params);
            }
          }
          that._processError(res);
          params.fCallBack && params.fCallBack(res.data)
        }
       
      },
      fail: function(res) {
        params.fCallBack && params.fCallBack(res.data)
      }
    })
  }
  getDataSet(event,key){
    return event.currentTarget.dataset[key];
  }
  _processError(err) {
    console.log(err);
  }
  _refetch(param) {
    var token = new Token();
    token.getTokenFromServer((token) => {
      this.request(param, true);
    });
  }
}

export { Base };