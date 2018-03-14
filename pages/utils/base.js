import { Config } from '../utils/config.js'
class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl

  }
  request(params,) {
    if (!params.method){
      params.method = 'GET'
    }
    wx.request({
      url: this.baseRequestUrl + params.url,
      data: params.data,
      header: {
        'content-type':'application/json',
        'token':wx.getStorageInfoSync('token')
      },
      method: params.method ,
      success: function(res) {
        params.sCallBack && params.sCallBack(res)
      },
      fail: function(res) {
        params.fCallBack && params.fCallBack(res)
      }
    })
  }
}