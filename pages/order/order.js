import { Cart } from '../cart/cart-model.js';
import { Address } from '../../utils/address.js';
var cart = new Cart();
var address = new Address();
Page({
  data: {
  
  },
  onLoad: function (options) {
    var flag = options.from == 'cart',
      that = this;
    this.data.fromCartFlag = flag;
    this.data.account = options.account;
    if (flag) {
      this.setData({
        productsArr: cart.getCartDataFromLocal(true),
        account: options.account,
        orderStatus: 0
      });
      // address.getAddress((res) => {
      //   that._bindAddressInfo(res);
      // });
    }else {
      this.data.id = options.id;
    }
  },
  editAddress: function () {
    var that = this;
    wx.chooseAddress({
      success: function (res) {
        var addressInfo = {
          name: res.userName,
          mobile: res.telNumber,
          totalDetail: address.setAddressInfo(res)
        };
        that._bindAddressInfo(addressInfo);
        // address.submitAddress(res, (flag) => {
        //   if (!flag) {
        //     that.showTips('操作提示', '地址信息更新失败！');
        //   }
        // });
      },
      fail: function (res){
      } 
    })
  },
  /*绑定地址信息*/
  _bindAddressInfo: function (addressInfo) {
    this.setData({
      addressInfo: addressInfo
    });
  },
})