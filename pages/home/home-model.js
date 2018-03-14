class Home {

  constructor() {

  }

  getBannerData(id) {
    wx.request({
      url: 'http://www.z.cn/api/v1/banner/' + id,
      method: 'GET',
      data: {},
      success(res) {
        console.log(res.data)
        return res;
      },
    })
  }
}


export { Home};