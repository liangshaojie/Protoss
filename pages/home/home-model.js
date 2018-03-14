class Home {

  constructor() {

  }
  getBannerData(id,cb) {
    wx.request({
      url: 'http://www.z.cn/api/v1/banner/' + id,
      method: 'GET',
      data: {},
      success(res) {
        cb(res);
      },
    })
  }
}


export { Home};